import { Router } from "express";

import { followController } from "./follow.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Follow user
router.post(
  "/:id/follow",
  authMiddleware,
  (req, res) =>
    followController.followUser(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Unfollow user
router.delete(
  "/:id/follow",
  authMiddleware,
  (req, res) =>
    followController.unfollowUser(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Get followers
router.get(
  "/:id/followers",
  (req, res) =>
    followController.getFollowers(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Get following
router.get(
  "/:id/following",
  (req, res) =>
    followController.getFollowing(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;