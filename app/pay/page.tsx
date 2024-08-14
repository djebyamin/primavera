import React from 'react';
import { FiCopy, FiFacebook, FiTwitter, FiMail, FiMessageSquare } from 'react-icons/fi';

export default function CourseCard() {
  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      {/* Price Section */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">$14.00</div>
        <div className="line-through text-gray-500">$26.00</div>
        <div className="ml-2 text-sm font-semibold text-red-600">56% OFF</div>
      </div>
      <div className="mt-2 text-red-600">2 days left at this price!</div>

      {/* Course Details */}
      <div className="mt-4">
        <div className="flex items-center justify-between py-2 border-b">
          <div>📅 Course Duration</div>
          <div>6 Month</div>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div>📊 Course Level</div>
          <div>Beginner and Intermediate</div>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div>👥 Students Enrolled</div>
          <div>69,419,618</div>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div>🗣 Language</div>
          <div>Français</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col mt-4 space-y-2">
        <button className="w-full py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600">
          Acheter Maintenant
        </button>
        <button className="w-full py-2 font-semibold text-red-500 bg-red-100 rounded-md hover:bg-red-200">
          Ajoutez au panier
        </button>
        <div className="flex justify-between mt-2 space-x-2">
          <button className="w-full py-2 font-semibold text-gray-600 border rounded-md hover:bg-gray-100">
            Add To Wishlist
          </button>
          <button className="w-full py-2 font-semibold text-gray-600 border rounded-md hover:bg-gray-100">
            Gift Course
          </button>
        </div>
      </div>

      {/* Course Includes */}
      <div className="mt-6">
        <h4 className="mb-2 text-lg font-bold">This course includes:</h4>
        <ul className="space-y-2 text-gray-600">
          <li>⏳ Lifetime access</li>
          <li>💵 30-days money-back guarantee</li>
          <li>📁 Free exercises file & downloadable resources</li>
          <li>📱 Access on mobile, tablet, and TV</li>
          <li>💻 100% online course</li>
        </ul>
      </div>

      <div className="flex space-x-2 mt-4">
      {/* Copy Link Button */}
      <button className="flex items-center px-4 py-2 space-x-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
        <FiCopy className="w-5 h-5" />
        <span>Copy link</span>
      </button>

      {/* Facebook Button */}
      <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
        <FiFacebook className="w-5 h-5" />
      </button>

      {/* Twitter Button */}
      <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
        <FiTwitter className="w-5 h-5" />
      </button>

      {/* Email Button */}
      <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
        <FiMail className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <button className="flex items-center justify-center w-10 h-10 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
        <FiMessageSquare className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
}
