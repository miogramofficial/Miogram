import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EnterService {
  async enterExperience(
    experienceId: string,
    userId: string
  ) {
    const experience = await prisma.experience.findUnique({
      where: {
        id: experienceId,
      },
    });

    if (!experience) {
      throw new Error("Experience not found");
    }

    const existingEnter =
      await prisma.experienceEnter.findUnique({
        where: {
          userId_experienceId: {
            userId,
            experienceId,
          },
        },
      });

    if (existingEnter) {
      return {
        message: "Already entered this experience",
      };
    }

    await prisma.experienceEnter.create({
      data: {
        userId,
        experienceId,
      },
    });

    await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: {
        entersCount: {
          increment: 1,
        },
      },
    });

    return {
      message: "Entered experience successfully",
    };
  }
}

export const enterService = new EnterService();