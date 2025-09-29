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
    <section className="relative max-w-7xl mx-auto">
      {/* Background overlay */}
      
      <div className="relative z-10 max-w-7xl text-white flex flex-col lg:flex-row md:gap-8 items-center lg:items-start">
        <div className="w-fit z-20 text-center lg:text-center my-auto">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight font-poppins font-semibold">
            LOST SECRET
          </h1>
          <h1 className="text-xl mt-2 sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-poppins font-semibold tracking-wide uppercase">
           The <span className="text-[#fec539]"> Hidden</span> Truth Of Nalanda
          </h1>
          <h1 className="text-2xl mt-6 sm:mt-8 lg:mt-10 sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-poppins font-semibold tracking-wide uppercase">
           Akash Pasricha
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            A razor-sharp thriller that fuses ancient history with high-stakes espionage, Lost Secret: The Hidden Truth of Nalanda will leave you breathless.
          </p>
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDiscoverClick}
              className="hidden sm:block px-4 py-2 bg-[#e9343b] text-white font-medium uppercase hover:bg-red-700 transition-all duration-300 cursor-pointer"
            >
              Discover The Story
            </button>
          </div>
        </div>
        
        <div className="relative z-10 flex-shrink-0">
          <Image
            src="/book1.png"
            alt="Lost Secret Book"
            width={600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};