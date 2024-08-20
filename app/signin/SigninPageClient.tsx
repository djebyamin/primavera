"use client";

import { FaGoogle, FaBell, FaHeart, FaShoppingCart } from "react-icons/fa";
import SignInForm from "./SignInForm";
import { signInWithGoogle } from "@/app/auth/signInServerAction";

export default function SigninPageClient() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between py-4 bg-white shadow-md px-4">
        <div className="flex items-center space-x-2">
          <img src={"/logo.png"} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Formation Primavera</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-500 cursor-pointer" />
          <FaHeart className="text-gray-500 cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="text-gray-500 cursor-pointer" />
            <button className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Start
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-1/2 bg-purple-100 flex items-center justify-center">
          <img
            src={"/az.png"}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Sign in to your account
            </h2>

            <SignInForm />

            <div className="mt-4">
              <form action={signInWithGoogle}>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 flex items-center justify-center"
                >
                  <FaGoogle className="mr-2" />
                  Sign in with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}