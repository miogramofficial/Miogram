import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { experienceService } from "./experience.service";

export class ExperienceController {
  async createExperience(
    req: AuthRequest,
    res: Response
  ) {
    const experience = await experienceService.createExperience(
      req.user!.userId,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Experience created successfully",
      data: experience,
    });
  }

  async getExperiences(
    _req: AuthRequest,
    res: Response
  ) {
    const experiences =
      await experienceService.getExperiences();

    return res.status(200).json({
      success: true,
      data: experiences,
    });
  }

  async getExperienceById(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const experience =
      await experienceService.getExperienceById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: experience,
    });
  }

  async updateExperience(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const experience =
      await experienceService.updateExperience(
        req.params.id,
        req.user!.userId,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      data: experience,
    });
  }

  async deleteExperience(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const result =
      await experienceService.deleteExperience(
        req.params.id,
        req.user!.userId
      );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  }
}

export const experienceController =
  new ExperienceController();