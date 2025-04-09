"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonForm from "@/components/Skeleton/SkeletonForm";
import Spinner from "@/components/loader/loader";
import { FcGoogle } from "react-icons/fc";

const SignInForm: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen px-4 mt-10">
      {loading && <Spinner />}

      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl dark:bg-gray-800 dark:border dark:border-gray-700">
        {loading ? (
          <SkeletonForm />
        ) : (
          <div className="p-8 space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Link
                href={"/"}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                HMX<span className="text-[var(--main-color)]">HUB</span>
              </Link>
            </div>

            <div className="space-y-1 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Sign in to your FPV Pilot account
              </h2>
              <p className="m-2 text-sm text-gray-600 dark:text-gray-300">
                Welcome back to HMXHUB! Please login to continue.
              </p>
            </div>

            {/* OAuth Login Buttons */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-300 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 hover:shadow-md"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 px-5 py-3 text-sm font-medium text-white transition-all duration-300 bg-black border rounded-lg hover:bg-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.312.469-2.384 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.222 0 4.61-2.804 5.624-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></span>
              OR
              <span className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></span>
            </div>

            {/* Form */}
            <form className="space-y-5" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[var(--main-color)]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[var(--main-color)]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 text-sm font-medium text-white rounded-xs bg-[var(--main-color)] hover:bg-opacity-90 focus:ring-4 focus:ring-[var(--main-color)]/50"
              >
                Sign In
              </button>

              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Don’t have an account?{" "}
                <Link
                  href="#"
                  className="font-medium text-[var(--main-color)] hover:underline"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignInForm;
