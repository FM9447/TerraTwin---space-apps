import NasaDataset from '../models/NasaDataset.js';
import { NASA_DATASET_SOURCES } from '../nasaDataCatalog.js';

export async function getDatasets(req, res, next) {
  try {
    let datasets = [];
    try {
      datasets = await NasaDataset.find({});
    } catch (e) {
      datasets = [];
    }

    if (!datasets || datasets.length === 0) {
      datasets = Object.entries(NASA_DATASET_SOURCES).map(([key, val]) => ({ key, ...val }));
    }

    res.json({
      authority: 'National Aeronautics and Space Administration (NASA)',
      strict_nasa_compliance: true,
      count: datasets.length,
      datasets: datasets
    });
  } catch (err) {
    next(err);
  }
}
