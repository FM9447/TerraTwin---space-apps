import novice from './levels/novice.js';
import explorer from './levels/explorer.js';
import specialist from './levels/specialist.js';
import commander from './levels/commander.js';

/**
 * Builds the canonical 100-level game catalog in the shape used by the
 * GameLevel model, the seed script and the offline fallback.
 *
 * The per-tier files hold only the human-authored fields. Instrument tags,
 * frame codes and point values are derived here so all tiers stay consistent.
 */

export const DIFFICULTY_TIERS = [
  { id: 'novice', label: 'Novice', range: '1-25', points: 100 },
  { id: 'explorer', label: 'Explorer', range: '26-50', points: 150 },
  { id: 'specialist', label: 'Specialist', range: '51-75', points: 200 },
  { id: 'commander', label: 'Commander', range: '76-100', points: 300 }
];

const TIER_POINTS = Object.fromEntries(DIFFICULTY_TIERS.map(t => [t.id, t.points]));

/**
 * Visual-difficulty pass.
 *
 * Some first-pass Earth photos were too easy to call: lakes, rivers, clouds or
 * a person in frame. These levels keep the same site but use a drier, closer
 * frame of it. Keeping the overrides here makes the curation auditable.
 */
const IMAGE_REFRESH = {
  1: { query: 'Wolfe Creek crater dry floor', over: ['Wolfe Creek Crater National Park banner.jpg'] },
  2: { query: 'Taylor Valley Antarctica landscape', over: ['Taylor Valley 2015 01.jpg'] },
  3: { query: 'Atacama desert rocks', over: ['Atacama desert - Luna valey.jpg'] },
  4: { query: 'Askja pahoehoe lava', over: ['Pahoehoe-askja-iceland.JPG'] },
  6: { query: 'Tso Kar stark landscape', over: ['India - Ladakh - Trekking - 027 - stark landscape (3892865148).jpg'] },
  10: { query: 'Rio Tinto dry riverbed rock', over: ['Rio Tinto, cauce 23.jpg'] },
  11: { query: 'Dallol salt crust', over: ['ET Afar asv2018-01 img16 Dallol.jpg'] },
  30: { query: 'Salar de Uyuni salt crust', over: ['20170809 Bolivia 1521 Uyuni sRGB (37926739616).jpg'] },
  33: { query: 'Bardenas Reales badlands', over: ['Bardenas Reales 10.jpg'] },
  58: { query: 'Pinnacles Desert limestone pillars', over: ['Pinnacles Desert, Nambung National Park, Western Australia 15.jpg'] },
  76: { query: 'Yellowstone siliceous sinter', over: ['Siliceous-sinter-199965.jpg'] },
  81: { query: 'White Desert karst rock', over: ['White Desert, Karst rock formations 2, Egypt.jpg'] },
  82: { query: 'Lake Assal salt crust', over: ['Assal Lake, 2024.jpg'] },
  83: { query: 'Namaskard geothermal ground', over: ['Hverir geothermal area6.jpg'] },
  84: { query: 'Lake Natron salt crust', over: ['Lake Natron, Tanzania (51419427143).png'] }
};

function expand(entry, difficultyId) {
  const tier = DIFFICULTY_TIERS.find(t => t.id === difficultyId);
  const [instrument, mineralogy, terrain, thermal] = entry.clues;
  const refresh = IMAGE_REFRESH[entry.n];

  return {
    level_number: entry.n,
    difficulty: tier.label,
    difficulty_id: tier.id,
    frame_code: `LVL-${String(entry.n).padStart(3, '0')} [${entry.tag.toUpperCase()}]`,
    target_type: entry.type,
    target_name: entry.name,
    location_context: entry.loc,
    image_alt: entry.alt,
    image_query: refresh?.query || entry.query,
    image_overrides: refresh?.over || (refresh ? [] : (entry.over || [])),
    clues: {
      instrument,
      mineralogy,
      terrain_metrics: terrain,
      thermal_environment: thermal
    },
    scientific_rationale: entry.why,
    points: TIER_POINTS[difficultyId] || 100
  };
}

export const GAME_LEVELS_100 = [
  ...novice.map(e => expand(e, 'novice')),
  ...explorer.map(e => expand(e, 'explorer')),
  ...specialist.map(e => expand(e, 'specialist')),
  ...commander.map(e => expand(e, 'commander'))
];

/**
 * Structural integrity checks used by the test suite and seed script.
 * Returns an array of human-readable problems (empty when valid).
 */
export function validateGameCatalog(levels = GAME_LEVELS_100) {
  const problems = [];

  if (levels.length !== 100) problems.push(`Expected 100 levels, found ${levels.length}`);

  for (const tier of DIFFICULTY_TIERS) {
    const count = levels.filter(l => l.difficulty_id === tier.id).length;
    if (count !== 25) problems.push(`${tier.label} should have 25 levels, found ${count}`);
  }

  const numbers = new Set(levels.map(l => l.level_number));
  if (numbers.size !== levels.length) problems.push('Duplicate level numbers found');

  const names = new Set(levels.map(l => l.target_name.toLowerCase()));
  if (names.size !== levels.length) problems.push('Target names are not unique across levels');

  const queries = new Set(levels.map(l => l.image_query.toLowerCase()));
  if (queries.size !== levels.length) problems.push('Image queries are not unique across levels');

  for (const level of levels) {
    const missing = ['level_number', 'target_type', 'target_name', 'location_context', 'image_query', 'scientific_rationale']
      .filter(key => !level[key]);
    if (missing.length) problems.push(`Level ${level.level_number} missing: ${missing.join(', ')}`);
    if (!['earth_analog', 'moon', 'mars'].includes(level.target_type)) {
      problems.push(`Level ${level.level_number} has invalid target_type ${level.target_type}`);
    }
    if (level.clues.instrument.length < 5) problems.push(`Level ${level.level_number} has no instrument clue`);
  }

  return problems;
}
