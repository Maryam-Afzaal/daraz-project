import express from 'express';
import {
  addToCart,
  getCart,
  removeFromCart
} from '../controllers/Cart/add_cart.js';

const router = express.Router();

router.post('/', addToCart);
router.get('/:userId', getCart);
router.delete('/:userId/:productId', removeFromCart);

export default router;