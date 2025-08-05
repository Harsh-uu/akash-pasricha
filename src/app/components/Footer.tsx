// src/components/Footer.tsx
"use client";

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Brand and Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-gray-900">Hubhawks</h3>
            <p className="mt-2 text-gray-600 text-sm">Your partner in publishing success.</p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800">Stay Updated</h4>
              <p className="text-sm text-gray-500 mt-1">Get the latest author tips and news.</p>
              <form className="mt-3 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-gray-900 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-800">Navigation</h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#services" className="text-gray-600 hover:text-rose-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-600 hover:text-rose-600 transition-colors">Case Studies</a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-600 hover:text-rose-600 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3: Legal & Social */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-800">Legal</h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Terms of Service</a>
            </nav>
          </div>


          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a href="mailto:tanvi@hubhawks.com" className="text-gray-600 hover:text-rose-600 transition-colors">tanvi@hubhawks.com</a>
            </nav>
          </div>
        

        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hubhawks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};