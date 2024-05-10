"use server";

import { LoginSchema } from "@/src/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Revise seus dados." };
  return { success: "Email enviado!" };
};
