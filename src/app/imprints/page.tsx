"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { OurTeam } from "../components/OurTeam";
import { useUIStore } from "@/store/useUIStore";
import { OurJourney } from "../components/OurJourney";
import { FinalCTA } from "../components/FinalCTA";
import { OurServices } from "../components/OurServices";
import { DetailedServices } from "../components/DetailedServices";
import { DetailedImprints } from "../components/DetailedImprints";

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
  className="text-center pt-12 sm:pt-20 pb-20 md:pb-28 relative isolate overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-4">
    <div
      aria-hidden="true"
      className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 w-[50rem] h-[50rem] bg-rose-100 rounded-full -z-10 translate-x-1/2 blur-3xl opacity-90"
    />
    <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
      Our Publishing <span className="text-rose-600">Platforms</span>
    </h1>
    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
      At Hubhawks, we believe every story deserves the right home. That is why we have built a family of imprints, 
      each designed to serve different voices, genres, and audiences. Whether you are writing fiction, nonfiction, or a niche project, 
      we make sure your book finds the platform it truly belongs to.
    </p>
    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
      Our imprints reflect our commitment to quality, creativity, and diversity. Each imprint is designed to guide authors with tailored strategies and ensure every book gets the attention it deserves. Whatever your vision, there is a Hubhawks imprint to bring it to life.
    </p>
  </div>
</motion.section>


      <motion.section
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="bg-[#f9f9f9]"
      >
        <DetailedImprints />
      </motion.section>

      {/* --- Our Story & Video Section --- */}
      {/* <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-semibold text-rose-600 text-4xl font-poppins">
                Our Strategy
              </h2>
              <p className="mt-4 text-md px-3 sm:px-0 sm:text-lg text-gray-600 leading-relaxed">
                At Hubhawks, our approach goes beyond traditional publishing support. We build a clear strategy that positions your book for success from the very beginning, focusing on quality, visibility, and impact. From refining your manuscript to designing a standout cover, ensuring wide distribution, and guiding your marketing, every step is designed to give your book the best chance to rise above the noise and reach the bestseller lists.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video shadow-2xl overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NtV3hpe-49o?si=HJrCjloO9FposJUv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative px-4 isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-0 left-0 -translate-y-1/2 w-[45rem] h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -translate-x-1/2"
        />
      </div> */}

      <FinalCTA />
    </div>
  );
};

export default Page;
