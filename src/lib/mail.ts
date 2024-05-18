import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  console.log("sendVerificationEmail ===>>", email, token);
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Edmilson <onboarding@resend.dev>",
    to: email,
    subject: "Confirme seu email",
    html: `<p>Click <a href="${confirmLink}">aqui</a> para confirmar sua conta.</p> `,
  });
};
