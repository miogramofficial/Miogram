import { PrismaClient } from "@prisma/client";

import { UpdateProfileInput } from "./profile.types";

const prisma = new PrismaClient();

export class ProfileService {
  async updateProfile(
    userId: string,
    data: UpdateProfileInput
  ) {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        fullName: data.fullName,
        bio: data.bio,
        avatar: data.avatar,
      },
    });

    const { password, ...safeUser } = user;

    return safeUser;
  }
}

export const profileService = new ProfileService();