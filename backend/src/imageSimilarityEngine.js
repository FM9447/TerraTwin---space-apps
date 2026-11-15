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
    planet: 'Earth',
    image: a.image,
    morphology: a.morphology,
    coordinates: a.coordinates,
    features: {
      brightness: a.metrics.aridity > 80 ? 0.65 : 0.45,
      contrast: a.metrics.roughness / 100,
      edge_roughness: a.metrics.relief / 100,
      volcanic_signature: a.metrics.volcanic / 100,
      crater_morphology: a.id.includes('lonar') || a.id.includes('haughton') ? 0.95 : 0.15,
      dune_aeolian: a.id.includes('death_valley') || a.id.includes('atacama') ? 0.85 : 0.20,
      ice_cryo: a.id.includes('mcmurdo') || a.id.includes('haughton') ? 0.92 : 0.05
    },
    scientific_summary: a.scientific_breakdown?.why_analog || a.description
  })),
  ...NASA_PLANETARY_TARGETS.map(t => ({
    id: t.id,
    type: t.planet.toLowerCase(),
    name: t.name,
    body: t.planet,
    planet: t.planet,
    image: t.image,
    morphology: t.description,
    coordinates: t.coordinates,
    features: {
      brightness: t.planet === 'Moon' ? 0.35 : 0.58,
      contrast: t.criteria_signature.roughness / 100,
      edge_roughness: t.criteria_signature.relief / 100,
      volcanic_signature: t.criteria_signature.volcanic / 100,
      crater_morphology: t.id.includes('crater') || t.id.includes('shackleton') ? 0.95 : 0.25,
      dune_aeolian: t.id.includes('jezero') || t.id.includes('gale') ? 0.75 : 0.10,
      ice_cryo: t.id.includes('south_pole') || t.id.includes('shackleton') ? 0.88 : 0.05
    },
    scientific_summary: t.scientific_targets ? t.scientific_targets.join('; ') : t.description
  })),
  // Additional specialized Martian & Lunar targets for visual comparison
  {
    id: "mars_valles_marineris",
    type: "mars",
    name: "Valles Marineris Chasmata",
    body: "Mars",
    planet: "Mars",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    morphology: "Grand canyon-scale tectonic rift chasma with 8 km steep mass-wasting escarpments and layered sulfate bedrock.",
    coordinates: { lat: -14.0, lon: -59.2 },
    features: { brightness: 0.52, contrast: 0.92, edge_roughness: 0.88, volcanic_signature: 0.60, crater_morphology: 0.35, dune_aeolian: 0.55, ice_cryo: 0.05 },
    scientific_summary: "Deepest stratigraphic cut into Mars crust, revealing aqueous alteration and ancient sediment deposition."
  },
  {
    id: "mars_utopia_planitia",
    type: "mars",
    name: "Utopia Planitia Scalloped Permafrost",
    body: "Mars",
    planet: "Mars",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    morphology: "Polygonal ground, scalloped depressions formed by sublimation of thick subsurface water-ice mantle.",
    coordinates: { lat: 46.7, lon: 117.5 },
    features: { brightness: 0.62, contrast: 0.55, edge_roughness: 0.58, volcanic_signature: 0.20, crater_morphology: 0.30, dune_aeolian: 0.40, ice_cryo: 0.92 },
    scientific_summary: "High-latitude ice-rich permafrost analogue for human in-situ resource utilization (ISRU) water extraction."
  },
  {
    id: "moon_marius_hills",
    type: "moon",
    name: "Marius Hills Lava Tube Skylight",
    body: "Moon",
    planet: "Moon",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    morphology: "Intact subsurface basaltic lava tube with a 65 m diameter vertical collapse pit open to the interior.",
    coordinates: { lat: 14.1, lon: -56.8 },
    features: { brightness: 0.32, contrast: 0.85, edge_roughness: 0.82, volcanic_signature: 0.96, crater_morphology: 0.45, dune_aeolian: 0.02, ice_cryo: 0.02 },
    scientific_summary: "Natural subterranean habitat shielded from galactic cosmic rays, micrometeroids, and diurnal thermal extremes."
  },
  {
    id: "moon_tycho",
    type: "moon",
    name: "Tycho Crater Central Peak & Ejecta",
    body: "Moon",
    planet: "Moon",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    morphology: "85 km prominent Copernican-era impact crater with central peak massif and bright radial ray ejecta blanket.",
    coordinates: { lat: -43.3, lon: -11.2 },
    features: { brightness: 0.48, contrast: 0.95, edge_roughness: 0.94, volcanic_signature: 0.35, crater_morphology: 0.99, dune_aeolian: 0.02, ice_cryo: 0.05 },
    scientific_summary: "Exposes pristine deep lunar crustal material uplifted during catastrophic hypervelocity impact."
  }
];

/**
 * Given user image metadata (or inferred visual parameters), finds the top matches
 * @param {Object} queryFeatures - { terrain_type, roughness, brightness, volcanic, crater, cryo, dune }
 * @param {string} filterBody - 'all' | 'mars' | 'moon' | 'earth_analog'
 */
export function matchVisualAnalogs(queryFeatures = {}, filterBody = 'all') {
  const qRoughness = queryFeatures.roughness !== undefined ? Number(queryFeatures.roughness) : 0.7;
  const qBrightness = queryFeatures.brightness !== undefined ? Number(queryFeatures.brightness) : 0.5;
  const qCrater = queryFeatures.crater !== undefined ? Number(queryFeatures.crater) : 0.5;
  const qVolcanic = queryFeatures.volcanic !== undefined ? Number(queryFeatures.volcanic) : 0.6;
  const qCryo = queryFeatures.cryo !== undefined ? Number(queryFeatures.cryo) : 0.3;
  const qDune = queryFeatures.dune !== undefined ? Number(queryFeatures.dune) : 0.3;

  const matches = VISUAL_FEATURE_ARCHIVE.map(item => {
    // Weighted Euclidean distance in 6D visual feature space
    const dRoughness = Math.pow(item.features.edge_roughness - qRoughness, 2) * 1.2;
    const dBrightness = Math.pow(item.features.brightness - qBrightness, 2) * 0.8;
    const dCrater = Math.pow(item.features.crater_morphology - qCrater, 2) * 1.5;
    const dVolcanic = Math.pow(item.features.volcanic_signature - qVolcanic, 2) * 1.2;
    const dCryo = Math.pow((item.features.ice_cryo || 0.05) - qCryo, 2) * 1.3;
    const dDune = Math.pow((item.features.dune_aeolian || 0.1) - qDune, 2) * 1.1;

    const weightedDist = Math.sqrt(dRoughness + dBrightness + dCrater + dVolcanic + dCryo + dDune);
    // Theoretical max normalized distance ~2.66
    const similarity = Math.max(12, Math.min(99, Math.round((1 - weightedDist / 2.66) * 100)));

    let visualReason = "Morphological surface texture matches basaltic regolith roughness and slope gradient.";
    if (item.features.crater_morphology > 0.7 && qCrater > 0.4) {
      visualReason = "Circular impact basin rim crest and central depression geometry identified.";
    } else if (item.features.volcanic_signature > 0.7 && qVolcanic > 0.4) {
      visualReason = "Dark low-albedo unweathered tholeiitic basalt flow textures and blocky lava field.";
    } else if ((item.features.ice_cryo || 0) > 0.7 && qCryo > 0.4) {
      visualReason = "Cryogenic polygonal ground ice and high-latitude permafrost indicators.";
    } else if ((item.features.dune_aeolian || 0) > 0.7 && qDune > 0.4) {
      visualReason = "Active aeolian transverse dune crests and wind-sorted basaltic sand ripples.";
    }

    return {
      id: item.id,
      name: item.name,
      body: item.body,
      planet: item.planet || item.body,
      type: item.type,
      image: item.image,
      coordinates: item.coordinates,
      morphology: item.morphology,
      match_percentage: similarity,
      visual_features: item.features,
      visual_reason: visualReason,
      scientific_summary: item.scientific_summary
    };
  });

  matches.sort((a, b) => b.match_percentage - a.match_percentage);

  const earthMatches = matches.filter(m => m.type === 'earth_analog');
  const moonMatches = matches.filter(m => m.type === 'moon');
  const marsMatches = matches.filter(m => m.type === 'mars');

  let selectedMatches = matches;
  if (filterBody === 'mars') {
    selectedMatches = marsMatches;
  } else if (filterBody === 'moon') {
    selectedMatches = moonMatches;
  } else if (filterBody === 'earth_analog' || filterBody === 'earth') {
    selectedMatches = earthMatches;
  }

  return {
    filter_body: filterBody,
    selected_matches: selectedMatches.slice(0, 6),
    top_overall: matches.slice(0, 6),
    earth_matches: earthMatches.slice(0, 4),
    moon_matches: moonMatches.slice(0, 4),
    mars_matches: marsMatches.slice(0, 4)
  };
}
