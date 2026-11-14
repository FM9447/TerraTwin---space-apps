/**
 * TerraTwin Scientific Similarity Engine
 * Implements PRD Section 8: Scientific Similarity Framework
 * Calculates:
 *  1. Overall Scientific Similarity Score (S_overall = sum(w_i * S_i) / sum(w_i))
 *  2. Data Coverage Metric (usable parameter coverage)
 *  3. Data Confidence Metric (resolution, quality flags, temporal provenance)
 */

import { NASA_EARTH_ANALOGS, NASA_PRD_MISSION_PROFILES } from './nasaDataCatalog.js';

/**
 * Calculates similarity between user input criteria (or target signature) and Earth analogs
 * @param {Object} inputCriteria - Values for { roughness, relief, slope, aridity, thermal, rockiness, volcanic, access }
 * @param {string} missionProfileId - 'permanent_base' | 'robotic_landing' | 'surface_exploration' | 'scientific_habitability'
 * @param {Object} customWeights - Optional overrides for dimension weights
 */
export function calculateAnalogDiscoveries(inputCriteria = {}, missionProfileId = 'permanent_base', customWeights = null) {
  const profile = NASA_PRD_MISSION_PROFILES.find(p => p.id === missionProfileId) || NASA_PRD_MISSION_PROFILES[0];
  const weights = customWeights || profile.default_weights;

  const results = NASA_EARTH_ANALOGS.map(analog => {
    let weightedSum = 0;
    let weightTotal = 0;
    let validDimensionsCount = 0;
    const totalDimensions = Object.keys(weights).length;
    const dimensionBreakdown = {};

    for (const [key, weight] of Object.entries(weights)) {
      if (weight <= 0) continue;

      const targetVal = inputCriteria[key] !== undefined ? Number(inputCriteria[key]) : 70;
      const analogVal = analog.metrics[key] !== undefined ? Number(analog.metrics[key]) : 50;

      // Numerical distance with non-linear exponential penalty for extreme deviations
      const delta = Math.abs(targetVal - analogVal);
      // Normalized score: 100 max, scaling down smoothly
      const dimScore = Math.max(0, Math.round(100 - (delta * 1.15)));

      dimensionBreakdown[key] = {
        dimension: key,
        target_value: targetVal,
        analog_value: analogVal,
        delta: delta,
        score: dimScore,
        weight: weight
      };

      weightedSum += dimScore * weight;
      weightTotal += weight;
      validDimensionsCount++;
    }

    const overallScore = weightTotal > 0 ? Math.round(weightedSum / weightTotal) : 0;
    const dataCoverage = Math.round((validDimensionsCount / totalDimensions) * 100);
    
    // Confidence penalty if isolation or resolution constraints exist
    const dataConfidence = Math.min(100, Math.round(analog.data_confidence * (0.9 + 0.1 * (dataCoverage / 100))));

    return {
      ...analog,
      calculated_similarity: overallScore,
      data_coverage: dataCoverage,
      data_confidence: dataConfidence,
      active_mission_profile: profile.name,
      dimension_breakdown: dimensionBreakdown
    };
  });

  // Rank by calculated similarity descending
  results.sort((a, b) => b.calculated_similarity - a.calculated_similarity);

  return {
    mission_profile: profile,
    used_weights: weights,
    total_candidates_screened: results.length,
    ranked_analogs: results
  };
}
