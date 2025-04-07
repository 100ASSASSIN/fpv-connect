"use client";

import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Link from 'next/link';
import Image from 'next/image';

export default function SelectionPage() {
  return (
    <>
      <Head>
        <title>Selection Page</title>
      </Head>

      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/5803093/5803093-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full  backdrop-blur-sm" />
      </div>

      {/* 🔹 Page Content */}
      <main className="min-h-screen pt-24 pb-16 px-6 text-white flex flex-col items-center justify-top gap-10">
        {/* You can insert your cards or text content here */}
        <h1 className="text-4xl font-bold">Please choose your Selection</h1>
        {/* <p className="text-lg text-gray-300 text-center max-w-xl">
          Explore various services and innovations from Austronix across
          different industries.
        </p> */}
        <div className="flex justify-center gap-10 px-6 py-10">
      {/* Left Card */}
      <Link href="/user" className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg relative group">
        <Image
          src="https://thumbs.dreamstime.com/b/cheerful-smiling-young-male-model-wearing-white-shirt-summer-scenery-cheerful-smiling-young-male-model-127286219.jpg" // Make sure this image exists in /public/images/
          alt="User"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold">B2b User</h2>
        </div>
      </Link>

      {/* Right Card */}
      <Link href="/pages/account/fpvpilot/singup/" className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg relative group">
        <Image
          src="https://images.fonearena.com/blog/wp-content/uploads/2021/03/DJI-FPV-drone-1.jpg" // Make sure this image exists in /public/images/
          alt="FPV Pilot"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold">FPV Pilot</h2>
        </div>
      </Link>
    </div>
    <p className="text-lg text-gray-300 text-center max-w-xl">
          Explore various services and innovations from Austronix across
          different industries.
        </p>
      </main>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
}
