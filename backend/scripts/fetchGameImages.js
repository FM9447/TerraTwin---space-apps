/**
 * Resolve and download the 100 game images from Wikimedia Commons.
 *
 * Downloads land in backend/.cache/game-images/ together with manifest.json.
 * Nothing is written to MongoDB here — review the contact sheets first, then
 * run `npm run seed` to upload the cached files into GridFS.
 *
 * Usage:
 *   node scripts/fetchGameImages.js                 # fetch missing images
 *   node scripts/fetchGameImages.js --force         # re-fetch everything
 *   node scripts/fetchGameImages.js --only=1,2,3    # specific levels
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GAME_LEVELS_100 } from '../src/data/gameCatalog.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.resolve(__dirname, '../.cache/game-images');
const MANIFEST_PATH = path.join(CACHE_DIR, 'manifest.json');
const API = 'https://commons.wikimedia.org/w/api.php';
const USER_AGENT = 'TerraTwin-GameImageIngest/1.0 (NASA Space Apps educational project)';

const MIME_EXT = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'
};

const REJECT_TITLE = /\b(map|maps|diagram|logo|chart|graph|drawing|illustration|sketch|stamp|poster|icon|flag|seal|coat of arms|blueprint|infographic|timeline|montage|collage|annotated|labelled|labeled|cross section|figure|panel|self-portrait|selfie|astronaut|visitor|cemetery|signage|signpost|panorama of|svg|model|simulation|artist|impression|reconstruction|concept|movie|film)\b/i;

const args = process.argv.slice(2);
const force = args.includes('--force');
const onlyArg = args.find(a => a.startsWith('--only='));
const only = onlyArg ? new Set(onlyArg.slice('--only='.length).split(',').map(Number)) : null;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function stripHtml(value = '') {
  return String(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function api(params) {
  const url = new URL(API);
  for (const [key, value] of Object.entries({ format: 'json', origin: '*', ...params })) {
    url.searchParams.set(key, value);
  }

  let wait = 4000;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/json',
        'Accept-Encoding': 'gzip'
      }
    });

    if (res.ok) return res.json();

    if (res.status === 429 || res.status >= 500) {
      const retryAfter = Number(res.headers.get('retry-after'));
      const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : wait;
      process.stdout.write(`(rate limited, waiting ${Math.round(delay / 1000)}s) `);
      await sleep(delay);
      wait = Math.min(wait * 2, 60000);
      continue;
    }

    throw new Error(`Commons API ${res.status} for ${url.searchParams.get('gsrsearch') || url.searchParams.get('titles')}`);
  }

  throw new Error('Commons API rate limit did not clear');
}

function pickCandidate(pages = {}) {
  return Object.values(pages)
    .filter(page => {
      const info = page.imageinfo?.[0];
      if (!info) return false;
      if (!MIME_EXT[info.mime]) return false;
      if ((info.width || 0) < 900) return false;
      if (REJECT_TITLE.test(page.title || '')) return false;
      // Extreme aspect ratios crop badly inside the 16:9 game frame.
      const ratio = info.width / info.height;
      if (ratio > 3.2 || ratio < 0.55) return false;
      return true;
    })
    .sort((a, b) => (a.index || 0) - (b.index || 0));
}

function scoreCandidate(page) {
  const info = page.imageinfo[0];
  const ratio = info.width / info.height;
  let score = 0;
  if (ratio >= 1.2 && ratio <= 2.4) score += 50;        // landscape, poster-friendly
  else if (ratio >= 0.9) score += 20;                    // near-square
  else score -= 25;                                      // portrait
  if (info.width >= 1600) score += 15;
  if (/apollo|curiosity|perseverance|lro|lroc|hirise|mastcam|landsat|aster|mola|opportunity|spirit/i.test(page.title)) score += 25;
  if (/crater|lake|desert|valley|volcano|lava|dune|island|pond|basin|plateau|glacier|spring|falls|monument|rock/i.test(page.title)) score += 10;
  return score;
}

async function resolveOverride(level, title) {
  const data = await api({
    action: 'query',
    titles: `File:${title}`,
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '960'
  });
  const pages = data.query?.pages || {};
  const page = Object.values(pages)[0];
  if (!page || page.missing !== undefined || !page.imageinfo?.[0]) return null;
  return page;
}

async function search(level) {
  const data = await api({
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${level.image_query}`,
    gsrnamespace: '6',
    gsrlimit: '12',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '960'
  });
  const candidates = pickCandidate(data.query?.pages);
  if (!candidates.length) return null;
  return candidates.sort((a, b) => scoreCandidate(b) - scoreCandidate(a))[0];
}

function metadataFor(page, level) {
  const info = page.imageinfo[0];
  const meta = info.extmetadata || {};
  const credit = stripHtml(meta.Artist?.value || meta.Credit?.value || 'Wikimedia Commons contributor');
  const license = stripHtml(meta.LicenseShortName?.value || 'See source page');
  const description = stripHtml(meta.ImageDescription?.value || level.image_alt);
  const pageUrl = info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`;

  return {
    level_number: level.level_number,
    target_type: level.target_type,
    target_name: level.target_name,
    file_title: page.title,
    source_url: pageUrl,
    download_url: info.thumburl || info.url,
    original_url: info.url,
    mime: info.mime,
    width: info.width,
    height: info.height,
    credit,
    license,
    description
  };
}

async function download(entry) {
  const ext = MIME_EXT[entry.mime] || 'jpg';
  const filename = `${String(entry.level_number).padStart(3, '0')}.${ext}`;
  const filePath = path.join(CACHE_DIR, filename);

  // The API appends utm_* tracking params, and upload.wikimedia.org answers
  // those with HTTP 429. Strip the query string before downloading.
  const downloadUrl = new URL(entry.download_url);
  downloadUrl.search = '';

  let res;
  for (let attempt = 1; attempt <= 5; attempt++) {
    res = await fetch(downloadUrl, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'image/*' }
    });
    if (res.status !== 429) break;
    const retryAfter = Number(res.headers.get('retry-after'));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 25000 * attempt;
    process.stdout.write(`(download rate limited, waiting ${Math.round(delay / 1000)}s) `);
    await sleep(delay);
  }
  if (!res.ok) throw new Error(`download ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 12_000) throw new Error(`image too small (${buffer.length} bytes)`);

  // Reject HTML error pages masquerading as images.
  const head = buffer.subarray(0, 12).toString('latin1');
  const isImage = head.startsWith('\xFF\xD8\xFF') || head.startsWith('\x89PNG') || head.startsWith('RIFF');
  if (!isImage) throw new Error('response is not a JPEG/PNG/WebP image');

  await fs.writeFile(filePath, buffer);
  return { filename, bytes: buffer.length };
}

async function main() {
  await fs.mkdir(CACHE_DIR, { recursive: true });

  let manifest = {};
  try {
    manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'));
  } catch { /* fresh cache */ }

  const levels = only ? GAME_LEVELS_100.filter(l => only.has(l.level_number)) : GAME_LEVELS_100;
  const failures = [];

  for (const level of levels) {
    const existing = manifest[level.level_number];
    if (!force && existing?.filename) {
      try {
        await fs.access(path.join(CACHE_DIR, existing.filename));
        console.log(`✓ ${String(level.level_number).padStart(3, '0')} cached · ${level.target_name}`);
        continue;
      } catch { /* re-fetch */ }
    }

    process.stdout.write(`… ${String(level.level_number).padStart(3, '0')} ${level.target_name} ... `);
    try {
      let page = null;
      for (const title of level.image_overrides || []) {
        page = await resolveOverride(level, title);
        if (page) break;
        await sleep(150);
      }
      if (!page) page = await search(level);
      if (!page) throw new Error('no suitable image found');

      const entry = metadataFor(page, level);
      const file = await download(entry);
      manifest[level.level_number] = { ...entry, ...file };

      console.log(`ok · ${entry.file_title} (${Math.round(file.bytes / 1024)} KB)`);
    } catch (err) {
      console.log(`FAIL · ${err.message}`);
      failures.push({ level: level.level_number, name: level.target_name, query: level.image_query, error: err.message });
    }

    await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    await sleep(1500);
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  const resolved = Object.keys(manifest).length;
  console.log(`\nResolved ${resolved}/${GAME_LEVELS_100.length} images.`);

  if (failures.length) {
    console.log('\nFailures:');
    for (const f of failures) console.log(`  ${f.level} ${f.name} — ${f.error} (query: ${f.query})`);
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
