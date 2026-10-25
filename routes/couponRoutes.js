import express from 'express';

import {
  addCoupon,
  getCoupons,
  validateCoupon,
  deleteCoupon
} from '../controllers/Coupon/add_coupon.js';

const router = express.Router();

router.post('/', addCoupon);
router.get('/', getCoupons);
router.get('/validate/:code', validateCoupon);
router.delete('/:id', deleteCoupon);

export default router;