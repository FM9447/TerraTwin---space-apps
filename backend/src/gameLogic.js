/**
 * Pure game logic shared by the API and the test suite.
 * Keeping the serializer here guarantees the public level payload never leaks
 * the answer through any code path (MongoDB result or offline fallback).
 */

export const CHOICES = ['earth_analog', 'moon', 'mars'];

export const DIFFICULTY_TIERS = [
  { id: 'novice', label: 'Novice', range: '1-25' },
  { id: 'explorer', label: 'Explorer', range: '26-50' },
  { id: 'specialist', label: 'Specialist', range: '51-75' },
  { id: 'commander', label: 'Commander', range: '76-100' }
];

export function normalizeGuess(value) {
  const v = String(value ?? '').trim().toLowerCase();
  if (v === 'earth' || v === 'earth_analog' || v === 'earth-analog') return 'earth_analog';
  if (v === 'moon' || v === 'luna' || v === 'lunar') return 'moon';
  if (v === 'mars' || v === 'martian') return 'mars';
  return null;
}

export function imageUrlFor(levelNumber) {
  return `/api/game/image/${levelNumber}`;
}

/** The only shape ever sent to a player before they guess. */
export function toPublicLevel(level) {
  return {
    level_number: level.level_number,
    difficulty: level.difficulty,
    difficulty_id: level.difficulty_id,
    frame_code: level.frame_code,
    points: level.points,
    image_url: imageUrlFor(level.level_number),
    clues: {
      instrument: level.clues?.instrument,
      mineralogy: level.clues?.mineralogy,
      terrain_metrics: level.clues?.terrain_metrics,
      thermal_environment: level.clues?.thermal_environment
    },
    choices: CHOICES
  };
}

/** Everything revealed only after a guess has been submitted. */
export function toReveal(level) {
  return {
    target_type: level.target_type,
    target_name: level.target_name,
    location_context: level.location_context,
    scientific_rationale: level.scientific_rationale,
    image_url: imageUrlFor(level.level_number),
    image_alt: level.image_alt,
    image_credit: level.image_credit || 'Wikimedia Commons contributor',
    image_license: level.image_license || 'See source page',
    image_source_url: level.image_source_url || null
  };
}

/**
 * Scores one guess.
 * Base points come from the tier, clue use is deducted, and a streak bonus is
 * applied to correct answers only. Capped so a perfect run stays predictable.
 *
 * `cluesUsed` counts every clue card the player opened, including the free
 * first one, so only clues beyond the first are charged.
 */
export function scoreGuess(level, userGuess, options = {}) {
  const normalizedGuess = normalizeGuess(userGuess);
  const isCorrect = normalizedGuess !== null && normalizedGuess === level.target_type;
  const basePoints = Number(level.points) || 100;
  const cluesUsed = Math.max(0, Math.min(4, Math.floor(Number(options.cluesUsed) || 0)));
  const streak = Math.max(0, Math.min(5, Math.floor(Number(options.streak) || 0)));

  const paidClues = Math.max(0, cluesUsed - 1);
  const cluePenalty = Math.min(paidClues * 20, basePoints);
  const streakMultiplier = 1 + streak * 0.2;
  const pointsAwarded = isCorrect
    ? Math.round((basePoints - cluePenalty) * streakMultiplier)
    : 0;

  return {
    isCorrect,
    normalizedGuess,
    correctTargetType: level.target_type,
    basePoints,
    cluePenalty,
    streakMultiplier: Number(streakMultiplier.toFixed(2)),
    pointsAwarded
  };
}
