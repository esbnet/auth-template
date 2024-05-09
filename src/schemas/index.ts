import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Informe um email valido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
});
