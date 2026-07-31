import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    name: "Miogram API",
    version: "1.0.0",
    status: "running",
    environment: process.env.NODE_ENV,
    message: "Welcome to Miogram Backend 🚀"
  });
});

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

export default router;