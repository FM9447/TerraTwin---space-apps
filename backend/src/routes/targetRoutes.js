import { Router } from 'express';
import { getTargets, getMissionProfiles } from '../controllers/targetController.js';

const router = Router();

router.get('/targets', getTargets);
router.get('/mission-profiles', getMissionProfiles);

export default router;
