import { PrismaClient } from "@prisma/client";
import { CreateNotificationInput } from "./notification.types";

const prisma = new PrismaClient();

export class NotificationService {
  async createNotification(data: CreateNotificationInput) {
    console.log("🔔 Creating notification:", data);
    return prisma.notification.create({
      data: {
        userId: data.userId,
        type: data.type,
        title: data.title,
        message: data.message,
      },
    });
  }

  async getNotifications(userId: string) {
    return prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async markAsRead(notificationId: string, userId: string) {
    const notification = await prisma.notification.findFirst({
      where: {
        id: notificationId,
        userId,
      },
    });

    if (!notification) {
      throw new Error("Notification not found");
    }

    return prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        isRead: true,
      },
    });
  }

  async markAllAsRead(userId: string) {
    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });
  }

  async deleteNotification(notificationId: string, userId: string) {
    const notification = await prisma.notification.findFirst({
      where: {
        id: notificationId,
        userId,
      },
    });

    if (!notification) {
      throw new Error("Notification not found");
    }

    await prisma.notification.delete({
      where: {
        id: notificationId,
      },
    });
  }
}

export const notificationService = new NotificationService();