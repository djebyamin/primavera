import React from 'react';
import Image from 'next/image';

const InstructorLandingPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 p-2">
      <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:w-1/2 bg-gradient-to-r from-pink-500 to-red-500 p-8 flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold mb-4">Devenir formateur</h2>
          <p className="text-white mb-6 text-center">
            Vous êtes un expert en quelque chose et vous voulez partager votre passion? Rejoignez notre plateforme et commencez à enseigner dès aujourd'hui!
          </p>
          <button className="bg-white text-pink-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
            Start teaching
          </button>
          <div className="mt-8">
            <Image
              src="/formateur.png"
              alt="Instructor"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Your teaching & earning steps
          </h3>
          <ol className="list-decimal list-inside space-y-4 pl-6">
            <li className="flex items-start space-x-3 text-gray-800">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                1
              </span>
              <span>Apply to become instructor</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-800">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                2
              </span>
              <span>Build & edit your profile</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-800">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                3
              </span>
              <span>Create your new course</span>
            </li>
            <li className="flex items-start space-x-3 text-gray-800">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
                4
              </span>
              <span>Start teaching & earning</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InstructorLandingPage;
