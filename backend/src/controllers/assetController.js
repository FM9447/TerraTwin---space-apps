import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import { SITE_ASSET_KEYS } from '../data/siteAssets.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.resolve(__dirname, '../../.cache/site-assets');
const MANIFEST_PATH = path.join(CACHE_DIR, 'manifest.json');
const BUCKET_NAME = 'siteassets';
const CACHE_CONTROL = 'public, max-age=31536000, immutable';

let manifestPromise = null;

function loadManifest() {
  if (!manifestPromise) {
    manifestPromise = fs
      .readFile(MANIFEST_PATH, 'utf8')
      .then(raw => JSON.parse(raw))
      .catch(() => ({}));
  }
  return manifestPromise;
}

function gridFSBucket() {
  const db = mongoose.connection.db;
  if (!db) return null;
  return new mongoose.mongo.GridFSBucket(db, { bucketName: BUCKET_NAME });
}

async function findCachedFile(key) {
  const manifest = await loadManifest();
  const filename = manifest?.[key]?.filename;
  if (!filename) return null;
  const candidate = path.join(CACHE_DIR, filename);
  try {
    await fs.access(candidate);
    return candidate;
  } catch {
    return null;
  }
}

/**
 * Streams one editorial image out of the `siteassets` GridFS bucket.
 * The local ingest cache is only a resilience fallback when MongoDB is down.
 */
export async function getSiteAsset(req, res, next) {
  try {
    const key = String(req.params.key || '').trim();

    if (!SITE_ASSET_KEYS.has(key)) {
      return res.status(404).json({
        error: 'NotFound',
        message: `Unknown asset "${key}"`
      });
    }

    const bucket = gridFSBucket();

    if (bucket) {
      let file = null;
      try {
        file = await bucket.find({ filename: key }).next();
      } catch {
        file = null;
      }

      if (file) {
        const etag = `"sa-${String(file._id)}"`;
        if (req.headers['if-none-match'] === etag) {
          return res.status(304).end();
        }

        res.set({
          'Content-Type': file.contentType || 'image/jpeg',
          'Content-Length': file.length,
          'Cache-Control': CACHE_CONTROL,
          ETag: etag
        });

        const stream = bucket.openDownloadStream(file._id);
        stream.on('error', err => next(err));
        return stream.pipe(res);
      }
    }

    const cached = await findCachedFile(key);
    if (cached) {
      res.set({ 'Cache-Control': CACHE_CONTROL, ETag: `"sa-cache-${key}"` });
      return res.sendFile(cached);
    }

    res.status(404).json({
      error: 'NotFound',
      message: `Asset "${key}" is not seeded. Run: npm run fetch:assets && npm run seed`
    });
  } catch (err) {
    next(err);
  }
}

export async function listSiteAssets(req, res) {
  res.json({ total: SITE_ASSET_KEYS.size, keys: [...SITE_ASSET_KEYS].sort() });
}
