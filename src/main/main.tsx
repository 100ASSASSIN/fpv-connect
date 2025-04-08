"use client";
import React from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';



const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]



const MainPage: React.FC = () => {
  return (
    <>
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
              <h2 className="font-semibold text-indigo-600 text-base/7">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-gray-600 text-lg/8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-gray-600 text-base/7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute text-indigo-600 top-1 left-1 size-5" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
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
            Empowering the Future of Drone Pilots
          </h1>
        </div>
      </div>

      {/* Related FPV Content Cards */}
    </div>
    </>
  );
};

export default MainPage;
