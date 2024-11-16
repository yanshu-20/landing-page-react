// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h1>
      <p className="text-lg mb-6">
        Explore our extensive library of courses and start your learning journey today.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
