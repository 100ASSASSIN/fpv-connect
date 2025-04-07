'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/navbar';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Toaster, toast } from 'react-hot-toast';
import Footer from '@/components/footer/footer';
import { registerUser } from '@/lib/services/userService';


export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      toast.error('Please accept the terms and conditions.');
      return;
    }

    setLoading(true);
    try {
      await registerUser(formData);
      toast.success('User registered successfully.');
      setFormData({ username: '', email: '', password: '' });
      setAcceptedTerms(false);
      setTimeout(() => router.push('/'), 1500);
    } catch (error: any) {
      toast.error(error.message || 'Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="relative min-h-screen overflow-hidden">
      <Toaster position="bottom-right" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://videos.pexels.com/video-files/5803093/5803093-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-xs" />

      {/* Main Content */}
      <div className="relative z-10">

        <div className="flex items-center justify-center  px-4 py-10 mt-15">
          <div className="bg-white backdrop-blur-md rounded shadow-2xl w-full max-w-4xl max-h-[90%] mx-auto flex flex-col md:flex-row overflow-hidden ">
            {/* Left Side Image */}
            <div className="md:w-1/2 hidden md:block rounded-2xl">
              <img
                src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Drone preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-6">
              <h1 className="text-3xl font-extrabold text-center text-gray-800">
                Create Your Account
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                {/* Username */}
                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <LockClosedIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                    I agree to the <span className="text-blue-600 underline cursor-pointer">terms and conditions</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition duration-300"
                >
                  Register
                </button>

                <p className="text-xs text-center text-gray-500 mt-6">
                  © 2025 FPV Drones. All rights reserved.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    <Footer />
    </>
  );
}
