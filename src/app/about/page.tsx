"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { OurTeam } from "../components/OurTeam";
import { useUIStore } from "@/store/useUIStore";
import { OurJourney } from "../components/OurJourney";

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
  const { mobileMenuOpen } = useUIStore();

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* --- Main Hero Section --- */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900'>
            About <span className="text-5xl md:text-6xl font-caveat font-black"> Hubhawks</span>
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
              <h2 className="font-bold text-rose-600 text-4xl font-caveat">Our Story</h2>
              <p className="mt-4 text-md px-3 sm:px-0 sm:text-lg text-gray-600 leading-relaxed">
                Hubhawks was founded to tackle the fears and doubts that hold aspiring authors back. For many writers, the greatest obstacle isn’t just the blank page, but the fear of failure, rejection, and getting lost in the crowded market. Our sessions are designed to confront these challenges head-on, giving you the clarity, tools, and confidence to move forward. We’re here to replace uncertainty with direction, transform hesitation into action, and guide you toward the bestseller lists with courage and purpose.
              </p>
            </div>
            
            {/* Video Content */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LOwVLyPCdgM?si=lHIDcRVIamkzh4PM" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      
      {/* --- Meet the CEO/Founder Section --- */}
        <OurTeam/>
        <OurJourney/>
    </div>
  );
};

export default Page;