'use client';

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleClick = () => router.push('/pages/user_login');

  return (
    <nav className="bg-white text-gray-800 px-4 sm:px-6 md:px-8 py-4 shadow-md sticky top-0 z-50 rounded-b-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-wide">
          <Link href="/">
            <span className="text-[var(--main-color)]">FPV Drones </span>Site
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-[var(--main-color)] transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/pages/services" className="hover:text-[var(--main-color)] transition duration-300">Our Services</Link>
          </li>
          <li>
            <Link href="/pages/about" className="hover:text-[var(--main-color)] transition duration-300">About Us</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[var(--main-color)] transition duration-300">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[var(--main-color)] transition duration-300">Support</Link>
          </li>
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={handleClick}
            className="bg-[var(--main-color)] hover:bg-[var(--primary-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold"
          >
            Get Stranded
          </button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium animate-slide-down">
          <Link href="/" className="block hover:text-[var(--main-color)] transition duration-300">Home</Link>
          <Link href="/pages/services" className="block hover:text-[var(--main-color)] transition duration-300">Our Services</Link>
          <Link href="/pages/about" className="block hover:text-[var(--main-color)] transition duration-300">About Us</Link>
          <Link href="#" className="block hover:text-[var(--main-color)] transition duration-300">Contact Us</Link>
          <Link href="#" className="block hover:text-[var(--main-color)] transition duration-300">Support</Link>
          <button
            onClick={handleClick}
            className="w-full bg-[var(--primary-color)] hover:bg-[var(--main-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold"
          >
            Get Stranded
          </button>
        </div>
      )}
    </nav>
  );
}
