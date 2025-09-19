"use client";

import { OurTeam } from "../components/OurTeam";
import { useUIStore } from "@/store/useUIStore";
import { OurJourney } from "../components/OurJourney";
import { FinalCTA } from "../components/FinalCTA";

const Page = () => {
  const { mobileMenuOpen } = useUIStore();

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* --- Main Hero Section --- */}
      <section className="text-center py-10 md:py-16 relative isolate overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div
            aria-hidden="true"
            className="hidden md:block absolute bottom-0 right-0 translate-y-1/2 w-[50rem] h-[50rem] bg-rose-100 rounded-full translate-x-1/2 blur-3xl -z-10 opacity-90"
          />
          <nav className="text-sm text-gray-500 mb-4 text-left" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span className="mx-2">&gt;</span>
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                About
              </li>
            </ol>
          </nav>
          <div className="mb-8 text-left">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
              About
            </h1>
          </div>
          <p className=" mx-auto text-lg text-left text-gray-600 leading-relaxed">
            We are a vibrant melting pot of ideas, experiences, and knowledge, dedicated to making your writing journey easier, more rewarding, and ultimately more successful. Founded by bestselling author Kevin Missal, Hubhawks is more than just a publishing service—it's a community built by writers, for writers. Our team brings together industry experts, seasoned editors, creative designers, and publishing professionals who have worked with both debut and established authors. We understand the unique challenges, doubts, and aspirations that every writer faces, whether you're penning your first manuscript or preparing to launch your next bestseller.
          </p>
          <p className="hidden md:block mt-4 mx-auto text-lg text-left text-gray-600 leading-relaxed">
            Our mission is to demystify the publishing process and empower authors at every stage of their creative journey. We provide a comprehensive suite of tools, personalized guidance, and unwavering support to help you transform your manuscript into a professional publication that stands out in today's competitive market. From developmental editing and cover design to marketing strategies and distribution, we walk alongside you at every step, ensuring you have the resources and confidence to succeed. At Hubhawks, we are committed to fostering a transparent, collaborative, and author-centric environment where your voice is heard, your vision is respected, and your success is our top priority.
          </p>
        </div>
      </section>

      {/* --- Our Story & Video Section --- */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-serif text-rose-600 text-4xl">Our Story</h2>
              <p className="mt-4 text-md px-3 sm:px-0 sm:text-lg text-gray-600 leading-relaxed">
                Hubhawks was founded to tackle the fears and doubts that hold
                aspiring authors back. For many writers, the greatest obstacle
                isn’t just the blank page, but the fear of failure, rejection,
                and getting lost in the crowded market. Our sessions are
                designed to confront these challenges head-on, giving you the
                clarity, tools, and confidence to move forward. We’re here to
                replace uncertainty with direction, transform hesitation into
                action, and guide you toward the bestseller lists with courage
                and purpose.
              </p>
            </div>

            {/* Video Content */}
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video shadow-2xl overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LOwVLyPCdgM?si=lHIDcRVIamkzh4PM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Meet the CEO/Founder Section --- */}
      <div className="relative px-4 isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-0 left-0 -translate-y-1/2 w-[45rem] h-[45rem] bg-rose-100 rounded-full opacity-90 blur-3xl -translate-x-1/2"
        />
        <OurTeam />
      </div>
      <OurJourney />
      <FinalCTA />
    </div>
  );
};

export default Page;
