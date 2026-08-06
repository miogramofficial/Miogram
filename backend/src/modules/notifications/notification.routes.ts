import { Router } from "express";

import { notificationController } from "./notification.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Get notifications
router.get(
  "/",
  authMiddleware,
  (req, res) =>
    notificationController.getNotifications(
      req as AuthRequest,
      res
    )
);

// Mark one notification as read
router.patch(
  "/:id/read",
  authMiddleware,
  (req, res) =>
    notificationController.markAsRead(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Mark all notifications as read
router.patch(
  "/read-all",
  authMiddleware,
  (req, res) =>
    notificationController.markAllAsRead(
      req as AuthRequest,
      res
    )
);

// Delete notification
router.delete(
  "/:id",
  authMiddleware,
  (req, res) =>
    notificationController.deleteNotification(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;