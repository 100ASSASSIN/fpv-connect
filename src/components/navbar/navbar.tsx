"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/user_login');
  };

  return (
    <nav className="bg-white text-gray-800 px-8 py-4 shadow-md sticky top-0 z-50 rounded-b-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link href={"/"}>
        <span className="text-[var(--main-color)]">FPV Drones </span>Site</Link>
        </div>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><Link href={"/"} className="hover:text-[var(--main-color)] transition duration-300">Home</Link></li>
          <li><Link href={"/pages/services"} className="hover:text-[var(--main-color)] transition duration-300">Services</Link></li>
          <li><Link href={"/pages/about"} className="hover:text-[var(--main-color)] transition duration-300">About</Link></li>
          <li><Link href={"#"} className="hover:text-[var(--main-color)] transition duration-300">Contact</Link></li>
          {/* --primary-color */}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button onClick={handleClick} className="cursor-pointer bg-[var(--main-color)] hover:bg-[var(--primary-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold">
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
          <Link href="/" className="block hover:text-[var(--main-color)] transition duration-300">Home</Link>
          <Link href="/pages/services" className="block hover:text-[var(--main-color)] transition duration-300">Services</Link>
          <Link href="pages/about" className="block hover:text-[var(--main-color)] transition duration-300">About</Link>
          <Link href="#" className="block hover:text-[var(--main-color)] transition duration-300">Contact</Link>
          <button onClick={handleClick} className="cursor-pointer w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition duration-300 text-white px-5 py-2 rounded-sm shadow font-bold">
            Get stranded
          </button>
        </div>
      )}
    </nav>
  );
}
