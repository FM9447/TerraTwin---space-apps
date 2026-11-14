import GameLevel from '../models/GameLevel.js';
import { GAME_LEVELS_100 } from '../gameLevelsData.js';

export async function getLevels(req, res, next) {
  try {
    const { difficulty, page = 1, limit = 100 } = req.query;
    const query = {};
    if (difficulty && difficulty !== 'all') {
      query.difficulty_id = difficulty.toLowerCase();
    }

    let levels = [];
    let totalCount = 0;

    try {
      totalCount = await GameLevel.countDocuments(query);
      if (totalCount > 0) {
        levels = await GameLevel.find(query)
          .sort({ level_number: 1 })
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit));
      }
    } catch (e) {
      // Fallback
    }

    if (levels.length === 0) {
      let filtered = GAME_LEVELS_100;
      if (difficulty && difficulty !== 'all') {
        filtered = filtered.filter(l => l.difficulty_id === difficulty.toLowerCase());
      }
      totalCount = filtered.length;
      const startIndex = (Number(page) - 1) * Number(limit);
      levels = filtered.slice(startIndex, startIndex + Number(limit));
    }

    res.json({
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
  } catch (err) {
    next(err);
  }
}

export async function submitGuess(req, res, next) {
  try {
    const { level_number, user_guess } = req.body;

    if (!level_number || !user_guess) {
      return res.status(400).json({
        error: 'ValidationError',
        message: 'Both level_number and user_guess are required'
      });
    }

    let level = null;
    try {
      level = await GameLevel.findOne({ level_number: Number(level_number) });
    } catch (e) {
      // Fallback
    }

    if (!level) {
      level = GAME_LEVELS_100.find(l => l.level_number === Number(level_number));
    }

    if (!level) {
      return res.status(404).json({ error: 'NotFound', message: `Level ${level_number} not found` });
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
    next(err);
  }
}
