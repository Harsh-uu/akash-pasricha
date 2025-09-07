// src/components/OurJourney.tsx
"use client";

// --- Data for the Journey Timeline ---
const journeyData = [
  {
    id: 1,
    year: "Sept, 2020",
    heading: "In Times Gone By",
    definition:
      "Kevin Missal started Hubhawks with a team of 3, aiming to solve the challenges faced by new authors.",
  },
  {
    id: 2,
    year: "Sept, 2020",
    heading: "The Kickstart",
    definition:
      "Received an angel investment of Rs. 15 lakh from publishing veteran Mr. Anuj Bahri of Bahrisons Booksellers.",
  },
  {
    id: 3,
    year: "2021-2022",
    heading: "Going Global",
    definition:
      "Secured our first international client, now catering to authors from the UAE, Australia, USA, Canada, and more.",
  },
  {
    id: 4,
    year: "2021-2022",
    heading: "Spike in Author Count",
    definition:
      "Worked with over 100 authors, with more than 10 achieving bestseller status through our partnership and guidance.",
  },
  {
    id: 5,
    year: "Present",
    heading: "Disrupting the Space",
    definition:
      "Launched a unique digital platform connecting authors with freelancers for seamless literary services.",
  },
  {
    id: 6, // Added an extra item for better demonstration of scrolling
    year: "Future",
    heading: "Expanding Horizons",
    definition:
      "Continuing to innovate and provide world-class services to empower the next generation of bestselling authors.",
  },
];

export const OurJourney = () => {
  return (
    <>
      {/* --- Global Styles to Hide Scrollbar --- */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section
        id="our-journey"
        className="py-20 md:py-28 bg-[#f9f9f9] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 px-4">
            <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
              How It All <br className="sm:hidden" />
              <span className=" text-rose-600">
                Began
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              It started with a dream to empower every writer’s voice.
            </p>
          </div>

          {/* --- Horizontal Timeline Container --- */}
          <div className="relative w-full ">
            {/* The Horizontal Line */}
            <div className="absolute top-2 left-0 w-full h-0.5 bg-gray-300"></div>

            <div className="flex w-full py-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
              {journeyData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-4 w-full basis-4/5 sm:basis-3/5 md:basis-[48%] lg:basis-[32%]"
                >
                  <div className="relative flex flex-col items-center h-full">
                    {/* --- Spacer to push the card down --- */}
                    <div className="flex-1"></div>

                    {/* --- Checkpoint & Connector --- */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 bg-rose-600 rounded-full border-4 border-[#f9f9f9]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
                    </div>

                    {/* --- Content Card --- */}
                    <div className="w-full pt-7">
                      <div className="p-6 bg-white shadow-lg border border-gray-100 text-center">
                        <p className="font-semibold font-poppins text-rose-600 mb-1">
                          {item.year}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};