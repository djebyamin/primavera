import React from 'react';
import Image from 'next/image';

const InstructorLandingPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="h-48 w-full bg-gradient-to-r from-pink-500 to-red-500 p-8 md:w-80 md:h-full">
              <h2 className="text-white text-3xl font-bold mb-4">Devenir formateur</h2>
              <p className="text-white mb-4">
                Vous êtes un expert en quelque chose et vous voulez partager votre passion? Rejoignez notre plateforme et commencez à enseigner dès aujourd'hui!
              </p>
              <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded">
                Start teaching
              </button>
              <div className="mt-4">
                <Image
                  src="/placeholder-instructor.jpg"
                  alt="Instructor"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your teaching & earning steps
            </h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-gray-700">Apply to become instructor</li>
              <li className="text-gray-700">Build & edit your profile</li>
              <li className="text-gray-700">Create your new course</li>
              <li className="text-gray-700">Start teaching & earning</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorLandingPage;