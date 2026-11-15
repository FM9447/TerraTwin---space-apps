import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAnalogDiscoveries } from '../src/similarityEngine.js';
import { matchVisualAnalogs } from '../src/imageSimilarityEngine.js';
import { GAME_LEVELS_100, validateGameCatalog } from '../src/gameLevelsData.js';
import { toPublicLevel, toReveal, normalizeGuess, scoreGuess } from '../src/gameLogic.js';
import { buildCampaign } from '../src/gameCampaign.js';
import { NASA_DATASET_SOURCES, NASA_PLANETARY_TARGETS, NASA_EARTH_ANALOGS } from '../src/nasaDataCatalog.js';

test('1. NASA Datasets Catalog Integrity', (t) => {
  const datasetKeys = Object.keys(NASA_DATASET_SOURCES);
  assert.equal(datasetKeys.length, 10, 'Must have exactly 10 core NASA datasets');
  assert.ok(NASA_DATASET_SOURCES.nasadem, 'NASADEM must exist');
  assert.ok(NASA_DATASET_SOURCES.lro_lola, 'LRO LOLA must exist');
  assert.ok(NASA_DATASET_SOURCES.mro_hirise, 'MRO HiRISE must exist');
});

test('2. Scientific Similarity Formula (PRD Section 8)', (t) => {
  const result = calculateAnalogDiscoveries(
    { roughness: 80, aridity: 95, thermal: 90 },
    'permanent_base'
  );

  assert.ok(result.ranked_analogs.length > 0, 'Must return ranked analogs');
  const top = result.ranked_analogs[0];
  assert.ok(top.calculated_similarity > 0 && top.calculated_similarity <= 100, 'Similarity score must be 0-100');
  assert.ok(top.data_coverage >= 0 && top.data_coverage <= 100, 'Data coverage must be 0-100');
  assert.ok(top.data_confidence >= 0 && top.data_confidence <= 100, 'Data confidence must be 0-100');
});

test('3. Visual Photo Matcher (Feature 2)', (t) => {
  const matches = matchVisualAnalogs({ crater: 0.9, roughness: 0.8 });
  assert.ok(matches.top_overall.length > 0, 'Must return top overall visual matches');
  assert.ok(matches.earth_matches.length > 0, 'Must return earth matches');
  assert.ok(matches.moon_matches.length > 0, 'Must return moon matches');
  assert.ok(matches.mars_matches.length > 0, 'Must return mars matches');
});

test('4. 100-Level Game Integrity (Feature 3)', (t) => {
  assert.equal(GAME_LEVELS_100.length, 100, 'Must have exactly 100 levels');
  assert.deepEqual(validateGameCatalog(), [], 'Catalog must pass structural validation');

  const tiers = ['novice', 'explorer', 'specialist', 'commander'];
  for (const tier of tiers) {
    assert.equal(
      GAME_LEVELS_100.filter(l => l.difficulty_id === tier).length,
      25,
      `${tier} must have 25 levels`
    );
  }
});

test('5. Levels are genuinely unique', (t) => {
  const names = new Set(GAME_LEVELS_100.map(l => l.target_name));
  const queries = new Set(GAME_LEVELS_100.map(l => l.image_query));
  assert.equal(names.size, 100, 'All 100 levels must have unique target names');
  assert.equal(queries.size, 100, 'All 100 levels must have unique image queries');

  const types = new Set(GAME_LEVELS_100.map(l => l.target_type));
  assert.deepEqual([...types].sort(), ['earth_analog', 'mars', 'moon']);
});

test('6. Public level payload never leaks the answer', (t) => {
  for (const level of GAME_LEVELS_100) {
    const publicLevel = toPublicLevel(level);
    const serialized = JSON.stringify(publicLevel);
    // `choices` legitimately lists all three options; strip it before scanning
    // for leaked answer fields.
    const withoutChoices = JSON.stringify({ ...publicLevel, choices: undefined });

    assert.equal(publicLevel.target_type, undefined, 'Public payload must not include target_type');
    assert.equal(publicLevel.target_name, undefined, 'Public payload must not include target_name');
    assert.equal(publicLevel.location_context, undefined, 'Public payload must not include location_context');
    assert.equal(publicLevel.scientific_rationale, undefined, 'Public payload must not include the rationale');
    assert.ok(!serialized.includes(level.target_name), 'Target name must not appear anywhere in the payload');
    assert.ok(!withoutChoices.includes(level.target_type), 'Target type must not appear outside the choices list');
    assert.equal(publicLevel.image_url, `/api/game/image/${level.level_number}`);
    assert.deepEqual(publicLevel.choices, ['earth_analog', 'moon', 'mars']);
  }
});

test('7. Guess normalisation and scoring', (t) => {
  const level = GAME_LEVELS_100[0];

  assert.equal(normalizeGuess('Earth'), 'earth_analog');
  assert.equal(normalizeGuess('earth_analog'), 'earth_analog');
  assert.equal(normalizeGuess('moon'), 'moon');
  assert.equal(normalizeGuess('Martian'), 'mars');
  assert.equal(normalizeGuess('venus'), null);

  const correct = scoreGuess(level, 'earth', { cluesUsed: 2, streak: 2 });
  assert.equal(correct.isCorrect, true);
  assert.equal(correct.basePoints, 100);
  assert.equal(correct.cluePenalty, 20, 'only clues beyond the free first one are charged');
  assert.equal(correct.streakMultiplier, 1.4);
  assert.equal(correct.pointsAwarded, 112);

  const freeFirstClue = scoreGuess(level, 'earth', { cluesUsed: 1, streak: 0 });
  assert.equal(freeFirstClue.cluePenalty, 0, 'the first clue must be free');
  assert.equal(freeFirstClue.pointsAwarded, 100);

  const maxClues = scoreGuess(level, 'earth', { cluesUsed: 4, streak: 0 });
  assert.equal(maxClues.cluePenalty, 60);
  assert.equal(maxClues.pointsAwarded, 40);

  const wrong = scoreGuess(level, 'mars');
  assert.equal(wrong.isCorrect, false);
  assert.equal(wrong.pointsAwarded, 0);

  const reveal = toReveal(level);
  assert.equal(reveal.target_name, level.target_name);
  assert.equal(reveal.target_type, level.target_type);
  assert.ok(reveal.scientific_rationale.length > 20);
});

test('8. Ten-level campaign uses all 100 questions once and ramps difficulty', (t) => {
  const campaign = buildCampaign(GAME_LEVELS_100);

  assert.equal(campaign.length, 10, 'Campaign must have exactly 10 levels');

  const used = [];
  for (const level of campaign) {
    assert.equal(level.questions.length, 10, `Level ${level.level_number} must hold 10 questions`);
    assert.ok(level.mix.earth_analog > 0, 'Every level must include an Earth analogue');
    assert.ok(level.mix.moon > 0, 'Every level must include the Moon');
    assert.ok(level.mix.mars > 0, 'Every level must include Mars');
    used.push(...level.questions.map(q => q.level_number));

    for (let i = 2; i < level.questions.length; i += 1) {
      const three = new Set([
        level.questions[i - 2].target_type,
        level.questions[i - 1].target_type,
        level.questions[i].target_type
      ]);
      assert.notEqual(three.size, 1, `Level ${level.level_number} has three identical worlds in a row`);
    }
  }

  assert.equal(new Set(used).size, 100, 'All 100 source questions must be used exactly once');
  assert.equal(used.length, 100, 'No question may be duplicated across the campaign');

  assert.ok(campaign[0].total_points < campaign[9].total_points, 'Level 10 must be worth more than level 1');
  for (let i = 1; i < campaign.length; i += 1) {
    assert.ok(
      campaign[i].total_points >= campaign[i - 1].total_points,
      `Level ${i + 1} must not be easier than level ${i}`
    );
  }
});

test('9. Campaign payload never leaks answers', (t) => {
  const campaign = buildCampaign(GAME_LEVELS_100);
  const serialized = JSON.stringify(campaign.map(level => ({
    ...level,
    questions: level.questions.map(toPublicLevel)
  })));

  assert.ok(!serialized.includes('scientific_rationale'), 'Rationale must not appear before a guess');
  assert.ok(!serialized.includes('target_type'), 'Target type must never appear in the campaign payload');

  for (const level of campaign) {
    for (const question of level.questions) {
      const publicQuestion = toPublicLevel(question);
      const body = JSON.stringify({ ...publicQuestion, choices: undefined });

      assert.equal(publicQuestion.target_type, undefined);
      assert.equal(publicQuestion.target_name, undefined);
      assert.ok(!body.includes(question.target_name), `Level ${question.level_number} leaked its own name`);
      assert.ok(!body.includes(question.scientific_rationale), `Level ${question.level_number} leaked its rationale`);
    }
  }
});
