"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl/6 font-bold text-gray-900 dark:text-white">
              HMX<span className="text-[var(--main-color)]">HUB</span>
            </a>
            <p className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Open-source library of over 400+ web components and interactive elements built for better web.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:text-left">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Affiliate Program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-6 mt-10 border-t border-gray-200 sm:flex-row dark:border-gray-700">
          <span className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
            © {new Date().getFullYear()} <a href="#" className="font-semibold hover:underline">HMXHUB</a>. All rights reserved.
          </span>

          <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
            <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="transition-colors hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
