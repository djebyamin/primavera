// ./app/affiche_cours/cours.tsx
import { PrismaClient } from "@prisma/client";
import CoursesList from "./CoursesList"; // Import the client component

const prisma = new PrismaClient();

async function getCourses() {
  return await prisma.course.findMany();
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Tous les Cours</h1>
      <CoursesList courses={courses} user={undefined} /> {/* Pass courses to client component */}
    </div>
  );
}
