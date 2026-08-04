import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { likeService } from "./like.service";

export class LikeController {
  async likeExperience(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const result =
      await likeService.likeExperience(
        req.user!.userId,
        req.params.id
      );

    if (result.alreadyLiked) {
      return res.status(200).json({
        success: true,
        message: "Already liked",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience liked successfully",
    });
  }

  async unlikeExperience(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const result =
      await likeService.unlikeExperience(
        req.user!.userId,
        req.params.id
      );

    if (result.alreadyUnliked) {
      return res.status(200).json({
        success: true,
        message: "Experience was not liked",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience unliked successfully",
    });
  }
}

export const likeController = new LikeController();