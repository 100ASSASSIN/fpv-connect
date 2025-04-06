"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-800 px-8 py-4 shadow-md sticky top-0 z-50 rounded-b-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-[var(--main-color)]">FPV Drones </span>Site
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><a href="/" className="hover:text-[var(--main-color)] transition duration-300">Home</a></li>
          <li><a href="#" className="hover:text-[var(--main-color)] transition duration-300">Services</a></li>
          <li><Link href="/pages/about" className="hover:text-[var(--main-color)] transition duration-300">About</Link></li>
          <li><a href="#" className="hover:text-[var(--main-color)] transition duration-300">Contact</a></li>
          {/* --primary-color */}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[var(--main-color)] hover:bg-[var(--primary-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold">
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
          <a href="/" className="block hover:text-[var(--main-color)] transition duration-300">Home</a>
          <a href="#" className="block hover:text-[var(--main-color)] transition duration-300">Services</a>
          <a href="/about" className="block hover:text-[var(--main-color)] transition duration-300">About</a>
          <a href="#" className="block hover:text-[var(--main-color)] transition duration-300">Contact</a>
          <button className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold">
            Get stranded
          </button>
        </div>
      )}
    </nav>
  );
}
