// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import FAQ from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { useUIStore } from "@/store/useUIStore";
import { Bestsellers } from "./components/Bestseller";
import { OurAuthors } from "./components/OurAuthors";

export default function Home() {
  const { mobileMenuOpen } = useUIStore();

  return (
    <div
      className={`bg-white relative text-gray-800 font-sans ${
        mobileMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <p className="text-center bg-[#bb0000] text-white text-sm p-1.5 hover:underline cursor-pointer">
        Sign up for Bookperk—fantastic deals, sweepstakes, bookish finds & more!
      </p>
      <Header />
      <main className="mx-auto">
        <div className="relative isolate overflow-hidden">
          <Hero />
        </div>
        <div className="px-4">
          <Bestsellers/>
        </div>
        <div className="px-4 relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className=" absolute top-0 left-0 -translate-y-1/2 w-96 h-96 md:w-[45rem] md:h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -z-10 -translate-x-1/2"
          />
          <Founder />
        </div>
        <div className="px-4 bg-rose-600">
          <OurAuthors/>
        </div>

        <div className="relative px-4 isolate overflow-hidden">
          {/* Decorative Blob: Positioned before the content, no negative z-index */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 md:w-[45rem] md:h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -z-20 translate-x-1/2"
          />

          <UpcomingEvents />
        </div>

        {/* --- FAQ with Visible Background --- */}
        <div className="relative px-4 isolate overflow-hidden">
          {/* Decorative Blob */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 -translate-y-1/2 w-96 h-96 md:w-[45rem] md:h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -z-10 -translate-x-1/2"
          />

          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
