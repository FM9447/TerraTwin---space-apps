import { Router } from 'express';
import { matchImage } from '../controllers/imageController.js';

const router = Router();

router.post('/image-match', matchImage);

export default router;
