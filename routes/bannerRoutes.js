import express from 'express';

import {
  addBanner,
  getBanners,
  updateBanner,
  deleteBanner
} from '../controllers/Banner/add_banner.js';

const router = express.Router();

router.post('/', addBanner);
router.get('/', getBanners);
router.put('/:id', updateBanner);
router.delete('/:id', deleteBanner);

export default router;