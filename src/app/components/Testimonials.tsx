// src/components/TestimonialCarousel.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. Added a fourth testimonial
const testimonials = [
  {
    id: 1,
    quote:
      "Working with Hubhawks was a game-changer. They turned my manuscript into a bestseller on Amazon within a month!",
    author: "Jane Doe",
    book: `Author of "The Hidden Path"`,
  },
  {
    id: 2,
    quote:
      "The cover design and marketing strategy were beyond my expectations. I felt supported every single step of the way.",
    author: "John Smith",
    book: `Author of "Echoes of Tomorrow"`,
  },
  {
    id: 3,
    quote:
      "Their transparent process and expert guidance gave me the confidence to finally publish. I couldn't have done it without them.",
    author: "Emily White",
    book: `Author of "City of Whispers"`,
  },
  {
    id: 4,
    quote:
      "The audiobook production was flawless. The team's professionalism and attention to detail were outstanding.",
    author: "Michael Brown",
    book: `Author of "The Last Stand"`,
  },
];

// Animation variants for the sliding effect
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

// Threshold for a successful drag (swipe distance)
const SWIPE_THRESHOLD = 50;

export const TestimonialCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // This logic handles looping back to the start or end
  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;
    if (swipe > SWIPE_THRESHOLD || velocity > SWIPE_THRESHOLD) {
      paginate(-1); // Swiped right, go back
    } else if (swipe < -SWIPE_THRESHOLD || velocity < -SWIPE_THRESHOLD) {
      paginate(1); // Swiped left, go next
    }
  };

  // Function to go to a specific slide when a dot is clicked
  const goToSlide = (slideIndex: number) => {
    // Determine direction for the animation
    const newDirection = slideIndex > testimonialIndex ? 1 : -1;
    setPage([slideIndex, newDirection]);
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Trusted by Authors Like You
        </h2>
        <div className="relative mt-12 h-64 md:h-48 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full max-w-3xl bg-gray-50 px-10 py-10 mx-auto text-center cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={handleDragEnd}
            >
              <p className="text-xl md:text-2xl text-gray-700 italic">
                “{testimonials[testimonialIndex].quote}”
              </p>
              <div className="mt-6">
                <p className="font-bold font-heading text-lg text-gray-900">
                  {testimonials[testimonialIndex].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[testimonialIndex].book}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white transition z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-rose-700" size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white transition z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-rose-700" size={24} />
          </button>
        </div>

        {/* 2. Navigation Dots */}
        <div className="mt-16 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                testimonialIndex === index
                  ? "bg-rose-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
