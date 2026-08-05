import { z } from "zod";

export const createCommentSchema = z.object({
  content: z
    .string()
    .min(1, "Comment cannot be empty")
    .max(1000, "Comment is too long"),
});

export const updateCommentSchema = z.object({
  content: z
    .string()
    .min(1)
    .max(1000)
    .optional(),
});