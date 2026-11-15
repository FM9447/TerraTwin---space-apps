import { Router } from 'express';
import mongoose from 'mongoose';
import analogRoutes from './analogRoutes.js';
import gameRoutes from './gameRoutes.js';
import targetRoutes from './targetRoutes.js';
import datasetRoutes from './datasetRoutes.js';
import imageRoutes from './imageRoutes.js';
import assetRoutes from './assetRoutes.js';
import Analog from '../models/Analog.js';
import GameLevel from '../models/GameLevel.js';
import { config } from '../config/env.js';

const router = Router();

// Health Check
router.get('/health', async (req, res) => {
  let dbStatus = 'disconnected';
  let analogCount = 0;
  let gameLevelsCount = 0;
  let gameImageCount = 0;

  try {
    analogCount = await Analog.countDocuments();
    gameLevelsCount = await GameLevel.countDocuments();
    if (mongoose.connection.db) {
      gameImageCount = await mongoose.connection.db
        .collection('gameimages.files')
        .countDocuments();
    }
    dbStatus = 'connected';
  } catch (e) {
    dbStatus = 'offline_or_error: ' + e.message;
  }

  res.json({
    status: 'online',
    service: 'TerraTwin Planetary Analog Discovery Backend',
    database: {
      provider: String(config.mongodbUri).startsWith('mongodb+srv')
        ? 'MongoDB Atlas'
        : 'MongoDB (local)',
      status: dbStatus,
      total_analogs_indexed: analogCount,
      total_game_levels_indexed: gameLevelsCount,
      total_game_images_stored: gameImageCount
    },
    game: {
      levels: gameLevelsCount,
      images: gameImageCount,
      image_storage: 'GridFS bucket "gameimages"'
    },
    version: '1.3.0',
    uptime_seconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Mount modular sub-routes
router.use('/analog', analogRoutes);
router.use('/game', gameRoutes);
router.use('/', targetRoutes);
router.use('/', datasetRoutes);
router.use('/analog', imageRoutes);
router.use('/assets', assetRoutes);

export default router;
