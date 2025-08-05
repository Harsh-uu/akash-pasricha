// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Hero = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
      >
        Launch Your Book. <br /> <span className="text-rose-600">Build Your Brand.</span> <br />Become a Bestseller.
      </motion.h1>
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
      >
        Hubhawks is your all-in-one partner for writing, publishing, and marketing your masterpiece.
      </motion.p>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="mt-8 flex justify-center gap-4 flex-wrap"
      >
        <a
          href="#contact"
          className="bg-rose-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-700 transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          Start Your Book Journey <ArrowRight size={20} />
        </a>
        <a
          href="#services"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          See Our Services
        </a>
      </motion.div>
    </section>
  );
};