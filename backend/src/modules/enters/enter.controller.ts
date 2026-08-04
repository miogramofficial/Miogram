import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware";
import { enterService } from "./enter.service";

export class EnterController {
  async enterExperience(
    req: AuthRequest & {
      params: {
        id: string;
      };
    },
    res: Response
  ) {
    const result =
      await enterService.enterExperience(
        req.params.id,
        req.user!.userId
      );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  }
}

export const enterController =
  new EnterController();