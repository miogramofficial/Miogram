import { PrismaClient } from "@prisma/client";

import {
  CreateCommentInput,
  UpdateCommentInput,
} from "./comment.types";

import { notificationService } from "../notifications/notification.service";

const prisma = new PrismaClient();

export class CommentService {
  async createComment(
    userId: string,
    experienceId: string,
    data: CreateCommentInput
  ) {
    const experience =
      await prisma.experience.findUnique({
        where: {
          id: experienceId,
        },
      });

    if (!experience) {
      throw new Error("Experience not found");
    }

    const comment = await prisma.comment.create({
      data: {
        content: data.content,
        userId,
        experienceId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            isVerified: true,
          },
        },
      },
    });

    await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: {
        commentsCount: {
          increment: 1,
        },
      },
    });

    const commenter = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (
      commenter &&
      experience.authorId !== userId
    ) {
      await notificationService.createNotification({
        userId: experience.authorId,
        type: "COMMENT",
        title: "New Comment",
        message: `${commenter.fullName} commented on your experience.`,
      });
    }

    return comment;
  }

  async getComments(experienceId: string) {
    const comments = await prisma.comment.findMany({
      where: {
        experienceId,
      },
      include: {
        user: {
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

    return comments;
  }

  async updateComment(
    commentId: string,
    userId: string,
    data: UpdateCommentInput
  ) {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.userId !== userId) {
      throw new Error(
        "You are not allowed to edit this comment"
      );
    }

    const updatedComment =
      await prisma.comment.update({
        where: {
          id: commentId,
        },
        data: {
          content: data.content,
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              fullName: true,
              avatar: true,
              isVerified: true,
            },
          },
        },
      });

    return updatedComment;
  }

  async deleteComment(
    commentId: string,
    userId: string
  ) {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.userId !== userId) {
      throw new Error(
        "You are not allowed to delete this comment"
      );
    }

    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    await prisma.experience.update({
      where: {
        id: comment.experienceId,
      },
      data: {
        commentsCount: {
          decrement: 1,
        },
      },
    });

    return {
      message: "Comment deleted successfully",
    };
  }
}

export const commentService =
  new CommentService();