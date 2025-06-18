"use client";
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from "react";

const AuthPage = () => {
  const router = useRouter();

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login with:", loginEmail, loginPassword);
     const body = {
  "email": loginEmail,
  "password": loginPassword
}
    
   try {
     const res = await axios.post("https://interview-app-apis.vercel.app/api/login",body)
     console.log(res);
     localStorage.setItem("token",res.data.token)
     if (res.status==200) {
       router.push("/Dashboard")
 
       
     }
   } catch (error) {
    alert("passrd or use name may me inncrrect")
    
   }
    
    
  };

  // Handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup with:", signupEmail, signupPassword);
    const body = {
  "email": signupEmail,
  "password": signupConfirmPassword
}
    
    const res = await axios.post("https://interview-app-apis.vercel.app/api/signup", body)
    // Redirect to Dashboard
    //router.push("/Dashboard");
    // Redirect or further logic
    console.log(res.data);
    
    alert("signup scusshul yu can login now")
    //router.push("/Dashboard");
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
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
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
          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Create a password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
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
