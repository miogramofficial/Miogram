import { Router } from "express";

import { commentController } from "./comment.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Create comment
router.post(
  "/experiences/:id/comments",
  authMiddleware,
  (req, res) =>
    commentController.createComment(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Get comments
router.get(
  "/experiences/:id/comments",
  (req, res) =>
    commentController.getComments(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Update comment
router.patch(
  "/comments/:id",
  authMiddleware,
  (req, res) =>
    commentController.updateComment(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

// Delete comment
router.delete(
  "/comments/:id",
  authMiddleware,
  (req, res) =>
    commentController.deleteComment(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;