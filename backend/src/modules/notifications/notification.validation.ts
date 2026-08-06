import { z } from "zod";

export const notificationParamsSchema = z.object({
  id: z.string().cuid("Invalid notification ID"),
});

export const createNotificationSchema = z.object({
  userId: z.string().cuid("Invalid user ID"),

  type: z.string().min(1),

  title: z.string().min(1).max(100),

  message: z.string().min(1).max(500),
});

export type NotificationParamsInput =
  z.infer<typeof notificationParamsSchema>;

export type CreateNotificationSchemaInput =
  z.infer<typeof createNotificationSchema>;