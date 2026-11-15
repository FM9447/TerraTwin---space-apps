/**
 * Download the editorial Twin Worlds imagery once, into
 * `backend/.cache/site-assets/`, together with `manifest.json`.
 *
 * The seed script then uploads those files to the `siteassets` GridFS bucket,
 * so at runtime the browser only ever talks to our own API.
 *
 * Usage:
 *   npm run fetch:assets            # only missing files
 *   npm run fetch:assets -- --force # re-download everything
 *   npm run fetch:assets -- --only=earth-disc,mars-disc
 */
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_ASSETS } from '../src/data/siteAssets.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.resolve(__dirname, '../.cache/site-assets');
const MANIFEST_PATH = path.join(CACHE_DIR, 'manifest.json');

const USER_AGENT =
  'TerraTwin-SiteAssetIngest/1.0 (NASA Space Apps educational project)';

const MIME_EXT = {
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif'
};

const args = process.argv.slice(2);
const force = args.includes('--force');
const onlyArg = args.find(a => a.startsWith('--only='));
const only = onlyArg
  ? new Set(onlyArg.slice('--only='.length).split(',').map(s => s.trim()))
  : null;

const sleep = ms => new Promise(r => setTimeout(r, ms));

function normalizeUrl(raw) {
  try {
    const u = new URL(raw);
    // thumb.wikimedia.org is a legacy host; the standard CDN is upload.wikimedia.org
    if (u.hostname === 'thumb.wikimedia.org') u.hostname = 'upload.wikimedia.org';
    return u.toString();
  } catch {
    return raw;
  }
}

function titleFallbackUrl(asset) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    asset.title.replace(/ /g, '_')
  )}?width=1400`;
}

async function download(asset) {
  const candidates = [normalizeUrl(asset.url), titleFallbackUrl(asset)];
  let lastError = null;

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': USER_AGENT, Accept: 'image/*' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const mime = (res.headers.get('content-type') || 'image/jpeg')
        .split(';')[0]
        .trim()
        .toLowerCase();
      if (!mime.startsWith('image/')) {
        throw new Error(`Unexpected content-type: ${mime}`);
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.length < 4096) throw new Error('Downloaded file is suspiciously small');

      const ext = MIME_EXT[mime] || 'jpg';
      const filename = `${asset.key}.${ext}`;
      await fsp.writeFile(path.join(CACHE_DIR, filename), buffer);

      return {
        key: asset.key,
        filename,
        mime,
        bytes: buffer.length,
        alt: asset.alt,
        credit: asset.credit,
        license: asset.license,
        source_url: asset.source_url,
        title: asset.title
      };
    } catch (err) {
      lastError = err;
    }
  }

  throw new Error(`${asset.key}: ${lastError?.message || 'download failed'}`);
}

async function main() {
  await fsp.mkdir(CACHE_DIR, { recursive: true });

  let manifest = {};
  try {
    manifest = JSON.parse(await fsp.readFile(MANIFEST_PATH, 'utf8'));
  } catch {
    manifest = {};
  }

  const targets = SITE_ASSETS.filter(a => !only || only.has(a.key));
  let downloaded = 0;
  let skipped = 0;
  const failed = [];

  for (const asset of targets) {
    const existing = manifest[asset.key];
    const existingPath = existing?.filename
      ? path.join(CACHE_DIR, existing.filename)
      : null;

    if (!force && existingPath && fs.existsSync(existingPath)) {
      skipped++;
      continue;
    }

    try {
      const entry = await download(asset);
      manifest[asset.key] = entry;
      downloaded++;
      console.log(`  ok  ${asset.key.padEnd(18)} ${(entry.bytes / 1024).toFixed(0)} KB`);
    } catch (err) {
      failed.push(err.message);
      console.warn(`  !!  ${err.message}`);
    }

    await sleep(320);
  }

  await fsp.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  console.log(
    `\nSite assets: ${downloaded} downloaded, ${skipped} already cached, ${targets.length} requested.`
  );
  if (failed.length) {
    console.warn(`Failed: ${failed.join(' | ')}`);
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
