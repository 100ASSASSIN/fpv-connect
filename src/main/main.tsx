"use client";
import React from "react";



const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* Full Width Video */}
      <div className="relative w-full h-[65vh] sm:h-[70vh] bg-white">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5588061/5588061-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center px-4">
            Empowering the Future of Drone Pilots
          </h1>
        </div>
      </div>

      {/* Related FPV Content Cards */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Related FPV Drone Content
        </h2>
      </section>
    </div>
  );
};

export default MainPage;
