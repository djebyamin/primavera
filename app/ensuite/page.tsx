import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

async function getCourses() {
  return await prisma.course.findMany();
}

const CourseTable: React.FC = async () => {
  const courses = await getCourses();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Nos cours live</h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{course.nom}</h3>
            <p className="text-gray-600 mb-4">
              <strong>Description:</strong> {course.description}
            </p>
            <p className="text-xl font-semibold text-red-600">
              <strong>Price:</strong> ${course.prix}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseTable;
