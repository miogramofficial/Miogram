import { PrismaClient } from "@prisma/client";

import {
  CreateExperienceInput,
  UpdateExperienceInput,
} from "./experience.types";

const prisma = new PrismaClient();

export class ExperienceService {
  async createExperience(
    userId: string,
    data: CreateExperienceInput
  ) {
    const experience = await prisma.experience.create({
      data: {
        title: data.title,
        description: data.description,

        location: data.location,

        mediaUrl: data.mediaUrl,
        mediaType: data.mediaType,

        authorId: userId,
      },
    });

    return experience;
  }

  async getExperiences() {
    const experiences = await prisma.experience.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            isVerified: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return experiences;
  }

  async getExperienceById(id: string) {
    const experience = await prisma.experience.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            isVerified: true,
          },
        },
      },
    });

    if (!experience) {
      throw new Error("Experience not found");
    }

    return experience;
  }

  async updateExperience(
    id: string,
    userId: string,
    data: UpdateExperienceInput
  ) {
    const experience = await prisma.experience.findUnique({
      where: {
        id,
      },
    });

    if (!experience) {
      throw new Error("Experience not found");
    }

    if (experience.authorId !== userId) {
      throw new Error(
        "You are not allowed to edit this experience"
      );
    }

    const updatedExperience =
      await prisma.experience.update({
        where: {
          id,
        },
        data: {
          title: data.title,
          description: data.description,
          location: data.location,
          mediaUrl: data.mediaUrl,
          mediaType: data.mediaType,
        },
      });

    return updatedExperience;
  }

  async deleteExperience(
    id: string,
    userId: string
  ) {
    const experience = await prisma.experience.findUnique({
      where: {
        id,
      },
    });

    if (!experience) {
      throw new Error("Experience not found");
    }

    if (experience.authorId !== userId) {
      throw new Error(
        "You are not allowed to delete this experience"
      );
    }

    await prisma.experience.delete({
      where: {
        id,
      },
    });

    return {
      message: "Experience deleted successfully",
    };
  }
}

export const experienceService = new ExperienceService();