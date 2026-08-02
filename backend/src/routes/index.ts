import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes";

import profileRoutes from "../modules/profiles/profile.routes";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    name: "Miogram API",
    version: "1.0.0",
    status: "running",
    environment: process.env.NODE_ENV,
    message: "Welcome to Miogram Backend 🚀",
  });
});

router.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

router.use("/auth", authRoutes);

router.use("/profile", profileRoutes);

export default router;