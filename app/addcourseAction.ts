"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCourse({
  nom,
  description,
  prix,
}: {
  nom: string;
  description: string;
  prix: number;
}) {
  try {
    const newCourse = await prisma.course.create({
      data: {
        nom,
        description,
        prix,
      },
    });

    return {
      status: 200,
      message: "Course created successfully",
      data: newCourse,
    };
  } catch (error) {
    console.error("Error creating course:", error);

    return {
      status: 500,
      message: "An unexpected error occurred",
      data: null,
    };
  } finally {
    await prisma.$disconnect();
  }
}
