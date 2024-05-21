import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });
    return twoFactorConfirmation;
  } catch {
    return null;
  }
};

// export const getTwoFactorConfirmationByToken = async (token: string) => {
//   try {
//     const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
//       where: { token },
//     });
//     return twoFactorConfirmation;
//   } catch {
//     return null;
//   }
// }
