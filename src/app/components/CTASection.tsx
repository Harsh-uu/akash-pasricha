// src/components/CTASection.tsx
"use client";

import { easeOut, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const CTASection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVideoVisible) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 } // Video will start when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVideoVisible]);
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center pb-6 md:pb-28"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Start Your Story <span className="text-5xl md:text-6xl font-caveat"> Today!</span>
          </h1>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="pb-20 md:pb-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Hubhawks was founded to solve the real problems aspiring authors
                face. Our sessions are inspired by common challenges, addressing
                the issues that can hold back a writer's career. We exist to
                fill in the gaps, provide clear guidance, and help you navigate
                the path to the top of the bestseller lists.
              </p>
            </div>

            {/* Video Content */}
            <div className="lg:w-1/2 w-full" ref={videoRef}>
              <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={
                    isVideoVisible
                      ? "https://www.youtube.com/embed/NtV3hpe-49o?si=kkJL99EYoUPBy1v8&autoplay=1&mute=1"
                      : "https://www.youtube.com/embed/NtV3hpe-49o?si=kkJL99EYoUPBy1v8"
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
