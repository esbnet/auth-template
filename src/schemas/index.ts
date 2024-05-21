import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Informe um email valido.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Informe um email valido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Informe um email valido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
  name: z.string().min(1, {
    message: "O email deve ser informado.",
  }),
});
