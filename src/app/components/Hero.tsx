// src/components/Hero.tsx
"use client";

import Image from "next/image";

export const Hero = () => {
  const handleDiscoverClick = () => {
    const aboutSection = document.querySelector("#about-the-book");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative max-w-7xl p-4 mx-auto overflow-hidden md:overflow-visible">
      {/* Background overlay */}
      
      <div className="relative z-10 max-w-7xl text-white flex flex-col xl:flex-row md:gap-8 items-center xl:items-start">
        <div className="w-fit z-20 text-center xl:text-center my-auto">
          <h1 className="text-5xl sm:text-5xl md:text-6xl xl:text-8xl leading-tight font-saira">
            LOST SECRET
          </h1>
          <h1 className="text-xl mt-2 sm:text-2xl md:text-3xl xl:text-4xl leading-tight font-saira tracking-wide uppercase">
           The <span className="text-[#fec539]"> Hidden</span> Truth Of Nalanda
          </h1>
          <h1 className="text-2xl mt-6 sm:mt-8 xl:mt-10 sm:text-3xl md:text-4xl xl:text-5xl leading-tight font-saira tracking-wide uppercase">
           Akash Pasricha
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            A razor-sharp thriller that fuses ancient history with high-stakes espionage, Lost Secret: The Hidden Truth of Nalanda will leave you breathless.
          </p>
          <div className="mt-6 sm:mt-8 xl:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDiscoverClick}
              className="hidden sm:block px-4 py-2 bg-[#e9343b] text-white font-medium uppercase hover:bg-red-700 transition-all duration-300 cursor-pointer"
            >
              Discover The Story
            </button>
          </div>
        </div>
        
        <div className="relative z-10 flex-shrink-0">
          {/* Red blob glow background */}
          <div className="absolute inset-0 -m-8 z-0">
            <div className="w-full h-full bg-gradient-radial from-red-500/30 via-red-600/20 to-transparent blur-3xl animate-pulse"></div>
          </div>
          {/* Additional glow layers for enhanced effect */}
          <div className="absolute inset-0 -m-12 z-0">
            <div className="w-full h-full bg-red-500/20 rounded-full blur-2xl"></div>
          </div>
          <div className="absolute inset-0 -m-16 z-0">
            <div className="w-full h-full bg-red-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <Image
              src="/book1.png"
              alt="Lost Secret Book"
              width={600}
              height={800}
              className="w-full h-full object-cover drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};