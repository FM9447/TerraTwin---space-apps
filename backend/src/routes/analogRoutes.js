import { Router } from 'express';
import {
  searchAnalogs,
  getNearbyAnalogs,
  getWithinPolygon,
  getAllAnalogs,
  getAnalogById
} from '../controllers/analogController.js';
import { validateCoordinates, validatePolygon } from '../middleware/validator.js';

const router = Router();

router.post('/search', searchAnalogs);
router.get('/nearby', validateCoordinates, getNearbyAnalogs);
router.post('/within-polygon', validatePolygon, getWithinPolygon);
router.get('/', getAllAnalogs);
router.get('/:id', getAnalogById);

export default router;
