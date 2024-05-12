"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { getUserByEmail } from "@/src/data/user";
import { db } from "@/src/lib/db";
import { RegisterSchema } from "@/src/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Revise seus dados." };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email ja está cadastrado." };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification token email

  return { success: "Usuário criado!" };
};
