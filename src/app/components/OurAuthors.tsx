// src/components/Bestsellers.tsx
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

// --- UPDATED Data Structure for Different Categories ---
const booksData = [
    { title: 'Dead-End Memories', author: 'Banana Yoshimoto', imageSrc: '/DeadEnd.jpg' },
    { title: 'Kalki', author: 'Kevin Missal', imageSrc: '/DeadEnd.jpg' },
    { title: 'Narasimha', author: 'Kevin Missal', imageSrc: '/DeadEnd.jpg' },
    { title: 'The Silent Patient', author: 'Alex Michaelides', imageSrc: '/DeadEnd.jpg' },
    { title: 'Circe', author: 'Madeline Miller', imageSrc: '/DeadEnd.jpg' },
];

// Define a type for the category keys for better TypeScript support
type Category = keyof typeof booksData;

// --- Main Component ---
export const OurAuthors = () => {

  return (
    <section id="bestsellers">
      <div className="max-w-7xl mx-auto py-16">
        {/* --- Tabbed Heading Buttons --- */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">Our <span className="italic font-medium"> Authors</span></h1>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-white">Authors & their work are at the center of everything we do.</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-6 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6"
        >
          <CarouselContent className="-ml-4">
            {booksData.map((book, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/4 pl-4"
              >
                <div className="lg:p-4 h-full">
                  <div
                    className="relative cursor-pointer h-full duration-300 flex flex-col group items-center bg-rose-600"
                  >
                    <div className="relative">
                      <Image 
                        src="/author.avif" // DYNAMIC: Using book's image
                        width={300} 
                        height={500} // Adjusted for a more book-like aspect ratio
                        alt={`Book cover for ${book.title}`} 
                        className="shadow-xl"
                      />
                    </div>
                    <h3 className="mt-4 text-sm lg:text-xl font-semibold text-white group-hover:underline text-center">{book.author}</h3>
                    <p className="text-rose-300 flex-grow text-center text-sm md:text-base">author of {book.title}</p>

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
              href="/authors" // Link to your publishing page
              className="px-4 py-2 bg-white text-rose-600 font-poppins uppercase font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex w-fit justify-center"
            >
              VIEW ALL AUTHORS
            </Link>
          </div>
      </div>
    </section>
  );
};