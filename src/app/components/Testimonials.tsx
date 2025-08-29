// src/components/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path if needed

const testimonialsData = [
  {
    id: 1,
    imageSrc: "/authors/jane-doe.jpg", // Placeholder path
    quote: "Hubhawks transformed my manuscript into a bestseller. Their team is professional, supportive, and truly understands the market. I couldn't have done it without them.",
    authorName: "Jane Doe",
    bookTitle: "The Hidden Path",
  },
  {
    id: 2,
    imageSrc: "/authors/john-smith.jpg", // Placeholder path
    quote: "The cover design and marketing strategy were beyond my expectations. I felt supported every step of the way, and the results speak for themselves. A five-star service!",
    authorName: "John Smith",
    bookTitle: "Echoes of Tomorrow",
  },
  {
    id: 3,
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
    quote: "From the initial editing phase to the final launch, the process was seamless. The team's attention to detail is incredible. I highly recommend Hubhawks to any serious author.",
    authorName: "Emily White",
    bookTitle: "City of Whispers",
  },
  {
    id: 4,
    imageSrc: "/authors/michael-chen.jpg", // Placeholder path
    quote: "Their guidance on author branding was invaluable. They helped me build a platform that connects with readers on a deeper level. A true partner in success.",
    authorName: "Michael Chen",
    bookTitle: "Quantum Drift",
  },
];

// --- Animation Variants for Cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Main Component ---
export const Testimonials = () => {
  return (
    <section id="testimonials" className=" pb-20 md:pb-28">
      <div className=" mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Voices of <br className="sm:hidden" /> <span className="font-caveat text-5xl md:text-6xl"> Our Authors</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Real stories from authors who have launched their careers with us.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-12 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                // --- Show one item at a time on all screen sizes ---
                className="basis-full pl-4"
              >
                <div className="p-1 h-full">
                  <div
                    className=" h-full flex flex-col md:flex-row md:items-start items-center bg-[#474b46]"
                  >
                    {/* --- Image (Left on Desktop, Top on Mobile) --- */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/Manish.jpg"
                        alt={`Portrait of ${testimonial.authorName}`}
                        width={400}
                        height={300}
                        className=" object-cover"
                      />
                    </div>
                    
                    {/* --- Content (Right on Desktop, Bottom on Mobile) --- */}
                    <div className="text-center md:text-left text-white my-auto p-4">
                      <p className=" italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-4">
                        <p className="font-bold ">{testimonial.authorName}</p>
                        <p className="text-sm text-gray-300">
                          Author of "{testimonial.bookTitle}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* --- Navigation Buttons --- */}
          <CarouselPrevious className="absolute left-[-25px] md:left-[-40px] top-1/2 -translate-y-1/2 inline-flex" />
          <CarouselNext className="absolute right-[-25px] md:right-[-40px] top-1/2 -translate-y-1/2 inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};