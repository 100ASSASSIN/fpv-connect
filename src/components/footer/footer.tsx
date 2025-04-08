"use client";
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <a
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900"
        >
      <Image
  alt="Tailwind Logo"
  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
  width={40} // Set to appropriate size
  height={40}
  className="w-auto h-8 m-2"
/>
          FPV
        </a>

        <p className="my-6 text-gray-500">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>

        <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900">
          {[
            "About",
            "Premium",
            "Campaigns",
            "Blog",
            "Affiliate Program",
            "FAQs",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <span className="text-sm text-gray-500 sm:text-center">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
