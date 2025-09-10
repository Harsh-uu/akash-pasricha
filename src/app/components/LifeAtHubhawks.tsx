// src/components/LifeAtHubhawks.tsx
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { BookHeart, Coffee, TrendingUp, Users } from "lucide-react";

// --- DUMMY DATA for Perks ---
const perksData = [
  {
    icon: <BookHeart size={28} />,
    title: "Impactful Work",
    description: "Be part of a team that brings incredible stories to life and empowers authors worldwide."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Career Growth",
    description: "We invest in our people with continuous learning opportunities and clear paths for advancement."
  },
  {
    icon: <Users size={28} />,
    title: "Collaborative Culture",
    description: "Join a supportive and creative environment where every voice is heard and valued."
  },
  {
    icon: <Coffee size={28} />,
    title: "Great Perks",
    description: "Enjoy flexible work hours, remote options, and of course, a never-ending supply of books."
  }
];

// --- Animation Variants for Cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

export const LifeAtHubhawks = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Life at <span className="text-rose-600">Hubhawks</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We believe in creating a culture where our team can thrive both personally and professionally.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {perksData.map((perk, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="shadow-lg border p-6 text-center"
            >
              <div className="inline-flex bg-rose-100 text-rose-600 rounded-full p-3 mb-4">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{perk.title}</h3>
              <p className="mt-2 text-gray-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};