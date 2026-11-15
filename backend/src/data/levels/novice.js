/**
 * Cosmic Detective — Novice tier (levels 1–25)
 * 12 Earth analogs · 7 lunar features · 6 martian features
 *
 * Compact record shape (expanded by ../gameCatalog.js):
 *   n        level number
 *   type     earth_analog | moon | mars
 *   name     display name shown after the guess
 *   loc      location context shown after the guess
 *   alt      accessible image description shown after the guess
 *   tag      instrument tag used in the frame code
 *   query    Wikimedia Commons search query used once at seed time
 *   over    optional exact Commons file titles (tried before the query)
 *   clues    [instrument, mineralogy, terrain, thermal environment]
 *   why      scientific rationale shown on reveal
 */
export default [
  {
    n: 1, type: 'earth_analog',
    name: 'Wolfe Creek Crater',
    loc: 'Great Sandy Desert, Western Australia · 19.17°S 127.79°E',
    alt: 'A dry, rocky impact-crater wall in red desert country',
    tag: 'Landsat 9 OLI',
    query: 'Wolfe Creek crater',
    over: ['Cratere Wolfe.jpg'],
    clues: [
      'NASA Landsat 9 OLI imagery and SRTM elevation model',
      'Weathered sandstone and iron-rich desert soil over impact breccia',
      'About 880 m across and 60 m deep, with a raised, rubble-strewn rim',
      'Hot arid desert with no permanent surface water'
    ],
    why: 'Wolfe Creek is one of the best-preserved young impact craters on Earth, exposed in dry desert country. Its rubble rim and bowl are a close structural match for small craters on Mars and the Moon.'
  },
  {
    n: 2, type: 'earth_analog',
    name: 'Taylor Valley, McMurdo Dry Valleys',
    loc: 'Victoria Land, Antarctica · 77.65°S 162.60°E',
    alt: 'A treeless polar valley with exposed rock, ice and no snow cover',
    tag: 'MODIS / ASTER GED',
    query: 'Taylor Valley McMurdo Dry Valleys',
    over: ['Taylor Valley, Antarctica.jpg'],
    clues: [
      'NASA MODIS land-surface temperature and ASTER emissivity',
      'Dry permafrost with virtually no liquid water film',
      'A glacial valley floor with patterned ground and buried ice',
      'Extreme polar desert: almost no snowfall, katabatic winds'
    ],
    why: 'Taylor Valley is the most intensively studied of the McMurdo Dry Valleys, and its dry permafrost is a direct environmental proxy for the lunar south pole and martian polar ground ice.'
  },
  {
    n: 3, type: 'earth_analog',
    name: 'Atacama Desert Core',
    loc: 'Antofagasta, Chile · 24.08°S 70.02°W',
    alt: 'Cracked, pebble-covered desert soil stretching to bare hills',
    tag: 'GPM IMERG / ASTER',
    query: 'Atacama Desert landscape',
    over: ['Desert Ground (32097822997).jpg'],
    clues: [
      'NASA GPM IMERG precipitation and ASTER surface mineralogy',
      'Perchlorate, nitrate and gypsum-rich evaporite soil',
      'Flat to gently undulating gravel plain with sparse sand',
      'Mean rainfall below 1 mm per year with intense solar ultraviolet'
    ],
    why: 'The Atacama’s hyper-arid core approaches the dry limit for life on Earth and matches the soil oxidant chemistry sampled by Viking and Phoenix on Mars.'
  },
  {
    n: 4, type: 'earth_analog',
    name: 'Askja Caldera',
    loc: 'Central Highlands, Iceland · 65.03°N 16.75°W',
    alt: 'A dark volcanic caldera with snow patches and a milky lake',
    tag: 'NASADEM / Landsat 9',
    query: 'Askja caldera Iceland',
    clues: [
      'NASA NASADEM topography and Landsat 9 OLI imagery',
      'Unweathered tholeiitic basalt and rhyolitic pumice',
      'Steep caldera walls with a 45 km² nested collapse basin',
      'Sub-polar volcanic desert with persistent wind and little vegetation'
    ],
    why: 'Askja’s fresh basaltic terrain was used for Apollo geology training and remains a close morphological match for lunar maria and martian lava plains.'
  },
  {
    n: 5, type: 'earth_analog',
    name: 'Haughton Impact Structure, Devon Island',
    loc: 'Nunavut, Canada · 75.38°N 89.68°W',
    alt: 'A vast rocky polar island with a circular impact structure',
    tag: 'Landsat 9 / NASADEM',
    query: 'Devon Island Haughton crater',
    over: ['Flying over Devon Island (2665527817).jpg'],
    clues: [
      'NASA Landsat 9 OLI and NASADEM digital elevation',
      'Brecciated dolomite and impact melt in a Palaeozoic carbonate target',
      'A 23 km diameter complex crater with a central uplift',
      'Polar desert with permafrost, ground ice and almost no vegetation'
    ],
    why: 'Devon Island hosts the Haughton-Mars Project, the longest-running Mars analog field campaign, because its impact geology and polar desert climate mirror martian high latitudes.'
  },
  {
    n: 6, type: 'earth_analog',
    name: 'Tso Kar Salt Lake',
    loc: 'Ladakh, India · 33.31°N 77.99°E',
    alt: 'A pale salt-rimmed lake on a high-altitude plateau',
    tag: 'Landsat 9 / NASADEM',
    query: 'Tso Kar lake Ladakh',
    clues: [
      'NASA Landsat 9 OLI and NASADEM elevation',
      'Sodium chloride and sulphate evaporites around a shallow lake',
      'High-altitude playa at roughly 4,500 m with polygonal salt crusts',
      'Cold, arid plateau with freeze–thaw cycles and strong wind'
    ],
    why: 'Tso Kar is a cold salt playa at high elevation, useful for studying evaporite crusts and permafrost processes expected in martian paleolakes.'
  },
  {
    n: 7, type: 'earth_analog',
    name: 'Mauna Loa Lava Tubes',
    loc: 'Hawaiʻi, USA · 19.53°N 155.57°W',
    alt: 'A dark lava tube opening in a barren basalt field',
    tag: 'ASTER / NASADEM',
    query: 'Mauna Loa lava tube Hawaii',
    over: ['Thurston Lava Tube, Big Island.jpg'],
    clues: [
      'NASA ASTER thermal emissivity and NASADEM topography',
      'Fresh pahoehoe and ʻaʻā basalt with glassy surfaces',
      'Shield-volcano slopes cut by lava tubes and collapsed skylights',
      'Tropical high-elevation setting with cold nights and strong trade winds'
    ],
    why: 'Mauna Loa’s lava tubes host the HI-SEAS Mars habitat and provide accessible analogs for lunar lava-tube shelters and basaltic plains.'
  },
  {
    n: 8, type: 'earth_analog',
    name: 'Badwater Basin',
    loc: 'Death Valley, California, USA · 36.25°N 116.82°W',
    alt: 'A white salt pan with polygonal cracks beneath dark mountains',
    tag: 'Landsat 9 / SRTM',
    query: 'Badwater Basin Death Valley salt flat',
    over: ['Salt pool at Badwater Basin, Death Valley National Park, California.jpg'],
    clues: [
      'NASA Landsat 9 OLI and SRTM topography',
      'Halite, gypsum and borate salts over lakebed muds',
      'A vast polygonally cracked salt pan at 86 m below sea level',
      'One of the hottest places on Earth, with extreme evaporation'
    ],
    why: 'Badwater’s salt polygons and yardangs are a standard field analogue for martian evaporite basins and wind-scoured bedrock.'
  },
  {
    n: 9, type: 'earth_analog',
    name: 'Wadi Rum',
    loc: 'Maʻan Governorate, Jordan · 29.58°N 35.42°E',
    alt: 'Red sandstone cliffs and dunes rising from a sandy valley',
    tag: 'ASTER / Landsat 9',
    query: 'Wadi Rum Jordan desert',
    over: ['Wadi Rum, Jordan.jpg'],
    clues: [
      'NASA ASTER mineralogy and Landsat 9 OLI',
      'Iron-stained quartz sandstone and granite basement',
      'Towering vertical cliffs, natural arches and deep sand valleys',
      'Hot hyper-arid desert with flash floods and strong diurnal temperature swings'
    ],
    why: 'Wadi Rum’s red sand and jointed sandstone have made it a widely used Mars visual analog and a filming location for The Martian.'
  },
  {
    n: 10, type: 'earth_analog',
    name: 'Río Tinto',
    loc: 'Huelva, Spain · 37.69°N 6.55°W',
    alt: 'A river stained deep red flowing through dark, mineral-rich rocks',
    tag: 'Landsat 9 / ASTER',
    query: 'Rio Tinto river Spain red',
    over: ['IronInRocksMakeRiverRed.jpg'],
    clues: [
      'NASA Landsat 9 OLI and ASTER iron-oxide mapping',
      'Jarosite, hematite and goethite precipitated from acidic water',
      'A narrow river cutting through pyrite-rich Iberian Pyrite Belt rock',
      'Warm, semi-arid Mediterranean climate with extreme water acidity'
    ],
    why: 'Río Tinto’s iron-rich, acidic water precipitates jarosite and hematite, the same minerals that record ancient aqueous conditions at Meridiani Planum on Mars.'
  },
  {
    n: 11, type: 'earth_analog',
    name: 'Dallol Hydrothermal Field',
    loc: 'Danakil Depression, Ethiopia · 14.24°N 40.30°E',
    alt: 'Vivid yellow and green sulphur ponds on a white salt plain',
    tag: 'ASTER / GPM IMERG',
    query: 'Dallol Ethiopia sulphur springs',
    over: ['A Sulphur Pond, Danakil Depression, Ethiopia.jpg'],
    clues: [
      'NASA ASTER thermal and mineral mapping',
      'Sulphur, halite, potash and iron oxide crusts',
      'Hydrothermal mounds and brine pools below sea level',
      'One of the hottest, most acidic and most saline places on Earth'
    ],
    why: 'Dallol’s hydrothermal sulphur and salt chemistry is a terrestrial end-member for acidic, evaporating fluids proposed for early Mars.'
  },
  {
    n: 12, type: 'earth_analog',
    name: 'Timanfaya Lava Field',
    loc: 'Lanzarote, Canary Islands, Spain · 29.03°N 13.63°W',
    alt: 'Black basalt lava flows and cinder cones under a dry sky',
    tag: 'NASADEM / Landsat 9',
    query: 'Timanfaya Lanzarote lava',
    over: ['Lanzarote May 2010 - lava fields at Timanfaya National Park - panoramio.jpg'],
    clues: [
      'NASA NASADEM topography and Landsat 9 OLI',
      'Recent basaltic tephra, ʻaʻā and pahoehoe flows',
      'A young volcanic field with cinder cones and lava tubes',
      'Arid trade-wind climate with very little vegetation'
    ],
    why: 'Lanzarote’s 18th-century eruptions left pristine basaltic surfaces that European astronauts use for planetary geology training.'
  },

  {
    n: 13, type: 'moon',
    name: 'Shackleton Crater',
    loc: 'Lunar South Pole · 89.9°S 0.0°E',
    alt: 'A deep polar lunar crater with a sharp rim and shadowed floor',
    tag: 'LROC NAC / Diviner',
    query: 'Shackleton crater Moon south pole',
    over: ['Shackleton Crater.jpg'],
    clues: [
      'NASA LRO LROC Narrow Angle Camera and Diviner radiometer',
      'Anorthositic highland crust with impact melt on the rim',
      'About 21 km across with a 4.2 km deep floor and permanent shadows',
      'Cryogenic permanently shadowed regions beside illuminated rim peaks'
    ],
    why: 'Shackleton is the prime Artemis candidate because its rim receives near-continuous sunlight while its floor traps water ice in permanent shadow.'
  },
  {
    n: 14, type: 'moon',
    name: 'Mare Tranquillitatis',
    loc: 'Lunar Nearside · 8.5°N 31.4°E',
    alt: 'A smooth dark basaltic lunar plain dotted with small craters',
    tag: 'LROC WAC',
    query: 'Mare Tranquillitatis Apollo 11',
    over: ['Constellation Region of Interest at Mare Tranquillitatis (LROC163 - M104376385 thumb).png'],
    clues: [
      'NASA LRO LROC Wide Angle Camera and Clementine albedo',
      'Titanium-rich basalt with high iron content',
      'A flat mare plain with low relief and sparse small craters',
      'Full vacuum, extreme day–night temperature contrast'
    ],
    why: 'The Sea of Tranquility is where Apollo 11 landed, and its titanium-rich basalt is a key reference for lunar mare volcanism.'
  },
  {
    n: 15, type: 'moon',
    name: 'Tycho Crater',
    loc: 'Southern Lunar Highlands · 43.3°S 11.2°W',
    alt: 'A bright crater with a central peak and long radiating rays',
    tag: 'LROC NAC',
    query: 'Tycho crater Moon',
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Anorthositic highland material with impact melt ponds',
      'About 86 km across with a 4.7 km central peak and bright rays',
      'Deep vacuum with one of the youngest large lunar crater ages'
    ],
    why: 'Tycho is the archetype of a young complex crater, with terraces, melt and rays that help calibrate crater-age dating across the Solar System.'
  },
  {
    n: 16, type: 'moon',
    name: 'Aristarchus Plateau',
    loc: 'Oceanus Procellarum · 23.7°N 47.4°W',
    alt: 'A bright lunar plateau cut by a winding valley',
    tag: 'LROC WAC / Diviner',
    query: 'Aristarchus plateau Moon',
    clues: [
      'NASA LRO LROC and Diviner thermal data',
      'Bright highland material plus dark pyroclastic glass deposits',
      'A raised plateau beside Vallis Schröteri, a giant sinuous rille',
      'Highly reflective surface with strong thermal anomalies'
    ],
    why: 'Aristarchus is the brightest large lunar feature and hosts volcanic glasses that record explosive lunar volcanism.'
  },
  {
    n: 17, type: 'moon',
    name: 'Marius Hills',
    loc: 'Oceanus Procellarum · 14.2°N 55.9°W',
    alt: 'Clustered volcanic domes and winding rilles on dark lunar plains',
    tag: 'LROC NAC',
    query: 'Marius Hills Moon domes',
    clues: [
      'NASA LRO LROC NAC and Mini-RF radar',
      'Basaltic domes with possible silicic differentiates',
      'A volcanic field of more than 200 domes and lava tubes',
      'Vacuum with low thermal inertia across the domes'
    ],
    why: 'Marius Hills contains the densest known lunar volcanic dome field and a confirmed lava-tube skylight, a candidate base shelter.'
  },
  {
    n: 18, type: 'moon',
    name: 'Hadley Rille',
    loc: 'Apollo 15 site, Hadley–Apennine · 26.13°N 3.63°E',
    alt: 'A winding channel cutting across a lunar plain beside steep mountains',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Hadley Rille Apollo 15',
    over: ['Apollo 15 - Hadley Rille from orbit.jpg'],
    clues: [
      'Apollo 15 Hasselblad photography and LRO LROC',
      'Mare basalt beside ancient highland anorthosite',
      'A sinuous rille about 1.5 km wide and 400 m deep',
      'Vacuum with a landslide-scarred rille wall'
    ],
    why: 'Apollo 15 explored Hadley Rille, showing how flowing lava carved sinuous channels across lunar mare plains.'
  },
  {
    n: 19, type: 'moon',
    name: 'Copernicus Crater',
    loc: 'Oceanus Procellarum · 9.62°N 20.08°W',
    alt: 'A large complex crater with terraced walls and central peaks',
    tag: 'LROC NAC',
    query: 'Copernicus crater Moon',
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Highland anorthosite excavated through mare basalt',
      'About 93 km across with terraces, melt and a central peak cluster',
      'Vacuum with bright ejecta rays crossing nearby maria'
    ],
    why: 'Copernicus is a textbook complex impact crater and a key calibration point for lunar stratigraphy.'
  },

  {
    n: 20, type: 'mars',
    name: 'Jezero Crater Delta',
    loc: 'Syrtis Major Quadrangle, Mars · 18.38°N 77.58°E',
    alt: 'Layered delta deposits inside a dry martian crater',
    tag: 'Mastcam-Z / HiRISE',
    query: 'Jezero crater delta Mars',
    over: ['Jezero Crater delta ESA23163264.jpeg'],
    clues: [
      'NASA Perseverance Mastcam-Z and MRO HiRISE',
      'Clay, carbonate and sulphate minerals in layered sediments',
      'A 45 km crater with a preserved river delta and fan front',
      'Thin CO₂ atmosphere with dust storms and extreme cold'
    ],
    why: 'Jezero’s delta is Perseverance’s landing site and preserves a ancient lake that could have hosted microbial life.'
  },
  {
    n: 21, type: 'mars',
    name: 'Bagnold Dunes, Gale Crater',
    loc: 'Aeolis Quadrangle, Mars · 5.37°S 137.44°E',
    alt: 'Dark sand dunes rippling across a rocky martian landscape',
    tag: 'Curiosity Mastcam / HiRISE',
    query: 'Bagnold dunes Gale crater Mars',
    over: ['Namib dune, Gale Crater Mars.jpg'],
    clues: [
      'NASA Curiosity Mastcam and MRO HiRISE',
      'Basaltic sand rich in olivine and magnetite',
      'Active aeolian dunes climbing the flank of Mount Sharp',
      'Thin atmosphere with migrating sand and seasonal winds'
    ],
    why: 'Bagnold Dunes are the first active extraterrestrial dunes studied in place, revealing how wind moves basaltic sand on Mars.'
  },
  {
    n: 22, type: 'mars',
    name: 'Olympus Mons',
    loc: 'Tharsis Rise, Mars · 18.65°N 133.8°W',
    alt: 'A gigantic shield volcano with a summit caldera above the horizon',
    tag: 'MOLA / HiRISE',
    query: 'Olympus Mons Mars',
    over: ['Olympus Mons - ESA Mars Express.png'],
    clues: [
      'NASA MGS MOLA topography and MRO HiRISE',
      'Basaltic lava flows with a summit caldera complex',
      'About 22 km high and 600 km wide, the largest volcano known',
      'Thin cold atmosphere with a global dust cycle'
    ],
    why: 'Olympus Mons is the Solar System’s tallest volcano and records long-lived basaltic volcanism on a one-plate planet.'
  },
  {
    n: 23, type: 'mars',
    name: 'Valles Marineris',
    loc: 'Coprates Quadrangle, Mars · 13.9°S 59.2°W',
    alt: 'A vast canyon system with layered walls on Mars',
    tag: 'MOLA / CTX',
    query: 'Valles Marineris Mars canyon',
    over: ['Mars - Valles Marineris - ESA Mars Express (53342129949).jpg'],
    clues: [
      'NASA MGS MOLA and MRO CTX imagery',
      'Layered sedimentary and volcanic walls with sulphate deposits',
      'A canyon system over 4,000 km long and up to 7 km deep',
      'Thin atmosphere with slope winds and dust devils'
    ],
    why: 'Valles Marineris exposes kilometres of martian crust and is the largest canyon system in the Solar System.'
  },
  {
    n: 24, type: 'mars',
    name: 'Korolev Crater',
    loc: 'Northern Lowlands, Mars · 73.0°N 165.0°E',
    alt: 'A pale ice-filled crater surrounded by dark martian terrain',
    tag: 'MOLA / HRSC',
    query: 'Korolev crater Mars ice',
    over: ['Perspective view of Korolev crater.jpg'],
    clues: [
      'NASA MGS MOLA and Mars Express HRSC imagery',
      'Water ice with a thin seasonal frost cover',
      'About 82 km across with a domed ice deposit 1.8 km thick',
      'Cold polar setting where ice persists inside the crater'
    ],
    why: 'Korolev’s ice-filled crater is a climate archive and a key target for understanding ancient and modern water on Mars.'
  },
  {
    n: 25, type: 'mars',
    name: 'Home Plate, Gusev Crater',
    loc: 'Gusev Crater, Mars · 14.57°S 175.47°E',
    alt: 'Layered volcanic rock outcrops on a dusty martian plain',
    tag: 'Spirit Pancam / HiRISE',
    query: 'Home Plate Gusev crater Spirit',
    over: ['Home Plate by MRO.jpg'],
    clues: [
      'NASA Spirit Pancam and MRO HiRISE',
      'Opaline silica and iron sulphate in volcanic hydrothermal deposits',
      'A raised plateau of layered volcaniclastics inside a crater',
      'Thin dry atmosphere with pervasive dust'
    ],
    why: 'Home Plate’s silica-rich deposits record ancient hydrothermal activity, one of the strongest habitable-environment candidates found by Spirit.'
  }
];
