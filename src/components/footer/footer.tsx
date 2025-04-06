'use client';

import { Divider } from '@heroui/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-[var(--primary-color)]">FPV Drone</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Leading innovation in drone technology. We deliver cutting-edge FPV drone experiences that elevate every mission.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[var(--primary-color)] transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-[var(--primary-color)] transition">Contact Us</a></li>
              <li><a href="/services" className="hover:text-[var(--primary-color)] transition">Our Services</a></li>
              <li><a href="/support" className="hover:text-[var(--primary-color)] transition">Support</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/pricing-policy" className="hover:text-[var(--primary-color)] transition">Pricing Policy</a></li>
              <li><a href="/shipping-policy" className="hover:text-[var(--primary-color)] transition">Shipping Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-[var(--primary-color)] transition">Refund Policy</a></li>
              <li><a href="/terms" className="hover:text-[var(--primary-color)] transition">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-[var(--primary-color)] transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">Stay updated with the latest drone news and product releases.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <Divider className="my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-2 md:mb-0">© {currentYear} FPV Drone. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-[var(--primary-color)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--primary-color)]">Terms</a>
            <a href="/contact" className="hover:text-[var(--primary-color)]">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
