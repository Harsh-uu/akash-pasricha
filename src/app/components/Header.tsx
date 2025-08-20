// src/components/Header.tsx
"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="top-0 border-b border-gray-200 sticky z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center p-4 -z-10">
        <Link href="/">
        <Image
          className="h-16 w-20 md:h-20 md:w-24"
          src="/hubhawks.webp"
          alt="Hubhawks Logo"
          width={40}
          height={100}
        />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-rose-600 transition-colors">
            Services
          </a>
          <a
            href="#testimonials"
            className="hover:text-rose-600 transition-colors"
          >
            Case Studies
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Blog
          </a>
          <a href="/about" className="hover:text-rose-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-rose-600 transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-block bg-rose-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-rose-700 transition-transform transform hover:scale-105"
        >
          Get Free Consultation
        </a>
        <button className="sm:hidden">
          <Menu />
        </button>
      </div>
    </motion.header>
  );
};
