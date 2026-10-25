import express from 'express';
import {
  addReview,
  getReviews,
  deleteReview
} from '../controllers/Review/add_review.js';

const router = express.Router();

router.post('/', addReview);
router.get('/', getReviews);
router.delete('/:id', deleteReview);

export default router;