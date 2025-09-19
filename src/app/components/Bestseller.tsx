// src/components/Bestsellers.tsx
"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

// --- UPDATED Data Structure for Different Categories ---
const booksData = {
  bestsellers: [
    { title: 'Dead-End Memories', author: 'Banana Yoshimoto', imageSrc: '/DeadEnd.jpg' },
    { title: 'Kalki', author: 'Kevin Missal', imageSrc: '/DeadEnd.jpg' },
    { title: 'Narasimha', author: 'Kevin Missal', imageSrc: '/DeadEnd.jpg' },
    { title: 'The Silent Patient', author: 'Alex Michaelides', imageSrc: '/DeadEnd.jpg' },
    { title: 'Circe', author: 'Madeline Miller', imageSrc: '/DeadEnd.jpg' },
  ],
  newReleases: [
    { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', imageSrc: '/DeadEnd.jpg' },
    { title: 'Project Hail Mary', author: 'Andy Weir', imageSrc: '/DeadEnd.jpg' },
    { title: 'The Four Winds', author: 'Kristin Hannah', imageSrc: '/DeadEnd.jpg' },
    { title: 'Crying in H Mart', author: 'Michelle Zauner', imageSrc: '/DeadEnd.jpg' },
    { title: 'Crying in H Mart', author: 'Michelle Zauner', imageSrc: '/DeadEnd.jpg' },
  ],
  comingSoon: [
    { title: 'The Winds of Winter', author: 'George R.R. Martin', imageSrc: '/DeadEnd.jpg' },
    { title: 'Book of Dust Vol 3', author: 'Philip Pullman', imageSrc: '/DeadEnd.jpg' },
    { title: 'A Court of Silver Flames', author: 'Sarah J. Maas', imageSrc: '/DeadEnd.jpg' },
  ],
};

// Define a type for the category keys for better TypeScript support
type Category = keyof typeof booksData;

// --- Main Component ---
export const Bestsellers = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('bestsellers');

  const categories: { key: Category; label: string }[] = [
    { key: 'bestsellers', label: 'BESTSELLERS' },
    { key: 'newReleases', label: 'NEW RELEASES' },
    { key: 'comingSoon', label: 'COMING SOON' },
  ];

  return (
    <section id="bestsellers">
      <div className="max-w-7xl mx-auto pb-16 pt-12">
        {/* --- Tabbed Heading Buttons --- */}
        <div className="flex justify-center items-center  gap-6 md:gap-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-sm md:text-xl font-semibold transition-all duration-300
                ${
                  activeCategory === cat.key
                    ? 'text-rose-600 border-b-2 border-red-600 bg-white'
                    : 'text-gray-500 border-b-2 border-transparent hover:text-gray-800'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-12 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6"
        >
          <CarouselContent className="-ml-4">
            {booksData[activeCategory].map((book, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/4 pl-4"
              >
                <div className="lg:p-4 h-full">
                  <div
                    className="relative cursor-pointer h-full duration-300 flex flex-col group items-center bg-white"
                  >
                    <div className="relative">
                      <Image 
                        src={book.imageSrc} // DYNAMIC: Using book's image
                        width={300} 
                        height={380} // Adjusted for a more book-like aspect ratio
                        alt={`Book cover for ${book.title}`} 
                        className="shadow-lg"
                      />
                    </div>
                    <h3 className="mt-4 text-sm lg:text-xl font-semibold text-rose-600 group-hover:underline text-center">{book.title}</h3>
                    <p className="text-gray-600 flex-grow text-center text-sm md:text-base">by {book.author}</p>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-[-12px] md:left-[-40px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-12px] md:right-[-40px] top-1/2 -translate-y-1/2" />
        </Carousel>
          <div className="flex justify-center mt-8">
            <Link
              href="/books" // Link to your publishing page
              className="px-4 py-2 bg-rose-600 text-white font-poppins uppercase font-medium hover:bg-rose-800 transition-all duration-300 cursor-pointer flex w-fit justify-center"
            >
              VIEW ALL
            </Link>
          </div>
      </div>
    </section>
  );
};