import { Router } from "express";

import { likeController } from "./like.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Like experience
router.post(
  "/:id/like",
  authMiddleware,
  (req, res) =>
    likeController.likeExperience(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Unlike experience
router.delete(
  "/:id/like",
  authMiddleware,
  (req, res) =>
    likeController.unlikeExperience(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;