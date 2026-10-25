import express from 'express';

import {
  addPayment,
  getPayments,
  updatePaymentStatus
} from '../controllers/Payment/add_payment.js';

const router = express.Router();

router.post('/', addPayment);
router.get('/', getPayments);
router.patch('/:id/status', updatePaymentStatus);

export default router;