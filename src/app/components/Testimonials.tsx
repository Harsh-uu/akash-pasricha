// src/components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel"; // Import the API type
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    id: 1,
    imageSrc: "/authors/jane-doe.jpg",
    quote: "Hubhawks transformed my manuscript into a bestseller. Their team is professional, supportive, and truly understands the market. I couldn't have done it without them.",
    authorName: "Jane Doe",
    bookTitle: "The Hidden Path",
  },
  {
    id: 2,
    imageSrc: "/authors/john-smith.jpg",
    quote: "The cover design and marketing strategy were beyond my expectations. I felt supported every step of the way, and the results speak for themselves. A five-star service!",
    authorName: "John Smith",
    bookTitle: "Echoes of Tomorrow",
  },
  {
    id: 3,
    imageSrc: "/authors/emily-white.jpg",
    quote: "From the initial editing phase to the final launch, the process was seamless. The team's attention to detail is incredible. I highly recommend Hubhawks to any serious author.",
    authorName: "Emily White",
    bookTitle: "City of Whispers",
  },
  {
    id: 4,
    imageSrc: "/authors/michael-chen.jpg",
    quote: "Their guidance on author branding was invaluable. They helped me build a platform that connects with readers on a deeper level. A true partner in success.",
    authorName: "Michael Chen",
    bookTitle: "Quantum Drift",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-20 md:py-28 overflow-x-clip"> {/* Added overflow-x-clip to contain buttons */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Stories of <br className="sm:hidden" />{" "}
            <span className="text-rose-600"> Success</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 px-4">
            Real stories from authors who have launched their careers with us.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative mt-12 w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                // --- FIX: Responsive basis for all screen sizes ---
                className="basis-4/5 sm:basis-3/4 md:h-72 md:p-6 lg:basis-2/3 pl-4"
              >
                <div
                  className={`p-1 h-full transition-all duration-500 ease-in-out ${
                    index === current ? "scale-100 opacity-100" : "scale-90 opacity-60"
                  }`}
                >
                  <div className="h-full flex flex-col md:shadow-xl md:flex-row overflow-hidden bg-gray-100">
                    {/* --- Image Container (Responsive) --- */}
                    <div className="flex-shrink-0 w-full aspect-2/5 md:w-1/3 md:aspect-auto">
                      <Image
                        src="/Manish.jpg" // Using placeholder as in your example
                        alt={`Portrait of ${testimonial.authorName}`}
                        width={500}
                        height={500}
                        className="object-cover h-full w-full"
                      />
                    </div>

                    {/* --- Text Content (Responsive) --- */}
                    <div className="flex flex-col justify-center text-center md:text-left text-gray-900 p-6 md:p-8">
                      <p className="italic">"{testimonial.quote}"</p>
                      <div className="mt-4">
                        <h1 className="font-semibold">{testimonial.authorName}</h1>
                        <p className="text-sm text-gray-600">
                          Author of "{testimonial.bookTitle}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* --- Navigation Buttons (Responsive) --- */}
          <CarouselPrevious className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 inline-flex" />
          <CarouselNext className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};