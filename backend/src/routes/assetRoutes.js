import { Router } from 'express';
import { getSiteAsset, listSiteAssets } from '../controllers/assetController.js';

const router = Router();

router.get('/', listSiteAssets);
router.get('/:key', getSiteAsset);

export default router;
