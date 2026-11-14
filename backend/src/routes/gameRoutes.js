import { Router } from 'express';
import { getLevels, submitGuess } from '../controllers/gameController.js';

const router = Router();

router.get('/levels', getLevels);
router.post('/guess', submitGuess);

export default router;
