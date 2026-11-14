/**
 * TerraTwin Image & Visual Analog Matcher
 * Finds visually and morphologically similar images across Earth, Moon, and Mars.
 * Analyzes texture roughness, albedo/brightness, surface morphology patterns, and edge frequency.
 */

import { NASA_PLANETARY_TARGETS, NASA_EARTH_ANALOGS } from './nasaDataCatalog.js';

// Pre-indexed visual profiles of planetary and analog images
const VISUAL_FEATURE_ARCHIVE = [
  ...NASA_EARTH_ANALOGS.map(a => ({
    id: a.id,
    type: 'earth_analog',
    name: a.name,
    body: `Earth (${a.country})`,
    image: a.image,
    morphology: a.morphology,
    features: {
      brightness: a.metrics.aridity > 80 ? 0.65 : 0.45,
      contrast: a.metrics.roughness / 100,
      edge_roughness: a.metrics.relief / 100,
      volcanic_signature: a.metrics.volcanic / 100,
      crater_morphology: a.id.includes('lonar') || a.id.includes('haughton') ? 0.95 : 0.15,
      dune_aeolian: a.id.includes('death_valley') || a.id.includes('atacama') ? 0.85 : 0.20,
      ice_cryo: a.id.includes('mcmurdo') || a.id.includes('haughton') ? 0.92 : 0.05
    },
    scientific_summary: a.scientific_breakdown.why_analog
  })),
  ...NASA_PLANETARY_TARGETS.map(t => ({
    id: t.id,
    type: t.planet.toLowerCase(),
    name: t.name,
    body: t.planet,
    image: t.image,
    morphology: t.description,
    features: {
      brightness: t.planet === 'Moon' ? 0.35 : 0.58,
      contrast: t.criteria_signature.roughness / 100,
      edge_roughness: t.criteria_signature.relief / 100,
      volcanic_signature: t.criteria_signature.volcanic / 100,
      crater_morphology: t.id.includes('crater') || t.id.includes('shackleton') ? 0.95 : 0.25,
      dune_aeolian: t.id.includes('jezero') || t.id.includes('gale') ? 0.75 : 0.10,
      ice_cryo: t.id.includes('south_pole') || t.id.includes('shackleton') ? 0.88 : 0.05
    },
    scientific_summary: t.scientific_targets.join('; ')
  }))
];

/**
 * Given user image metadata (or inferred visual parameters), finds the top matches
 * @param {Object} queryFeatures - { terrain_type, roughness, brightness, volcanic, crater }
 */
export function matchVisualAnalogs(queryFeatures = {}) {
  const qRoughness = queryFeatures.roughness !== undefined ? Number(queryFeatures.roughness) : 0.7;
  const qBrightness = queryFeatures.brightness !== undefined ? Number(queryFeatures.brightness) : 0.5;
  const qCrater = queryFeatures.crater !== undefined ? Number(queryFeatures.crater) : 0.5;
  const qVolcanic = queryFeatures.volcanic !== undefined ? Number(queryFeatures.volcanic) : 0.6;
  const qCryo = queryFeatures.cryo !== undefined ? Number(queryFeatures.cryo) : 0.3;

  const matches = VISUAL_FEATURE_ARCHIVE.map(item => {
    // Euclidean distance in 5D visual feature space
    const dRoughness = Math.pow(item.features.edge_roughness - qRoughness, 2);
    const dBrightness = Math.pow(item.features.brightness - qBrightness, 2);
    const dCrater = Math.pow(item.features.crater_morphology - qCrater, 2);
    const dVolcanic = Math.pow(item.features.volcanic_signature - qVolcanic, 2);
    const dCryo = Math.pow(item.features.ice_cryo - qCryo, 2);

    const distance = Math.sqrt(dRoughness + dBrightness + dCrater + dVolcanic + dCryo);
    // Max theoretical distance in unit cube sqrt(5) ≈ 2.236
    const similarity = Math.max(10, Math.min(99, Math.round((1 - distance / 2.236) * 100)));

    let visualReason = "Morphological surface texture matches basaltic regolith roughness and slope gradient.";
    if (item.features.crater_morphology > 0.7 && qCrater > 0.4) {
      visualReason = "Circular impact basin rim crest and central depression geometry identified.";
    } else if (item.features.volcanic_signature > 0.7 && qVolcanic > 0.4) {
      visualReason = "Dark low-albedo unweathered tholeiitic basalt flow textures and blocky lava field.";
    } else if (item.features.ice_cryo > 0.7 && qCryo > 0.4) {
      visualReason = "Cryogenic polygonal ground ice and high-latitude permafrost indicators.";
    }

    return {
      id: item.id,
      name: item.name,
      body: item.body,
      type: item.type,
      image: item.image,
      match_percentage: similarity,
      visual_features: item.features,
      visual_reason: visualReason,
      scientific_summary: item.scientific_summary
    };
  });

  matches.sort((a, b) => b.match_percentage - a.match_percentage);

  // Return top matches partitioned by planet body for comparative inspection
  return {
    top_overall: matches.slice(0, 6),
    earth_matches: matches.filter(m => m.type === 'earth_analog').slice(0, 3),
    moon_matches: matches.filter(m => m.type === 'moon').slice(0, 3),
    mars_matches: matches.filter(m => m.type === 'mars').slice(0, 3)
  };
}
