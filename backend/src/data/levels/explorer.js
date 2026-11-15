/**
 * Cosmic Detective — Explorer tier (levels 26–50)
 * 12 Earth analogs · 7 lunar features · 6 martian features
 */
export default [
  {
    n: 26, type: 'earth_analog',
    name: 'Craters of the Moon Lava Field',
    loc: 'Idaho, USA · 43.42°N 113.52°W',
    alt: 'A vast field of black basalt lava and cinder cones',
    tag: 'Landsat 9 / NASADEM',
    query: 'Craters of the Moon Idaho lava field',
    clues: [
      'NASA Landsat 9 OLI and NASADEM topography',
      'Basaltic lava with cinder cones and spatter ramparts',
      'A 1,600 km² volcanic field of open fissure eruptions',
      'Semi-arid high desert with strong seasonal temperature swings'
    ],
    why: 'Craters of the Moon was used to train Apollo 14 astronauts because its fresh basaltic lava and cinder fields mimic lunar mare terrain.'
  },
  {
    n: 27, type: 'earth_analog',
    name: 'Cinder Lake Crater Field',
    loc: 'Arizona, USA · 35.32°N 111.53°W',
    alt: 'A field of small explosion craters in dark volcanic ground',
    tag: 'Landsat 9 / Apollo',
    query: 'Cinder Lake crater field Arizona',
    over: ['Cinder Lake Crater Field 1.jpg'],
    clues: [
      'NASA Landsat 9 OLI and Apollo-era field surveys',
      'Basaltic cinders and reworked volcanic ash',
      'Artificial crater field with craters from 1 to 30 m across',
      'Dry high-desert climate with sparse vegetation'
    ],
    why: 'In 1967 NASA and USGS blasted this field to match lunar crater patterns, giving Apollo crews a realistic surface to rehearse traverses.'
  },
  {
    n: 28, type: 'earth_analog',
    name: 'Hamersley Range, Pilbara',
    loc: 'Western Australia · 22.0°S 118.5°E',
    alt: 'Banded iron formation ridges cutting across a dry red Pilbara landscape',
    tag: 'Landsat 9 / ASTER',
    query: 'Hamersley Range Pilbara',
    over: ['Jaspilite banded iron formation (BIF) (Hamersely Group, Neoarchean to Paleoproterozoic, ~2.47-2.55 Ga; Hamersley Range, Western Australia) (15036345446).jpg'],
    clues: [
      'NASA Landsat 9 OLI and ASTER mineral mapping',
      'Alternating iron-rich and chert bands of the Brockman Iron Formation',
      'Some of Earth’s oldest well-preserved sedimentary rocks',
      'Hot, arid and dusty with extremely old stable crust'
    ],
    why: 'The Pilbara’s 2.5-billion-year-old banded iron formations record ancient ocean chemistry and are a key Mars analog for layered, iron-rich sediments.'
  },
  {
    n: 29, type: 'earth_analog',
    name: 'Namib Desert Dunes',
    loc: 'Namibia · 24.75°S 15.28°E',
    alt: 'Towering red linear dunes under a clear desert sky',
    tag: 'Landsat 9 / ASTER',
    query: 'Namib desert dunes Namibia',
    clues: [
      'NASA Landsat 9 OLI and ASTER surface composition',
      'Quartz-rich sand with iron oxide coatings',
      'Linear and star dunes reaching 300 m in height',
      'Hyper-arid coastal desert shaped by fog and strong winds'
    ],
    why: 'The Namib’s giant dunes are a standard analog for martian aeolian sand seas and dune migration.'
  },
  {
    n: 30, type: 'earth_analog',
    name: 'Salar de Uyuni',
    loc: 'Potosí, Bolivia · 20.13°S 67.49°W',
    alt: 'A vast white salt flat patterned with polygons',
    tag: 'Landsat 9 / SRTM',
    query: 'Salar de Uyuni salt flat Bolivia',
    clues: [
      'NASA Landsat 9 OLI and SRTM topography',
      'Halite and lithium-rich brine over lake sediments',
      'The world’s largest salt flat at over 10,000 km²',
      'High-altitude desert with intense ultraviolet and cold nights'
    ],
    why: 'Uyuni’s polygonally cracked salt crust is one of the closest visual and chemical analogs to martian evaporite plains.'
  },
  {
    n: 31, type: 'earth_analog',
    name: 'Svalbard Polar Desert',
    loc: 'Svalbard, Norway · 78.22°N 15.65°E',
    alt: 'A treeless Arctic tundra plain beneath steep, barren mountains',
    tag: 'MODIS / ASTER',
    query: 'Svalbard polar desert landscape',
    over: ['Tundra at Adventfjord, Svalbard.jpg'],
    clues: [
      'NASA MODIS and ASTER surface temperature and emissivity',
      'Frost-shattered sandstone, shale and carbonate',
      'Glacial valleys, patterned ground and permafrost',
      'High Arctic with polar night, permafrost and little precipitation'
    ],
    why: 'Svalbard is a high-fidelity Mars analog used by the AMASE expedition to study permafrost, ice–rock interactions and life in cold deserts.'
  },
  {
    n: 32, type: 'earth_analog',
    name: 'Axel Heiberg Island',
    loc: 'Nunavut, Canada · 79.40°N 90.75°W',
    alt: 'A barren polar island with exposed sedimentary rock and ice',
    tag: 'Landsat 9 / NASADEM',
    query: 'Axel Heiberg Island polar desert',
    over: ['Axel Heiberg Island 01.jpg'],
    clues: [
      'NASA Landsat 9 OLI and NASADEM',
      'Gypsum, carbonate and evaporite-bearing sedimentary rock',
      'Folded strata, steep valleys and perennial ground ice',
      'Extreme polar desert with months of darkness'
    ],
    why: 'Axel Heiberg’s evaporites and cold desert weathering are studied as analogs for martian sulphate deposits.'
  },
  {
    n: 33, type: 'earth_analog',
    name: 'Bardenas Reales',
    loc: 'Navarre, Spain · 42.19°N 1.47°W',
    alt: 'Eroded clay and sandstone badlands with flat-topped hills',
    tag: 'Landsat 9 / NASADEM',
    query: 'Bardenas Reales badlands Spain',
    clues: [
      'NASA Landsat 9 OLI and NASADEM',
      'Clay, marl and sandstone sculpted by rare flash floods',
      'Badlands with mesas, gullies and salt-tolerant scrub',
      'Semi-arid continental climate with strong wind erosion'
    ],
    why: 'Bardenas Reales is a compact badland analog for martian slope erosion and sedimentary layering.'
  },
  {
    n: 34, type: 'earth_analog',
    name: 'Valle de la Luna',
    loc: 'Antofagasta, Chile · 22.92°S 68.32°W',
    alt: 'Salt-sculpted ridges and dunes in a dry desert valley',
    tag: 'ASTER / Landsat 9',
    query: 'Valle de la Luna Atacama Chile',
    over: ['Anfiteatro, Valle de la Luna, San Pedro de Atacama, Chile, 2016-02-01, DD 149.JPG'],
    clues: [
      'NASA ASTER mineralogy and Landsat 9 OLI',
      'Halite, gypsum and clay-rich sedimentary outcrops',
      'Wind- and salt-sculpted ridges, dunes and amphitheatres',
      'Hyper-arid desert with extreme daily temperature range'
    ],
    why: 'Valle de la Luna’s halite-crusted ridges and dry dunes are a widely used Mars visual and process analog.'
  },
  {
    n: 35, type: 'earth_analog',
    name: 'Meteor Crater',
    loc: 'Arizona, USA · 35.03°N 111.02°W',
    alt: 'A large bowl-shaped impact crater with a raised rim',
    tag: 'Landsat 9 / NASADEM',
    query: 'Meteor Crater Arizona',
    over: ['Meteor Crater - Arizona.jpg'],
    clues: [
      'NASA Landsat 9 OLI and NASADEM elevation',
      'Coconino sandstone and impact breccia',
      'About 1.2 km across and 170 m deep with a raised rim',
      'Dry high-desert climate with slow erosion'
    ],
    why: 'Meteor Crater is the best-preserved terrestrial impact crater and was used by Apollo astronauts to practice field geology.'
  },
  {
    n: 36, type: 'earth_analog',
    name: 'Kīlauea Volcano',
    loc: 'Hawaiʻi, USA · 19.42°N 155.29°W',
    alt: 'A dark volcanic landscape with a steaming caldera',
    tag: 'ASTER / Landsat 9',
    query: 'Kilauea volcano lava Hawaii',
    over: ['Kīlauea lava flow 2017(2).jpg'],
    clues: [
      'NASA ASTER thermal emission and Landsat 9 OLI',
      'Basaltic lava, tephra and sulphur deposits',
      'An active shield volcano with pit craters and lava lakes',
      'Tropical maritime climate with volcanic gas and acid rain'
    ],
    why: 'Kīlauea’s active basalt flows let scientists watch lava emplacement processes that built the lunar maria and martian plains.'
  },
  {
    n: 37, type: 'earth_analog',
    name: 'Mount Etna',
    loc: 'Sicily, Italy · 37.75°N 14.99°E',
    alt: 'A dark basaltic volcano with fresh lava flows and ash',
    tag: 'ASTER / MODIS',
    query: 'Mount Etna volcano lava',
    over: ['Aa Lava Flow over Tephra at Mount Etna on Sicily in Italy.jpg'],
    clues: [
      'NASA ASTER thermal mapping and MODIS hot-spot detection',
      'Alkaline basalt with frequent lava fountains',
      'Europe’s most active volcano, over 3,300 m high',
      'Mediterranean climate with snow on the summit in winter'
    ],
    why: 'Etna’s basaltic flows and cinder cones provide a well-instrumented analog for lunar and martian volcanic terrain.'
  },

  {
    n: 38, type: 'moon',
    name: 'Mare Imbrium',
    loc: 'Lunar Nearside · 32.8°N 15.6°W',
    alt: 'A huge dark basaltic plain ringed by mountains',
    tag: 'LROC WAC / MOLA',
    query: 'Mare Imbrium Moon',
    over: ['Lava flows in Mare Imbrium (AS15-M-1558).png'],
    clues: [
      'NASA LRO LROC and LOLA topography',
      'Iron-rich basalt filling a giant impact basin',
      'About 1,145 km across, ringed by the Apennine mountains',
      'Vacuum with low albedo and smooth mare surfaces'
    ],
    why: 'Mare Imbrium is one of the largest lunar impact basins, and Apollo 15 explored its mountainous rim at Hadley–Apennine.'
  },
  {
    n: 39, type: 'moon',
    name: 'Oceanus Procellarum',
    loc: 'Lunar Nearside · 18.0°N 57.0°W',
    alt: 'A vast dark basaltic plain on the lunar surface',
    tag: 'LROC WAC',
    query: 'Oceanus Procellarum Moon',
    clues: [
      'NASA LRO LROC Wide Angle Camera',
      'Titanium- and iron-rich mare basalt',
      'The largest lunar mare, spanning over 2,500 km',
      'Vacuum with wrinkle ridges and young lava flows'
    ],
    why: 'Oceanus Procellarum hosts Apollo 12 and some of the youngest lunar basalts, recording late-stage mare volcanism.'
  },
  {
    n: 40, type: 'moon',
    name: 'Reiner Gamma',
    loc: 'Oceanus Procellarum · 7.5°N 59.0°W',
    alt: 'A bright swirl pattern on a dark lunar plain',
    tag: 'LROC WAC',
    query: 'Reiner Gamma lunar swirl',
    clues: [
      'NASA LRO LROC and Lunar Prospector magnetic data',
      'High-albedo regolith over a strong magnetic anomaly',
      'A sinuous bright swirl with no topographic relief',
      'Vacuum with space-weathering patterns'
    ],
    why: 'Reiner Gamma is the most famous lunar swirl, where a magnetic field partially shields the surface from solar wind weathering.'
  },
  {
    n: 41, type: 'moon',
    name: 'Ina (D-Caldera)',
    loc: 'Lacus Felicitatis · 18.65°N 5.3°E',
    alt: 'A small irregular depression with smooth, bright patches',
    tag: 'LROC NAC',
    query: 'Ina lunar caldera D-Caldera',
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Smooth, young-looking basaltic material in a depression',
      'About 3 km across with steep walls and mounds',
      'Vacuum with anomalously low crater density'
    ],
    why: 'Ina’s fresh-looking surface may record recent lunar volcanism or collapse, making it a target for understanding young lunar processes.'
  },
  {
    n: 42, type: 'moon',
    name: 'Gruithuisen Domes',
    loc: 'Lunar Nearside · 36.6°N 39.8°W',
    alt: 'Steep-sided volcanic domes on a dark lunar plain',
    tag: 'LROC NAC / Diviner',
    query: 'Gruithuisen domes Moon',
    over: ['Gruithuisen domes AS15-93-12717.jpg'],
    clues: [
      'NASA LRO LROC and Diviner thermal data',
      'Silica-rich volcanic material unlike typical mare basalt',
      'Steep domes about 20 km wide and 1 km high',
      'Vacuum with high thermal inertia domes'
    ],
    why: 'The Gruithuisen Domes are a rare example of evolved, silica-rich lunar volcanism and a candidate resource target.'
  },
  {
    n: 43, type: 'moon',
    name: 'South Pole–Aitken Basin',
    loc: 'Lunar Far Side · 53.0°S 169.0°E',
    alt: 'A gigantic ancient impact basin on the far side of the Moon',
    tag: 'LROC WAC / MOLA',
    query: 'South Pole Aitken basin Moon',
    over: ["The Moon's largest impact basin (LROC219 - M103196768LE thumb1).png"],
    clues: [
      'NASA LRO LROC and LOLA topography',
      'Deeply excavated mantle material in the basin floor',
      'About 2,500 km across and 13 km deep, the largest lunar basin',
      'Vacuum with ancient, heavily cratered terrain'
    ],
    why: 'South Pole–Aitken is the oldest and largest lunar impact basin and exposes material from deep in the Moon’s crust.'
  },
  {
    n: 44, type: 'moon',
    name: 'Apollo 11 Landing Site',
    loc: 'Sea of Tranquility · 0.67°N 23.47°E',
    alt: 'A flat lunar plain with a small lunar module and footprints',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Apollo 11 landing site Moon Tranquility',
    over: ['LRO Apollo11 landing site 369440main lroc apollo11 lrg.jpg'],
    clues: [
      'Apollo 11 Hasselblad photography and LRO LROC',
      'Fine-grained basaltic regolith with small craters',
      'A flat mare plain near the equator',
      'Vacuum with a dusty surface and extreme temperature swings'
    ],
    why: 'Apollo 11’s Sea of Tranquility site is the reference point for human exploration of a basaltic lunar plain.'
  },

  {
    n: 45, type: 'mars',
    name: 'Syrtis Major',
    loc: 'Mars · 8.4°N 69.5°E',
    alt: 'A dark basaltic plateau contrasting with bright dusty highlands',
    tag: 'MOLA / CTX',
    query: 'Syrtis Major Mars',
    over: ['Syrtis Major MC-13.jpg'],
    clues: [
      'NASA MGS MOLA and MRO CTX',
      'Low-albedo basaltic sand and volcanic rock',
      'A dark volcanic plateau roughly 1,500 km across',
      'Thin atmosphere with strong seasonal dust activity'
    ],
    why: 'Syrtis Major was the first surface feature mapped on another planet and records ancient martian volcanism.'
  },
  {
    n: 46, type: 'mars',
    name: 'Nili Fossae',
    loc: 'Mars · 22.0°N 74.0°E',
    alt: 'Parallel fractures cutting through ancient martian crust',
    tag: 'MRO CRISM / HiRISE',
    query: 'Nili Fossae Mars',
    clues: [
      'NASA MRO CRISM and HiRISE',
      'Clay minerals, olivine and carbonate-rich outcrops',
      'A set of concentric fractures around the Isidis basin',
      'Thin CO₂ atmosphere with ancient water-altered rocks'
    ],
    why: 'Nili Fossae contains some of the most diverse hydrated minerals on Mars and was a candidate landing site for the Mars 2020 rover.'
  },
  {
    n: 47, type: 'mars',
    name: 'Mawrth Vallis',
    loc: 'Mars · 22.3°N 16.5°W',
    alt: 'Light-toned layered deposits in an ancient martian valley',
    tag: 'MRO CRISM / HiRISE',
    query: 'Mawrth Vallis Mars',
    over: ['Mawrth Vallis perspective view ESA375352.jpg'],
    clues: [
      'NASA MRO CRISM and HiRISE',
      'Phyllosilicates and sulphate-bearing layered deposits',
      'A 600 km long outflow channel with light-toned outcrops',
      'Thin atmosphere with exposed ancient aqueous sediments'
    ],
    why: 'Mawrth Vallis preserves thick clay-bearing deposits that record long-lived aqueous alteration early in martian history.'
  },
  {
    n: 48, type: 'mars',
    name: 'Victoria Crater',
    loc: 'Meridiani Planum · 2.05°S 5.50°W',
    alt: 'A shallow martian crater with layered walls and sand ripples',
    tag: 'Opportunity Pancam / HiRISE',
    query: 'Victoria crater Mars Opportunity',
    over: ['Victoria crater from HiRise.jpg'],
    clues: [
      'NASA Opportunity Pancam and MRO HiRISE',
      'Sulphate-rich sandstone and hematite spherules',
      'About 750 m across with exposed layered walls',
      'Thin atmosphere with wind-blown sand and dust'
    ],
    why: 'Opportunity spent two years exploring Victoria Crater’s layered walls, confirming ancient wet conditions at Meridiani Planum.'
  },
  {
    n: 49, type: 'mars',
    name: 'Husband Hill, Columbia Hills',
    loc: 'Gusev Crater, Mars · 1.9°S 354.5°E',
    alt: 'Rolling rocky hills on the martian surface',
    tag: 'Spirit Pancam / HiRISE',
    query: 'Husband Hill Mars Spirit rover',
    over: ['PIA04181-Spirit Rover-Vista from Husband Hill.png'],
    clues: [
      'NASA Spirit Pancam and MRO HiRISE',
      'Volcanic and altered rocks with silica enrichment',
      'A ridge of layered hills inside Gusev Crater',
      'Thin dry atmosphere with pervasive dust'
    ],
    why: 'Spirit’s climb of Husband Hill revealed hydrothermal alteration and some of the strongest evidence for past water at Gusev.'
  },
  {
    n: 50, type: 'mars',
    name: 'Medusae Fossae Formation',
    loc: 'Mars · 5.0°S 147.0°W',
    alt: 'Wind-carved yardangs and soft layered deposits on Mars',
    tag: 'MOLA / CTX',
    query: 'Medusae Fossae Mars yardangs',
    clues: [
      'NASA MGS MOLA and MRO CTX',
      'Weakly cemented volcanic ash and dust deposits',
      'A vast field of wind-sculpted yardangs',
      'Thin atmosphere with strong aeolian erosion'
    ],
    why: 'Medusae Fossae is the largest known volcanic ash deposit on Mars and a natural laboratory for wind erosion.'
  }
];
