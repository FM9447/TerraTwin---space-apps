import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/db/connection.js';
import Analog from './src/models/Analog.js';
import PlanetaryTarget from './src/models/PlanetaryTarget.js';
import GameLevel from './src/models/GameLevel.js';
import NasaDataset from './src/models/NasaDataset.js';

import {
  NASA_DATASET_SOURCES,
  NASA_PLANETARY_TARGETS,
  NASA_EARTH_ANALOGS,
  NASA_PRD_MISSION_PROFILES
} from './src/nasaDataCatalog.js';
import { calculateAnalogDiscoveries } from './src/similarityEngine.js';
import { matchVisualAnalogs } from './src/imageSimilarityEngine.js';
import { GAME_LEVELS_100 } from './src/gameLevelsData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: '15mb' }));

// Establish MongoDB connection
let isDbConnected = false;
connectDB().then((conn) => {
  if (conn) isDbConnected = true;
});

// Health Check
app.get('/api/health', async (req, res) => {
  let dbStatus = 'disconnected';
  let analogCount = NASA_EARTH_ANALOGS.length;
  let gameLevelsCount = GAME_LEVELS_100.length;

  if (isDbConnected) {
    try {
      dbStatus = 'connected';
      analogCount = await Analog.countDocuments();
      gameLevelsCount = await GameLevel.countDocuments();
    } catch (e) {
      dbStatus = 'error: ' + e.message;
    }
  }

  res.json({
    status: 'online',
    service: 'TerraTwin Planetary Analog Discovery Backend',
    database: {
      provider: 'MongoDB Atlas',
      status: dbStatus,
      total_analogs_indexed: analogCount,
      total_game_levels_indexed: gameLevelsCount
    },
    version: '1.1.0'
  });
});

// NASA Scientific Datasets Catalog
app.get('/api/nasa-datasets', async (req, res) => {
  try {
    if (isDbConnected) {
      const datasets = await NasaDataset.find({});
      if (datasets.length > 0) {
        return res.json({
          source: 'MongoDB',
          datasets: datasets
        });
      }
    }
    res.json({ source: 'Fallback', datasets: NASA_DATASET_SOURCES });
  } catch (err) {
    res.json({ source: 'Fallback', datasets: NASA_DATASET_SOURCES });
  }
});

// Planetary Reference Targets (Moon & Mars)
app.get('/api/targets', async (req, res) => {
  try {
    if (isDbConnected) {
      const targets = await PlanetaryTarget.find({});
      if (targets.length > 0) {
        return res.json({ source: 'MongoDB', targets });
      }
    }
    res.json({ source: 'Fallback', targets: NASA_PLANETARY_TARGETS });
  } catch (err) {
    res.json({ source: 'Fallback', targets: NASA_PLANETARY_TARGETS });
  }
});

// PRD Mission Profiles
app.get('/api/mission-profiles', (req, res) => {
  res.json({ mission_profiles: NASA_PRD_MISSION_PROFILES });
});

// Feature 1: Parameter-based Analog Discovery & Ranking
app.post('/api/analog/search', (req, res) => {
  try {
    const { input_criteria, mission_profile_id, custom_weights } = req.body;
    const result = calculateAnalogDiscoveries(input_criteria, mission_profile_id, custom_weights);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to compute analog discoveries', details: err.message });
  }
});

// Spatial Feature: Find Analogs Near Coordinates using MongoDB $near
app.get('/api/analog/nearby', async (req, res) => {
  const { lat, lon, maxDistanceKm = 5000 } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Please provide both lat and lon query parameters' });
  }

  try {
    if (isDbConnected) {
      const nearby = await Analog.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [Number(lon), Number(lat)] // [longitude, latitude]
            },
            $maxDistance: Number(maxDistanceKm) * 1000 // Convert km to meters
          }
        }
      });

      return res.json({
        source: 'MongoDB 2dsphere $near query',
        query_origin: { lat: Number(lat), lon: Number(lon), maxDistanceKm: Number(maxDistanceKm) },
        count: nearby.length,
        results: nearby
      });
    }

    res.status(503).json({ error: 'MongoDB connection not active for spatial query' });
  } catch (err) {
    res.status(500).json({ error: 'Spatial query failed', details: err.message });
  }
});

// Spatial Feature: Find Analogs Inside a Custom Polygon using MongoDB $geoWithin
app.post('/api/analog/within-polygon', async (req, res) => {
  const { polygon_coordinates } = req.body;

  if (!polygon_coordinates || !Array.isArray(polygon_coordinates) || polygon_coordinates.length < 3) {
    return res.status(400).json({
      error: 'polygon_coordinates must be an array of at least 3 [lon, lat] pairs closing the loop'
    });
  }

  try {
    if (isDbConnected) {
      const inside = await Analog.find({
        location: {
          $geoWithin: {
            $polygon: polygon_coordinates
          }
        }
      });

      return res.json({
        source: 'MongoDB $geoWithin polygon query',
        count: inside.length,
        results: inside
      });
    }

    res.status(503).json({ error: 'MongoDB connection not active for polygon query' });
  } catch (err) {
    res.status(500).json({ error: 'Polygon spatial query failed', details: err.message });
  }
});

// Feature 2: Visual / Photo Similarity Matching
app.post('/api/analog/image-match', (req, res) => {
  try {
    const { visual_features } = req.body;
    const matches = matchVisualAnalogs(visual_features || {});
    res.json({
      query_features_used: visual_features,
      matches: matches
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to match visual analogs', details: err.message });
  }
});

// Feature 3: Educational Game (100 Levels in Black & White from MongoDB)
app.get('/api/game/levels', async (req, res) => {
  const { difficulty, page = 1, limit = 100 } = req.query;

  try {
    let levels = [];
    let totalCount = 0;

    if (isDbConnected) {
      const query = {};
      if (difficulty && difficulty !== 'all') {
        query.difficulty_id = difficulty.toLowerCase();
      }

      totalCount = await GameLevel.countDocuments(query);
      levels = await GameLevel.find(query)
        .sort({ level_number: 1 })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

      return res.json({
        source: 'MongoDB Atlas',
        total_levels: totalCount,
        page: Number(page),
        limit: Number(limit),
        difficulty_tiers: [
          { id: 'novice', label: 'Novice (Levels 1–25)', range: '1-25' },
          { id: 'explorer', label: 'Explorer (Levels 26–50)', range: '26-50' },
          { id: 'specialist', label: 'Specialist (Levels 51–75)', range: '51-75' },
          { id: 'commander', label: 'Commander (Levels 76–100)', range: '76-100' }
        ],
        levels: levels
      });
    }

    // Fallback to local array
    let filtered = GAME_LEVELS_100;
    if (difficulty && difficulty !== 'all') {
      filtered = filtered.filter(l => l.difficulty_id === difficulty.toLowerCase());
    }
    const startIndex = (Number(page) - 1) * Number(limit);
    const paginated = filtered.slice(startIndex, startIndex + Number(limit));

    res.json({
      source: 'Fallback',
      total_levels: filtered.length,
      page: Number(page),
      limit: Number(limit),
      difficulty_tiers: [
        { id: 'novice', label: 'Novice (Levels 1–25)', range: '1-25' },
        { id: 'explorer', label: 'Explorer (Levels 26–50)', range: '26-50' },
        { id: 'specialist', label: 'Specialist (Levels 51–75)', range: '51-75' },
        { id: 'commander', label: 'Commander (Levels 76–100)', range: '76-100' }
      ],
      levels: paginated
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch game levels', details: err.message });
  }
});

// Level Detail & Guess Verification
app.post('/api/game/guess', async (req, res) => {
  const { level_number, user_guess } = req.body;

  try {
    let level = null;
    if (isDbConnected) {
      level = await GameLevel.findOne({ level_number: Number(level_number) });
    }
    if (!level) {
      level = GAME_LEVELS_100.find(l => l.level_number === Number(level_number));
    }

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    const isCorrect = level.target_type === user_guess;

    res.json({
      level_number: level.level_number,
      user_guess: user_guess,
      correct_target_type: level.target_type,
      is_correct: isCorrect,
      revealed_details: {
        target_name: level.target_name,
        location_context: level.location_context,
        color_image_url: level.image_url,
        scientific_rationale: level.scientific_rationale,
        nasa_instrument: level.clues.instrument
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to evaluate guess', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TerraTwin NASA Analog Discovery Backend active on port ${PORT}`);
});
