'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/navbar';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Toaster, toast } from 'react-hot-toast';
import Footer from "@/components/footer/footer";



export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:8000/main/users/v2/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.detail || 'Registration failed.');
        return;
      }

      toast.success('User registered successfully.');
      setFormData({ username: '', email: '', password: '' });

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Server error. Please try again later.');
    }
  };

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      <Toaster position="top-right" />
  
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
  
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
  
      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
  
        <div className="flex items-center justify-center min-h-screen  px-4">
          <div className="bg-white backdrop-blur-md  rounded shadow-lg   w-full max-w-3xl mx-auto flex flex-col md:flex-row overflow-hidden">
  
            {/* Left Side Image (Visible Always) */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Drone preview"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
  
            {/* Right Side Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                Create Your Account
              </h2>
  
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                {/* Username */}
                <div className="relative">
                  <UserIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="pl-9 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none text-sm"
                  />
                </div>
  
                {/* Email */}
                <div className="relative">
                  <EnvelopeIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="pl-9 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none text-sm"
                  />
                </div>
  
                {/* Password */}
                <div className="relative">
                  <LockClosedIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="pl-9 w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none text-sm"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-[var(--primary-color)] hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300 text-sm"
                >
                  Register
                </button>
  
                <p className="text-xs text-center text-[var(--main-color)] mt-4">
                  © 2025 FPV Drones. All rights reserved.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer /></>
  );
  
}
