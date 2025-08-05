// src/components/TrustedBy.tsx
"use client";

import { motion } from "framer-motion";

export const TrustedBy = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 border-y border-gray-200"
    >
      <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest">
        PUBLISHING ON ALL MAJOR PLATFORMS
      </h3>
      <div className="mt-6 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        <p className="font-bold text-xl text-gray-400">Amazon</p>
        <p className="font-bold text-xl text-gray-400">Audible</p>
        <p className="font-bold text-xl text-gray-400">Kindle</p>
        <p className="font-bold text-xl text-gray-400">Spotify</p>
      </div>
    </motion.div>
  );
};