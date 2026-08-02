import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

import {
  RegisterUserInput,
  LoginUserInput,
} from "./auth.types";

import { generateToken } from "../../shared/utils/jwt";

const prisma = new PrismaClient();

export class AuthService {
  async register(data: RegisterUserInput) {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username },
        ],
      },
    });

    if (existingUser) {
      throw new Error("Email or username already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        fullName: data.fullName,
      },
    });

    const { password, ...safeUser } = user;

    return safeUser;
  }

  async login(data: LoginUserInput) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatched = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!passwordMatched) {
      throw new Error("Invalid email or password");
    }

    const token = generateToken(user.id);

    const { password, ...safeUser } = user;

    return {
      token,
      user: safeUser,
    };
  }

  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const { password, ...safeUser } = user;

    return safeUser;
  }
}

export const authService = new AuthService();