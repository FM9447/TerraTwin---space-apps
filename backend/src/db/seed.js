import dotenv from 'dotenv';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import { connectDB } from './connection.js';
import Analog from '../models/Analog.js';
import PlanetaryTarget from '../models/PlanetaryTarget.js';
import GameLevel from '../models/GameLevel.js';
import NasaDataset from '../models/NasaDataset.js';

import {
  NASA_DATASET_SOURCES,
  NASA_PLANETARY_TARGETS,
  NASA_EARTH_ANALOGS
} from '../nasaDataCatalog.js';
import { GAME_LEVELS_100, validateGameCatalog } from '../gameLevelsData.js';
import { SITE_ASSETS } from '../data/siteAssets.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.resolve(__dirname, '../../.cache/game-images');
const SITE_ASSET_CACHE_DIR = path.resolve(__dirname, '../../.cache/site-assets');
const MANIFEST_PATH = path.join(CACHE_DIR, 'manifest.json');
const BUCKET_NAME = 'gameimages';
const SITE_BUCKET_NAME = 'siteassets';
const forceImages = process.argv.includes('--force-images');
const forceAssets = process.argv.includes('--force-assets');

async function loadImageManifest() {
  try {
    return JSON.parse(await fsp.readFile(MANIFEST_PATH, 'utf8'));
  } catch {
    return {};
  }
}

async function loadSiteManifest() {
  try {
    return JSON.parse(await fsp.readFile(path.join(SITE_ASSET_CACHE_DIR, 'manifest.json'), 'utf8'));
  } catch {
    return {};
  }
}

async function uploadImages(bucket, manifest) {
  if (forceImages) {
    console.log('🧹 Dropping existing GridFS gameimages bucket...');
    await bucket.drop().catch(() => {});
  }

  const existing = await bucket.find({}).toArray();
  const byLevel = new Map(
    existing
      .filter(f => f.metadata?.level_number)
      .map(f => [Number(f.metadata.level_number), f])
  );

  const imageIds = new Map();
  let uploaded = 0;
  let reused = 0;
  const missing = [];

  for (const level of GAME_LEVELS_100) {
    const entry = manifest[level.level_number];

    if (entry && !forceImages && byLevel.has(level.level_number)) {
      imageIds.set(level.level_number, byLevel.get(level.level_number)._id);
      reused++;
      continue;
    }

    if (!entry?.filename) {
      missing.push(level.level_number);
      continue;
    }

    const filePath = path.join(CACHE_DIR, entry.filename);
    if (!fs.existsSync(filePath)) {
      missing.push(level.level_number);
      continue;
    }

    const uploadStream = bucket.openUploadStream(entry.filename, {
      contentType: entry.mime || 'image/jpeg',
      metadata: {
        level_number: level.level_number,
        target_type: level.target_type,
        target_name: level.target_name,
        credit: entry.credit,
        license: entry.license,
        source_url: entry.source_url
      }
    });

    await new Promise((resolve, reject) => {
      const read = fs.createReadStream(filePath);
      read.on('error', reject);
      uploadStream.on('finish', resolve);
      uploadStream.on('error', reject);
      read.pipe(uploadStream);
    });

    imageIds.set(level.level_number, uploadStream.id);
    uploaded++;
  }

  console.log(`🖼️  GridFS images: ${uploaded} uploaded, ${reused} reused, ${imageIds.size}/100 available.`);
  if (missing.length) {
    console.warn(`⚠️  Missing cached images for levels: ${missing.join(', ')}`);
    console.warn('   Run `npm run fetch:images` to download them, then seed again.');
  }

  return imageIds;
}

async function uploadSiteAssets(bucket, manifest) {
  if (forceAssets) {
    console.log('🖼  Dropping existing GridFS siteassets bucket...');
    await bucket.drop().catch(() => {});
  }

  const existing = await bucket.find({}).toArray();
  const existingNames = new Set(existing.map(f => f.filename));

  let uploaded = 0;
  let reused = 0;
  const missing = [];

  for (const asset of SITE_ASSETS) {
    if (!forceAssets && existingNames.has(asset.key)) {
      reused++;
      continue;
    }

    const entry = manifest[asset.key];
    if (!entry?.filename) {
      missing.push(asset.key);
      continue;
    }

    const filePath = path.join(SITE_ASSET_CACHE_DIR, entry.filename);
    if (!fs.existsSync(filePath)) {
      missing.push(asset.key);
      continue;
    }

    const uploadStream = bucket.openUploadStream(asset.key, {
      contentType: entry.mime || 'image/jpeg',
      metadata: {
        key: asset.key,
        alt: asset.alt,
        credit: entry.credit || asset.credit,
        license: entry.license || asset.license,
        source_url: entry.source_url || asset.source_url,
        title: asset.title
      }
    });

    await new Promise((resolve, reject) => {
      const read = fs.createReadStream(filePath);
      read.on('error', reject);
      uploadStream.on('finish', resolve);
      uploadStream.on('error', reject);
      read.pipe(uploadStream);
    });

    uploaded++;
  }

  console.log(`🖼  Site assets: ${uploaded} uploaded, ${reused} reused, ${SITE_ASSETS.length} in catalog.`);
  if (missing.length) {
    console.warn(`⚠  Missing cached site assets: ${missing.join(', ')}`);
    console.warn('   Run `npm run fetch:assets` to download them, then seed again.');
  }
}

export async function seedDatabase() {
  const problems = validateGameCatalog();
  if (problems.length) {
    console.error('❌ Game catalog failed validation:');
    problems.forEach(p => console.error(`   - ${p}`));
    process.exit(1);
  }

  console.log('🔄 Connecting to MongoDB for seeding...');
  const conn = await connectDB();
  if (!conn) {
    console.error('Cannot seed: MongoDB connection failed. Is `npm run db:up` running?');
    process.exit(1);
  }

  try {
    // 1. Seed NASA Datasets
    console.log('🌱 Seeding NASA Scientific Datasets...');
    await NasaDataset.deleteMany({});
    const datasetDocs = Object.entries(NASA_DATASET_SOURCES).map(([key, ds]) => ({
      key,
      ...ds
    }));
    await NasaDataset.insertMany(datasetDocs);
    console.log(`✅ Seeded ${datasetDocs.length} NASA datasets.`);

    // 2. Seed Planetary Targets (Moon & Mars)
    console.log('🌱 Seeding Planetary Targets...');
    await PlanetaryTarget.deleteMany({});
    await PlanetaryTarget.insertMany(NASA_PLANETARY_TARGETS);
    console.log(`✅ Seeded ${NASA_PLANETARY_TARGETS.length} planetary targets.`);

    // 3. Seed Earth Analogs with GeoJSON Point coordinates for 2dsphere spatial indexing
    console.log('🌱 Seeding Earth Analogs with GeoJSON coordinates...');
    await Analog.deleteMany({});
    const analogDocs = NASA_EARTH_ANALOGS.map(a => ({
      ...a,
      location: {
        type: 'Point',
        coordinates: [a.coordinates.lon, a.coordinates.lat]
      }
    }));
    await Analog.insertMany(analogDocs);
    console.log(`✅ Seeded ${analogDocs.length} Earth analogs with GeoJSON 2dsphere index.`);

    // 4. Upload game images to GridFS (runtime never touches external hosts)
    console.log('🌱 Uploading game images to GridFS...');
    const manifest = await loadImageManifest();
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: BUCKET_NAME });
    const imageIds = await uploadImages(bucket, manifest);

    // 5. Upload the editorial Twin Worlds imagery to GridFS
    console.log('🖼  Uploading Twin Worlds site assets to GridFS...');
    const siteManifest = await loadSiteManifest();
    const siteBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: SITE_BUCKET_NAME });
    await uploadSiteAssets(siteBucket, siteManifest);

    // 5. Seed 100 Game Levels with image references + attribution
    console.log('🌱 Seeding 100 Educational Game Levels...');
    await GameLevel.deleteMany({});
    const levelDocs = GAME_LEVELS_100.map(level => {
      const image = manifest[level.level_number];
      return {
        level_number: level.level_number,
        difficulty: level.difficulty,
        difficulty_id: level.difficulty_id,
        frame_code: level.frame_code,
        target_type: level.target_type,
        target_name: level.target_name,
        location_context: level.location_context,
        image_id: imageIds.get(level.level_number) || null,
        image_alt: level.image_alt,
        image_query: level.image_query,
        image_credit: image?.credit || 'Wikimedia Commons contributor',
        image_license: image?.license || 'See source page',
        image_source_url: image?.source_url || null,
        clues: level.clues,
        scientific_rationale: level.scientific_rationale,
        points: level.points
      };
    });
    await GameLevel.insertMany(levelDocs);
    console.log(`✅ Seeded ${levelDocs.length} Game Levels across 4 difficulty tiers.`);

    console.log('🎉 MongoDB database seeding complete!');
    return true;
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    throw err;
  }
}

// Run directly if invoked from the command line
if (process.argv[1]?.endsWith('seed.js')) {
  seedDatabase()
    .then(() => {
      console.log('Done!');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
