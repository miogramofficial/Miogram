import { Request, Response } from "express";

import { authService } from "./auth.service";
import { AuthRequest } from "../../middleware/auth.middleware";

export class AuthController {
  async register(req: Request, res: Response) {
    const user = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  }

  async login(req: Request, res: Response) {
    const result = await authService.login(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  }

  async me(req: AuthRequest, res: Response) {
    const user = await authService.getCurrentUser(
      req.user!.userId
    );

    return res.status(200).json({
      success: true,
      data: user,
    });
  }
}

export const authController = new AuthController();