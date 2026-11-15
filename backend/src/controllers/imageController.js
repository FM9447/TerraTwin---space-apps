import { matchVisualAnalogs } from '../imageSimilarityEngine.js';

export function matchImage(req, res, next) {
  try {
    const { visual_features, target_body, filter_body, target_destination } = req.body;
    const destination = target_body || filter_body || target_destination || 'all';
    const matches = matchVisualAnalogs(visual_features || {}, destination);
    res.json({
      status: 'success',
      target_destination: destination,
      query_features_used: visual_features || {},
      matches: matches
    });
  } catch (err) {
    next(err);
  }
}
