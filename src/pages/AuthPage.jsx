"use client"
import { useRouter } from 'next/router';
import React from "react";

const AuthPage = () => {
    const navigate = useRouter();
      const handleLogin = (e) => {
    e.preventDefault();
    // 🚀 Just redirect to dashboard
    navigate.push("/Dashboard")
  }; 


    




  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-700 p-4">
      <div className="flex flex-col md:flex-row gap-8">
    
        
        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-md p-6 w-80">
          <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <div className="text-sm text-teal-600 cursor-pointer hover:underline">
              Forgot password?
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don’t have an account?{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">
              Signup
            </span>
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-lg shadow-md p-6 w-80">
          <h2 className="text-xl font-semibold text-center mb-4">Signup</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <span className="text-teal-600 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
