// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import FAQ from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurServices } from "./components/OurServices";
import { Testimonials } from "./components/Testimonials";
import { useUIStore } from "@/store/useUIStore";
import { Imprints } from "./components/Imprints";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const { mobileMenuOpen } = useUIStore();

  return (
    <div
      className={`bg-white relative text-gray-800 font-sans ${
        mobileMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header />
      <main className="mx-auto">
        <div className="relative px-4 isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 w-[50rem] h-[50rem] bg-rose-100 rounded-full translate-x-1/2 blur-3xl opacity-90"
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            aria-hidden="true"
            className="hidden md:block absolute -top-40 -left-48 w-[50rem] h-[40rem] opacity-60"
          >
            <Image
              src="/wavy.png"
              alt="wavy design"
              width={400}
              height={400}
              className=" object-cover -rotate-[35deg] w-full h-full opacity-20"
            />
          </motion.div>
          <Hero />
        </div>
        <div className="bg-[#f9f9f9] px-4">
          <Founder />
        </div>

        {/* --- WhyChooseUs with Visible Background --- */}
        {/* 'isolate' creates a new stacking context, making z-index management easier */}
        <div className="relative px-4 isolate overflow-hidden">
          {/* Decorative Blob: Positioned before the content, no negative z-index */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[50rem] h-[50rem] bg-rose-100 rounded-full blur-3xl opacity-90"
          />

          <WhyChooseUs />
        </div>

        <div className="px-4 bg-[#f9f9f9]">
          <OurServices />
        </div>

        {/* --- Testimonials with Visible Background --- */}
        <div className="relative isolate overflow-hidden px-4">
          <Testimonials />
        </div>

        <div className="px-4 bg-[#f9f9f9]">
          <Imprints />
        </div>

        {/* --- FAQ with Visible Background --- */}
        <div className="relative px-4 isolate overflow-hidden">
          {/* Decorative Blob */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 left-0 -translate-y-1/2 w-[45rem] h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -translate-x-1/2"
          />

          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
