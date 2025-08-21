"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { Target, Eye } from 'lucide-react';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Page = () => {
  return (
    <div className='bg-white text-gray-800 font-sans'>
      {/* --- Main Hero Section --- */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900'>
            About Hubhawks
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We are a melting pot of ideas, experiences, and knowledge, dedicated to making your writing journey easier and more successful.
          </p>
        </div>
      </motion.section>

      {/* --- Our Story & Video Section --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="pb-20 md:pb-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Hubhawks was founded to solve the real problems aspiring authors face. Our sessions are inspired by common challenges, addressing the issues that can hold back a writer's career. We exist to fill in the gaps, provide clear guidance, and help you navigate the path to the top of the bestseller lists.
              </p>
            </div>
            
            {/* Video Content */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NtV3hpe-49o?si=kkJL99EYoUPBy1v8" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Mission & Vision Section --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 md:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="inline-flex bg-rose-100 text-rose-600 rounded-full p-4">
              <Target size={32} />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              To empower every author with the tools, knowledge, and support they need to not only publish their book but to build a lasting and successful brand around their writing.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex bg-rose-100 text-rose-600 rounded-full p-4">
              <Eye size={32} />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              To be the most trusted and results-driven partner for authors worldwide, creating a community where stories are celebrated and writers achieve their dreams.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* --- Meet the CEO/Founder Section --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* CEO Picture */}
            <div className="md:w-1/3 w-full">
              <div className="relative w-64 h-64 mx-auto md:w-full md:h-80">
                <Image
                  src="/Kevin.jpg" // IMPORTANT: Replace with the actual image path
                  alt="Portrait of the Hubhawks CEO"
                  fill
                  objectFit="cover"
                  className="rounded-full md:rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            {/* CEO Bio */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">Kevin Missal</h3>
              <p className="text-rose-600 font-semibold mt-1">CEO & Founder of Hubhawks</p>
              <p className="mt-4 text-gray-600 leading-relaxed px-4 sm:px-0">
                Kevin Missal wrote his first book at the age of 14, and at 22, the St. Stephens graduate has turned out to be a bestselling author and a full-time writer with the first two books in his Kalki series being runaway successes. Along with the Narasimha series being published by Harper Collins, his recent release with Penguin reimagines the fabled story of Sinbad the Sailor. Kevin loves fantasy fiction and has always been a fan of mythology. His books have been featured in publications like the Sunday Guardian, The New Indian Express and Millennium Post. He lives in Gurugram.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;