import { Router } from "express";

import { experienceController } from "./experience.controller";
import {
  authMiddleware,
  AuthRequest,
} from "../../middleware/auth.middleware";

const router = Router();

// Get all experiences (Feed)
router.get(
  "/",
  (_req, res) =>
    experienceController.getExperiences(_req, res)
);

// Get single experience
router.get(
  "/:id",
  (req, res) =>
    experienceController.getExperienceById(req, res)
);

// Create experience
router.post(
  "/",
  authMiddleware,
  (req, res) =>
    experienceController.createExperience(req, res)
);

// Update experience
router.patch(
  "/:id",
  authMiddleware,
  (req, res) =>
    experienceController.updateExperience(
      req as AuthRequest & {
        params: {
          id: string;
        };
      },
      res
    )
);

export default router;