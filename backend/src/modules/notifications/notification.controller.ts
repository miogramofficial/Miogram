import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { notificationService } from "./notification.service";

export class NotificationController {
  async getNotifications(
    req: AuthRequest,
    res: Response
  ) {
    try {
      const notifications =
        await notificationService.getNotifications(
          req.user!.userId
        );

      res.status(200).json({
        success: true,
        data: notifications,
      });
    } catch (error) {
      console.error("❌ ERROR");
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      });
    }
  }

  async markAsRead(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      await notificationService.markAsRead(
        req.params.id,
        req.user!.userId
      );

      res.status(200).json({
        success: true,
        message: "Notification marked as read",
      });
    } catch (error) {
      console.error("❌ ERROR");
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      });
    }
  }

  async markAllAsRead(
    req: AuthRequest,
    res: Response
  ) {
    try {
      await notificationService.markAllAsRead(
        req.user!.userId
      );

      res.status(200).json({
        success: true,
        message: "All notifications marked as read",
      });
    } catch (error) {
      console.error("❌ ERROR");
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      });
    }
  }

  async deleteNotification(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      await notificationService.deleteNotification(
        req.params.id,
        req.user!.userId
      );

      res.status(200).json({
        success: true,
        message: "Notification deleted successfully",
      });
    } catch (error) {
      console.error("❌ ERROR");
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal server error",
      });
    }
  }
}

export const notificationController =
  new NotificationController();