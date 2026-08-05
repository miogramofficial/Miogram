import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { followService } from "./follow.service";

export class FollowController {
  async followUser(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      const userId = req.user!.userId;
      const targetUserId = req.params.id;

      await followService.followUser(userId, targetUserId);

      res.status(201).json({
        success: true,
        message: "User followed successfully",
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

  async unfollowUser(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      const userId = req.user!.userId;
      const targetUserId = req.params.id;

      await followService.unfollowUser(
        userId,
        targetUserId
      );

      res.status(200).json({
        success: true,
        message: "User unfollowed successfully",
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

  async getFollowers(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      const followers =
        await followService.getFollowers(req.params.id);

      res.status(200).json({
        success: true,
        data: followers,
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

  async getFollowing(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    try {
      const following =
        await followService.getFollowing(req.params.id);

      res.status(200).json({
        success: true,
        data: following,
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

export const followController = new FollowController();