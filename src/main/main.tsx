"use client";
import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "@/components/loader/loader";

const features = [
  {
    name: "Instant FPV Flight Deployment",
    description:
      "Launch your FPV drone configurations with one click. Deploy custom PID profiles and firmware updates seamlessly.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure Flight Channels",
    description:
      "All communication between controller and drone is encrypted, ensuring a safe and interference-free flight experience.",
    icon: LockClosedIcon,
  },
  {
    name: "Flight Log Backups",
    description:
      "Automatically backup flight telemetry and blackbox data to the cloud. Never lose your critical performance logs.",
    icon: ServerIcon,
  },
];

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after full page load
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="min-h-screen text-white bg-white">
        <div className="relative w-full h-[65vh] sm:h-[70vh] bg-white">
          <video
            className="object-cover w-full h-full"
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
        <div className="py-24 overflow-hidden bg-white sm:py-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="font-semibold text-[var(--main-color)] text-base/7">
                    Deploy faster
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">
                    A better workflow
                  </p>
                  <p className="mt-6 text-gray-600 text-lg/8">
                    Streamline your FPV drone operations with smarter configuration, real-time telemetry,
                    and instant deployment. From tuning flight parameters to syncing logs in the cloud
                    everything is faster, safer, and more reliable.
                  </p>
                  <dl className="max-w-xl mt-10 space-y-8 text-gray-600 text-base/7 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute text-[var(--main-color)] top-1 left-1 size-5"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                alt="Product screenshot"
                src="https://images.unsplash.com/photo-1657806899611-f46fb6822f88?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-[65vh] sm:h-[70vh] bg-white">
          <video
            className="object-cover w-full h-full"
            src="https://videos.pexels.com/video-files/5803065/5803065-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
          />

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="px-4 text-3xl font-bold text-center text-white sm:text-5xl">
            Instant FPV Flight Deployment
            </h1>
          </div>
        </div>
        {/* Related FPV Content Cards */}
      </div>
    </>
  );
};

export default MainPage;
