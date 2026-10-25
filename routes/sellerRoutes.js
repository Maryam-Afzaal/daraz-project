
import express from 'express';

import {
  addSeller,
  getSellers,
  getSellerById,
  updateSeller,
  deleteSeller
} from '../controllers/Seller/add_seller.js';

const router = express.Router();

router.post('/', addSeller);
router.get('/', getSellers);
router.get('/:id', getSellerById);
router.put('/:id', updateSeller);
router.delete('/:id', deleteSeller);

export default router;
