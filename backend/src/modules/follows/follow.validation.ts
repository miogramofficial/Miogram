import { z } from "zod";

export const followUserParamsSchema = z.object({
  id: z.string().cuid("Invalid user ID"),
});

export type FollowUserParamsInput =
  z.infer<typeof followUserParamsSchema>;