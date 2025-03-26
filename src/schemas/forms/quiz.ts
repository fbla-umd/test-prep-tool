import { z } from "zod";

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: "Please select a topic",
    })
    .max(50, {
      message: "Please select a topic",
    }),
  type: z.enum(["mcq", "open_ended"]),
  amount: z.number().min(1).max(10),
});
