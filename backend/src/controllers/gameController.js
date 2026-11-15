import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';
import GameLevel from '../models/GameLevel.js';
import { GAME_LEVELS_100, DIFFICULTY_TIERS } from '../gameLevelsData.js';
import { toPublicLevel, toReveal, scoreGuess } from '../gameLogic.js';
import { buildCampaign, CAMPAIGN_LEVELS, QUESTIONS_PER_LEVEL } from '../gameCampaign.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_CACHE_DIR = path.resolve(__dirname, '../../.cache/game-images');
const BUCKET_NAME = 'gameimages';
const CACHE_CONTROL = 'public, max-age=31536000, immutable';

function gridFSBucket() {
  const db = mongoose.connection.db;
  if (!db) return null;
  return new mongoose.mongo.GridFSBucket(db, { bucketName: BUCKET_NAME });
}

async function findLevel(levelNumber) {
  try {
    const level = await GameLevel.findOne({ level_number: Number(levelNumber) }).lean();
    if (level) return level;
  } catch {
    // Atlas/local MongoDB unavailable — use the in-memory catalog.
  }
  return GAME_LEVELS_100.find(l => l.level_number === Number(levelNumber)) || null;
}

async function findCachedImage(levelNumber) {
  const prefix = String(levelNumber).padStart(3, '0');
  for (const ext of ['jpg', 'png', 'webp']) {
    const candidate = path.join(IMAGE_CACHE_DIR, `${prefix}.${ext}`);
    try {
      await fs.access(candidate);
      return candidate;
    } catch { /* try next extension */ }
  }
  return null;
}

export async function getCampaign(req, res, next) {
  try {
    let levels = [];
    try {
      levels = await GameLevel.find({}).sort({ level_number: 1 }).lean();
    } catch {
      levels = [];
    }
    if (levels.length === 0) levels = GAME_LEVELS_100;

    const campaign = buildCampaign(levels);

    res.json({
      campaign_size: CAMPAIGN_LEVELS,
      questions_per_level: QUESTIONS_PER_LEVEL,
      star_thresholds: { three: 0.85, two: 0.65, one: 0.45 },
      levels: campaign.map(level => ({
        ...level,
        questions: level.questions.map(toPublicLevel)
      }))
    });
  } catch (err) {
    next(err);
  }
}

export async function getLevels(req, res, next) {  try {
    const { difficulty, page = 1, limit = 100 } = req.query;
    const pageNum = Math.max(1, Number(page) || 1);
    const limitNum = Math.min(100, Math.max(1, Number(limit) || 100));
    const query = {};
    if (difficulty && difficulty !== 'all') query.difficulty_id = String(difficulty).toLowerCase();

    let levels = [];
    let totalCount = 0;

    try {
      totalCount = await GameLevel.countDocuments(query);
      if (totalCount > 0) {
        levels = await GameLevel.find(query)
          .sort({ level_number: 1 })
          .skip((pageNum - 1) * limitNum)
          .limit(limitNum)
          .lean();
      }
    } catch {
      // Fall back to the bundled catalog below.
    }

    if (levels.length === 0) {
      let filtered = GAME_LEVELS_100;
      if (difficulty && difficulty !== 'all') {
        filtered = filtered.filter(l => l.difficulty_id === String(difficulty).toLowerCase());
      }
      totalCount = filtered.length;
      const start = (pageNum - 1) * limitNum;
      levels = filtered.slice(start, start + limitNum);
    }

    res.json({
      total_levels: totalCount,
      page: pageNum,
      limit: limitNum,
      difficulty_tiers: DIFFICULTY_TIERS.map(t => ({
        id: t.id,
        label: `${t.label} (Levels ${t.range})`,
        range: t.range
      })),
      levels: levels.map(toPublicLevel)
    });
  } catch (err) {
    next(err);
  }
}

export async function getLevel(req, res, next) {
  try {
    const level = await findLevel(req.params.levelNumber);
    if (!level) {
      return res.status(404).json({ error: 'NotFound', message: `Level ${req.params.levelNumber} not found` });
    }
    res.json({ level: toPublicLevel(level) });
  } catch (err) {
    next(err);
  }
}

export async function submitGuess(req, res, next) {
  try {
    const { level_number, user_guess, clues_used = 0, streak = 0 } = req.body || {};

    if (!level_number || !user_guess) {
      return res.status(400).json({
        error: 'ValidationError',
        message: 'Both level_number and user_guess are required'
      });
    }

    if (!['earth_analog', 'moon', 'mars', 'earth', 'earth-analog', 'lunar', 'luna', 'martian']
      .includes(String(user_guess).toLowerCase())) {
      return res.status(400).json({
        error: 'ValidationError',
        message: 'user_guess must be one of: earth_analog, moon, mars'
      });
    }

    const level = await findLevel(level_number);
    if (!level) {
      return res.status(404).json({ error: 'NotFound', message: `Level ${level_number} not found` });
    }

    const score = scoreGuess(level, user_guess, { cluesUsed: clues_used, streak });

    res.json({
      level_number: level.level_number,
      user_guess,
      correct_target_type: score.correctTargetType,
      is_correct: score.isCorrect,
      points_awarded: score.pointsAwarded,
      scoring: {
        base_points: score.basePoints,
        clue_penalty: score.cluePenalty,
        streak_multiplier: score.streakMultiplier
      },
      revealed_details: toReveal(level)
    });
  } catch (err) {
    next(err);
  }
}

export async function getGameImage(req, res, next) {
  try {
    const levelNumber = Number(req.params.levelNumber);
    if (!Number.isFinite(levelNumber)) {
      return res.status(400).json({ error: 'ValidationError', message: 'Invalid level number' });
    }

    const level = await findLevel(levelNumber);
    const bucket = gridFSBucket();

    if (level?.image_id && bucket) {
      let file = null;
      try {
        file = await bucket.find({ _id: level.image_id }).next();
      } catch {
        file = null;
      }

      if (file) {
        const etag = `"${String(level.image_id)}"`;
        if (req.headers['if-none-match'] === etag) {
          return res.status(304).end();
        }

        res.set({
          'Content-Type': file.contentType || 'image/jpeg',
          'Content-Length': file.length,
          'Cache-Control': CACHE_CONTROL,
          ETag: etag
        });

        const stream = bucket.openDownloadStream(level.image_id);
        stream.on('error', err => next(err));
        return stream.pipe(res);
      }
    }

    // Resilience fallback: the local ingest cache is served by our own API if
    // MongoDB is unreachable. No external image host is ever contacted.
    const cached = await findCachedImage(levelNumber);
    if (cached) {
      res.set('Cache-Control', CACHE_CONTROL);
      return res.sendFile(cached);
    }

    res.status(404).json({
      error: 'NotFound',
      message: `No image stored for level ${levelNumber}. Run: npm run seed`
    });
  } catch (err) {
    next(err);
  }
}

export async function getGameStats(req, res, next) {
  try {
    let levels = 0;
    let images = 0;
    try {
      levels = await GameLevel.countDocuments();
      if (mongoose.connection.db) {
        const files = await mongoose.connection.db.collection(`${BUCKET_NAME}.files`).countDocuments();
        images = files;
      }
    } catch { /* fall back to catalog */ }

    res.json({
      total_levels: levels || GAME_LEVELS_100.length,
      total_images: images,
      difficulty_tiers: DIFFICULTY_TIERS
    });
  } catch (err) {
    next(err);
  }
}
