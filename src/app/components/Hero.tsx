// src/components/Hero.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// --- UPDATED: Data now includes unique CTA text and links for each slide ---
const carouselSlides = [
  {
    id: 1,
    imageSrc: "/hero/slide1.jpg",
    alt: "A beautifully designed book cover.",
    ctaText: "Explore Design Services",
    ctaLink: "/services/design",
  },
  {
    id: 2,
    imageSrc: "/hero/slide2.jpg",
    alt: "An author signing books for fans.",
    ctaText: "See Marketing Strategies",
    ctaLink: "/services/marketing",
  },
  {
    id: 3,
    imageSrc: "/hero/slide3.jpg",
    alt: "A high-quality audiobook production setup.",
    ctaText: "Learn About Audiobooks",
    ctaLink: "/services/audiobook",
  },
  {
    id: 4,
    imageSrc: "/hero/slide4.jpg",
    alt: "A manuscript being professionally edited.",
    ctaText: "Discover Our Editing Process",
    ctaLink: "/services/editing",
  },
  {
    id: 5,
    imageSrc: "/hero/slide5.jpg",
    alt: "An author's branded website on a laptop.",
    ctaText: "Build Your Author Brand",
    ctaLink: "/services/branding",
  },
  {
    id: 6,
    imageSrc: "/hero/slide6.jpg",
    alt: "Books being distributed on a global scale.",
    ctaText: "More on Publishing",
    ctaLink: "/services/publishing",
  },
];

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000 })
  );

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className=" pb-8">
    <section className="relative bg-[#929884] w-full mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[22rem] md:h-[28rem] w-full">
                <Image
                  src="/hero2.webp"
                  width="600"
                  height="600"
                  alt={slide.alt}
                  className="absolute h-[130px] w-[350px] md:w-[600px] md:h-[220px] top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2"
                  priority={slide.id === 1}
                />                
                {/* --- Unique CTA Button per Slide --- */}
                <a
                  href={slide.ctaLink}
                  className="absolute bottom-12 md:bottom-[10%] left-1/2 -translate-x-1/2 z-10 block text-center bg-black text-white uppercase font-semibold 
                             py-3 px-8 hover:bg-rose-700 transition-colors duration-300 cursor-pointer w-auto whitespace-nowrap text-sm" 
                >
                  {slide.ctaText}
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* --- Custom Dot Indicators (Below the Carousel) --- */}
    </section>
      <div className="flex justify-center gap-2 mt-6">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-rose-600 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>
  );
};