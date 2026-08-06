import { PrismaClient } from "@prisma/client";

import { notificationService } from "../notifications/notification.service";

const prisma = new PrismaClient();

export class FollowService {
  async followUser(
    followerId: string,
    followingId: string
  ) {
    if (followerId === followingId) {
      throw new Error("You cannot follow yourself");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: followingId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const existingFollow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    if (existingFollow) {
      throw new Error("Already following this user");
    }

    const follow = await prisma.follow.create({
    data: {
        followerId,
        followingId,
    },
    });

    const follower = await prisma.user.findUnique({
    where: {
        id: followerId,
    },
    });

    if (follower) {
    await notificationService.createNotification({
        userId: followingId,
        type: "FOLLOW",
        title: "New Follower",
        message: `${follower.fullName} started following you.`,
    });
    }

        return follow;
    }

  async unfollowUser(
    followerId: string,
    followingId: string
  ) {
    const existingFollow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    if (!existingFollow) {
      throw new Error("You are not following this user");
    }

    await prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
  }

  async getFollowers(userId: string) {
    return prisma.follow.findMany({
      where: {
        followingId: userId,
      },
      include: {
        follower: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            isVerified: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getFollowing(userId: string) {
    return prisma.follow.findMany({
      where: {
        followerId: userId,
      },
      include: {
        following: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            isVerified: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export const followService = new FollowService();