
"use client"
import React from "react";


//import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router';

const Dashboard = () => {
  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-teal-700 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-lg mb-6">You have successfully logged in.</p>
      <button
        className="bg-white text-teal-700 px-6 py-2 rounded-md hover:bg-gray-100"
        onClick={() => navigate.push("/VideoInterview")}
      >
        Go to Video Interview
      </button>
    </div>
  );
};

export default Dashboard;