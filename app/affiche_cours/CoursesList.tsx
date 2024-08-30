// ./app/affiche_cours/CoursesList.tsx
"use client"; // This is a Client Component

import { useState } from 'react';
import userData from '@/app/affiche_cours/page'

export default function CoursesList({ courses }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (courseId) => {
    setCart((prevCart) => [...prevCart, courseId]);
    alert(`Course ${courseId} added to cart! ${userData.email}`);
    
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.nom}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <p className="text-lg font-bold text-indigo-600">Prix: {course.prix}€</p>
            <button
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              onClick={() => handleAddToCart(course.id)} // Call the handler on click
            >
              ADD this Course
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
