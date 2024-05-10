"use server";

import { RegisterSchema } from "@/src/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Revise seus dados." };
  return { success: "Email enviado!" };
};
