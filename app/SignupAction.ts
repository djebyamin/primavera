"use server";
import { PrismaClient, Prisma, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function newUser({
  name,
  email,
  password,
  status,
  role,
}: {
  name: string;
  email: string;
  password: string;
  status: string;
  role: UserRole;
}) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.utilisateur.create({
      data: {
        name,
        email,
        password: hashedPassword,
        status,
        role,
      },
    });

    console.log("User added:", user);

    return {
      status: 200,
      message: "User added successfully",
      data: user,
    };
  } catch (error) {
    console.error("Error adding user:", error);

    let errorMessage = "An unexpected error occurred";

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        errorMessage = "A user with this email already exists";
      }
    }

    return {
      status: 500,
      message: errorMessage,
      data: null,
    };
  } finally {
    await prisma.$disconnect();
  }
}
