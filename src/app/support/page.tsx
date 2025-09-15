"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { useUIStore } from "@/store/useUIStore";
import SupportPage from "../components/SupportPage";

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
            How Can We <span className="text-rose-600">Help?</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We’re here to support you every step of the way on your publishing journey. Whether you’re just getting started with an idea or you’re ready to bring your manuscript to life, our team is committed to answering your questions and providing the guidance you need. From understanding our services to exploring how we can collaborate, we’re always ready to listen and help you move forward with clarity and confidence.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            You can find the best ways to reach us below. Simply choose the option that is most convenient for you and let’s begin the conversation.
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
        <SupportPage />
      </motion.section>
    </div>
  );
};

export default Page;
