/**
 * 100 Progressive Scientific Game Levels
 * Cosmic Analog Detective / Blind Spectral Arena
 * Categorized into 4 Difficulty Tiers with Black & White Imagery & Telemetry Clues
 */

export const GAME_LEVELS_100 = [
  {
    "level_number": 1,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-001 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 8)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 2,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-002 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 15)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 3,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-003 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 22)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 4,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-004 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 29)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 5,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-005 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 7)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 6,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-006 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 14)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 7,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-007 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 21)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 8,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-008 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 28)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 9,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-009 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 6)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 10,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-010 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 13)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  },
  {
    "level_number": 11,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-011 [NIR 1.2m/px]",
    "target_type": "moon",
    "target_name": "Marius Hills Lava Tube Skylight (Sector 20)",
    "location_context": "Oceanus Procellarum (14.2\u00b0N, 303.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & SELENE/Kaguya",
      "mineralogy": "Subsurface volcanic void roof collapse into basaltic conduit.",
      "terrain_metrics": "Slope: 85\u00b0 vertical pit walls | Depth: 80m",
      "thermal_environment": "Thermally buffered subterranean interior (~ -20\u00b0C constant)."
    },
    "scientific_rationale": "Steep vertical collapse pit without talus ramp; prime candidate for lunar subsurface base."
  },
  {
    "level_number": 12,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-012 [TIR 60m/px]",
    "target_type": "moon",
    "target_name": "Tycho Crater Central Peak & Rays (Sector 27)",
    "location_context": "Southern Lunar Highlands (-43.3\u00b0S, 11.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & Diviner",
      "mineralogy": "Fresh impact shock melt rock and high-albedo ejecta ray system.",
      "terrain_metrics": "Slope: 34.0\u00b0 | TRI: 14.8m",
      "thermal_environment": "Extreme thermal contrast during lunar eclipse."
    },
    "scientific_rationale": "Pristine central uplift peak created by hypervelocity rebound ~108 million years ago."
  },
  {
    "level_number": 13,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-013 [SWIR 30m/px]",
    "target_type": "moon",
    "target_name": "Aristarchus Plateau Pyroclastic Vent (Sector 5)",
    "location_context": "Oceanus Procellarum (23.7\u00b0N, 47.4\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Chandrayaan-1 M3",
      "mineralogy": "Volcanic glass beads and orange pyroclastic ash deposits.",
      "terrain_metrics": "Slope: 18.0\u00b0 | TRI: 7.2m",
      "thermal_environment": "High radon and alpha-particle outgassing signature."
    },
    "scientific_rationale": "Explosive volcanic venting on the Moon; sinuous rille (Vallis Schr\u00f6teri) carved by thermal lava erosion."
  },
  {
    "level_number": 14,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-014 [SAR C-Band]",
    "target_type": "mars",
    "target_name": "Jezero Crater Western Fan Delta (Sector 12)",
    "location_context": "Syrtis Major Quadrangle (18.38\u00b0N, 77.58\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MRO HiRISE & CRISM",
      "mineralogy": "Layered smectite clays, carbonates, and boulder conglomerates.",
      "terrain_metrics": "Slope: 8.2\u00b0 | TRI: 4.8m",
      "thermal_environment": "Atmospheric pressure 0.61 kPa, diurnal temp -85\u00b0C to 0\u00b0C."
    },
    "scientific_rationale": "Curving inverted river channels and deltaic foreset beds formed in an ancient open-basin crater lake."
  },
  {
    "level_number": 15,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-015 [PAN 0.5m/px]",
    "target_type": "mars",
    "target_name": "Olympus Mons Basal Scarp & Aureole (Sector 19)",
    "location_context": "Tharsis Rise (18.65\u00b0N, 226.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO HiRISE",
      "mineralogy": "Tholeiitic basalt shield with massive 8km vertical collapse cliff.",
      "terrain_metrics": "Slope: 32.0\u00b0 on scarp, 3.5\u00b0 on shield flanks",
      "thermal_environment": "Near-vacuum summit atmospheric pressure (~0.05 kPa)."
    },
    "scientific_rationale": "Gigantic volcanic construct dwarfing Everest; enormous landslides and flank collapse debris aprons."
  },
  {
    "level_number": 16,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-016 [NIR 1.2m/px]",
    "target_type": "mars",
    "target_name": "Gale Crater Bagnold Dune Field (Sector 26)",
    "location_context": "Aeolis Quadrangle (-5.37\u00b0S, 137.44\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MSL Curiosity Mastcam & HiRISE",
      "mineralogy": "Active basaltic and olivine dark sand ripples and barchan dunes.",
      "terrain_metrics": "Slope: 26.0\u00b0 slip face | TRI: 5.1m",
      "thermal_environment": "Diurnal atmospheric wind cycles and active grain saltation."
    },
    "scientific_rationale": "First in-situ exploration of extraterrestrial active sand dunes; lack of liquid water cementation."
  },
  {
    "level_number": 17,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-017 [TIR 60m/px]",
    "target_type": "mars",
    "target_name": "Valles Marineris Chasma Wall Strata (Sector 4)",
    "location_context": "Coprates Quadrangle (-13.9\u00b0S, 59.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CRISM",
      "mineralogy": "Multi-kilometer layered volcanic and sulfate strata cliff bands.",
      "terrain_metrics": "Slope: 42.0\u00b0 | Relief: 7,000m",
      "thermal_environment": "Fog and water-ice haze trapped in valley bottoms at sunrise."
    },
    "scientific_rationale": "Tectonic rift system stretching 4,000 km; massive wall rock avalanches and hydrated sulfate beds."
  },
  {
    "level_number": 18,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-018 [SWIR 30m/px]",
    "target_type": "mars",
    "target_name": "Korolev Crater Water-Ice Glacier (Sector 11)",
    "location_context": "Northern Lowlands (73.0\u00b0N, 165.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CTX",
      "mineralogy": "Permanent 1.8-km thick circular dome of pure water ice.",
      "terrain_metrics": "Slope: 5.5\u00b0 | TRI: 2.4m",
      "thermal_environment": "Cold-trap microclimate preventing ice sublimation year-round."
    },
    "scientific_rationale": "81-km wide impact crater acting as an atmospheric cold-trap; massive water reservoir on Mars."
  },
  {
    "level_number": 19,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-019 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 18)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 20,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-020 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 25)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 21,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-021 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 3)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 22,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-022 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 10)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 23,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-023 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 17)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 24,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-024 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 24)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 25,
    "difficulty": "Novice",
    "difficulty_id": "novice",
    "frame_code": "LVL-025 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 2)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 26,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-026 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 9)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 27,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-027 [TIR 60m/px]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 16)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 28,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-028 [SWIR 30m/px]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 23)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  },
  {
    "level_number": 29,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-029 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Marius Hills Lava Tube Skylight (Sector 1)",
    "location_context": "Oceanus Procellarum (14.2\u00b0N, 303.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & SELENE/Kaguya",
      "mineralogy": "Subsurface volcanic void roof collapse into basaltic conduit.",
      "terrain_metrics": "Slope: 85\u00b0 vertical pit walls | Depth: 80m",
      "thermal_environment": "Thermally buffered subterranean interior (~ -20\u00b0C constant)."
    },
    "scientific_rationale": "Steep vertical collapse pit without talus ramp; prime candidate for lunar subsurface base."
  },
  {
    "level_number": 30,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-030 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Tycho Crater Central Peak & Rays (Sector 8)",
    "location_context": "Southern Lunar Highlands (-43.3\u00b0S, 11.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & Diviner",
      "mineralogy": "Fresh impact shock melt rock and high-albedo ejecta ray system.",
      "terrain_metrics": "Slope: 34.0\u00b0 | TRI: 14.8m",
      "thermal_environment": "Extreme thermal contrast during lunar eclipse."
    },
    "scientific_rationale": "Pristine central uplift peak created by hypervelocity rebound ~108 million years ago."
  },
  {
    "level_number": 31,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-031 [NIR 1.2m/px]",
    "target_type": "moon",
    "target_name": "Aristarchus Plateau Pyroclastic Vent (Sector 15)",
    "location_context": "Oceanus Procellarum (23.7\u00b0N, 47.4\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Chandrayaan-1 M3",
      "mineralogy": "Volcanic glass beads and orange pyroclastic ash deposits.",
      "terrain_metrics": "Slope: 18.0\u00b0 | TRI: 7.2m",
      "thermal_environment": "High radon and alpha-particle outgassing signature."
    },
    "scientific_rationale": "Explosive volcanic venting on the Moon; sinuous rille (Vallis Schr\u00f6teri) carved by thermal lava erosion."
  },
  {
    "level_number": 32,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-032 [TIR 60m/px]",
    "target_type": "mars",
    "target_name": "Jezero Crater Western Fan Delta (Sector 22)",
    "location_context": "Syrtis Major Quadrangle (18.38\u00b0N, 77.58\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MRO HiRISE & CRISM",
      "mineralogy": "Layered smectite clays, carbonates, and boulder conglomerates.",
      "terrain_metrics": "Slope: 8.2\u00b0 | TRI: 4.8m",
      "thermal_environment": "Atmospheric pressure 0.61 kPa, diurnal temp -85\u00b0C to 0\u00b0C."
    },
    "scientific_rationale": "Curving inverted river channels and deltaic foreset beds formed in an ancient open-basin crater lake."
  },
  {
    "level_number": 33,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-033 [SWIR 30m/px]",
    "target_type": "mars",
    "target_name": "Olympus Mons Basal Scarp & Aureole (Sector 29)",
    "location_context": "Tharsis Rise (18.65\u00b0N, 226.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO HiRISE",
      "mineralogy": "Tholeiitic basalt shield with massive 8km vertical collapse cliff.",
      "terrain_metrics": "Slope: 32.0\u00b0 on scarp, 3.5\u00b0 on shield flanks",
      "thermal_environment": "Near-vacuum summit atmospheric pressure (~0.05 kPa)."
    },
    "scientific_rationale": "Gigantic volcanic construct dwarfing Everest; enormous landslides and flank collapse debris aprons."
  },
  {
    "level_number": 34,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-034 [SAR C-Band]",
    "target_type": "mars",
    "target_name": "Gale Crater Bagnold Dune Field (Sector 7)",
    "location_context": "Aeolis Quadrangle (-5.37\u00b0S, 137.44\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MSL Curiosity Mastcam & HiRISE",
      "mineralogy": "Active basaltic and olivine dark sand ripples and barchan dunes.",
      "terrain_metrics": "Slope: 26.0\u00b0 slip face | TRI: 5.1m",
      "thermal_environment": "Diurnal atmospheric wind cycles and active grain saltation."
    },
    "scientific_rationale": "First in-situ exploration of extraterrestrial active sand dunes; lack of liquid water cementation."
  },
  {
    "level_number": 35,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-035 [PAN 0.5m/px]",
    "target_type": "mars",
    "target_name": "Valles Marineris Chasma Wall Strata (Sector 14)",
    "location_context": "Coprates Quadrangle (-13.9\u00b0S, 59.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CRISM",
      "mineralogy": "Multi-kilometer layered volcanic and sulfate strata cliff bands.",
      "terrain_metrics": "Slope: 42.0\u00b0 | Relief: 7,000m",
      "thermal_environment": "Fog and water-ice haze trapped in valley bottoms at sunrise."
    },
    "scientific_rationale": "Tectonic rift system stretching 4,000 km; massive wall rock avalanches and hydrated sulfate beds."
  },
  {
    "level_number": 36,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-036 [NIR 1.2m/px]",
    "target_type": "mars",
    "target_name": "Korolev Crater Water-Ice Glacier (Sector 21)",
    "location_context": "Northern Lowlands (73.0\u00b0N, 165.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CTX",
      "mineralogy": "Permanent 1.8-km thick circular dome of pure water ice.",
      "terrain_metrics": "Slope: 5.5\u00b0 | TRI: 2.4m",
      "thermal_environment": "Cold-trap microclimate preventing ice sublimation year-round."
    },
    "scientific_rationale": "81-km wide impact crater acting as an atmospheric cold-trap; massive water reservoir on Mars."
  },
  {
    "level_number": 37,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-037 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 28)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 38,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-038 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 6)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 39,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-039 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 13)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 40,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-040 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 20)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 41,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-041 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 27)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 42,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-042 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 5)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 43,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-043 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 12)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 44,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-044 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 19)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 45,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-045 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 26)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 46,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-046 [NIR 1.2m/px]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 4)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  },
  {
    "level_number": 47,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-047 [TIR 60m/px]",
    "target_type": "moon",
    "target_name": "Marius Hills Lava Tube Skylight (Sector 11)",
    "location_context": "Oceanus Procellarum (14.2\u00b0N, 303.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & SELENE/Kaguya",
      "mineralogy": "Subsurface volcanic void roof collapse into basaltic conduit.",
      "terrain_metrics": "Slope: 85\u00b0 vertical pit walls | Depth: 80m",
      "thermal_environment": "Thermally buffered subterranean interior (~ -20\u00b0C constant)."
    },
    "scientific_rationale": "Steep vertical collapse pit without talus ramp; prime candidate for lunar subsurface base."
  },
  {
    "level_number": 48,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-048 [SWIR 30m/px]",
    "target_type": "moon",
    "target_name": "Tycho Crater Central Peak & Rays (Sector 18)",
    "location_context": "Southern Lunar Highlands (-43.3\u00b0S, 11.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & Diviner",
      "mineralogy": "Fresh impact shock melt rock and high-albedo ejecta ray system.",
      "terrain_metrics": "Slope: 34.0\u00b0 | TRI: 14.8m",
      "thermal_environment": "Extreme thermal contrast during lunar eclipse."
    },
    "scientific_rationale": "Pristine central uplift peak created by hypervelocity rebound ~108 million years ago."
  },
  {
    "level_number": 49,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-049 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Aristarchus Plateau Pyroclastic Vent (Sector 25)",
    "location_context": "Oceanus Procellarum (23.7\u00b0N, 47.4\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Chandrayaan-1 M3",
      "mineralogy": "Volcanic glass beads and orange pyroclastic ash deposits.",
      "terrain_metrics": "Slope: 18.0\u00b0 | TRI: 7.2m",
      "thermal_environment": "High radon and alpha-particle outgassing signature."
    },
    "scientific_rationale": "Explosive volcanic venting on the Moon; sinuous rille (Vallis Schr\u00f6teri) carved by thermal lava erosion."
  },
  {
    "level_number": 50,
    "difficulty": "Explorer",
    "difficulty_id": "explorer",
    "frame_code": "LVL-050 [PAN 0.5m/px]",
    "target_type": "mars",
    "target_name": "Jezero Crater Western Fan Delta (Sector 3)",
    "location_context": "Syrtis Major Quadrangle (18.38\u00b0N, 77.58\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MRO HiRISE & CRISM",
      "mineralogy": "Layered smectite clays, carbonates, and boulder conglomerates.",
      "terrain_metrics": "Slope: 8.2\u00b0 | TRI: 4.8m",
      "thermal_environment": "Atmospheric pressure 0.61 kPa, diurnal temp -85\u00b0C to 0\u00b0C."
    },
    "scientific_rationale": "Curving inverted river channels and deltaic foreset beds formed in an ancient open-basin crater lake."
  },
  {
    "level_number": 51,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-051 [NIR 1.2m/px]",
    "target_type": "mars",
    "target_name": "Olympus Mons Basal Scarp & Aureole (Sector 10)",
    "location_context": "Tharsis Rise (18.65\u00b0N, 226.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO HiRISE",
      "mineralogy": "Tholeiitic basalt shield with massive 8km vertical collapse cliff.",
      "terrain_metrics": "Slope: 32.0\u00b0 on scarp, 3.5\u00b0 on shield flanks",
      "thermal_environment": "Near-vacuum summit atmospheric pressure (~0.05 kPa)."
    },
    "scientific_rationale": "Gigantic volcanic construct dwarfing Everest; enormous landslides and flank collapse debris aprons."
  },
  {
    "level_number": 52,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-052 [TIR 60m/px]",
    "target_type": "mars",
    "target_name": "Gale Crater Bagnold Dune Field (Sector 17)",
    "location_context": "Aeolis Quadrangle (-5.37\u00b0S, 137.44\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MSL Curiosity Mastcam & HiRISE",
      "mineralogy": "Active basaltic and olivine dark sand ripples and barchan dunes.",
      "terrain_metrics": "Slope: 26.0\u00b0 slip face | TRI: 5.1m",
      "thermal_environment": "Diurnal atmospheric wind cycles and active grain saltation."
    },
    "scientific_rationale": "First in-situ exploration of extraterrestrial active sand dunes; lack of liquid water cementation."
  },
  {
    "level_number": 53,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-053 [SWIR 30m/px]",
    "target_type": "mars",
    "target_name": "Valles Marineris Chasma Wall Strata (Sector 24)",
    "location_context": "Coprates Quadrangle (-13.9\u00b0S, 59.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CRISM",
      "mineralogy": "Multi-kilometer layered volcanic and sulfate strata cliff bands.",
      "terrain_metrics": "Slope: 42.0\u00b0 | Relief: 7,000m",
      "thermal_environment": "Fog and water-ice haze trapped in valley bottoms at sunrise."
    },
    "scientific_rationale": "Tectonic rift system stretching 4,000 km; massive wall rock avalanches and hydrated sulfate beds."
  },
  {
    "level_number": 54,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-054 [SAR C-Band]",
    "target_type": "mars",
    "target_name": "Korolev Crater Water-Ice Glacier (Sector 2)",
    "location_context": "Northern Lowlands (73.0\u00b0N, 165.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CTX",
      "mineralogy": "Permanent 1.8-km thick circular dome of pure water ice.",
      "terrain_metrics": "Slope: 5.5\u00b0 | TRI: 2.4m",
      "thermal_environment": "Cold-trap microclimate preventing ice sublimation year-round."
    },
    "scientific_rationale": "81-km wide impact crater acting as an atmospheric cold-trap; massive water reservoir on Mars."
  },
  {
    "level_number": 55,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-055 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 9)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 56,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-056 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 16)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 57,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-057 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 23)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 58,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-058 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 1)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 59,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-059 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 8)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 60,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-060 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 15)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 61,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-061 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 22)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 62,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-062 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 29)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 63,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-063 [SWIR 30m/px]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 7)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 64,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-064 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 14)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  },
  {
    "level_number": 65,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-065 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Marius Hills Lava Tube Skylight (Sector 21)",
    "location_context": "Oceanus Procellarum (14.2\u00b0N, 303.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & SELENE/Kaguya",
      "mineralogy": "Subsurface volcanic void roof collapse into basaltic conduit.",
      "terrain_metrics": "Slope: 85\u00b0 vertical pit walls | Depth: 80m",
      "thermal_environment": "Thermally buffered subterranean interior (~ -20\u00b0C constant)."
    },
    "scientific_rationale": "Steep vertical collapse pit without talus ramp; prime candidate for lunar subsurface base."
  },
  {
    "level_number": 66,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-066 [NIR 1.2m/px]",
    "target_type": "moon",
    "target_name": "Tycho Crater Central Peak & Rays (Sector 28)",
    "location_context": "Southern Lunar Highlands (-43.3\u00b0S, 11.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & Diviner",
      "mineralogy": "Fresh impact shock melt rock and high-albedo ejecta ray system.",
      "terrain_metrics": "Slope: 34.0\u00b0 | TRI: 14.8m",
      "thermal_environment": "Extreme thermal contrast during lunar eclipse."
    },
    "scientific_rationale": "Pristine central uplift peak created by hypervelocity rebound ~108 million years ago."
  },
  {
    "level_number": 67,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-067 [TIR 60m/px]",
    "target_type": "moon",
    "target_name": "Aristarchus Plateau Pyroclastic Vent (Sector 6)",
    "location_context": "Oceanus Procellarum (23.7\u00b0N, 47.4\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Chandrayaan-1 M3",
      "mineralogy": "Volcanic glass beads and orange pyroclastic ash deposits.",
      "terrain_metrics": "Slope: 18.0\u00b0 | TRI: 7.2m",
      "thermal_environment": "High radon and alpha-particle outgassing signature."
    },
    "scientific_rationale": "Explosive volcanic venting on the Moon; sinuous rille (Vallis Schr\u00f6teri) carved by thermal lava erosion."
  },
  {
    "level_number": 68,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-068 [SWIR 30m/px]",
    "target_type": "mars",
    "target_name": "Jezero Crater Western Fan Delta (Sector 13)",
    "location_context": "Syrtis Major Quadrangle (18.38\u00b0N, 77.58\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MRO HiRISE & CRISM",
      "mineralogy": "Layered smectite clays, carbonates, and boulder conglomerates.",
      "terrain_metrics": "Slope: 8.2\u00b0 | TRI: 4.8m",
      "thermal_environment": "Atmospheric pressure 0.61 kPa, diurnal temp -85\u00b0C to 0\u00b0C."
    },
    "scientific_rationale": "Curving inverted river channels and deltaic foreset beds formed in an ancient open-basin crater lake."
  },
  {
    "level_number": 69,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-069 [SAR C-Band]",
    "target_type": "mars",
    "target_name": "Olympus Mons Basal Scarp & Aureole (Sector 20)",
    "location_context": "Tharsis Rise (18.65\u00b0N, 226.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO HiRISE",
      "mineralogy": "Tholeiitic basalt shield with massive 8km vertical collapse cliff.",
      "terrain_metrics": "Slope: 32.0\u00b0 on scarp, 3.5\u00b0 on shield flanks",
      "thermal_environment": "Near-vacuum summit atmospheric pressure (~0.05 kPa)."
    },
    "scientific_rationale": "Gigantic volcanic construct dwarfing Everest; enormous landslides and flank collapse debris aprons."
  },
  {
    "level_number": 70,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-070 [PAN 0.5m/px]",
    "target_type": "mars",
    "target_name": "Gale Crater Bagnold Dune Field (Sector 27)",
    "location_context": "Aeolis Quadrangle (-5.37\u00b0S, 137.44\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MSL Curiosity Mastcam & HiRISE",
      "mineralogy": "Active basaltic and olivine dark sand ripples and barchan dunes.",
      "terrain_metrics": "Slope: 26.0\u00b0 slip face | TRI: 5.1m",
      "thermal_environment": "Diurnal atmospheric wind cycles and active grain saltation."
    },
    "scientific_rationale": "First in-situ exploration of extraterrestrial active sand dunes; lack of liquid water cementation."
  },
  {
    "level_number": 71,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-071 [NIR 1.2m/px]",
    "target_type": "mars",
    "target_name": "Valles Marineris Chasma Wall Strata (Sector 5)",
    "location_context": "Coprates Quadrangle (-13.9\u00b0S, 59.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CRISM",
      "mineralogy": "Multi-kilometer layered volcanic and sulfate strata cliff bands.",
      "terrain_metrics": "Slope: 42.0\u00b0 | Relief: 7,000m",
      "thermal_environment": "Fog and water-ice haze trapped in valley bottoms at sunrise."
    },
    "scientific_rationale": "Tectonic rift system stretching 4,000 km; massive wall rock avalanches and hydrated sulfate beds."
  },
  {
    "level_number": 72,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-072 [TIR 60m/px]",
    "target_type": "mars",
    "target_name": "Korolev Crater Water-Ice Glacier (Sector 12)",
    "location_context": "Northern Lowlands (73.0\u00b0N, 165.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CTX",
      "mineralogy": "Permanent 1.8-km thick circular dome of pure water ice.",
      "terrain_metrics": "Slope: 5.5\u00b0 | TRI: 2.4m",
      "thermal_environment": "Cold-trap microclimate preventing ice sublimation year-round."
    },
    "scientific_rationale": "81-km wide impact crater acting as an atmospheric cold-trap; massive water reservoir on Mars."
  },
  {
    "level_number": 73,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-073 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 19)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 74,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-074 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 26)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 75,
    "difficulty": "Specialist",
    "difficulty_id": "specialist",
    "frame_code": "LVL-075 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 4)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 76,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-076 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 11)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 77,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-077 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 18)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 78,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-078 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 25)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 79,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-079 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 3)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 80,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-080 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 10)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 81,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-081 [NIR 1.2m/px]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 17)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 82,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-082 [TIR 60m/px]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 24)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  },
  {
    "level_number": 83,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-083 [SWIR 30m/px]",
    "target_type": "moon",
    "target_name": "Marius Hills Lava Tube Skylight (Sector 2)",
    "location_context": "Oceanus Procellarum (14.2\u00b0N, 303.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & SELENE/Kaguya",
      "mineralogy": "Subsurface volcanic void roof collapse into basaltic conduit.",
      "terrain_metrics": "Slope: 85\u00b0 vertical pit walls | Depth: 80m",
      "thermal_environment": "Thermally buffered subterranean interior (~ -20\u00b0C constant)."
    },
    "scientific_rationale": "Steep vertical collapse pit without talus ramp; prime candidate for lunar subsurface base."
  },
  {
    "level_number": 84,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-084 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Tycho Crater Central Peak & Rays (Sector 9)",
    "location_context": "Southern Lunar Highlands (-43.3\u00b0S, 11.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & Diviner",
      "mineralogy": "Fresh impact shock melt rock and high-albedo ejecta ray system.",
      "terrain_metrics": "Slope: 34.0\u00b0 | TRI: 14.8m",
      "thermal_environment": "Extreme thermal contrast during lunar eclipse."
    },
    "scientific_rationale": "Pristine central uplift peak created by hypervelocity rebound ~108 million years ago."
  },
  {
    "level_number": 85,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-085 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Aristarchus Plateau Pyroclastic Vent (Sector 16)",
    "location_context": "Oceanus Procellarum (23.7\u00b0N, 47.4\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Chandrayaan-1 M3",
      "mineralogy": "Volcanic glass beads and orange pyroclastic ash deposits.",
      "terrain_metrics": "Slope: 18.0\u00b0 | TRI: 7.2m",
      "thermal_environment": "High radon and alpha-particle outgassing signature."
    },
    "scientific_rationale": "Explosive volcanic venting on the Moon; sinuous rille (Vallis Schr\u00f6teri) carved by thermal lava erosion."
  },
  {
    "level_number": 86,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-086 [NIR 1.2m/px]",
    "target_type": "mars",
    "target_name": "Jezero Crater Western Fan Delta (Sector 23)",
    "location_context": "Syrtis Major Quadrangle (18.38\u00b0N, 77.58\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MRO HiRISE & CRISM",
      "mineralogy": "Layered smectite clays, carbonates, and boulder conglomerates.",
      "terrain_metrics": "Slope: 8.2\u00b0 | TRI: 4.8m",
      "thermal_environment": "Atmospheric pressure 0.61 kPa, diurnal temp -85\u00b0C to 0\u00b0C."
    },
    "scientific_rationale": "Curving inverted river channels and deltaic foreset beds formed in an ancient open-basin crater lake."
  },
  {
    "level_number": 87,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-087 [TIR 60m/px]",
    "target_type": "mars",
    "target_name": "Olympus Mons Basal Scarp & Aureole (Sector 1)",
    "location_context": "Tharsis Rise (18.65\u00b0N, 226.2\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO HiRISE",
      "mineralogy": "Tholeiitic basalt shield with massive 8km vertical collapse cliff.",
      "terrain_metrics": "Slope: 32.0\u00b0 on scarp, 3.5\u00b0 on shield flanks",
      "thermal_environment": "Near-vacuum summit atmospheric pressure (~0.05 kPa)."
    },
    "scientific_rationale": "Gigantic volcanic construct dwarfing Everest; enormous landslides and flank collapse debris aprons."
  },
  {
    "level_number": 88,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-088 [SWIR 30m/px]",
    "target_type": "mars",
    "target_name": "Gale Crater Bagnold Dune Field (Sector 8)",
    "location_context": "Aeolis Quadrangle (-5.37\u00b0S, 137.44\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MSL Curiosity Mastcam & HiRISE",
      "mineralogy": "Active basaltic and olivine dark sand ripples and barchan dunes.",
      "terrain_metrics": "Slope: 26.0\u00b0 slip face | TRI: 5.1m",
      "thermal_environment": "Diurnal atmospheric wind cycles and active grain saltation."
    },
    "scientific_rationale": "First in-situ exploration of extraterrestrial active sand dunes; lack of liquid water cementation."
  },
  {
    "level_number": 89,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-089 [SAR C-Band]",
    "target_type": "mars",
    "target_name": "Valles Marineris Chasma Wall Strata (Sector 15)",
    "location_context": "Coprates Quadrangle (-13.9\u00b0S, 59.2\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CRISM",
      "mineralogy": "Multi-kilometer layered volcanic and sulfate strata cliff bands.",
      "terrain_metrics": "Slope: 42.0\u00b0 | Relief: 7,000m",
      "thermal_environment": "Fog and water-ice haze trapped in valley bottoms at sunrise."
    },
    "scientific_rationale": "Tectonic rift system stretching 4,000 km; massive wall rock avalanches and hydrated sulfate beds."
  },
  {
    "level_number": 90,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-090 [PAN 0.5m/px]",
    "target_type": "mars",
    "target_name": "Korolev Crater Water-Ice Glacier (Sector 22)",
    "location_context": "Northern Lowlands (73.0\u00b0N, 165.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MGS MOLA & MRO CTX",
      "mineralogy": "Permanent 1.8-km thick circular dome of pure water ice.",
      "terrain_metrics": "Slope: 5.5\u00b0 | TRI: 2.4m",
      "thermal_environment": "Cold-trap microclimate preventing ice sublimation year-round."
    },
    "scientific_rationale": "81-km wide impact crater acting as an atmospheric cold-trap; massive water reservoir on Mars."
  },
  {
    "level_number": 91,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-091 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Lonar Basalt Impact Crater (Sector 29)",
    "location_context": "Maharashtra, India (19.97\u00b0N, 76.51\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & Landsat OLI",
      "mineralogy": "Shock-metamorphosed plagioclase (maskelynite) in Deccan flood basalts.",
      "terrain_metrics": "Slope: 22.4\u00b0 | TRI: 8.2m",
      "thermal_environment": "Subtropical monsoonal, seasonal alkaline lake."
    },
    "scientific_rationale": "Only hypervelocity basalt impact on Earth; mirrors Martian shergottite shock petrology."
  },
  {
    "level_number": 92,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-092 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "University Valley, McMurdo Dry Valleys (Sector 7)",
    "location_context": "Victoria Land, Antarctica (-77.85\u00b0S, 160.75\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS & ASTER GED",
      "mineralogy": "Dry frozen permafrost devoid of liquid water film.",
      "terrain_metrics": "Slope: 16.8\u00b0 | TRI: 6.4m",
      "thermal_environment": "-55\u00b0C winter, zero snowfall, hyper-arid katabatic winds."
    },
    "scientific_rationale": "Coldest, driest polar desert on Earth; direct environmental proxy for Lunar South Pole and Martian polar caps."
  },
  {
    "level_number": 93,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-093 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Yungay Hyper-Arid Core, Atacama (Sector 14)",
    "location_context": "Antofagasta, Chile (-24.08\u00b0S, -70.02\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA GPM IMERG & ASTER",
      "mineralogy": "Perchlorate, nitrate, and gypsum rich evaporite regolith.",
      "terrain_metrics": "Slope: 8.5\u00b0 | TRI: 3.2m",
      "thermal_environment": "Mean precipitation <1 mm/yr, intense solar UV."
    },
    "scientific_rationale": "Extreme dry limit of Earth life; mimics Phoenix and Viking soil oxidant chemistry."
  },
  {
    "level_number": 94,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-094 [SAR C-Band]",
    "target_type": "earth_analog",
    "target_name": "Askja Caldera & Holuhraun Lava Field (Sector 21)",
    "location_context": "Central Highlands, Iceland (65.03\u00b0N, -16.75\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM",
      "mineralogy": "Unweathered tholeiitic aa and pahoehoe basalt flows.",
      "terrain_metrics": "Slope: 14.2\u00b0 | TRI: 9.8m",
      "thermal_environment": "Sub-polar cold volcanic desert with zero vegetation."
    },
    "scientific_rationale": "Historic Apollo training ground; jagged basalt textures identical to lunar maria and Martian lava shields."
  },
  {
    "level_number": 95,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-095 [PAN 0.5m/px]",
    "target_type": "earth_analog",
    "target_name": "Haughton Impact Structure (Sector 28)",
    "location_context": "Devon Island, Nunavut (75.38\u00b0N, -89.68\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC NASADEM & MODIS",
      "mineralogy": "Shattered dolomite breccia with post-impact hydrothermal deposits.",
      "terrain_metrics": "Slope: 19.1\u00b0 | TRI: 7.1m",
      "thermal_environment": "High Arctic permafrost desert, snow-free summers."
    },
    "scientific_rationale": "NASA HMP research station; ancient impact-induced thermal spring systems mimicking early Mars habitability."
  },
  {
    "level_number": 96,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-096 [NIR 1.2m/px]",
    "target_type": "earth_analog",
    "target_name": "Tso Kar Cold Salt Playa (Sector 6)",
    "location_context": "Ladakh, India (33.31\u00b0N, 77.99\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LP DAAC Landsat & GPM",
      "mineralogy": "Borate, thenardite, and halite evaporite polygonal crusts.",
      "terrain_metrics": "Slope: 4.8\u00b0 | TRI: 2.1m",
      "thermal_environment": "Elevation 4,530m, hypobaric atmosphere, -35\u00b0C to +25\u00b0C diurnal swings."
    },
    "scientific_rationale": "High-altitude cold evaporitic basin mimicking dried Martian paleolake floor deposits."
  },
  {
    "level_number": 97,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-097 [TIR 60m/px]",
    "target_type": "earth_analog",
    "target_name": "HI-SEAS Mauna Loa Lava Tubes (Sector 13)",
    "location_context": "Hawaii, USA (19.53\u00b0N, -155.57\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA ASTER GED & NASADEM",
      "mineralogy": "Vesicular basaltic flow tubes and pyroclastic tephra blankets.",
      "terrain_metrics": "Slope: 12.0\u00b0 | TRI: 7.5m",
      "thermal_environment": "Alpine volcanic summit above trade wind inversion layer."
    },
    "scientific_rationale": "Intact lava tubes provide structural analog to lunar and Martian subterranean human shelters."
  },
  {
    "level_number": 98,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-098 [SWIR 30m/px]",
    "target_type": "earth_analog",
    "target_name": "Badwater Basin Yardangs & Salt Crusts (Sector 20)",
    "location_context": "Death Valley, California (36.25\u00b0N, -116.82\u00b0W)",
    "image_url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA MODIS LST & ASTER",
      "mineralogy": "Chloride polygon heave structures and wind-carved yardangs.",
      "terrain_metrics": "Slope: 2.1\u00b0 | TRI: 1.8m",
      "thermal_environment": "Hyperthermic summer (+54\u00b0C), elevation -86m."
    },
    "scientific_rationale": "Curiosity rover wheel testing terrain; aeolian deflation features mirror Gale crater yardangs."
  },
  {
    "level_number": 99,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-099 [SAR C-Band]",
    "target_type": "moon",
    "target_name": "Shackleton Crater Rim Crest (Sector 27)",
    "location_context": "Lunar South Pole (-89.9\u00b0S, 0.0\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LRO LOLA & NAC",
      "mineralogy": "Pure ferroan anorthosite (>92% Ca-plagioclase).",
      "terrain_metrics": "Slope: 28.5\u00b0 | TRI: 11.4m",
      "thermal_environment": "Peaks of eternal light (88% sunlight) next to 40K cold-traps."
    },
    "scientific_rationale": "Razor-sharp grazing illumination shadows; zero atmosphere or atmospheric diffusion."
  },
  {
    "level_number": 100,
    "difficulty": "Commander",
    "difficulty_id": "commander",
    "frame_code": "LVL-100 [PAN 0.5m/px]",
    "target_type": "moon",
    "target_name": "Mare Tranquillitatis Nearside Plain (Sector 5)",
    "location_context": "Lunar Nearside (8.5\u00b0N, 31.4\u00b0E)",
    "image_url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1200&q=80",
    "clues": {
      "instrument": "NASA LROC & Clementine UVVIS",
      "mineralogy": "High-titanium mare basalt regolith with ilmenite (FeTiO3).",
      "terrain_metrics": "Slope: 4.2\u00b0 | TRI: 3.1m",
      "thermal_environment": "Diurnal temp swing -130\u00b0C to +120\u00b0C, hard vacuum (0.0 kPa)."
    },
    "scientific_rationale": "Micrometeorite impact-gardened regolith; uniform optical maturity and absence of water/oxidation."
  }
];
