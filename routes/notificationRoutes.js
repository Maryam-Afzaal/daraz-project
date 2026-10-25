import express from 'express';

import {
  addNotification,
  getNotifications,
  markAsRead,
  deleteNotification
} from '../controllers/Notification/add_notification.js';

const router = express.Router();

router.post('/', addNotification);
router.get('/:userId', getNotifications);
router.patch('/:id/read', markAsRead);
router.delete('/:id', deleteNotification);

export default router;