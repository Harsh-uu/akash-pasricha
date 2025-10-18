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
        <div className="bg-[white/90] shadow-xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto">
          {/* --- Image Column (First) --- */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-72 md:h-full lg:h-full">
              <Image
                src="/Akash.png"
                alt="Akash Pasricha"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* --- Text Content Column (Second) --- */}
          <div className="lg:w-1/2 md:w-[60%] w-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center lg:text-left">
            <h1 className="text-3xl font-semibold">Akash Pasricha</h1>
           
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4">
              Akash Pasricha is a curious traveller with a passion for immersing himself in local cultures—learning their languages, customs, and stories. His interests range from skiing and hiking to drumming and cooking (though not usually all at once). This debut book is a tribute to Indian history, written to uncover forgotten narratives and spark fresh inspiration. He splits his time between New Delhi and California, juggling family life and historical rabbit holes—with varying degrees of success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
