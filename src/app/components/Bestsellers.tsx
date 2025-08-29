// src/components/Services.tsx
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  ChevronRight
} from 'lucide-react';
import Image from "next/image";

// --- Reusable Components & Data ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-rose-100 text-rose-600 rounded-full p-3 inline-flex">{children}</div>
);

const servicesData = [
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
  { title: 'Dead-End Memories', author: 'Banana Yoshimoto' },
];

// --- Animation Variants for Cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Main Component ---
export const Bestsellers = () => {
  return (
    <section id="services">
      <div className="container mx-auto px-4 pb-20 md:pb-28">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-bold">
            Our <span className="font-caveat font-black text-5xl md:text-6xl">Bestsellers</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            From first draft to final launch, we handle every step with expertise.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            // The carousel will scroll by one item at a time by default
          }}
          className="relative mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {servicesData.map((service, index) => (
              <CarouselItem
                key={index}
                // --- This is where the responsive magic happens ---
                className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className=" h-full">
                  <div
                    className=" h-full duration-300 flex flex-col group items-center p-6"
                  >
                    <div>
                    <Image src="/DeadEnd.jpg" width={200} height={50} alt="Book Cover" className="shadow-lg relative transition-all group-hover:opacity-10"/>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{service.title}</h3>
                    <p className="mt-2 text-gray-600 flex-grow text-center">{service.author}</p>
                    <button className="absolute cursor-pointer px-2 py-1 items-center w-32 inline-flex top-1/2 -translate-y-10 font-semibold text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* --- Navigation Buttons --- */}
          <CarouselPrevious className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};