import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { commentService } from "./comment.service";

export class CommentController {
  async createComment(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const comment =
      await commentService.createComment(
        req.user!.userId,
        req.params.id,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: comment,
    });
  }

  async getComments(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const comments =
      await commentService.getComments(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: comments,
    });
  }

  async updateComment(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const comment =
      await commentService.updateComment(
        req.params.id,
        req.user!.userId,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data: comment,
    });
  }

  async deleteComment(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    await commentService.deleteComment(
      req.params.id,
      req.user!.userId
    );

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  }
}

export const commentController =
  new CommentController();