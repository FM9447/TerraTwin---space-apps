import dotenv from 'dotenv';
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
import { GAME_LEVELS_100 } from '../gameLevelsData.js';

dotenv.config();

export async function seedDatabase() {
  console.log('🔄 Connecting to MongoDB for seeding...');
  const conn = await connectDB();
  if (!conn) {
    console.error('Cannot seed: MongoDB connection failed.');
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
        // In GeoJSON standard: [longitude, latitude]
        coordinates: [a.coordinates.lon, a.coordinates.lat]
      }
    }));
    await Analog.insertMany(analogDocs);
    console.log(`✅ Seeded ${analogDocs.length} Earth analogs with GeoJSON 2dsphere index.`);

    // 4. Seed 100 Game Levels
    console.log('🌱 Seeding 100 Educational Game Levels...');
    await GameLevel.deleteMany({});
    await GameLevel.insertMany(GAME_LEVELS_100);
    console.log(`✅ Seeded ${GAME_LEVELS_100.length} Game Levels across 4 difficulty tiers.`);

    console.log('🎉 MongoDB Database seeding complete!');
    return true;
  } catch (err) {
    console.error('❌ Error during seeding:', err);
    throw err;
  }
}

// Run directly if invoked from command line
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
