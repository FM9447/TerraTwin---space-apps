/**
 * Cosmic Detective — Specialist tier (levels 51–75)
 * 12 Earth analogs · 7 lunar features · 6 martian features
 */
export default [
  {
    n: 51, type: 'earth_analog',
    name: 'Teide Volcano',
    loc: 'Tenerife, Canary Islands, Spain · 28.27°N 16.64°W',
    alt: 'A high volcanic peak rising above a barren caldera',
    tag: 'ASTER / NASADEM',
    query: 'Teide volcano Tenerife caldera',
    clues: [
      'NASA ASTER thermal mapping and NASADEM',
      'Trachytic and basaltic lava with pumice fall deposits',
      'A 3,715 m stratovolcano inside a large caldera',
      'Subtropical high-altitude climate with strong ultraviolet'
    ],
    why: 'Teide’s volcanic terrain is used by ESA’s PANGAEA astronaut training because its lava fields and calderas resemble planetary surfaces.'
  },
  {
    n: 52, type: 'earth_analog',
    name: 'Pico do Fogo',
    loc: 'Fogo, Cape Verde · 14.95°N 24.35°W',
    alt: 'A steep volcanic cone rising from a wide caldera',
    tag: 'Landsat 9 / ASTER',
    query: 'Pico do Fogo Cape Verde volcano',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Alkaline basalt and phonolite lavas',
      'A 2,829 m cone inside an 8 km wide caldera',
      'Arid trade-wind climate with episodic explosive eruptions'
    ],
    why: 'Fogo’s young basaltic caldera is a Mars analog studied for lava–water interactions and volcanic slope processes.'
  },
  {
    n: 53, type: 'earth_analog',
    name: 'Erta Ale Lava Lake',
    loc: 'Afar Region, Ethiopia · 13.60°N 40.67°E',
    alt: 'A glowing lava lake inside a dark basaltic shield volcano',
    tag: 'ASTER / MODIS',
    query: 'Erta Ale lava lake Ethiopia',
    clues: [
      'NASA ASTER and MODIS thermal detection',
      'Basaltic lava with a persistent lava lake',
      'A low shield volcano in the Afar Depression',
      'Extreme heat and aridity below sea level'
    ],
    why: 'Erta Ale’s long-lived lava lake provides rare direct observations of basaltic magma dynamics relevant to lunar mare volcanism.'
  },
  {
    n: 54, type: 'earth_analog',
    name: 'Deception Island',
    loc: 'South Shetland Islands, Antarctica · 62.97°S 60.65°W',
    alt: 'A volcanic caldera with dark beaches and snow-covered slopes',
    tag: 'Landsat 9 / MODIS',
    query: 'Deception Island Antarctica volcano',
    clues: [
      'NASA Landsat 9 OLI and MODIS surface temperature',
      'Basaltic andesite tephra with hydrothermal alteration',
      'A horseshoe-shaped caldera flooded by the sea',
      'Polar maritime climate with strong winds and snow'
    ],
    why: 'Deception Island’s caldera and volcanic sediments are a cold-climate analog for cryovolcanic and hydrothermal processes on icy worlds.'
  },
  {
    n: 55, type: 'earth_analog',
    name: 'Blood Falls, Taylor Glacier',
    loc: 'McMurdo Dry Valleys, Antarctica · 77.72°S 162.27°E',
    alt: 'A rust-red stain flowing from the face of a blue glacier',
    tag: 'Landsat 9 / ASTER',
    query: 'Blood Falls Antarctica Taylor Glacier',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Iron-rich, sulphate-bearing brine with microbial communities',
      'A subglacial brine outflow at the glacier tongue',
      'Extreme cold and aridity with no liquid surface water'
    ],
    why: 'Blood Falls shows how subglacial brine can sustain life without sunlight, a model for potential habitats beneath martian ice.'
  },
  {
    n: 56, type: 'earth_analog',
    name: 'Don Juan Pond',
    loc: 'Wright Valley, Antarctica · 77.57°S 161.18°E',
    alt: 'A shallow, extremely salty pond in a frozen polar valley',
    tag: 'Landsat 9 / MODIS',
    query: 'Don Juan Pond Antarctica',
    clues: [
      'NASA Landsat 9 OLI and MODIS',
      'Calcium chloride brine with minor sulphate salts',
      'A shallow hypersaline pond that stays liquid in extreme cold',
      'Polar desert with katabatic winds and intense sublimation'
    ],
    why: 'Don Juan Pond is the most saline natural water body on Earth and stays liquid below −40°C, informing models of brines on Mars.'
  },
  {
    n: 57, type: 'earth_analog',
    name: 'Erg Chebbi',
    loc: 'Morocco · 31.15°N 4.00°W',
    alt: 'Tall orange star dunes rising from a rocky desert',
    tag: 'Landsat 9 / ASTER',
    query: 'Erg Chebbi dunes Morocco',
    over: ['Erg Chebbi in the evening light.jpg'],
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Quartz sand with iron-oxide coatings',
      'Star dunes reaching about 150 m high',
      'Hot hyper-arid desert with strong seasonal winds'
    ],
    why: 'Erg Chebbi’s star dunes are a close terrestrial analog for the complex dune fields imaged by orbiters on Mars.'
  },
  {
    n: 58, type: 'earth_analog',
    name: 'Pinnacles Desert',
    loc: 'Western Australia · 30.60°S 115.16°E',
    alt: 'Hundreds of limestone pillars rising from yellow sand',
    tag: 'Landsat 9 / ASTER',
    query: 'Pinnacles desert Nambung Australia',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Calcrete and limestone pillars formed from weathered shell sand',
      'Thousands of pillars up to 5 m tall in mobile sand',
      'Mediterranean semi-arid climate with strong coastal winds'
    ],
    why: 'The Pinnacles’ wind-exposed carbonate pillars are used as an analog for aeolian deflation and cemented horizons on Mars.'
  },
  {
    n: 59, type: 'earth_analog',
    name: 'Goblin Valley',
    loc: 'Utah, USA · 38.57°N 110.71°W',
    alt: 'Mushroom-shaped rock hoodoos standing on a dry valley floor',
    tag: 'Landsat 9 / NASADEM',
    query: 'Goblin Valley State Park hoodoos Utah',
    over: ['Utah - North America - Goblin Valley State Park - Hoodoos (4892276983).jpg'],
    clues: [
      'NASA Landsat 9 OLI and NASADEM',
      'Entrada sandstone eroded into hoodoos and pedestals',
      'Dense clusters of metre-scale rock spires',
      'High desert with large diurnal temperature swings'
    ],
    why: 'Goblin Valley’s hoodoos demonstrate differential erosion of soft sedimentary layers, a process observed in martian layered terrain.'
  },
  {
    n: 60, type: 'earth_analog',
    name: 'Mono Lake',
    loc: 'California, USA · 38.00°N 119.01°W',
    alt: 'A blue alkaline lake with white tufa towers along the shore',
    tag: 'Landsat 9 / ASTER',
    query: 'Mono Lake tufa California',
    clues: [
      'NASA Landsat 9 OLI and ASTER',
      'Calcium carbonate tufa and alkaline brine',
      'A closed-basin lake with exposed tufa towers',
      'Semi-arid high-desert climate with strong evaporation'
    ],
    why: 'Mono Lake’s tufa and alkaline chemistry are studied as analogs for ancient lake deposits and carbonate formation on Mars.'
  },
  {
    n: 61, type: 'earth_analog',
    name: 'Landmannalaugar',
    loc: 'Icelandic Highlands · 63.99°N 19.06°W',
    alt: 'Colorful rhyolite mountains and steaming geothermal ground',
    tag: 'ASTER / Landsat 9',
    query: 'Landmannalaugar Iceland rhyolite',
    clues: [
      'NASA ASTER mineral mapping and Landsat 9 OLI',
      'Rhyolite, obsidian and hydrothermally altered rock',
      'Coloured mountains cut by glacial valleys',
      'Sub-arctic climate with geothermal heat and strong wind'
    ],
    why: 'Landmannalaugar’s hydrothermally altered volcanic terrain is a Mars analog for acid-sulphate weathering.'
  },
  {
    n: 62, type: 'earth_analog',
    name: 'Holuhraun Lava Field',
    loc: 'Icelandic Highlands · 64.85°N 16.83°W',
    alt: 'A broad field of fresh black lava with steaming vents',
    tag: 'Landsat 9 / NASADEM',
    query: 'Holuhraun lava field Iceland',
    over: ['Bárðarbunga - Holuhraun (14971302084).jpg'],
    clues: [
      'NASA Landsat 9 OLI and NASADEM',
      'Fresh tholeiitic basalt with glassy crusts',
      'An 85 km² flood-basalt flow from a 2014–2015 fissure eruption',
      'Sub-polar desert with little vegetation and strong wind'
    ],
    why: 'Holuhraun produced a large young basalt flow that scientists use to calibrate remote sensing of lunar and martian lava surfaces.'
  },

  {
    n: 63, type: 'moon',
    name: 'Taurus–Littrow Valley',
    loc: 'Apollo 17 site, Mare Serenitatis rim · 20.19°N 30.77°E',
    alt: 'A deep lunar valley between steep mountains and a dark plain',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Taurus Littrow Apollo 17 Moon',
    over: ['Taurus-Littrow valley AS17-P-3026.jpg'],
    clues: [
      'Apollo 17 Hasselblad photography and LRO LROC',
      'Mare basalt, highland breccia and orange volcanic glass',
      'A narrow valley with steep massifs and a basaltic floor',
      'Vacuum with a thin dust layer and strong thermal contrast'
    ],
    why: 'Apollo 17 explored Taurus–Littrow and discovered orange volcanic glass, evidence of explosive lunar volcanism.'
  },
  {
    n: 64, type: 'moon',
    name: 'Descartes Highlands',
    loc: 'Apollo 16 site · 8.97°S 15.50°E',
    alt: 'A bright, heavily cratered lunar highland plain',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Descartes Highlands Apollo 16 Moon',
    over: ['Apollo 16 landing site AS16-P-4563 subframe.jpg'],
    clues: [
      'Apollo 16 Hasselblad photography and LRO LROC',
      'Anorthositic highland breccia and impact melt',
      'A bright, rugged highland plain with numerous craters',
      'Vacuum with a thick, mature regolith'
    ],
    why: 'Apollo 16 sampled the lunar highlands at Descartes, helping establish that the bright terrains are ancient anorthositic crust.'
  },
  {
    n: 65, type: 'moon',
    name: 'Fra Mauro Formation',
    loc: 'Apollo 14 site · 3.64°S 17.47°W',
    alt: 'A rolling lunar highland terrain with small craters',
    tag: 'Apollo Hasselblad / LROC',
    query: 'Fra Mauro Apollo 14 Moon',
    over: ['Trail of Discovery at Fra Mauro (LROC105).jpg'],
    clues: [
      'Apollo 14 Hasselblad photography and LRO LROC',
      'Impact breccia and ejecta from the Imbrium basin',
      'A hummocky highland plain near a large crater',
      'Vacuum with a mature, cratered regolith'
    ],
    why: 'Apollo 14 landed at Fra Mauro to sample ejecta from the Imbrium impact, a key event in lunar history.'
  },
  {
    n: 66, type: 'moon',
    name: 'Plato Crater',
    loc: 'Lunar Nearside · 51.6°N 9.4°W',
    alt: 'A large crater with a smooth dark floor and bright rim',
    tag: 'LROC NAC',
    query: 'Plato crater Moon',
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Dark basaltic floor surrounded by highland rim material',
      'About 101 km across with a smooth, flooded interior',
      'Vacuum with a sharp rim and few interior craters'
    ],
    why: 'Plato’s dark, lava-flooded floor contrasts sharply with its bright rim, illustrating post-impact mare flooding.'
  },
  {
    n: 67, type: 'moon',
    name: 'Clavius Crater',
    loc: 'Southern Lunar Highlands · 58.4°S 14.4°W',
    alt: 'A huge ancient crater with a chain of smaller craters',
    tag: 'LROC WAC',
    query: 'Clavius crater Moon',
    clues: [
      'NASA LRO LROC Wide Angle Camera',
      'Ancient anorthositic highland crust',
      'About 231 km across with a chain of interior craters',
      'Vacuum with heavily degraded, ancient topography'
    ],
    why: 'Clavius is one of the largest lunar craters and a classic example of an ancient, heavily modified highland surface.'
  },
  {
    n: 68, type: 'moon',
    name: 'Rupes Recta (Straight Wall)',
    loc: 'Mare Nubium · 25.2°S 7.8°W',
    alt: 'A long, straight cliff cutting across a lunar plain',
    tag: 'LROC NAC',
    query: 'Rupes Recta Moon straight wall',
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Basaltic mare surface cut by a fault scarp',
      'A 110 km long, steep fault scarp',
      'Vacuum with a sharp topographic break'
    ],
    why: 'Rupes Recta is the Moon’s best-known fault scarp, showing tectonic deformation of mare basalt.'
  },
  {
    n: 69, type: 'moon',
    name: 'Vallis Schröteri',
    loc: 'Oceanus Procellarum · 26.0°N 51.0°W',
    alt: 'A winding, deep channel carved into a lunar plain',
    tag: 'LROC NAC',
    query: 'Vallis Schroteri Moon rille',
    over: ['Vallis Schroteri.jpg'],
    clues: [
      'NASA LRO LROC Narrow Angle Camera',
      'Basaltic lava channel with mare deposits',
      'About 160 km long and up to 1 km deep',
      'Vacuum with a meandering sinuous rille'
    ],
    why: 'Vallis Schröteri is the largest sinuous rille on the Moon, formed by flowing lava during mare volcanism.'
  },

  {
    n: 70, type: 'mars',
    name: 'Mount Sharp, Aeolis Mons',
    loc: 'Gale Crater, Mars · 5.08°S 137.85°E',
    alt: 'Layered sedimentary mountain rising from a martian crater floor',
    tag: 'Curiosity Mastcam / HiRISE',
    query: 'Mount Sharp Gale crater Mars',
    clues: [
      'NASA Curiosity Mastcam and MRO HiRISE',
      'Layered mudstone, sandstone and sulphate-bearing sediments',
      'A 5.5 km high mound in the centre of Gale Crater',
      'Thin atmosphere with active dust and seasonal methane'
    ],
    why: 'Mount Sharp’s layers record a transition from ancient lakes to dry, oxidizing conditions on early Mars.'
  },
  {
    n: 71, type: 'mars',
    name: 'Greenheugh Pediment',
    loc: 'Gale Crater, Mars · 4.7°S 137.4°E',
    alt: 'A sloping sandstone-capped surface on a martian mountain',
    tag: 'Curiosity Mastcam / HiRISE',
    query: 'Greenheugh pediment Mars Curiosity',
    clues: [
      'NASA Curiosity Mastcam and MRO HiRISE',
      'Sandstone capping over eroded mudstone',
      'A sloping pediment with wind-scoured bedrock',
      'Thin atmosphere with active sand movement'
    ],
    why: 'The Greenheugh pediment records a period when wind-carved sandstone capped older lake deposits on Mount Sharp.'
  },
  {
    n: 72, type: 'mars',
    name: 'Elysium Mons',
    loc: 'Elysium Planitia, Mars · 25.0°N 147.2°E',
    alt: 'A large martian shield volcano rising above the plains',
    tag: 'MOLA / HiRISE',
    query: 'Elysium Mons Mars',
    clues: [
      'NASA MGS MOLA and MRO HiRISE',
      'Basaltic lava flows and volcanic channels',
      'About 13.9 km high and 240 km wide',
      'Thin cold atmosphere with dust activity'
    ],
    why: 'Elysium Mons is a major martian volcano whose flanks show lava channels and evidence of recent volcanic resurfacing.'
  },
  {
    n: 73, type: 'mars',
    name: 'Arsia Mons',
    loc: 'Tharsis Montes, Mars · 8.4°S 120.1°W',
    alt: 'A huge martian volcano with a wide summit caldera',
    tag: 'MOLA / CTX',
    query: 'Arsia Mons Mars',
    over: ['Arsia Mons mosaic.jpg'],
    clues: [
      'NASA MGS MOLA and MRO CTX',
      'Basaltic lava flows and a large summit caldera',
      'About 435 km wide with a 110 km caldera',
      'Thin atmosphere with cold, dusty conditions'
    ],
    why: 'Arsia Mons hosts a massive caldera and lava flows that record long-lived Tharsis volcanism.'
  },
  {
    n: 74, type: 'mars',
    name: 'Alba Mons',
    loc: 'Tharsis Rise, Mars · 40.5°N 110.0°W',
    alt: 'A broad, low volcanic bulge on the martian surface',
    tag: 'MOLA / CTX',
    query: 'Alba Mons Mars volcano',
    over: ['Alba Mons zoom.jpg'],
    clues: [
      'NASA MGS MOLA and MRO CTX',
      'Basaltic lava plains with wrinkle ridges',
      'A low-profile volcano over 1,000 km wide',
      'Thin atmosphere with pervasive dust'
    ],
    why: 'Alba Mons is the largest volcano on Mars by area, with a broad flow field that records immense flood volcanism.'
  },
  {
    n: 75, type: 'mars',
    name: 'Chasma Boreale',
    loc: 'North Polar Plateau, Mars · 83.0°N 47.0°W',
    alt: 'A deep canyon cutting through layered polar ice on Mars',
    tag: 'MOLA / HRSC',
    query: 'Chasma Boreale Mars polar canyon',
    clues: [
      'NASA MGS MOLA and Mars Express HRSC',
      'Water ice and dust layers in the polar cap',
      'A canyon about 500 km long cutting the north polar plateau',
      'Extremely cold polar conditions with seasonal frost'
    ],
    why: 'Chasma Boreale exposes layers of the martian north polar cap, a record of climate cycles.'
  }
];
