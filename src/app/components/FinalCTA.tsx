// src/components/FinalCTA.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Define props for reusability ---
interface FinalCTAProps {
  title?: React.ReactNode; // Allow for complex titles with spans
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const FinalCTA = ({
  // --- Provide sensible default values ---
  title = (
    <>
      Ready to Tell <span className="text-rose-600">Your Story?</span>
    </>
  ),
  description = "Let's talk about your book. Schedule a free, no-obligation strategy call with our publishing experts today.",
  buttonText = "Book Your Free Strategy Call",
  buttonLink = "/contact", // Default link to a contact page
}: FinalCTAProps) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* --- Headline --- */}
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-gray-900">
          {title}
        </h2>

        {/* --- Description --- */}
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
          {description}
        </p>

        {/* --- Call to Action Button --- */}
        <div className="mt-8">
          <Link
            href={buttonLink}
            className="inline-flex items-center font-poppins justify-center gap-2 bg-rose-600 text-white font-semibold px-8 py-4  hover:bg-rose-700 transition-all transform shadow-lg hover:shadow-rose-300"
          >
            {buttonText}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};