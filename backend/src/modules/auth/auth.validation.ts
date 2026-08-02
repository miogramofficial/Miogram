import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30),

  email: z
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  fullName: z
    .string()
    .min(2, "Full name is required")
    .max(100),
});

export const loginSchema = z.object({
  email: z
    .email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required"),
});