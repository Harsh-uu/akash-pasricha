// src/components/Testimonials.tsx
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path if needed

const ourJourneyData = [
  {
    id: 1,
    imageSrc: "/journey/founding.jpg", // Placeholder path
    year: "Sept, 2020",
    heading: "In Times Gone By",
    definition: "Kevin Missal, nationally bestselling author of the Kalki trilogy, thought of the challenges being faced by new authors and started Hubhawks with a team of 3 people.",
  },
  {
    id: 2,
    imageSrc: "/journey/investment.jpg", // Placeholder path
    year: "Sept, 2020",
    heading: "The Kickstart",
    definition: "Within a few months, we got our angel investment of Rs. 15 lakh by the publishing industry veteran Mr. Anuj Bahri - Founder of Bahrisons Booksellers.",
  },
  {
    id: 3,
    imageSrc: "/journey/international.jpg", // Placeholder path
    year: "2021-2022",
    heading: "Dream of Overcoming Geographical Barriers",
    definition: "In the year 2021, we got our first international client. At present, Hubhawks caters to a diverse array of clients from UAE, Australia, USA, Canada, and more.",
  },
  {
    id: 4,
    imageSrc: "/journey/authors.jpg", // Placeholder path
    year: "2021-2022",
    heading: "Spike in Author Count",
    definition: "In just two years we have worked with over 100 authors, out of which over 10 have produced bestselling books.",
  },
  {
    id: 5,
    imageSrc: "/journey/partnerships.jpg", // Placeholder path
    year: "2021-2022",
    heading: "Influential Partnerships",
    definition: "Hubhawks has partnered with the biggest bookstores in India: Sapna, WH Smith, Crossword, Wilco, etc.",
  },
  {
    id: 6,
    imageSrc: "/journey/publishers.jpg", // Placeholder path
    year: "2021-2022",
    heading: "Remarkable Work",
    definition: "Hubhawks has had the opportunity to work with the biggest publishing houses like Penguin Random House India, Harper Collins India, Bloomsbury India, and more.",
  },
  {
    id: 7,
    imageSrc: "/journey/digital.jpg", // Placeholder path
    year: "Present",
    heading: "Disrupting the Literary Space",
    definition: "A one-of-a-kind platform for budding authors and freelancers, wherein authors can avail any literary services and freelancers can easily get their desired projects.",
  },
];

// --- Animation Variants for Cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Main Component ---
export const OurJourneyPage = () => {
  return (
    <section id="testimonials" className=" pb-20 md:pb-28">
      <div className=" mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It All   <br className="sm:hidden" /> <span className="font-caveat text-5xl md:text-6xl">  Began</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            It started with a dream to empower every writer’s voice.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative mt-12 w-full mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <CarouselContent className="-ml-4">
            {ourJourneyData.map((journey) => (
              <CarouselItem
                key={journey.id}
                // --- Show one item at a time on all screen sizes ---
                className="basis-full pl-4"
              >
                <div className="p-1 h-full">
                  <div
                    className=" h-full flex flex-col md:flex-row md:items-start items-center bg-[#eaebeb]"
                  >
                    {/* --- Image (Left on Desktop, Top on Mobile) --- */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/filler.jpg"
                        alt={`Portrait of ${journey.heading}`}
                        width={400}
                        height={300}
                        className=" object-cover"
                      />
                    </div>
                    
                    {/* --- Content (Right on Desktop, Bottom on Mobile) --- */}
                    <div className="text-center text-rose-600 italic my-auto p-4">
                      <p>
                        {journey.year}
                      </p>
                      <div className="mt-4">
                        <p className="font-bold text-lg text-gray-900">{journey.heading}</p>
                        <p className="text-sm text-gray-600">
                          Author of "{journey.definition}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* --- Navigation Buttons --- */}
          <CarouselPrevious className="absolute left-[-25px] md:left-[-40px] top-1/2 -translate-y-1/2 inline-flex" />
          <CarouselNext className="absolute right-[-25px] md:right-[-40px] top-1/2 -translate-y-1/2 inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};