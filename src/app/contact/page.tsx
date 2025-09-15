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
import { OpenPositions } from "../components/OpenPositions";
import { LifeAtHubhawks } from "../components/LifeAtHubhawks";
import { InquiryForm } from "../components/InquiryForm";

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
            className="hidden md:block absolute top-0 left-0 -translate-y-1/2 w-[45rem] h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -translate-x-1/2"
          />
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Get In <span className="text-rose-600">Touch</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Ready to start your project? Fill out the form below.
          </p>
        </div>
        <InquiryForm />
      </motion.section>
    </div>
  );
};

export default Page;
