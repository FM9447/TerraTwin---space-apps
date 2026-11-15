import { Router } from 'express';
import {
  getLevels,
  getLevel,
  getCampaign,
  submitGuess,
  getGameImage,
  getGameStats
} from '../controllers/gameController.js';

const router = Router();

router.get('/levels', getLevels);
router.get('/levels/:levelNumber', getLevel);
router.get('/campaign', getCampaign);
router.get('/image/:levelNumber', getGameImage);
router.get('/stats', getGameStats);
router.post('/guess', submitGuess);

export default router;
