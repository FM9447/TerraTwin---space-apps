import { matchVisualAnalogs } from '../imageSimilarityEngine.js';

export function matchImage(req, res, next) {
  try {
    const { visual_features } = req.body;
    const matches = matchVisualAnalogs(visual_features || {});
    res.json({
      status: 'success',
      query_features_used: visual_features || {},
      matches: matches
    });
  } catch (err) {
    next(err);
  }
}
