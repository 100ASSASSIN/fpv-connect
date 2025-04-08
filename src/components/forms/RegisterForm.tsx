"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonForm from "@/components/Skeleton/SkeletonForm";
import Spinner from "@/components/loader/loader";

const RegisterForm: React.FC = () => {
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

      <div className="w-full max-w-2xl bg-white rounded-md shadow-md dark:bg-gray-800 dark:border dark:border-gray-700 ">
        {loading ? (
          <SkeletonForm />
        ) : (
          <div className="p-6 space-y-5 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold text-[var(--main-color)] dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4" method="POST">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  required
                  placeholder="John"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  required
                  placeholder="Doe"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  required
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  placeholder="Chennai, India"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    href="#"
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-[var(--main-color)] hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
              >
                Create Account
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterForm;
