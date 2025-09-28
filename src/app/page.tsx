// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutTheBook } from "./components/AboutTheBook";
import { Testimonials } from "./components/Testimonials";
import { MediaInquiries } from "./components/MediaInquiries";

export default function Home() {
  return (
    <div className="relative text-gray-800 font-sans">
      {/* Background container with herobg.jpg */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        {/* Background overlay for better content readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Header and Hero content positioned above background */}
        <div className="relative z-10 h-full flex flex-col">
          <Header />
          <div className="flex-1 flex p-4 items-center pt-10 justify-center">
            <Hero />
          </div>
        </div>
      </div>
      
      <main className="mx-auto">
        <div className="relative isolate overflow-hidden">
          {/* Additional content can go here */}
        </div>
         <div className="px-4 relative overflow-hidden">
          <AboutTheBook/>
        </div>
        
        <div className=" relative isolate overflow-hidden bg-gray-50">
          <Founder />
        </div>
        
        <div className="px-4 relative overflow-hidden">
          <Testimonials/>
        </div>
        
        <div className="px-4 bg-gray-50">
          <MediaInquiries/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
