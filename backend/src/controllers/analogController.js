import Analog from '../models/Analog.js';
import { calculateAnalogDiscoveries } from '../similarityEngine.js';
import { NASA_EARTH_ANALOGS } from '../nasaDataCatalog.js';

export async function searchAnalogs(req, res, next) {
  try {
    const { input_criteria, mission_profile_id, custom_weights } = req.body;
    const result = calculateAnalogDiscoveries(input_criteria, mission_profile_id, custom_weights);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getNearbyAnalogs(req, res, next) {
  try {
    const { lat, lon } = req.parsedCoordinates;
    const maxDistanceKm = parseFloat(req.query.maxDistanceKm) || 5000;

    const nearby = await Analog.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lon, lat] // [longitude, latitude]
          },
          $maxDistance: maxDistanceKm * 1000 // Convert km to meters
        }
      }
    });

    res.json({
      source: 'MongoDB 2dsphere $near spatial query',
      query_origin: { lat, lon, maxDistanceKm },
      count: nearby.length,
      results: nearby
    });
  } catch (err) {
    next(err);
  }
}

export async function getWithinPolygon(req, res, next) {
  try {
    const { polygon_coordinates } = req.body;

    const inside = await Analog.find({
      location: {
        $geoWithin: {
          $polygon: polygon_coordinates
        }
      }
    });

    res.json({
      source: 'MongoDB $geoWithin polygon spatial query',
      count: inside.length,
      results: inside
    });
  } catch (err) {
    next(err);
  }
}

export async function getAllAnalogs(req, res, next) {
  try {
    let analogs = [];
    try {
      analogs = await Analog.find({}).sort({ similarity_score: -1 });
    } catch (e) {
      analogs = [];
    }

    if (!analogs || analogs.length === 0) {
      analogs = NASA_EARTH_ANALOGS;
    }

    res.json({
      count: analogs.length,
      analogs: analogs
    });
  } catch (err) {
    next(err);
  }
}

export async function getAnalogById(req, res, next) {
  try {
    const { id } = req.params;
    let analog = await Analog.findOne({ id });
    if (!analog) {
      analog = NASA_EARTH_ANALOGS.find(a => a.id === id);
    }

    if (!analog) {
      return res.status(404).json({ error: 'NotFound', message: `Analog with ID "${id}" not found` });
    }

    res.json(analog);
  } catch (err) {
    next(err);
  }
}
