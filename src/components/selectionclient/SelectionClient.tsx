"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Spinner from "@/components/loader/loader";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SelectionClient() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode"); 

  const titleText =
    mode === "signup"
      ? "Please choose your Selection for sign up"
      : "Please choose your Selection for sign in";

  const VideoSrc =
    mode === "signup"
      ? "https://videos.pexels.com/video-files/5803093/5803093-uhd_2560_1440_25fps.mp4"
      : "https://videos.pexels.com/video-files/5803065/5803065-uhd_2560_1440_25fps.mp4";

  const router = mode === "signup" ? "signup" : "signin";

  const targetHref = `/pages/account/fpvpilot/${router || ""}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading && <Spinner />}
      <Head>
        <title>Selection Page</title>
      </Head>

      {/* 🔹 Navbar */}
      <Navbar />
      {/* 🔹 Background Video */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm" />
      </div>

      {/* 🔹 Page Content */}
      <main className="flex flex-col items-center min-h-screen gap-10 px-6 pt-24 pb-16 text-white justify-top">
        {/* You can insert your cards or text content here */}
        <h1 className="text-4xl font-bold">{titleText}</h1>
        <div className="flex flex-wrap justify-center w-full gap-6 px-4 py-10 sm:px-6 lg:px-20">
          {/* Left Card */}
          <Link
            href="/user"
            className="w-full sm:w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg relative group"
          >
            <Image
              src="https://thumbs.dreamstime.com/b/cheerful-smiling-young-male-model-wearing-white-shirt-summer-scenery-cheerful-smiling-young-male-model-127286219.jpg"
              alt="User"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-xl font-bold text-white">B2B User</h2>
            </div>
          </Link>

          {/* Right Card */}
          <Link
            href={targetHref}
            className="w-full sm:w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg relative group"
          >
            <Image
              src="https://images.fonearena.com/blog/wp-content/uploads/2021/03/DJI-FPV-drone-1.jpg"
              alt="FPV Pilot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-xl font-bold text-white">FPV Pilot</h2>
            </div>
          </Link>
          <Link
            href={targetHref}
            className="w-full sm:w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg relative group"
          >
            <Image
              src="https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="FPV Pilot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-xl font-bold text-white">CA Person</h2>
            </div>
          </Link>
        </div>

        <p className="max-w-xl text-lg text-center text-gray-300">
          Explore various services and innovations from HMXHUB across
          different industries.
        </p>
      </main>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
}
