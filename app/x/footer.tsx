import React from 'react';
import Link from 'next/link';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCourses() {
  return await prisma.course.findMany();
}

async function getCourseCount() {
  const count = await prisma.course.count();
  return count;
}

async function getUserCount() {
  const count = await prisma.utilisateur.count(); // Assurez-vous que le modèle est bien 'utilisateur'
  return count;
}

const CourseTable: React.FC = async () => {
  const courses = await getCourses();
  const courseCount = await getCourseCount();
  const userCount = await getUserCount(); // Récupérer le nombre d'utilisateurs

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Start learning with {userCount} students around the world.
          </h2>
          <div className="flex justify-center space-x-4">
            <Link href="/signup">
              <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                Join the Family
              </button>
            </Link>
            <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
              Browse All Courses
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center space-x-8 text-center text-white mb-12">
          <div>
            <p className="text-3xl font-bold">{courseCount}</p>
            <p>Online Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold">26k</p>
            <p>Certified Instructors</p>
          </div>
          <div>
            <p className="text-3xl font-bold">99.9%</p>
            <p>Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{userCount}</p>
            <p>Users</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mb-12">
          {/* Left Side: Logo & Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Formation Primavera</h3>
            <p className="mb-6">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio et.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Category Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Top 4 Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500">Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Finance & Accounting</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Business</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Become an Instructor</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Career</a>
              </li>
            </ul>
          </div>

          {/* Support & Download */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">Privacy Policy</a>
              </li>
            </ul>
            <h3 className="text-white font-bold mt-6">Download Our App</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#">
                <img src="/appstore.png" alt="App Store" className="w-12 h-auto shadow-md hover:scale-110 transition-transform duration-300 ease-in-out" />
              </a>
              <a href="#">
                <img src="/playstore.png" alt="Play Store" className="w-12 h-auto shadow-md hover:scale-110 transition-transform duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Language Selector */}
        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-6">
          <p>© 2024 - Formation Primavera. All rights reserved</p>
          <select className="bg-gray-900 text-gray-400 border border-gray-600 px-3 py-1 rounded">
            <option value="English">English</option>
            <option value="French">Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default CourseTable;
