/**
 * Builds the 10-level campaign out of the 100-question catalog.
 *
 * Rules:
 *  - exactly 100 questions, each used once;
 *  - every level holds 10 questions mixing Earth analogues, the Moon and Mars;
 *  - levels ramp from easiest (level 1) to hardest (level 10);
 *  - the question order inside each level is shuffled, but never more than two
 *    of the same world in a row.
 *
 * Question sets are deterministic so a level always teaches the same sites;
 * only the order inside a run is random.
 */

export const CAMPAIGN_LEVELS = 10;
export const QUESTIONS_PER_LEVEL = 10;

const TYPE_ORDER = ['earth_analog', 'moon', 'mars'];

const TIER_RANK = {
  novice: 0,
  explorer: 1,
  specialist: 2,
  commander: 3
};

const TIER_LABEL = ['Novice', 'Explorer', 'Specialist', 'Commander'];
const TIER_ID = ['novice', 'explorer', 'specialist', 'commander'];

/**
 * Earth 5×8 + 4×2 = 48, Moon 3×8 + 2×2 = 28, Mars 2×8 + 4×2 = 24.
 * Every level therefore receives exactly ten questions and all 100 are used.
 */
const QUOTAS = {
  earth_analog: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4],
  moon: [3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  mars: [2, 2, 2, 2, 2, 2, 2, 2, 4, 4]
};

function rankOf(level) {
  return TIER_RANK[level.difficulty_id] ?? 0;
}

function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Shuffle, then deal greedily so no three identical worlds ever sit in a row. */
export function shuffleMixed(questions) {
  const build = () => {
    const buckets = {};
    for (const question of questions) {
      (buckets[question.target_type] ||= []).push(question);
    }
    for (const type of Object.keys(buckets)) buckets[type] = shuffle(buckets[type]);

    const out = [];
    while (out.length < questions.length) {
      const lastTwo = out.slice(-2).map(q => q.target_type);
      const available = Object.keys(buckets).filter(type => buckets[type].length > 0);
      let candidates = available.filter(
        type => !(lastTwo.length === 2 && lastTwo[0] === type && lastTwo[1] === type)
      );
      if (candidates.length === 0) candidates = available;

      // Prefer the world with the most frames left, with a little randomness.
      candidates.sort((a, b) => buckets[b].length - buckets[a].length);
      const pool = candidates.slice(0, Math.min(2, candidates.length));
      const pick = pool[Math.floor(Math.random() * pool.length)];
      out.push(buckets[pick].shift());
    }
    return out;
  };

  const hasTriple = list => {
    for (let i = 2; i < list.length; i += 1) {
      if (list[i - 2].target_type === list[i - 1].target_type &&
          list[i - 1].target_type === list[i].target_type) {
        return true;
      }
    }
    return false;
  };

  for (let attempt = 0; attempt < 40; attempt += 1) {
    const candidate = build();
    if (!hasTriple(candidate)) return candidate;
  }

  // Deterministic fallback: plain round-robin over the three worlds.
  const fallback = [];
  const buckets = {};
  for (const question of questions) {
    (buckets[question.target_type] ||= []).push(question);
  }
  const order = ['earth_analog', 'moon', 'mars'];
  while (fallback.length < questions.length) {
    for (const type of order) {
      const next = buckets[type]?.shift();
      if (next) fallback.push(next);
    }
  }
  return fallback;
}

function labelFor(questions) {
  const avg = questions.reduce((sum, q) => sum + rankOf(q), 0) / questions.length;
  if (avg < 0.75) return { label: TIER_LABEL[0], id: TIER_ID[0], score: avg };
  if (avg < 1.75) return { label: TIER_LABEL[1], id: TIER_ID[1], score: avg };
  if (avg < 2.75) return { label: TIER_LABEL[2], id: TIER_ID[2], score: avg };
  return { label: TIER_LABEL[3], id: TIER_ID[3], score: avg };
}

/**
 * @param {Array} levels full catalog records (must include target_type and difficulty_id)
 * @returns {Array} 10 campaign levels, each with a shuffled `questions` array
 */
export function buildCampaign(levels) {
  const buckets = { earth_analog: [], moon: [], mars: [] };

  for (const level of levels) {
    if (buckets[level.target_type]) buckets[level.target_type].push(level);
  }

  for (const type of TYPE_ORDER) {
    buckets[type].sort(
      (a, b) => rankOf(a) - rankOf(b) || a.level_number - b.level_number
    );
  }

  const cursor = { earth_analog: 0, moon: 0, mars: 0 };
  const campaign = [];

  for (let levelIndex = 0; levelIndex < CAMPAIGN_LEVELS; levelIndex += 1) {
    const questions = [];

    for (const type of TYPE_ORDER) {
      const quota = QUOTAS[type][levelIndex];
      for (let i = 0; i < quota; i += 1) {
        const next = buckets[type][cursor[type]];
        if (next) {
          questions.push(next);
          cursor[type] += 1;
        }
      }
    }

    const meta = labelFor(questions);

    campaign.push({
      level_number: levelIndex + 1,
      difficulty_label: meta.label,
      difficulty_id: meta.id,
      difficulty_meter: levelIndex + 1,
      question_count: questions.length,
      total_points: questions.reduce((sum, q) => sum + (Number(q.points) || 100), 0),
      mix: {
        earth_analog: questions.filter(q => q.target_type === 'earth_analog').length,
        moon: questions.filter(q => q.target_type === 'moon').length,
        mars: questions.filter(q => q.target_type === 'mars').length
      },
      questions: shuffleMixed(questions)
    });
  }

  return campaign;
}
