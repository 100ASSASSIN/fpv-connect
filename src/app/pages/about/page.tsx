// /app/about/page.tsx or /pages/about.tsx depending on your routing

"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar/>
    <section className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-[var(--main-color)]">
          About FPV Drones
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          At <span className="font-semibold text-[var(--main-color)]">FPV Drones</span>, we specialize in high-performance drone technology for racing, cinematography, and exploration. Our mission is to elevate your aerial experience through precision engineering and innovation.
        </p>
        <p className="text-lg leading-relaxed">
          With a passionate team of engineers and drone pilots, we bring top-tier FPV drone products and services tailored for professionals and enthusiasts alike. Whether you're filming a blockbuster or racing through the sky, we’ve got you covered.
        </p>

        <button className="mt-8 bg-[var(--main-color)] hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-xl shadow">
          Learn More
        </button>
      </div>
    </section>
    </>
  );
}
