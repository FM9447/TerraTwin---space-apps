import express from 'express';
import cors from 'cors';
import {
  NASA_DATASET_SOURCES,
  NASA_PLANETARY_TARGETS,
  NASA_EARTH_ANALOGS,
  NASA_PRD_MISSION_PROFILES
} from './src/nasaDataCatalog.js';
import { calculateAnalogDiscoveries } from './src/similarityEngine.js';
import { matchVisualAnalogs } from './src/imageSimilarityEngine.js';
import { GAME_LEVELS_100 } from './src/gameLevelsData.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: '15mb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'TerraTwin Planetary Analog Discovery Backend',
    version: '1.0.0',
    nasa_datasets_active: Object.keys(NASA_DATASET_SOURCES).length,
    game_levels_available: GAME_LEVELS_100.length
  });
});

// NASA Scientific Datasets Catalog
app.get('/api/nasa-datasets', (req, res) => {
  res.json({
    message: '100% NASA Scientific Datasets Catalog',
    datasets: NASA_DATASET_SOURCES
  });
});

// Planetary Reference Targets (Moon & Mars)
app.get('/api/targets', (req, res) => {
  res.json({
    targets: NASA_PLANETARY_TARGETS
  });
});

// PRD Mission Profiles
app.get('/api/mission-profiles', (req, res) => {
  res.json({
    mission_profiles: NASA_PRD_MISSION_PROFILES
  });
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

// Feature 2: Visual / Photo Similarity Matching
app.post('/api/analog/image-match', (req, res) => {
  try {
    const { visual_features, image_data } = req.body;
    // Query feature extraction / visual matcher
    const matches = matchVisualAnalogs(visual_features || {});
    res.json({
      query_features_used: visual_features,
      matches: matches
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to match visual analogs', details: err.message });
  }
});

// Feature 3: Educational Game (100 Levels in Black & White)
app.get('/api/game/levels', (req, res) => {
  const { difficulty, page = 1, limit = 100 } = req.query;
  let filtered = GAME_LEVELS_100;

  if (difficulty && difficulty !== 'all') {
    filtered = filtered.filter(l => l.difficulty_id === difficulty.toLowerCase());
  }

  const startIndex = (Number(page) - 1) * Number(limit);
  const paginated = filtered.slice(startIndex, startIndex + Number(limit));

  res.json({
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
});

// Level Detail & Guess Verification
app.post('/api/game/guess', (req, res) => {
  const { level_number, user_guess } = req.body;
  const level = GAME_LEVELS_100.find(l => l.level_number === Number(level_number));

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
});

app.listen(PORT, () => {
  console.log(`🚀 TerraTwin NASA Analog Discovery Backend active on port ${PORT}`);
});
