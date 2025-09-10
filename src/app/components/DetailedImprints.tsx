// src/components/DetailedImprints.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path if needed

// --- EXPANDED & IMPROVED Data for Imprints ---
const imprintsData = [
  {
    name: "Penguin Random House",
    image: "/penguin.png", // Replace with actual logo
    description: "As a global powerhouse, Penguin Random House is renowned for its vast collection of literary fiction that consistently tops bestseller lists.",
    advantages: [
      "Unmatched global distribution network.",
      "A prestigious and highly recognizable brand.",
      "Strong relationships with major retailers.",
    ],
  },
  {
    name: "Bloomsbury",
    image: "/penguin.png", // Replace with actual logo
    description: "An independent publisher with a stellar reputation for curating high-quality, original writing across fiction, non-fiction, and academic genres, including blockbuster series.",
    advantages: [
      "Award-winning history of literary excellence.",
      "Expertise in both adult and children's literature.",
      "Strong focus on author care and development.",
    ],
  },
  {
    name: "Harper Collins",
    image: "/penguin.png", // Replace with actual logo
    description: "One of the world's leading publishers, Harper Collins offers a broad spectrum of titles, from commercial bestsellers and genre fiction to literary gems and vital non-fiction.",
    advantages: [
      "A diverse catalog appealing to a wide readership.",
      "Powerful marketing and publicity teams.",
      "Innovative digital and international strategies.",
    ],
  },
  {
    name: "Simon & Schuster",
    image: "/penguin.png", // Replace with actual logo
    description: "A major force in publishing for nearly a century, known for its diverse list of award-winning fiction, influential non-fiction, and popular children's books.",
    advantages: [
      "Long-standing reputation for quality.",
      "Strong presence in both print and audio formats.",
      "Expertise in launching debut authors.",
    ],
  },
];

export const DetailedImprints = () => {
  return (
    <section className='py-16 md:py-24 bg-gray-50'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            A Place for Every  <span className='text-rose-600'>Story</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            We collaborate with the most respected names in the industry, providing our authors with unparalleled opportunities for success.
          </p>
        </div>

        {/* --- Shadcn Carousel for Detailed Imprints --- */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {imprintsData.map((imprint, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 pl-4"
              >
                {/* FIX: Added vertical padding here to create space for top/bottom shadows. */}
                <div className="pb-8 h-full">
                  <div
                    className="bg-white p-8 shadow-xl border border-gray-100 flex flex-col h-full"
                  >
                    {/* Logo */}
                    <div className="relative h-20 w-full mb-6">
                      <Image
                        src={imprint.image}
                        alt={`${imprint.name} Imprint Logo`}
                        fill
                        className="object-contain"
                        sizes="160px"
                      />
                    </div>

                    {/* Name and Description */}
                    <div className="flex-grow">
                      <h3 className='text-2xl font-semibold text-gray-900 text-center'>{imprint.name}</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed text-center">
                        {imprint.description}
                      </p>
                    </div>

                    {/* Advantages List */}
                    <div className="mt-6 pt-6 border-t border-gray-200 w-full">
                      <h4 className="font-semibold text-gray-800 mb-3 text-left">Key Advantages:</h4>
                      <ul className="space-y-3 text-left">
                        {imprint.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle
                              className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* --- Navigation Buttons (Visible on All Screens) --- */}
          <CarouselPrevious className="absolute left-[-10px] sm:left-[-20px] top-1/2 -translate-y-1/2 inline-flex" />
          <CarouselNext className="absolute right-[-10px] sm:right-[-20px] top-1/2 -translate-y-1/2 inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};