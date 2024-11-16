// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
