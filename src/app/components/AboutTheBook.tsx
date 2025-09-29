// src/components/AboutTheBook.tsx
"use client";

import { Check, ChevronDown, ChevronUp, Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// --- Data Structure for Lost Secret Book ---
const bookData = {
  title: "Lost Secret: The Hidden Truth of Nalanda",
  highlights: [
    "A razor-sharp thriller fusing ancient history with espionage",
    "Features intelligence officer Kabir and historian Reeya Ghosh",
    "Explores legendary wootz steel and thorium energy secrets",
    "Set across India's ancient archaeological sites",
    "High-stakes chase against mercenaries and conspiracies"
  ],
  details: {
    genre: "Historical Fiction",
    category: "Fiction",
    pageExtent: "264",
    releaseType: "English",
    isbn: "978-81-988726-8-5",
    binding: "Royal Format- Paperback",
    price: "Coming Soon",
    hsnCode: "49011010",
    publicationDate: "October 2025",
    publisher: "Nu Voice Press"
  },
  buyLinks: [
    { name: "Amazon", url: "#", id: 0 },
  ],
};

// --- Main Component ---
export const AboutTheBook = () => {
  const [keyFeaturesOpen, setKeyFeaturesOpen] = useState(false);
  const [bookDetailsOpen, setBookDetailsOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <section id="about-the-book" className="py-16 text-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Uncover The <span className="text-[#e9343b]">Truth</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          
          {/* Left Column - Book Cover */}
          <div className="order-1 lg:order-1">
            <div className="relative aspect-[5/6] max-w-md mx-auto lg:max-w-full">
              <Image
                src="/book2.png"
                alt={bookData.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Book Content */}
          <div className="order-2 lg:order-2 space-y-6 md:space-y-8 text-center md:text-left">
            
            {/* Title */}
            <div>
              <div className="space-y-4 text-base lg:text-lg text-justify leading-relaxed">
                  <p className="text-gray-700">
                    <span className="font-bold">Lost Secret: The Hidden Truth of Nalanda</span> is a razor-sharp thriller where intelligence officer Kabir and historian Reeya Ghosh race across India’s ancient sites to unravel a conspiracy linking the legendary wootz steel to thorium energy. From a sniper’s bullet to a murdered archaeologist, the duo is hunted at every step as they uncover secrets buried for millennia—secrets powerful enough to reshape the global order. Gripping, intelligent, and disturbingly plausible, this fast-paced novel fuses history, espionage, and science into an unforgettable chase.
                  </p>
              </div>
            </div>

            {/* Key Features Dropdown */}
            <div className="border border-gray-200 overflow-hidden">
              <button
                onClick={() => setKeyFeaturesOpen(!keyFeaturesOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800">Key Features</h4>
                {keyFeaturesOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {keyFeaturesOpen && (
                <div className="px-6 py-4 space-y-3 bg-white">
                  {bookData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-left">
                      <Check className="w-5 h-5 text-[#e9343b] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Book Details Dropdown */}
            <div className="border border-gray-200 overflow-hidden">
              <button
                onClick={() => setBookDetailsOpen(!bookDetailsOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800">Book Details</h4>
                {bookDetailsOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {bookDetailsOpen && (
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Genre:</span>
                      <span className="text-gray-800">{bookData.details.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Category:</span>
                      <span className="text-gray-800">{bookData.details.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Pages:</span>
                      <span className="text-gray-800">{bookData.details.pageExtent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Language:</span>
                      <span className="text-gray-800">{bookData.details.releaseType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">ISBN:</span>
                      <span className="text-gray-800">{bookData.details.isbn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Binding:</span>
                      <span className="text-gray-800">{bookData.details.binding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Price:</span>
                      <span className="text-gray-800">{bookData.details.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">HSN Code:</span>
                      <span className="text-gray-800">{bookData.details.hsnCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Publication Date:</span>
                      <span className="text-gray-800">{bookData.details.publicationDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Publisher:</span>
                      <span className="text-gray-800">{bookData.details.publisher}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trailer Dropdown */}
            <div className="border border-gray-200 overflow-hidden">
              <button
                onClick={() => setTrailerOpen(!trailerOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800">Book Trailer</h4>
                {trailerOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {trailerOpen && (
                <div className="px-6 py-4 bg-white">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Book trailer coming soon...</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Buy Links */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 ">
                Get Your Copy
              </h4>
              <div className="flex justify-center md:justify-start">
                {bookData.buyLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 h-16 overflow-hidden px-4 flex items-center justify-center"
                  >
                    <Image
                      src="/amazon.png"
                      alt="Amazon"
                      width={100}
                      height={100}
                      className="object-cover object-center"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};