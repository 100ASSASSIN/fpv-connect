"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-800 px-8 py-4 shadow-md sticky top-0 z-50 rounded-b-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-indigo-600">FPV Drones </span>Site
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><a href="#" className="hover:text-indigo-600 transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition duration-300">About</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition duration-300">Services</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition duration-300">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white px-5 py-2 rounded-md shadow font-bold">
            Get stranded
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium">
          <a href="#" className="block hover:text-indigo-600 transition duration-300">Home</a>
          <a href="#" className="block hover:text-indigo-600 transition duration-300">About</a>
          <a href="#" className="block hover:text-indigo-600 transition duration-300">Services</a>
          <a href="#" className="block hover:text-indigo-600 transition duration-300">Contact</a>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white px-5 py-2 rounded-md shadow font-bold">
            Get stranded
          </button>
        </div>
      )}
    </nav>
  );
}
