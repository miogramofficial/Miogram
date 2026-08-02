import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { profileService } from "./profile.service";

export class ProfileController {
  async updateProfile(
    req: AuthRequest,
    res: Response
  ) {
    const user = await profileService.updateProfile(
      req.user!.userId,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  }
}

export const profileController = new ProfileController();