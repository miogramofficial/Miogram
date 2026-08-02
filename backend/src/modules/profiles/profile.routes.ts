import { Router } from "express";

import { profileController } from "./profile.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.patch(
  "/",
  authMiddleware,
  (req, res) => profileController.updateProfile(req, res)
);

export default router;