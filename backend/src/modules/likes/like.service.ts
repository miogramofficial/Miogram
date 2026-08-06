import { PrismaClient } from "@prisma/client";

import { notificationService } from "../notifications/notification.service";

const prisma = new PrismaClient();

export class LikeService {
  async likeExperience(
    userId: string,
    experienceId: string
  ) {
    const experience = await prisma.experience.findUnique({
      where: {
        id: experienceId,
      },
    });

    if (!experience) {
      throw new Error("Experience not found");
    }

    const alreadyLiked =
      await prisma.experienceLike.findUnique({
        where: {
          userId_experienceId: {
            userId,
            experienceId,
          },
        },
      });

    if (alreadyLiked) {
      return {
        alreadyLiked: true,
      };
    }

    await prisma.experienceLike.create({
      data: {
        userId,
        experienceId,
      },
    });

    await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: {
        likesCount: {
          increment: 1,
        },
      },
    });

    const liker = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (
      liker &&
      experience.authorId !== userId
    ) {
      await notificationService.createNotification({
        userId: experience.authorId,
        type: "LIKE",
        title: "New Like",
        message: `${liker.fullName} liked your experience.`,
      });
    }

    return {
      alreadyLiked: false,
    };
  }

  async unlikeExperience(
    userId: string,
    experienceId: string
  ) {
    const like =
      await prisma.experienceLike.findUnique({
        where: {
          userId_experienceId: {
            userId,
            experienceId,
          },
        },
      });

    if (!like) {
      return {
        alreadyUnliked: true,
      };
    }

    await prisma.experienceLike.delete({
      where: {
        userId_experienceId: {
          userId,
          experienceId,
        },
      },
    });

    await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: {
        likesCount: {
          decrement: 1,
        },
      },
    });

    return {
      alreadyUnliked: false,
    };
  }
}

export const likeService = new LikeService();