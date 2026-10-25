import express from 'express';

import {
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus
} from '../controllers/Order/add_order.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/all', getAllOrders);
router.get('/user/:userId', getOrders);
router.patch('/:id/status', updateOrderStatus);

export default router;