// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export const Founder = () => {
  return (
    <section
      className="pb-20 md:pb-28 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading (Outside the Container) --- */}
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Meet Our{" "}
            <span className="text-rose-600">Founder</span>
          </h2>
        </div>

        {/* --- Main Content Container with Background --- */}
        <div
          className="bg-white/90 shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto"
        >
          {/* --- Image Column (First) --- */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-56 md:h-96 lg:h-full">
              <Image
                src="/Kevin.jpg"
                alt="Kevin Missal - CEO and Founder of Hubhawks"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* --- Text Content Column (Second) --- */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center lg:text-left">
          <h1 className="text-3xl font-semibold">Kevin Missal</h1>
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4">
              Kevin Missal wrote his first book at 14 and became a bestselling
              author by 22. As the founder of Hubhawks, he channels his passion
              for mythology and fantasy fiction into helping other authors
              succeed. His work, featured in major publications, is a testament
              to his expertise in navigating the literary world.
            </p>

            {/* --- Call to Action Button --- */}
            <div className="mt-8">
              <Link
                href="/about" // Link to your publishing page
                className=" px-4 py-2 bg-rose-600 text-white font-poppins uppercase font-medium hover:bg-rose-800 transition-all duration-300 cursor-pointer"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
