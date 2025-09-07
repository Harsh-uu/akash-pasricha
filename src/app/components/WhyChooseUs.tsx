// src/components/WhyChooseUs.tsx
"use client";

import { motion } from 'framer-motion';
import React from 'react';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Data for Key Figures ---
// Easily update your stats here
const statsData = [
  {
    figure: "100",
    suffix: "+",
    label: "Books Published"
  },
  {
    figure: "72",
    suffix: "", // No suffix for this one
    label: "Authors Empowered"
  },
  {
    figure: "10",
    suffix: "+",
    label: "Bestsellers Created"
  },
  {
    figure: "10",
    suffix: "+",
    label: "Countries Served"
  },
];

export const WhyChooseUs = () => {
  return (
    <section className='py-20 md:py-28'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Why Choose <span className='text-rose-600'>Hubhawks</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            We are dedicated to quality, success, and empowering our authors.
          </p>
        </div>

        {/* --- Stats Grid --- */}
        <div className="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-8 max-w-4xl mx-auto">
           {statsData.map((stat, index) =>(
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* --- CORRECTED: Perfect Circle with Centered Figure --- */}
              <div className="bg-rose-600 rounded-full w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-4">
                <span className="text-white font-semibold font-poppins text-4xl">
                  {stat.figure}{stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="mt-2 text-md md:text-lg font-medium text-gray-600">{stat.label}</h3>
            </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};