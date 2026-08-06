export interface NotificationParams {
  id: string;
}

export interface CreateNotificationInput {
  userId: string;

  type: string;

  title: string;
  message: string;
}