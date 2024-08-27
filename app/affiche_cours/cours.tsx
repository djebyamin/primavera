// src/app/courses/page.tsx
import { PrismaClient } from "@prisma/client";
import Image from 'next/image'; // Optional if you plan to add course images

const prisma = new PrismaClient();

async function getCourses() {
  // Fetch all courses from the database
  return await prisma.course.findMany();
}

export default async function CoursesPage() {
  const courses = await getCourses(); // Fetch the courses

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Tous les Cours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.nom}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-lg font-bold text-indigo-600">Prix: {course.prix}€</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">ADD this Course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
