"use server";

import { LoginSchema } from "@/src/schemas";
import * as z from "zod";

import { signIn } from "@/src/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/src/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Revise seus dados." };
  }

  const { email, password } = validatedFields.data;

  console.log("*** DADOS login(): ", email, password, DEFAULT_LOGIN_REDIRECT);

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas." };
        default:
          return { error: "Revise seus dados e tente novamente." };
      }
    }
    throw error;
  }
};
