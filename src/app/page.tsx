"use client"

import { CTASection } from "./components/CTASection";
import FAQ from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Info } from "./components/Info";
import { Bestsellers } from "./components/Bestsellers";
import { Testimonials } from "./components/Testimonials";
import { useUIStore } from "@/store/useUIStore";



export default function Home() {
    const { mobileMenuOpen } = useUIStore();

  return (
    <div className={`bg-white relative text-gray-800 font-sans ${mobileMenuOpen ? "h-screen overflow-hidden": ""}`}>
      <Header/>
      <main className="mx-auto max-w-7xl px-4">
          <Hero />
          <Info/>
          <CTASection />
          <Bestsellers />
          <HowItWorks />
          <Testimonials />
          <FAQ/>
      </main>
      <Footer />
    </div>
  );
}