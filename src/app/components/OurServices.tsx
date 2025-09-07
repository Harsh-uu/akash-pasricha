// src/components/OurServices.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChevronRight,
  Edit,
  BookOpen,
  Send,
  Mic,
  Feather,
  Star,
} from "lucide-react";
import React from "react";

// --- Data for Services ---
// Replaced book data with your service offerings
const servicesData = [
  {
    icon: <Edit size={28} />,
    title: "Editing & Proofreading",
    description: "Polish your manuscript to perfection with our expert editors.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Cover Design",
    description: "Create a stunning, professional book that captures readers' attention.",
  },
  {
    icon: <Send size={28} />,
    title: "Publishing & Distribution",
    description: "Navigate the complexities of publishing and reach readers worldwide.",
  },
  {
    icon: <Mic size={28} />,
    title: "Audiobook Production",
    description: "Bring your story to life with high-quality audiobook narration and production.",
  },
  {
    icon: <Feather size={28} />,
    title: "Author Branding",
    description: "Build your unique author platform and connect with your target audience.",
  },
  {
    icon: <Star size={28} />,
    title: "Book Marketing",
    description: "Launch your book with a strategic marketing plan designed to create bestsellers.",
  },
];

// --- Main Component ---
export const OurServices = () => {
  return (
    <section id="services">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-poppins font-semibold">
            Our Suite of <span className="text-rose-600">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            Everything you need to write, publish, and market your masterpiece.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {servicesData.map((service, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="p-4 h-full">
                  <div className="group h-full bg-white p-8 transition-all duration-300 flex flex-col text-center items-center shadow-lg">
                    {/* --- Service Icon --- */}
                    <div className="bg-rose-100 text-rose-600 rounded-full p-4">
                      {service.icon}
                    </div>

                    {/* --- Service Title & Description --- */}
                    <h1 className="mt-6 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h1>
                    <p className="mt-2 text-gray-600 flex-grow">
                      {service.description}
                    </p>

                    {/* --- "Learn More" Button (Visible on Hover) --- */}
                    <a
                      href="#" // Link to the specific service page
                      className="mt-6 inline-flex items-center font-semibold text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
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