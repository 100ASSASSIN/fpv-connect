"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


export default function AboutPage() {
  return (
    <>
      <Navbar/>
    <section className="min-h-screen px-6 py-12 text-gray-800 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-[var(--main-color)]">
          About FPV Drones
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          At <span className="font-semibold text-[var(--main-color)]">FPV Drones</span>, we specialize in high-performance drone technology for racing, cinematography, and exploration. Our mission is to elevate your aerial experience through precision engineering and innovation.
        </p>
        <p className="text-lg leading-relaxed">
          With a passionate team of engineers and drone pilots, we bring top-tier FPV drone products and services tailored for professionals and enthusiasts alike. Whether you re filming a blockbuster or racing through the sky, we’ve got you covered.
        </p>
        <button className="mt-8 bg-[var(--main-color)] hover:bg-blue-700 transition text-white font-semibold px-6 py-2 rounded-xl shadow">
          Learn More
        </button>
        <div className="relative w-full h-[65vh] sm:h-[70vh] bg-white">
        <video
          className="object-cover w-full h-full mt-10 rounded-xs"
          src="https://videos.pexels.com/video-files/5803093/5803093-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-4 text-3xl font-bold text-center text-white sm:text-5xl">
            Empowering the Future of Drone Pilots
          </h1>
        </div>
      </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
