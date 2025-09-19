// src/components/UpcomingEvents.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- DUMMY DATA for Upcoming Events ---
const eventsData = [
  {
    id: 1,
    month: "SEPT",
    day: "19",
    dayOfWeek: "FRI",
    title: "Fancy Nancy: Besties for Eternity",
    author: "Jane O'Connor",
    location: "Book Stall, The; Bookstore",
    time: "4:00 pm",
    imageSrc: "/events/fancy-nancy.jpg", // Replace with your image path
  },
  {
    id: 2,
    month: "SEPT",
    day: "19",
    dayOfWeek: "FRI",
    title: "The World According to Joan Didion",
    author: "Evelyn McDonnell",
    location: "Page Against The Machine Books; Bookstore",
    time: "7:00 pm PT",
    imageSrc: "/events/joan-didion.jpg", // Replace with your image path
  },
  {
    id: 3,
    month: "SEPT",
    day: "21",
    dayOfWeek: "SUN",
    title: "See Friendship",
    author: "Jeremy Gordon",
    location: "Boston Book Festival; Festival/Conference",
    time: "11:00 am ET",
    imageSrc: "/events/see-friendship.jpg", // Replace with your image path
  },
];

export const UpcomingEvents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            Upcoming <span className="italic font-medium text-rose-600"> Events</span>
          </h2>
        </div>

        {/* --- Events List --- */}
        <div className="max-w-4xl mx-auto">
          {eventsData.map((event) => (
            <div key={event.id} className="py-8 border-b border-gray-200">
              {/* --- Main content wrapper --- */}
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* --- Date Block with Vertical Line --- */}
                <div className="flex items-center gap-6 flex-shrink-0 mx-auto">
                  {/* Vertical line is hidden on mobile, shown on desktop */}
                  <div className="h-16 w-1 bg-gray-200 hidden md:block"></div>
                  <div className="text-center w-[60px]">
                    <p className="text-sm font-semibold text-gray-500">
                      {event.month}
                    </p>
                    <p className="text-4xl font-bold text-gray-800 tracking-tight">
                      {event.day}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      {event.dayOfWeek}
                    </p>
                  </div>
                </div>

                {/* --- Event Details (Image and Text) --- */}
                <div className="flex items-center gap-6 flex-grow">
                  <Image
                    src="/hero.png"
                    alt={`Book cover for ${event.title}`}
                    width={100} // w-16
                    height={200} // h-24
                    className="object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {event.title}{" "}
                      <span className="font-normal">by {event.author}</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.location}
                    </p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                </div>

                {/* --- Learn More Button --- */}
                <div className="flex-shrink-0 w-full md:w-auto">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/services"
        className="px-4 py-2 mx-auto mt-12 bg-rose-600 text-white font-poppins uppercase font-semibold hover:bg-rose-800 transition-all duration-300 cursor-pointer flex w-fit justify-center"
      >
        VIEW MORE EVENTS
      </Link>
    </section>
  );
};
