import express from 'express';

import {
  addAddress,
  getAddresses,
  deleteAddress
} from '../controllers/Address/add_address.js';

const router = express.Router();

router.post('/', addAddress);
router.get('/', getAddresses);
router.delete('/:id', deleteAddress);

export default router;