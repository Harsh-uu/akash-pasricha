// src/components/OurJourneyRoadmap.tsx
"use client";

// --- Data for the Journey Timeline ---
const ourJourneyData = [
  {
    id: 1,
    year: "Sept, 2020",
    heading: "In Times Gone By",
    definition: "Kevin Missal, nationally bestselling author of the Kalki trilogy, thought of the challenges being faced by new authors and started Hubhawks with a team of 3 people.",
  },
  {
    id: 2,
    year: "Sept, 2020",
    heading: "The Kickstart",
    definition: "Within a few months, we got our angel investment of Rs. 15 lakh by the publishing industry veteran Mr. Anuj Bahri - Founder of Bahrisons Booksellers.",
  },
  {
    id: 3,
    year: "2021-2022",
    heading: "Dream of Overcoming Geographical Barriers",
    definition: "In the year 2021, we got our first international client. At present, Hubhawks caters to clients from the UAE, Australia, USA, Canada, and more.",
  },
  {
    id: 4,
    year: "2021-2022",
    heading: "Spike in Author Count",
    definition: "In just two years we have worked with over 100 authors, out of which over 10 have produced bestselling books.",
  },
  {
    id: 5,
    year: "2021-2022",
    heading: "Influential Partnerships",
    definition: "Hubhawks has partnered with the biggest bookstores in India: Sapna, WH Smith, Crossword, Wilco, etc.",
  },
  {
    id: 6,
    year: "2021-2022",
    heading: "Remarkable Work",
    definition: "Hubhawks has had the opportunity to work with publishing houses like Penguin Random House India, Harper Collins India, Bloomsbury India, and more.",
  },
  {
    id: 7,
    year: "Present",
    heading: "Disrupting the Literary Space",
    definition: "A one-of-a-kind platform for budding authors and freelancers to avail literary services and find projects.",
  },
];

// --- Main Component ---
export const OurJourney = () => {
  return (
    <section id="our-journey" className="pb-20 md:pb-28 bg-white">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It All <br className="sm:hidden" />{" "}
            <span className="font-caveat text-5xl md:text-6xl"> Began</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            It started with a dream to empower every writer’s voice.
          </p>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* The Vertical Line */}
          <div className="absolute top-0 h-full w-0.5 bg-gray-200 left-4 md:left-1/2 md:-translate-x-1/2"></div>

          {/* Mapping through journey data */}
          {ourJourneyData.map((journey, index) => (
            <div key={journey.id} className="relative mb-8">
              {/* --- Timeline Dot --- */}
              <div className="absolute w-4 h-4 bg-rose-600 rounded-full top-1 border-4 border-white left-4 md:left-1/2 -translate-x-1/2"></div>
              
              {/* --- Timeline Card --- */}
              <div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pl-8 md:text-left" // Even items on the right (desktop)
                    : "md:pr-8 md:text-right" // Odd items on the left (desktop)
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto" : "" // Push even items to the right half
                  }`}
                >
                  <p className="font-semibold text-rose-600 mb-1">{journey.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{journey.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{journey.definition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};