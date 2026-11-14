import PlanetaryTarget from '../models/PlanetaryTarget.js';
import { NASA_PLANETARY_TARGETS, NASA_PRD_MISSION_PROFILES } from '../nasaDataCatalog.js';

export async function getTargets(req, res, next) {
  try {
    let targets = [];
    try {
      targets = await PlanetaryTarget.find({});
    } catch (e) {
      targets = [];
    }

    if (!targets || targets.length === 0) {
      targets = NASA_PLANETARY_TARGETS;
    }

    res.json({ count: targets.length, targets });
  } catch (err) {
    next(err);
  }
}

export function getMissionProfiles(req, res) {
  res.json({
    count: NASA_PRD_MISSION_PROFILES.length,
    mission_profiles: NASA_PRD_MISSION_PROFILES
  });
}
