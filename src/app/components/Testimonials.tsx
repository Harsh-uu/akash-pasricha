// src/components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
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
    quote: "Lost Secret is an absolute masterpiece! The way it weaves ancient history with modern espionage is brilliant. Kabir and Reeya's chase across India had me on the edge of my seat. Couldn't put it down!",
    authorName: "Priya Sharma",
    rating: 5,
  },
  {
    id: 2,
    quote: "What a thrilling ride! The connection between wootz steel and thorium energy was fascinating. The author's research is impeccable, and the storytelling is gripping. Best thriller I've read this year!",
    authorName: "Rajesh Kumar",
    rating: 5,
  },
  {
    id: 3,
    quote: "Incredible blend of history and science fiction. The archaeological sites of India come alive in this story. The conspiracy theory feels so plausible it's scary. Highly recommended!",
    authorName: "Anjali Mehta",
    rating: 4,
  },
  {
    id: 4,
    quote: "From Nalanda to modern espionage - this book has everything! The character development is excellent, and the pace never slows down. A must-read for thriller lovers.",
    authorName: "Vikram Patel",
    rating: 5,
  },
  {
    id: 5,
    quote: "Lost Secret kept me awake all night! The way ancient secrets connect to modern technology is genius. Reeya Ghosh is my new favorite fictional historian. Brilliant work!",
    authorName: "Meera Reddy",
    rating: 5,
  },
  {
    id: 6,
    quote: "Absolutely loved this book! The tension builds perfectly throughout, and the climax is explosive. The author's knowledge of Indian history and archaeology is impressive. Five stars!",
    authorName: "Arjun Singh",
    rating: 5,
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

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-[#FFCF30] text-[#FFCF30]" 
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Reader <span className="text-[#e9343b]">Reviews</span>
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full px-2 md:px-4"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full sm:basis-4/5 lg:basis-3/5 xl:basis-1/2 pl-4 md:pl-8"
              >
                <div className="px-1 py-8 md:px-2">
                  <div
                    className={`transition-all duration-700 ease-in-out ${
                      index === current ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    }`}
                  >
                    <div className="relative bg-white shadow-xl transition-all duration-300 border border-gray-200 min-h-[320px] flex flex-col">
                      {/* Quote Icon - Fixed positioning */}
                      <div className="absolute -top-6 left-8 z-10">
                        <div className="bg-gray-800 p-4 shadow-lg">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content Container with proper padding */}
                      <div className="flex-1 flex flex-col p-8 pt-12">
                        {/* Rating Stars */}
                        <div className="flex justify-center mb-6">
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="text-gray-700 text-lg leading-relaxed text-center mb-8 font-medium italic flex-1 flex items-center">
                          <span>"{testimonial.quote}"</span>
                        </blockquote>

                        {/* Author Information */}
                        <div className="text-center border-t border-gray-200 pt-6 mt-auto">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">
                            {testimonial.authorName}
                          </h4>
                          <p className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
                            Verified Reader
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:border-gray-200 hover:bg-gray-200 transition-all duration-300 z-20" />
          <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:border-gray-200 hover:bg-gray-200 transition-all duration-300 z-20" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 md:mt-12 gap-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-gray-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};