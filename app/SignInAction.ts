"use server";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        status: 401,
        message: "Invalid email or password",
        data: null,
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid email or password",
        data: null,
      };
    }

    console.log("User signed in:", user);

    return {
      status: 200,
      message: "Sign-in successful",
      data: user,
    };
  } catch (error) {
    console.error("Error during sign-in:", error);

    return {
      status: 500,
      message: "An unexpected error occurred",
      data: null,
    };
  } finally {
    await prisma.$disconnect();
  }
}
