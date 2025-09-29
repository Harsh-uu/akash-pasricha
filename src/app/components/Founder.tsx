// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export const Founder = () => {
  return (
    <section id="founder" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading (Outside the Container) --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-800">
            Meet The <span className="text-[#e9343b]">Author</span>
          </h2>
        </div>

        {/* --- Main Content Container with Background --- */}
        <div className="bg-[white/90] shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
          {/* --- Image Column (First) --- */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-72 md:h-96 lg:h-full">
              <Image
                src="/Akash.png"
                alt="Kevin Missal - CEO and Founder of Hubhawks"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* --- Text Content Column (Second) --- */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center lg:text-left">
            <h1 className="text-3xl font-semibold">Akash Pasricha</h1>
           
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4">
              Akash Pasricha is an avid traveller and has lived in India, the
              USA and Latin America. He enjoys living like the locals, learning
              their customs and language when possible. His interests include
              skiing, drumming, hiking, and cooking. This is his first book to expand the knowledge and provide
              inspiration through Indian history, in hopes of unlocking the
              hidden potential of a people. He lives in New Delhi and
              California, splitting his time between his family and his passion
              for Indian history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
