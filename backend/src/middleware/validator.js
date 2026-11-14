export function validateCoordinates(req, res, next) {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res.status(400).json({
      error: 'ValidationError',
      message: 'Both "lat" and "lon" query parameters are required'
    });
  }

  const numLat = parseFloat(lat);
  const numLon = parseFloat(lon);

  if (isNaN(numLat) || numLat < -90 || numLat > 90) {
    return res.status(400).json({
      error: 'ValidationError',
      message: '"lat" must be a valid number between -90 and +90'
    });
  }

  if (isNaN(numLon) || numLon < -180 || numLon > 180) {
    return res.status(400).json({
      error: 'ValidationError',
      message: '"lon" must be a valid number between -180 and +180'
    });
  }

  req.parsedCoordinates = { lat: numLat, lon: numLon };
  next();
}

export function validatePolygon(req, res, next) {
  const { polygon_coordinates } = req.body;
  if (!polygon_coordinates || !Array.isArray(polygon_coordinates) || polygon_coordinates.length < 4) {
    return res.status(400).json({
      error: 'ValidationError',
      message: 'polygon_coordinates must be an array of at least 4 [lon, lat] pairs closing the loop (start == end)'
    });
  }

  for (const pt of polygon_coordinates) {
    if (!Array.isArray(pt) || pt.length !== 2 || typeof pt[0] !== 'number' || typeof pt[1] !== 'number') {
      return res.status(400).json({
        error: 'ValidationError',
        message: 'Each polygon point must be a [lon, lat] number pair'
      });
    }
  }

  next();
}
