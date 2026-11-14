import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAnalogDiscoveries } from '../src/similarityEngine.js';
import { matchVisualAnalogs } from '../src/imageSimilarityEngine.js';
import { GAME_LEVELS_100 } from '../src/gameLevelsData.js';
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

  const novice = GAME_LEVELS_100.filter(l => l.difficulty_id === 'novice');
  const explorer = GAME_LEVELS_100.filter(l => l.difficulty_id === 'explorer');
  const specialist = GAME_LEVELS_100.filter(l => l.difficulty_id === 'specialist');
  const commander = GAME_LEVELS_100.filter(l => l.difficulty_id === 'commander');

  assert.equal(novice.length, 25, 'Novice must have 25 levels');
  assert.equal(explorer.length, 25, 'Explorer must have 25 levels');
  assert.equal(specialist.length, 25, 'Specialist must have 25 levels');
  assert.equal(commander.length, 25, 'Commander must have 25 levels');
});
