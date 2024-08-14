"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isCourseLevelOpen, setIsCourseLevelOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isDurationOpen, setIsDurationOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img src={"/logo.png"} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Formation Primavera</span>
          </div>
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 mx-4">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-md"
          
        >
          <option>Filter by</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
        </select>
        <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-md"
        
        >
          <option>Trending</option>
          <option value="mostPopular">Most Popular</option>
          <option value="topRated">Top Rated</option>
          <option value="newArrivals">New Arrivals</option>
        </select>
      </div>

      <div className="my-4 mx-4 border-t border-gray-300"></div>

      <div className="container mx-auto p-4 flex">
        <aside className="w-1/4 pr-4">
          <div className="bg-white p-4 rounded mb-4 shadow relative">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsRatingOpen(!isRatingOpen)}>
              <h2 className="font-bold text-sm mb-2">Rating</h2>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isRatingOpen ? "▲" : "▼"}
              </button>
            </div>
            {isRatingOpen && (
              <ul>
                {['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'].map((rating, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <input 
                      type="checkbox" 
                      id={`rating${index}`} 
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#ff2d52] checked:border-[#ff2d52] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer custom-checkbox"
                    />
                    <label htmlFor={`rating${index}`} className="ml-2 text-sm">
                      {rating}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white p-4 rounded mb-4 shadow relative">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsCourseLevelOpen(!isCourseLevelOpen)}>
              <h2 className="font-bold text-sm mb-2">Course Level</h2>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isCourseLevelOpen ? "▲" : "▼"}
              </button>
            </div>
            {isCourseLevelOpen && (
              <ul>
                {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <input 
                      type="checkbox" 
                      id={`level${index}`} 
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#ff2d52] checked:border-[#ff2d52] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer custom-checkbox"
                    />
                    <label htmlFor={`level${index}`} className="ml-2 text-sm">
                      {level}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white p-4 rounded mb-4 shadow relative">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsPriceOpen(!isPriceOpen)}>
              <h2 className="font-bold text-sm mb-2">Price</h2>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isPriceOpen ? "▲" : "▼"}
              </button>
            </div>
            {isPriceOpen && (
              <>
                <input type="range" min="0" max="100" className="w-full" />

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1">
                    <label htmlFor="min-price" className="block text-gray-700 text-sm mb-1">Min Price</label>
                    <input placeholder="min" id="min-price" type="number" min="0" className="w-full border rounded p-2" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="max-price" className="block text-gray-700 text-sm mb-1">Max Price</label>
                    <input placeholder="max" id="max-price" type="number" min="0" className="w-full border rounded p-2" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center">
                    <input id="paid" type="checkbox" className="mr-2" />
                    <label htmlFor="paid" className="text-gray-700 text-sm">Paid</label>
                  </div>
                  <div className="flex items-center">
                    <input id="free" type="checkbox" className="mr-2" />
                    <label htmlFor="free" className="text-gray-700 text-sm">Free</label>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="bg-white p-4 rounded mb-4 shadow relative">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsDurationOpen(!isDurationOpen)}>
              <h2 className="font-bold text-sm mb-2">Duration</h2>
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                {isDurationOpen ? "▲" : "▼"}
              </button>
            </div>
            {isDurationOpen && (
              <ul>
                {['1-4 weeks', '1-3 months', '3-6 months', '6-12 months', '1+ year'].map((duration, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <input 
                      type="checkbox" 
                      id={`duration${index}`} 
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#ff2d52] checked:border-[#ff2d52] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer custom-checkbox"
                    />
                    <label htmlFor={`duration${index}`} className="ml-2 text-sm">
                      {duration}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        <main className="w-3/4 grid grid-cols-3 gap-4">
          {Array(12).fill(0).map((_, index) => (
            <div key={index} className="bg-white shadow p-4 rounded">
              <img
                src="/course-image.png"
                alt="Course"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <div className="mt-2 flex space-x-2">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Beginner</span>
                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">Bestseller</span>
                <p className="font-bold text-red-500">$49.99</p>
              </div>
              <div className="flex justify-between mb-2">
                <h3 className="font-bold">Course Title</h3>
              </div>
              <p className="text-sm mb-2">Instructor Name</p>
              <p className="text-sm text-gray-500">4.5 ★ (250 Reviews)</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
