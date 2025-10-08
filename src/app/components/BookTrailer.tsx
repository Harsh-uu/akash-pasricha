// src/components/BookTrailer.tsx
"use client";

import React from "react";

export const BookTrailer = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Book <span className="text-[#e9343b]">Trailer</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get a glimpse into the thrilling world of Lost Secret
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="bg-white shadow-2xl overflow-hidden border">
            <div className="aspect-video bg-black shadow-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ekVUUKsWZig?si=Sl2rM-zTp5aOdHzI&autoplay=1&mute=1&loop=1&playlist=ekVUUKsWZig&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3" 
                title="Lost Secret: The Hidden Truth of Nalanda - Book Trailer" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};