const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');

/** Every editorial image is streamed from MongoDB via our own API. */
export function assetUrl(key) {
  return `${API_BASE}/api/assets/${key}`;
}

export { API_BASE };

export const NAV_LINKS = [
  { id: 'worlds', num: '01', label: 'Worlds' },
  { id: 'mars', num: '02', label: 'Mars' },
  { id: 'moon', num: '03', label: 'Moon' },
  { id: 'compare', num: '04', label: 'Compare' },
  { id: 'gallery', num: '05', label: 'Gallery' },
  { id: 'game', num: '06', label: 'Game' }
];

export const HERO_STATS = [
  { count: 23, label: <>analogue sites<br />mapped</> },
  { count: 3, label: <>worlds<br />compared</> },
  { count: 10, label: <>levels in<br />the game</> }
];

export const HERO_ORBS = [
  { key: 'earth', asset: 'earth-disc', depth: 0.9, name: 'Earth', gravity: '1.00\u00A0g', ring2: true, sat: 's1' },
  { key: 'mars', asset: 'mars-disc', depth: 1.4, name: 'Mars', gravity: '0.38\u00A0g', ring2: false, sat: 's2' },
  { key: 'moon', asset: 'moon-disc', depth: 0.6, name: 'Moon', gravity: '0.17\u00A0g', ring2: false, sat: null }
];

export const TICKER_TEXT =
  'ATACAMA ✦ DRY VALLEYS ✦ HAUGHTON ✦ TIMANFAYA ✦ RÍO TINTO ✦ CRATERS OF THE MOON ✦ METEOR CRATER ✦ MAUNA KEA ✦ ASKJA ✦ LAVA BEDS ✦\u00A0';

export const WORLDS = [
  {
    id: 'earth',
    className: 'world--earth',
    planet: 'var(--earth)',
    asset: 'earth-disc',
    alt: 'Earth seen from space, the Blue Marble photograph',
    tag: '● Home',
    index: 'E.01',
    name: 'Earth',
    desc: 'A living world of oceans, clouds and life, the only place we know where it all came together.',
    stats: [
      ['Diameter', '12,742\u00A0km'],
      ['Gravity', '1.00\u00A0g'],
      ['Mean temp', '15\u00A0°C'],
      ['Day / year', '24\u00A0h · 365\u00A0d'],
      ['From Earth', 'Home'],
      ['Moons', '1']
    ]
  },
  {
    id: 'mars',
    className: 'world--mars',
    planet: 'var(--mars)',
    asset: 'mars-disc',
    alt: 'The full disc of Mars in true colour',
    tag: '● The red one',
    index: 'M.02',
    name: 'Mars',
    desc: 'A cold desert world, rusted red by iron oxide. It once held rivers and may hide water ice today.',
    stats: [
      ['Diameter', '6,779\u00A0km'],
      ['Gravity', '0.38\u00A0g'],
      ['Mean temp', '−63\u00A0°C'],
      ['Day / year', '24.6\u00A0h · 687\u00A0d'],
      ['From Earth', '~225M\u00A0km'],
      ['Moons', '2']
    ]
  },
  {
    id: 'moon',
    className: 'world--moon',
    planet: 'var(--moon)',
    asset: 'moon-disc',
    alt: 'The full Moon',
    tag: '● Nearest neighbour',
    index: 'L.03',
    name: 'The Moon',
    desc: 'A still, grey world of ancient lava plains and craters, locked in orbit around Earth.',
    stats: [
      ['Diameter', '3,474\u00A0km'],
      ['Gravity', '0.17\u00A0g'],
      ['Mean temp', '−20\u00A0°C'],
      ['Rotation', '27.3\u00A0d'],
      ['From Earth', '384,400\u00A0km'],
      ['Moons', '0']
    ]
  }
];

export const GRAVITY_BARS = [
  { name: 'Earth', width: '100%', planet: 'var(--earth)', delay: '0ms', value: '1.00\u00A0g' },
  { name: 'Mars', width: '38%', planet: 'var(--mars)', delay: '120ms', value: '0.38\u00A0g' },
  { name: 'Moon', width: '17%', planet: 'var(--moon)', delay: '240ms', value: '0.17\u00A0g' }
];

export const FIDELITY_PILLARS = [
  {
    num: 'F.01',
    icon: 'landform',
    title: 'Landform',
    text: 'Dunes, craters, lava tubes and polygons that match the shapes found on another world.',
    percent: '92%'
  },
  {
    num: 'F.02',
    icon: 'chemistry',
    title: 'Chemistry',
    text: 'Acidic brines, iron oxides and sulphates that echo the minerals found on Mars.',
    percent: '78%'
  },
  {
    num: 'F.03',
    icon: 'life',
    title: 'Life',
    text: 'Extremophiles and stromatolites that hint at how life could cling on elsewhere.',
    percent: '64%'
  },
  {
    num: 'F.04',
    icon: 'operations',
    title: 'Operations',
    text: 'Isolation, communication delay and suit work that rehearse a real mission.',
    percent: '85%'
  }
];

export const FIDELITY_ICONS = {
  landform: (
    <>
      <path d="M3 19l6-11 4 7 3-4 5 8z" />
      <path d="M3 19h18" />
    </>
  ),
  chemistry: (
    <>
      <path d="M12 3l7 4v10l-7 4-7-4V7z" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  life: (
    <>
      <circle cx="8" cy="12" r="3" />
      <circle cx="15.5" cy="9" r="2" />
      <circle cx="16" cy="16" r="2.4" />
    </>
  ),
  operations: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  )
};

export const REALITY_ITEMS = [
  ['Air', 'A thick nitrogen-oxygen atmosphere that Mars and the Moon do not have.'],
  ['Water', 'Liquid water, ice and rain, even in the driest deserts.'],
  ['Gravity', '1\u00A0g here, versus 0.38\u00A0g on Mars and 0.17\u00A0g on the Moon.'],
  ['Life', 'Microbes, lichens and roots that colonise even extreme sites.']
];

const marsSite = (site) => ({ planet: 'mars', planetLabel: '◉ Mars analogue', ...site });

export const MARS_SITES = [
  marsSite({
    id: 'atacama',
    asset: 'atacama',
    alt: 'Bare banded hills in the Atacama desert, Chile',
    coord: '22.9°S · 68.2°W',
    country: 'Chile',
    type: 'Hyperarid · Rover testing',
    title: 'Atacama Desert',
    text: 'The driest non-polar desert on Earth. Instruments for Viking, Phoenix and ExoMars were tested in its Mars-like soils.',
    reality: 'Still has an oxygen atmosphere and rare rain.',
    source: 'ESA Catalogue · ch. 2'
  }),
  marsSite({
    id: 'mcmurdo',
    asset: 'mcmurdo',
    alt: 'Bare rocky ridge in the McMurdo Dry Valleys, Antarctica',
    coord: '77.5°S · 162.3°E',
    country: 'Antarctica',
    type: 'Cold desert · Astrobiology',
    title: 'McMurdo Dry Valleys',
    text: 'Snow-free valleys that may not have seen rain for millions of years. Blood Falls stains the ice red with iron-rich brine.',
    reality: 'Summer meltwater and an oxygen atmosphere.',
    source: 'ESA Catalogue · ch. 1'
  }),
  marsSite({
    id: 'devon',
    asset: 'devon',
    alt: 'Aerial view of the barren Devon Island, Canada',
    coord: '75.4°N · 89.7°W',
    country: 'Canada',
    type: 'Impact · Isolation',
    title: 'Haughton Crater, Devon Island',
    text: 'A 23\u00A0km impact structure in a polar desert. NASA’s Haughton-Mars Project tests habitats and communication delay here.',
    reality: 'Earth gravity and slow polar weathering.',
    source: 'ESA Catalogue · ch. 10'
  }),
  marsSite({
    id: 'iceland',
    asset: 'iceland',
    alt: 'Astronauts training on dark volcanic rock in Iceland',
    coord: '64.9°N · 19.0°W',
    country: 'Iceland',
    type: 'Volcanic · Rover testing',
    title: 'Holuhraun & Krafla',
    text: 'Fissure-fed lava fields and altered basalt. Apollo crews trained here, and a Mars 2020 rover prototype was tested in 2019.',
    reality: 'Active ice and water, and an atmosphere.',
    source: 'ESA Catalogue · ch. 12'
  }),
  marsSite({
    id: 'timanfaya',
    asset: 'timanfaya',
    alt: 'Dark volcanic terrain of Timanfaya, Lanzarote',
    coord: '29.0°N · 13.6°W',
    country: 'Spain',
    type: 'Volcanic · Lava tubes',
    title: 'Timanfaya, Lanzarote',
    text: 'Pristine 18th-century lava and tubes. ESA’s Pangaea course trains astronauts in field geology on this island.',
    reality: 'An atmosphere and vegetation nearby.',
    source: 'ESA Pangaea · Planetary Analogue Catalogue'
  }),
  marsSite({
    id: 'rio-tinto',
    asset: 'rio-tinto',
    alt: 'The red, iron-rich water of the Rio Tinto in Spain',
    coord: '37.7°N · 6.6°W',
    country: 'Spain',
    type: 'Mineralogical · Astrobiology',
    title: 'Río Tinto',
    text: 'An acidic, iron-rich river precipitating jarosite and hematite, minerals also found at Meridiani Planum on Mars.',
    reality: 'The acidity comes from pyrite mining runoff, not Martian groundwater.',
    source: 'ESA Catalogue · ch. 23'
  })
];

const moonSite = (site) => ({ planet: 'moon', planetLabel: '◐ Moon analogue', ...site });

export const MOON_SITES = [
  moonSite({
    id: 'craters-moon',
    asset: 'craters-moon',
    alt: 'Black cinder cones of Craters of the Moon, Idaho',
    coord: '43.4°N · 113.5°W',
    country: 'USA',
    type: 'Volcanic · Apollo training',
    title: 'Craters of the Moon, Idaho',
    text: 'A sea of young basalt. Apollo 14 astronauts trained here to read volcanic terrain before walking on the Moon.',
    reality: 'Earth gravity and a thin atmosphere.',
    source: 'National Park Service · mission history'
  }),
  moonSite({
    id: 'cinder-lake',
    asset: 'cinder-lake',
    alt: 'The man-made Cinder Lake crater field in Arizona',
    coord: '35.3°N · 111.5°W',
    country: 'USA',
    type: 'Impact · Apollo training',
    title: 'Cinder Lake Crater Field',
    text: 'A crater field built in the 1960s from a Lunar Orbiter image, so Apollo crews could practise on the ground.',
    reality: 'Man-made, and far smaller than lunar crater fields.',
    source: 'ESA Catalogue · ch. 7'
  }),
  moonSite({
    id: 'meteor-crater',
    asset: 'meteor-crater',
    alt: 'The vast bowl of Meteor Crater in Arizona',
    coord: '35.0°N · 111.0°W',
    country: 'USA',
    type: 'Impact · Geology training',
    title: 'Meteor Crater, Arizona',
    text: 'A 1.2\u00A0km bowl roughly 50,000 years old. Astronauts studied impact geology here before the Apollo missions.',
    reality: 'Earth gravity and weathering.',
    source: 'ESA Catalogue · ch. 16'
  }),
  moonSite({
    id: 'mauna-kea',
    asset: 'mauna-kea',
    alt: 'Barren volcanic summit of Mauna Kea, Hawaii',
    coord: '19.8°N · 155.5°W',
    country: 'USA',
    type: 'Volcanic · Instrument testing',
    title: 'Mauna Kea, Hawaii',
    text: 'Apollo astronauts trained on these cinder slopes. NASA later tested lunar instruments and ISRU equipment here.',
    reality: 'An atmosphere, water, and cultural access limits.',
    source: 'Planetary Analogue Catalogue'
  }),
  moonSite({
    id: 'askja',
    asset: 'askja',
    alt: 'The blue crater lake of Askja, Iceland',
    coord: '65.0°N · 16.7°W',
    country: 'Iceland',
    type: 'Volcanic · Apollo training',
    title: 'Askja & Lambahraun',
    text: 'Black sands and craters where Apollo 11 and 12 crews learned field geology in the 1960s.',
    reality: 'Ice, water and an atmosphere.',
    source: 'ESA Catalogue · ch. 12'
  }),
  moonSite({
    id: 'lava-beds',
    asset: 'lava-beds',
    alt: 'A lava tube cave in Lava Beds National Monument, California',
    coord: '41.7°N · 121.5°W',
    country: 'USA',
    type: 'Lava tubes · Modelling',
    title: 'Lava Beds National Monument',
    text: 'Basaltic tubes and skylights used to model how lunar lava tubes could be mapped and eventually built in.',
    reality: 'Terrestrial tubes are about 30\u00A0m wide, far smaller than lunar ones.',
    source: 'Planetary Analogue Catalogue'
  })
];

export const MARS_PILLS = ['Dallol, Ethiopia', 'Svalbard, Norway', 'Tenerife, Spain', 'Pilbara, Australia', 'Namib, Namibia', 'Utah, USA', 'Boulby, UK'];
export const MOON_PILLS = ['Lanzarote, Spain', 'Haleakala, Hawaii', 'Pisgah Crater, California', 'Lonar Crater, India', 'Mistastin Lake, Canada', 'Sudbury, Canada'];

export const COMPARISONS = [
  {
    id: 'atacama-gale',
    after: 'gale',
    afterAlt: 'The rocky landscape of Mars, photographed by the Curiosity rover',
    before: 'atacama',
    beforeAlt: 'Valle de la Luna in Chile, an Earth analogue for Mars',
    labelA: '◉ Atacama · Earth',
    labelB: '✦ Gale Crater · Mars',
    aria: 'Comparison slider, drag to compare Earth and Mars',
    caption: 'Chile’s Atacama versus the real surface of Mars.',
    captionStrong: 'Used by NASA and ESA for rover testing.'
  },
  {
    id: 'idaho-apollo',
    after: 'aldrin',
    afterAlt: 'Astronaut Buzz Aldrin standing on the lunar surface',
    before: 'craters-moon',
    beforeAlt: 'Grey volcanic cinder field in Idaho, an Earth analogue for the Moon',
    labelA: '◉ Idaho · Earth',
    labelB: '◐ Apollo 11 · Moon',
    aria: 'Comparison slider, drag to compare Earth and the Moon',
    caption: 'Idaho’s volcanic cinders versus the surface of the Moon.',
    captionStrong: 'Apollo 14 trained on this lava field.'
  },
  {
    id: 'rio-rocknest',
    after: 'rocknest',
    afterAlt: 'A rocky Mars panorama from the Curiosity rover at Rocknest',
    before: 'rio-tinto',
    beforeAlt: 'The red, iron-rich water of the Rio Tinto in Spain',
    labelA: '◉ Río Tinto · Earth',
    labelB: '✦ Rocknest · Mars',
    aria: 'Comparison slider, drag to compare the Rio Tinto and Mars',
    caption: 'An acid river in Spain versus the iron-rich ground of Mars.',
    captionStrong: 'Both precipitate jarosite and hematite.'
  }
];

export const LOOKALIKES = [
  { id: 'bardenas', asset: 'bardenas', alt: 'Eroded badlands of Bardenas Reales, Spain', title: 'Bardenas Reales', meta: 'Spain · eroded badlands' },
  { id: 'goblin', asset: 'goblin', alt: 'Hoodoo rock formations in Goblin Valley, Utah', title: 'Goblin Valley', meta: 'Utah, USA · hoodoos' },
  { id: 'sarakiniko', asset: 'sarakiniko', alt: 'White volcanic rock at Sarakiniko, Milos, Greece', title: 'Sarakiniko', meta: 'Milos, Greece · white volcanic rock' },
  { id: 'pinnacles', asset: 'pinnacles', alt: 'Limestone pillars in the Pinnacles Desert, Western Australia', title: 'The Pinnacles', meta: 'Western Australia · limestone pillars' },
  { id: 'rummu', asset: 'rummu', alt: 'The flooded Rummu quarry in Estonia', title: 'Rummu Quarry', meta: 'Estonia · flooded limestone quarry' },
  { id: 'spotted-lake', asset: 'spotted-lake', alt: 'Mineral pools of Spotted Lake, Canada', title: 'Spotted Lake', meta: 'British Columbia, Canada · mineral pools' }
];

export const GALLERY_ITEMS = [
  { id: 'wadi-rum', asset: 'wadi-rum', alt: 'Red sandstone desert of Wadi Rum, Jordan', cat: 'earth', caption: 'Wadi Rum, Jordan · Earth, but filmed as Mars in The Martian', size: 'wide' },
  { id: 'mars-disc', asset: 'mars-disc', alt: 'Mars full disc', cat: 'mars', caption: 'Mars in true colour · OSIRIS', size: '' },
  { id: 'moon-disc', asset: 'moon-disc', alt: 'The full Moon', cat: 'moon', caption: 'The full Moon', size: '' },
  { id: 'valle-luna', asset: 'atacama', alt: 'Valle de la Luna, Chile', cat: 'earth', caption: 'Valle de la Luna, Atacama, Chile · a Mars analogue', size: 'tall' },
  { id: 'mcmurdo', asset: 'mcmurdo', alt: 'McMurdo Dry Valleys', cat: 'earth', caption: 'McMurdo Dry Valleys, Antarctica · the most Mars-like place on Earth', size: '' },
  { id: 'devon', asset: 'devon', alt: 'Devon Island from the air', cat: 'earth', caption: 'Devon Island, Canada · Haughton impact structure and the Haughton-Mars Project', size: 'wide' },
  { id: 'timanfaya', asset: 'timanfaya', alt: 'Timanfaya lava field, Lanzarote', cat: 'earth', caption: 'Timanfaya, Lanzarote · pristine 18th-century lava', size: '' },
  { id: 'rio-tinto', asset: 'rio-tinto', alt: 'Rio Tinto red river', cat: 'earth', caption: 'Río Tinto, Spain · acidic, iron-rich water that echoes Martian minerals', size: 'tall' },
  { id: 'dallol', asset: 'dallol', alt: 'Sulphur pond at Dallol, Ethiopia', cat: 'earth', caption: 'Dallol, Ethiopia · hyperacidic springs and vivid mineral crusts', size: '' },
  { id: 'craters-moon', asset: 'craters-moon', alt: 'Craters of the Moon lava field', cat: 'earth', caption: 'Craters of the Moon, Idaho · Apollo 14 trained on this lava field', size: 'wide' },
  { id: 'cinder-lake', asset: 'cinder-lake', alt: 'Cinder Lake crater field', cat: 'earth', caption: 'Cinder Lake Crater Field, Arizona · a man-made Apollo training ground', size: '' },
  { id: 'askja', asset: 'askja', alt: 'Viti crater, Askja', cat: 'earth', caption: 'Askja, Iceland · Apollo 11 and 12 geology training', size: '' },
  { id: 'gale', asset: 'gale', alt: 'Mars surface by Curiosity', cat: 'mars', caption: 'Gale Crater, Mars · photographed by the Curiosity rover', size: 'wide' },
  { id: 'wind-rock', asset: 'wind-rock', alt: 'A wind-carved rock on Mars', cat: 'mars', caption: 'Wind-carved rock, Mars · Curiosity, 2024', size: '' },
  { id: 'apollo17', asset: 'apollo17-pano', alt: 'Apollo 17 lunar panorama', cat: 'moon', caption: 'Apollo 17 · a panoramic view of the lunar surface', size: '' },
  { id: 'aldrin', asset: 'aldrin', alt: 'Buzz Aldrin on the Moon', cat: 'moon', caption: 'Buzz Aldrin, Apollo 11 · the Moon, 1969', size: '' }
];

export const GALLERY_FILTERS = [
  { id: 'all', label: 'All ✦' },
  { id: 'earth', label: '◉ Earth' },
  { id: 'mars', label: '✦ Mars' },
  { id: 'moon', label: '◐ Moon' }
];

export const SOURCES = [
  {
    type: '◉ Catalogue',
    name: 'ESA · The Catalogue of Planetary Analogues',
    desc: '30 sites with coordinates, geology, relevance and references.',
    href: 'http://esamultimedia.esa.int/docs/gsp/The_Catalogue_of_Planetary_Analogues.pdf'
  },
  {
    type: '◉ Agency',
    name: 'NASA · Analog Missions',
    desc: 'How NASA uses Earth and habitats to prepare for space.',
    href: 'https://www.nasa.gov/analog-missions/'
  },
  {
    type: '◉ Explorer',
    name: 'NASA · Planetary Analog Explorer',
    desc: 'A map of analogue sites around the world.',
    href: 'https://science.nasa.gov/solar-system/analog-explorer/'
  },
  {
    type: '◉ Overview',
    name: 'Wikipedia · Terrestrial analogue site',
    desc: 'The definition and the four fidelity criteria used above.',
    href: 'https://en.wikipedia.org/wiki/Terrestrial_analogue_site'
  },
  {
    type: '◉ Dataset',
    name: 'Planetary Analogue Catalogue',
    desc: '16 sites with limitations, hazards and image references.',
    href: 'https://github.com/rachellelecussan/planetary-analogue-catalogue'
  },
  {
    type: '◉ Directory',
    name: 'NASA Astrobiology · Field Sites',
    desc: 'Where scientists study life in extreme environments.',
    href: 'https://astrobiology.nasa.gov/research-locations/'
  }
];
