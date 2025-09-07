// src/components/Imprints.tsx
"use client";

import Image from 'next/image';

// --- Data for Imprints ---
// This is now a static list.
const imprintsData = [
  { name: "Penguin House", image: "/penguin.png" },
  { name: "Bloomsbury", image: "/penguin.png" }, // Example
  { name: "Harper Collins", image: "/penguin.png" }, // Example
  { name: "Simon & Schuster", image: "/penguin.png" }, // Example
  { name: "Audible", image: "/penguin.png" }, // Example
  { name: "RedInk", image: "/penguin.png" }, // Example
];

export const Imprints = () => {
  return (
    <section className='py-20 md:py-28 bg-gray-50'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Our <span className='text-rose-600'>Imprints</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            We are proud to collaborate with the most respected names in publishing.
          </p>
        </div>

        {/* --- Static Showcase Grid --- */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
          {imprintsData.map((imprint, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32"
            >
              {/* Image */}
              <div className="relative h-24 w-24 mb-3 transition-transform duration-300 hover:scale-110">
                <Image 
                  src={imprint.image} 
                  alt={`${imprint.name} Imprint Logo`} 
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              {/* Name */}
              <h3 className='text-sm font-semibold tracking-tight text-gray-700'>{imprint.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};