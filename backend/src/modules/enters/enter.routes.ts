import { Router } from "express";

import { enterController } from "./enter.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Enter an experience
router.post(
  "/:id/enter",
  authMiddleware,
  (req, res) =>
    enterController.enterExperience(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;