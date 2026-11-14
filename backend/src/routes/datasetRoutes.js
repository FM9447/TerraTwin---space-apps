import { Router } from 'express';
import { getDatasets } from '../controllers/datasetController.js';

const router = Router();

router.get('/nasa-datasets', getDatasets);

export default router;
