/**
 * Cosmic Detective — Commander tier (levels 76–100)
 * 12 Earth analogs · 7 lunar features · 6 martian features
 */
export default [
  {
    n: 76, type: 'earth_analog',
    name: 'Yellowstone Hydrothermal Basin',
    loc: 'Wyoming, USA · 44.60°N 110.50°W',
    alt: 'Steaming hot springs and colourful mineral terraces',
    tag: 'ASTER / Landsat 9',
    query: 'Yellowstone hydrothermal basin hot spring',
    clues: [
      'NASA ASTER thermal mapping and Landsat 9 OLI',
      'Silica sinter, sulphur and iron oxide deposits',
      'Geothermal basins with hot springs, geysers and mud pots',
      'Continental high-altitude climate with cold winters'
    ],
    why: 'Yellowstone’s hot springs host extremophiles and produce silica sinter, both used as analogs for hydrothermal systems on Mars.'
  },
  {
    n: 77, type: 'earth_analog',
    name: 'Salar de Atacama',
    loc: 'Antofagasta, Chile · 23.50°S 68.25°W',
    alt: 'A vast salt crust with brine pools under Andean peaks',
    tag: 'ASTER / Landsat 9',
    query: 'Salar de Atacama salt flat',
    clues: [
      'NASA ASTER mineral mapping and Landsat 9 OLI',
      'Halite crust with lithium-rich brine beneath',
      'A large closed-basin salt flat at high altitude',
      'Hyper-arid climate with intense evaporation'
    ],
    why: 'Salar de Atacama’s evaporite sequence and brines are a terrestrial reference for martian salt deposits and fluid chemistry.'
  },
  {
    n: 78, type: 'earth_analog',
    name: 'Ischigualasto Provincial Park',
    loc: 'San Juan, Argentina · 30.10°S 68.00°W',
    alt: 'Eroded badlands with strange rounded rock formations',
    tag: 'Landsat 9 / NASADEM',
    query: 'Ischigualasto Argentina badlands',
    clues: [
      'NASA Landsat 9 OLI and NASADEM',
      'Triassic sandstone, mudstone and volcanic ash layers',
      'Wind-eroded badlands with pedestal rocks and clay plains',
      'Arid continental climate with strong seasonal winds'
    ],
    why: 'Ischigualasto’s “Valley of the Moon” badlands expose layered sediments and erosion patterns comparable to martian terrain.'
  },
  {
    n: 79, type: 'earth_analog',
    name: 'Tassili n’Ajjer',
    loc: 'Sahara, Algeria · 25.50°N 9.00°E',
    alt: 'Dark sandstone towers rising from a sandy desert plateau',
    tag: 'Landsat 9 / ASTER',
    query: 'Tassili n Ajjer Algeria sandstone',
    over: ["Rock columns at Tassili n'Ajjer.jpg"],
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Sandstone with iron-oxide varnish and prehistoric rock art',
      'A dissected sandstone plateau with pillars and arches',
      'Hyper-arid Sahara climate with extreme temperature swings'
    ],
    why: 'Tassili’s wind-eroded sandstone architecture is a visual analog for layered sedimentary rocks and yardangs on Mars.'
  },
  {
    n: 80, type: 'earth_analog',
    name: 'Richat Structure',
    loc: 'Adrar Plateau, Mauritania · 21.12°N 11.40°W',
    alt: 'Concentric rings of rock forming a giant circular eye',
    tag: 'Landsat 9 / ASTER',
    query: 'Richat structure Mauritania',
    over: ['Richat Structure by Landsat 7.jpg'],
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Layered quartzite and carbonate rocks with hydrothermal alteration',
      'A 40 km wide circular dome eroded into concentric rings',
      'Hyper-arid Sahara climate with strong wind erosion'
    ],
    why: 'The Richat Structure is often mistaken for an impact crater, but its concentric rings record a domed, hydrothermally altered sedimentary sequence.'
  },
  {
    n: 81, type: 'earth_analog',
    name: 'White Desert',
    loc: 'Egypt · 27.30°N 28.00°E',
    alt: 'Chalk-white rock formations standing on a pale desert floor',
    tag: 'Landsat 9 / SRTM',
    query: 'White Desert Egypt chalk formations',
    clues: [
      'NASA Landsat 9 OLI and SRTM',
      'Chalk and limestone with wind-sculpted surfaces',
      'Field of white chalk hoodoos and mushroom rocks',
      'Hyper-arid desert with strong diurnal temperature swings'
    ],
    why: 'The White Desert’s chalk sculptures show how differential erosion shapes soft sedimentary terrain, as seen in martian layered deposits.'
  },
  {
    n: 82, type: 'earth_analog',
    name: 'Lake Assal',
    loc: 'Djibouti · 11.65°N 42.42°E',
    alt: 'A brilliant salt lake ringed by white crusts and dark rock',
    tag: 'Landsat 9 / ASTER',
    query: 'Lake Assal Djibouti salt lake',
    over: ['Lake Assal 1-Djibouti.jpg'],
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Halite and gypsum crusts around a hyper-saline lake',
      'A crater lake 155 m below sea level, the lowest point in Africa',
      'Extreme heat and evaporation with volcanic surroundings'
    ],
    why: 'Lake Assal’s salt crusts and high evaporation rate make it an analog for closed-basin evaporites on Mars.'
  },
  {
    n: 83, type: 'earth_analog',
    name: 'Námaskarð',
    loc: 'Northern Iceland · 65.64°N 16.81°W',
    alt: 'Bubbling grey mud pools and steaming vents in bare ground',
    tag: 'ASTER / Landsat 9',
    query: 'Namaskard Iceland geothermal',
    over: ['Hverir geothermal area6.jpg'],
    clues: [
      'NASA ASTER thermal mapping and Landsat 9 OLI',
      'Sulphur, silica and hydrothermally altered clay',
      'Geothermal mud pools and fumaroles in barren terrain',
      'Sub-arctic climate with strong wind and volcanic gas'
    ],
    why: 'Námaskarð’s acid-sulphate alteration is a close analog for martian hydrothermal and fumarolic deposits.'
  },
  {
    n: 84, type: 'earth_analog',
    name: 'Lake Natron',
    loc: 'Arusha, Tanzania · 2.42°S 36.00°E',
    alt: 'A shallow pink lake with salt crusts and volcanic hills',
    tag: 'Landsat 9 / ASTER',
    query: 'Lake Natron Tanzania salt lake',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Sodium carbonate and salt crusts with cyanobacteria',
      'A shallow alkaline lake in the East African Rift',
      'Hot, arid climate with extreme evaporation'
    ],
    why: 'Lake Natron’s alkalinity and salt chemistry are used to understand ancient alkaline lake environments on Mars.'
  },
  {
    n: 85, type: 'earth_analog',
    name: 'Haleakalā Crater',
    loc: 'Maui, Hawaiʻi, USA · 20.71°N 156.25°W',
    alt: 'A broad volcanic crater with cinder cones in a barren landscape',
    tag: 'ASTER / NASADEM',
    query: 'Haleakala crater Maui',
    clues: [
      'NASA ASTER thermal data and NASADEM',
      'Basaltic cinders and lava flows',
      'A 10 km wide summit depression with cinder cones',
      'High-altitude tropical climate with cold nights'
    ],
    why: 'Haleakalā’s summit crater is a Mars analog used for rover and spacesuit field testing.'
  },
  {
    n: 86, type: 'earth_analog',
    name: 'Vatnajökull Ice Caves',
    loc: 'Iceland · 64.40°N 16.80°W',
    alt: 'Blue ice caves inside a glacier with dark volcanic layers',
    tag: 'MODIS / Landsat 9',
    query: 'Vatnajokull ice cave Iceland',
    over: ['Ice Cave Blue Roof - Iceland.jpg'],
    clues: [
      'NASA MODIS and Landsat 9 OLI',
      'Glacial ice with volcanic ash layers',
      'Subglacial caves and tunnels beneath an ice cap',
      'Sub-arctic climate with meltwater and volcanic heat'
    ],
    why: 'Vatnajökull’s ice caves are a terrestrial analog for subglacial habitats and ice–rock interfaces on Mars and Europa.'
  },
  {
    n: 87, type: 'earth_analog',
    name: 'Killpecker Dunes',
    loc: 'Wyoming, USA · 42.00°N 109.00°W',
    alt: 'Large sand dunes on a high, windy desert plain',
    tag: 'Landsat 9 / ASTER',
    query: 'Killpecker dunes Wyoming',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Quartz sand with iron-stained grains',
      'A large aeolian dune field on a high plain',
      'Cold desert with strong wind and sparse vegetation'
    ],
    why: 'Killpecker’s dunes are used as a cold-climate aeolian analog for martian sand transport.'
  },

  {
    n: 88, type: 'moon',
    name: 'Peary Crater',
    loc: 'Lunar North Pole · 88.6°N 33.0°E',
    alt: 'A polar lunar crater with illuminated rims and shadowed floor',
    tag: 'LROC NAC / Diviner',
    query: 'Peary crater Moon north pole',
    over: ['Peary crater 4128 h3.jpg'],
    clues: [
      'NASA LRO LROC and Diviner',
      'Anorthositic highland crust with impact melt',
      'About 73 km across near the north pole',
      'Illuminated rim peaks beside permanent shadow'
    ],
    why: 'Peary’s rim has some of the longest-lived sunlight on the Moon, making it a candidate for polar power and thermal stability.'
  },
  {
    n: 89, type: 'moon',
    name: 'Nobile Crater',
    loc: 'Lunar South Pole · 85.4°S 53.5°E',
    alt: 'A deep polar crater with a shadowed floor among rugged highlands',
    tag: 'Lunar Orbiter / LROC',
    query: 'Nobile crater Moon',
    over: ['Nobile crater 4094 h1.jpg'],
    clues: [
      'NASA Lunar Orbiter 4 and LRO LROC imagery',
      'Anorthositic highland regolith enriched with polar volatiles',
      'A 73 km crater beside Cabeus with a permanently shadowed floor',
      'Cryogenic temperatures below 40 K in shadow'
    ],
    why: 'Nobile sits beside Cabeus at the lunar south pole, where permanently shadowed floors trap water ice; NASA targeted the Nobile rim as the VIPER rover landing region to survey those volatiles.'
  },
  {
    n: 90, type: 'moon',
    name: 'Tsiolkovskiy Crater',
    loc: 'Lunar Far Side · 20.4°S 129.1°E',
    alt: 'A large far-side crater with a dark basaltic floor',
    tag: 'LROC WAC',
    query: 'Tsiolkovskiy crater Moon far side',
    clues: [
      'NASA LRO LROC Wide Angle Camera',
      'Dark mare basalt inside a highland crater',
      'About 185 km across with a central peak',
      'Vacuum with a high-albedo rim and dark floor'
    ],
    why: 'Tsiolkovskiy is the most prominent far-side mare-flooded crater and a key target for understanding far-side volcanism.'
  },
  {
    n: 91, type: 'moon',
    name: 'Orientale Basin',
    loc: 'Lunar Far Side · 19.4°S 92.8°W',
    alt: 'Concentric mountain rings of a giant lunar impact basin',
    tag: 'LROC WAC / MOLA',
    query: 'Orientale basin Moon',
    over: ['Mare Orientale (Lunar Orbiter 4).png'],
    clues: [
      'NASA LRO LROC and LOLA topography',
      'Impact melt and concentric mountain rings',
      'About 930 km across, the youngest large lunar basin',
      'Vacuum with well-preserved basin rings'
    ],
    why: 'Orientale is the youngest large multi-ring impact basin on the Moon and a template for studying basin formation.'
  },
  {
    n: 92, type: 'moon',
    name: 'Compton–Belkovich Volcanic Complex',
    loc: 'Lunar Far Side · 61.1°N 99.5°E',
    alt: 'A rare volcanic complex on the lunar far side',
    tag: 'LROC / Diviner',
    query: 'Compton Belkovich lunar volcano',
    over: ['Farside Highlands Volcanism! (LROC378 - M119198897 dome1).png'],
    clues: [
      'NASA LRO LROC and Diviner',
      'Silica-rich volcanic material with thorium enrichment',
      'A rare far-side volcanic complex of domes and deposits',
      'Vacuum with anomalous thermal and radioactive signatures'
    ],
    why: 'Compton–Belkovich is one of the few far-side volcanic complexes and records evolved magmatism rare on the Moon.'
  },
  {
    n: 93, type: 'moon',
    name: 'Mare Ingenii Pit',
    loc: 'Lunar Far Side · 35.95°S 166.05°E',
    alt: 'A dark pit opening in the floor of a lunar mare',
    tag: 'LROC NAC',
    query: 'Mare Ingenii pit Moon skylight',
    over: ['Depths of Mare Ingenii (LROC695 - M128202846LE thumb).png'],
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Collapsed mare basalt over a void',
      'A pit about 100 m across with a deep shadowed interior',
      'Vacuum with a potential lava-tube shelter beneath'
    ],
    why: 'The Mare Ingenii pit is a collapsed lava-tube skylight and a candidate protected habitat for future crews.'
  },
  {
    n: 94, type: 'moon',
    name: 'Apollo 12 / Surveyor 3 Site',
    loc: 'Oceanus Procellarum · 3.01°S 23.42°W',
    alt: 'A lunar plain with a landed module beside an old robot lander',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Apollo 12 Surveyor 3 Moon',
    over: ['Apollo 12 landing site 3154 h2.jpg'],
    clues: [
      'Apollo 12 Hasselblad photography and LRO LROC',
      'Basaltic mare regolith with glassy particles',
      'A flat mare plain near the Surveyor 3 lander',
      'Vacuum with a thick, mature regolith'
    ],
    why: 'Apollo 12 made the first pinpoint lunar landing beside Surveyor 3, proving precision navigation on the Moon.'
  },

  {
    n: 95, type: 'mars',
    name: 'Hellas Planitia',
    loc: 'Hellas Basin, Mars · 42.4°S 70.5°E',
    alt: 'Light-toned layered deposits along the rim of a vast martian basin',
    tag: 'MOLA / CTX',
    query: 'Hellas basin Mars',
    over: ['Light-Toned Layered Deposits on the Northern Edge of Hellas Planitia (46137924604).jpg'],
    clues: [
      'NASA MGS MOLA and MRO CTX',
      'Ancient impact melt and dust-covered basin floor',
      'About 2,300 km across and 7 km deep',
      'Thin atmosphere with high surface pressure at the basin floor'
    ],
    why: 'Hellas is the largest impact basin on Mars, deep enough to host liquid water in the past and clouds today.'
  },
  {
    n: 96, type: 'mars',
    name: 'Utopia Planitia',
    loc: 'Northern Mars · 46.7°N 117.5°E',
    alt: 'A broad northern plain with polygonal ground patterns',
    tag: 'MOLA / HiRISE',
    query: 'Utopia Planitia Mars',
    clues: [
      'NASA MGS MOLA and MRO HiRISE',
      'Dust, sand and buried ice with polygonal terrain',
      'A huge northern plain with a possible ancient ocean floor',
      'Cold northern climate with seasonal frost'
    ],
    why: 'Utopia Planitia is where Viking 2 landed and contains widespread ice-related polygons and possible mud volcanism.'
  },
  {
    n: 97, type: 'mars',
    name: 'Planum Boreum',
    loc: 'Martian North Pole · 87.0°N 0.0°E',
    alt: 'Layered ice and dust at the martian north polar cap',
    tag: 'MOLA / HRSC',
    query: 'Planum Boreum Mars north polar cap',
    over: ['Martian north polar cap.jpg'],
    clues: [
      'NASA MGS MOLA and Mars Express HRSC',
      'Water ice with dust layers and seasonal CO₂ frost',
      'A layered polar plateau about 3 km thick',
      'Extremely cold with months of polar night'
    ],
    why: 'Planum Boreum’s layers preserve a record of martian climate cycles driven by orbital changes.'
  },
  {
    n: 98, type: 'mars',
    name: 'Russell Crater Dunes',
    loc: 'Noachis Terra, Mars · 54.5°S 12.9°E',
    alt: 'Dark dunes with gullies in a southern martian crater',
    tag: 'HiRISE / CTX',
    query: 'Russell crater Mars dunes gullies',
    clues: [
      'NASA MRO HiRISE and CTX',
      'Basaltic sand with seasonal frost',
      'A large dune field inside a southern crater',
      'Cold southern climate with seasonal CO₂ frost'
    ],
    why: 'Russell Crater’s dunes show active gully formation driven by seasonal frost, a key process in martian surface change.'
  },
  {
    n: 99, type: 'mars',
    name: 'Proctor Crater Dunes',
    loc: 'Noachis Terra, Mars · 47.4°S 30.6°E',
    alt: 'Dark sand dunes on the floor of a martian crater',
    tag: 'HiRISE / CRISM',
    query: 'Proctor crater Mars dunes',
    clues: [
      'NASA MRO HiRISE and CRISM',
      'Basaltic sand with low albedo',
      'A dark dune field inside a 170 km crater',
      'Thin atmosphere with active aeolian transport'
    ],
    why: 'Proctor Crater’s dark dunes are among the best-studied active sand bodies on Mars and help decode wind regimes.'
  },
  {
    n: 100, type: 'mars',
    name: 'Inca City and South Polar Spiders',
    loc: 'Australe Scopuli, Mars · 81.9°S 64.0°W',
    alt: 'Strange spider-like channels etched into frozen polar ground',
    tag: 'HiRISE / MOLA',
    query: 'Inca City Mars south polar spiders',
    over: ['Mars, Angustus Labyrinthus, South Polar Cap - ESA Mars Express (54566812672).jpg'],
    clues: [
      'NASA MRO HiRISE and MGS MOLA',
      'Seasonal CO₂ ice with dust and water-ice layers',
      'Araneiform terrain of radiating channels in polar ground',
      'Extremely cold polar setting with seasonal sublimation'
    ],
    why: 'The “spiders” of Australe Scopuli form when spring sunlight sublimates CO₂ ice from below, a process unique to Mars.'
  }
];
