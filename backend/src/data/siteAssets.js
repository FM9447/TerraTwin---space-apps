/**
 * Editorial imagery used by the Twin Worlds landing page.
 *
 * The browser never loads these from Wikimedia. At seed time
 * `scripts/fetchSiteAssets.js` downloads them into `.cache/site-assets/` and
 * `src/db/seed.js` uploads them to the `siteassets` GridFS bucket. The API
 * streams them from MongoDB under the stable `/api/assets/:key` route.
 */
export const SITE_ASSETS = [
  {
    key: 'earth-disc',
    title: 'The Earth seen from Apollo 17.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/The%20Earth%20seen%20from%20Apollo%2017.jpg?width=1400',
    alt: 'Earth seen from space, the Blue Marble photograph',
    credit: 'NASA / Apollo 17 crew',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    key: 'mars-disc',
    title: 'OSIRIS Mars true color.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS%20Mars%20true%20color.jpg?width=1400',
    alt: 'The full disc of Mars in true colour',
    credit: 'ESA / OSIRIS / Wikimedia Commons',
    license: 'CC BY-SA 3.0 IGO',
    source_url: 'https://commons.wikimedia.org/wiki/File:OSIRIS_Mars_true_color.jpg'
  },
  {
    key: 'moon-disc',
    title: 'FullMoon2010.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/FullMoon2010.jpg?width=1400',
    alt: 'The full Moon',
    credit: 'Gregory H. Revera / Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    source_url: 'https://commons.wikimedia.org/wiki/File:FullMoon2010.jpg'
  },
  {
    key: 'atacama',
    title: 'Anfiteatro, Valle de la Luna, San Pedro de Atacama, Chile, 2016-02-01, DD 149.JPG',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG/1280px-Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG',
    alt: 'Bare banded hills in the Atacama desert, Chile',
    credit: 'Diego Delso / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    source_url: 'https://commons.wikimedia.org/wiki/File:Anfiteatro,_Valle_de_la_Luna,_San_Pedro_de_Atacama,_Chile,_2016-02-01,_DD_149.JPG'
  },
  {
    key: 'mcmurdo',
    title: 'Gargoyle Ridge in the McMurdo Dry Valleys in Antarctica (30877661786).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Gargoyle_Ridge_in_the_McMurdo_Dry_Valleys_in_Antarctica_%2830877661786%29.jpg/1280px-Gargoyle_Ridge_in_the_McMurdo_Dry_Valleys_in_Antarctica_%2830877661786%29.jpg',
    alt: 'Bare rocky ridge in the McMurdo Dry Valleys, Antarctica',
    credit: 'NASA / Wikimedia Commons',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Gargoyle_Ridge_in_the_McMurdo_Dry_Valleys_in_Antarctica_(30877661786).jpg'
  },
  {
    key: 'devon',
    title: 'Flying over Devon Island (2665527817).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Flying_over_Devon_Island_%282665527817%29.jpg/1280px-Flying_over_Devon_Island_%282665527817%29.jpg',
    alt: 'Aerial view of the barren Devon Island, Canada',
    credit: 'NASA / Wikimedia Commons',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Flying_over_Devon_Island_(2665527817).jpg'
  },
  {
    key: 'iceland',
    title: 'Artemis II Crew geology training in Iceland - jsc2024e055198.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Artemis_II_Crew_geology_training_in_Iceland_-_jsc2024e055198.jpg/1280px-Artemis_II_Crew_geology_training_in_Iceland_-_jsc2024e055198.jpg',
    alt: 'Astronauts training on dark volcanic rock in Iceland',
    credit: 'NASA / Josh Valcarcel',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Artemis_II_Crew_geology_training_in_Iceland_-_jsc2024e055198.jpg'
  },
  {
    key: 'timanfaya',
    title: 'Timanfaya - Lanzarote 02.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Timanfaya_-_Lanzarote_02.jpg/1280px-Timanfaya_-_Lanzarote_02.jpg',
    alt: 'Dark volcanic terrain of Timanfaya, Lanzarote',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Timanfaya_-_Lanzarote_02.jpg'
  },
  {
    key: 'rio-tinto',
    title: 'IronInRocksMakeRiverRed.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/IronInRocksMakeRiverRed.jpg/1280px-IronInRocksMakeRiverRed.jpg',
    alt: 'The red, iron-rich water of the Rio Tinto in Spain',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:IronInRocksMakeRiverRed.jpg'
  },
  {
    key: 'craters-moon',
    title: 'Cinder cone complex (Holocene, ~2.4 ka; Big Craters, Craters of the Moon Lava Field, Snake River Plain, Idaho, USA) 7.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cinder_cone_complex_%28Holocene%2C_~2.4_ka%3B_Big_Craters%2C_Craters_of_the_Moon_Lava_Field%2C_Snake_River_Plain%2C_Idaho%2C_USA%29_7.jpg/1280px-Cinder_cone_complex_%28Holocene%2C_~2.4_ka%3B_Big_Craters%2C_Craters_of_the_Moon_Lava_Field%2C_Snake_River_Plain%2C_Idaho%2C_USA%29_7.jpg',
    alt: 'Black cinder cones of Craters of the Moon, Idaho',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Cinder_cone_complex_(Holocene,_~2.4_ka;_Big_Craters,_Craters_of_the_Moon_Lava_Field,_Snake_River_Plain,_Idaho,_USA)_7.jpg'
  },
  {
    key: 'cinder-lake',
    title: 'Cinder Lake Crater Field 1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Cinder_Lake_Crater_Field_1.jpg',
    alt: 'The man-made Cinder Lake crater field in Arizona',
    credit: 'NASA / USGS',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Cinder_Lake_Crater_Field_1.jpg'
  },
  {
    key: 'meteor-crater',
    title: '2019 Meteor Crater, Arizona.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2019_Meteor_Crater%2C_Arizona.jpg/1280px-2019_Meteor_Crater%2C_Arizona.jpg',
    alt: 'The vast bowl of Meteor Crater in Arizona',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:2019_Meteor_Crater,_Arizona.jpg'
  },
  {
    key: 'mauna-kea',
    title: 'Mauna Kea Summit (503893) (21743654782).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mauna_Kea_Summit_%28503893%29_%2821743654782%29.jpg/1280px-Mauna_Kea_Summit_%28503893%29_%2821743654782%29.jpg',
    alt: 'Barren volcanic summit of Mauna Kea, Hawaii',
    credit: 'NASA / Wikimedia Commons',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Mauna_Kea_Summit_(503893)_(21743654782).jpg'
  },
  {
    key: 'askja',
    title: 'Viti Crater Askja Iceland UL1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Viti_Crater_Askja_Iceland_UL1.jpg',
    alt: 'The blue crater lake of Askja, Iceland',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Viti_Crater_Askja_Iceland_UL1.jpg'
  },
  {
    key: 'lava-beds',
    title: 'A114, Lava Beds National Monument, California, USA, Golden Dome Lava Tube Cave, 2004.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/A114%2C_Lava_Beds_National_Monument%2C_California%2C_USA%2C_Golden_Dome_Lava_Tube_Cave%2C_2004.jpg/1280px-A114%2C_Lava_Beds_National_Monument%2C_California%2C_USA%2C_Golden_Dome_Lava_Tube_Cave%2C_2004.jpg',
    alt: 'A lava tube cave in Lava Beds National Monument, California',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:A114,_Lava_Beds_National_Monument,_California,_USA,_Golden_Dome_Lava_Tube_Cave,_2004.jpg'
  },
  {
    key: 'gale',
    title: 'Curiosity Captures Mars Landscape While Talking to an Orbiter (PIA26632).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Curiosity_Captures_Mars_Landscape_While_Talking_to_an_Orbiter_%28PIA26632%29.jpg/1280px-Curiosity_Captures_Mars_Landscape_While_Talking_to_an_Orbiter_%28PIA26632%29.jpg',
    alt: 'The rocky landscape of Mars, photographed by the Curiosity rover',
    credit: 'NASA / JPL-Caltech',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Curiosity_Captures_Mars_Landscape_While_Talking_to_an_Orbiter_(PIA26632).jpg'
  },
  {
    key: 'aldrin',
    title: 'Aldrin Apollo 11 original.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aldrin%20Apollo%2011%20original.jpg?width=1600',
    alt: 'Astronaut Buzz Aldrin standing on the lunar surface',
    credit: 'NASA / Neil Armstrong',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Aldrin_Apollo_11_original.jpg'
  },
  {
    key: 'rocknest',
    title: 'PIA16453-MarsCuriosityRover-RocknestPanorama-20121126.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PIA16453-MarsCuriosityRover-RocknestPanorama-20121126.jpg/1280px-PIA16453-MarsCuriosityRover-RocknestPanorama-20121126.jpg',
    alt: 'A rocky Mars panorama from the Curiosity rover at Rocknest',
    credit: 'NASA / JPL-Caltech',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:PIA16453-MarsCuriosityRover-RocknestPanorama-20121126.jpg'
  },
  {
    key: 'bardenas',
    title: 'Bardenas Reales, Navarra, España, 2015-01-06, DD 01.JPG',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bardenas_Reales%2C_Navarra%2C_Espa%C3%B1a%2C_2015-01-06%2C_DD_01.JPG/1280px-Bardenas_Reales%2C_Navarra%2C_Espa%C3%B1a%2C_2015-01-06%2C_DD_01.JPG',
    alt: 'Eroded badlands of Bardenas Reales, Spain',
    credit: 'Diego Delso / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    source_url: 'https://commons.wikimedia.org/wiki/File:Bardenas_Reales,_Navarra,_Espa%C3%B1a,_2015-01-06,_DD_01.JPG'
  },
  {
    key: 'goblin',
    title: 'Utah - North America - Goblin Valley State Park - Hoodoos (4892233345).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Utah_-_North_America_-_Goblin_Valley_State_Park_-_Hoodoos_%284892233345%29.jpg/1280px-Utah_-_North_America_-_Goblin_Valley_State_Park_-_Hoodoos_%284892233345%29.jpg',
    alt: 'Hoodoo rock formations in Goblin Valley, Utah',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Utah_-_North_America_-_Goblin_Valley_State_Park_-_Hoodoos_(4892233345).jpg'
  },
  {
    key: 'sarakiniko',
    title: 'Sarakiniko Beach on Milos Island, Greece with a view of the Aegean Sea.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sarakiniko_Beach_on_Milos_Island%2C_Greece_with_a_view_of_the_Aegean_Sea.jpg/1280px-Sarakiniko_Beach_on_Milos_Island%2C_Greece_with_a_view_of_the_Aegean_Sea.jpg',
    alt: 'White volcanic rock at Sarakiniko, Milos, Greece',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Sarakiniko_Beach_on_Milos_Island,_Greece_with_a_view_of_the_Aegean_Sea.jpg'
  },
  {
    key: 'pinnacles',
    title: 'A369, Pinnacles Desert, Nambung National Park, Western Australia, 2007.JPG',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/A369%2C_Pinnacles_Desert%2C_Nambung_National_Park%2C_Western_Australia%2C_2007.JPG',
    alt: 'Limestone pillars in the Pinnacles Desert, Western Australia',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:A369,_Pinnacles_Desert,_Nambung_National_Park,_Western_Australia,_2007.JPG'
  },
  {
    key: 'rummu',
    title: 'Rummu Quarry.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rummu_Quarry.jpg/1280px-Rummu_Quarry.jpg',
    alt: 'The flooded Rummu quarry in Estonia',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Rummu_Quarry.jpg'
  },
  {
    key: 'spotted-lake',
    title: 'Osoyoos - Spotted Lake (4762813753).jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Osoyoos_-_Spotted_Lake_%284762813753%29.jpg/1280px-Osoyoos_-_Spotted_Lake_%284762813753%29.jpg',
    alt: 'Mineral pools of Spotted Lake, Canada',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Osoyoos_-_Spotted_Lake_(4762813753).jpg'
  },
  {
    key: 'wadi-rum',
    title: 'Wadi Rum, Jordan.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wadi%20Rum%2C%20Jordan.jpg?width=1600',
    alt: 'Red sandstone desert of Wadi Rum, Jordan',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:Wadi_Rum,_Jordan.jpg'
  },
  {
    key: 'dallol',
    title: 'A Sulphur Pond, Danakil Depression, Ethiopia.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/A_Sulphur_Pond%2C_Danakil_Depression%2C_Ethiopia.jpg/1280px-A_Sulphur_Pond%2C_Danakil_Depression%2C_Ethiopia.jpg',
    alt: 'Sulphur pond at Dallol, Ethiopia',
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA',
    source_url: 'https://commons.wikimedia.org/wiki/File:A_Sulphur_Pond,_Danakil_Depression,_Ethiopia.jpg'
  },
  {
    key: 'wind-rock',
    title: 'NASA-MarsCuriosityRover-WindCarvedRock-20240228.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/NASA-MarsCuriosityRover-WindCarvedRock-20240228.jpg/1280px-NASA-MarsCuriosityRover-WindCarvedRock-20240228.jpg',
    alt: 'A wind-carved rock on Mars',
    credit: 'NASA / JPL-Caltech',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:NASA-MarsCuriosityRover-WindCarvedRock-20240228.jpg'
  },
  {
    key: 'apollo17-pano',
    title: 'Apollo 17 Moon Panorama.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Apollo_17_Moon_Panorama.jpg/1280px-Apollo_17_Moon_Panorama.jpg',
    alt: 'Apollo 17 lunar panorama',
    credit: 'NASA / Apollo 17 crew',
    license: 'Public domain (NASA)',
    source_url: 'https://commons.wikimedia.org/wiki/File:Apollo_17_Moon_Panorama.jpg'
  }
];

export const SITE_ASSET_KEYS = new Set(SITE_ASSETS.map(a => a.key));
