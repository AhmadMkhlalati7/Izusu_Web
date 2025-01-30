import bcrypt from "bcryptjs";

import { prisma } from "./prisma";

export async function getUserFromDb(email: string, password: string) {
  try {
    const existedUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existedUser) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    if (!existedUser.password) {
      return {
        success: false,
        message: "Password is required.",
      };
    }

    const isPasswordMatches = await bcrypt.compare(
      password,
      existedUser.password,
    );

    if (!isPasswordMatches) {
      return {
        success: false,
        message: "Password is incorrect.",
      };
    }

    return {
      success: true,
      data: existedUser,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}
