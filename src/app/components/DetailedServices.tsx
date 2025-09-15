// src/components/DetailedServices.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type CarouselApi } from "@/components/ui/carousel"; // IMPORTED: Carousel API type
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Edit,
  BookOpen,
  Send,
  Mic,
  Feather,
  Star,
  CheckCircle,
} from "lucide-react";

// --- EXPANDED Data for all 6 Detailed Services ---
const servicesData = [
  {
    id: "editing",
    icon: <Edit size={20} />,
    title: "Editing & Proofreading",
    detailedDescription: "Our comprehensive editing service ensures your manuscript is clear, coherent, and free of errors. We go beyond simple grammar checks to refine your prose, strengthen your narrative, and prepare your book for a professional launch.",
    keyFeatures: [
      "Developmental Editing for story structure.",
      "Line-by-line Copy Editing for style and flow.",
      "Meticulous Proofreading for grammar and typos.",
    ],
    imageSrc: "/services/editing.jpg",
    imageAlt: "A manuscript being edited.",
  },
  {
    id: "design",
    icon: <BookOpen size={20} />,
    title: "Cover Design",
    detailedDescription: "A book is judged by its cover. Our award-winning designers create stunning, genre-specific covers that sell. We also handle professional interior typesetting to ensure a beautiful reading experience.",
    keyFeatures: [
      "Custom cover design concepts.",
      "Professional interior layout and formatting.",
      "Ebook and print-ready file preparation.",
    ],
    imageSrc: "/services/design.jpg",
    imageAlt: "A collection of book covers.",
  },
  {
    id: "publishing",
    icon: <Send size={20} />,
    title: "Publishing & Distribution",
    detailedDescription: "We handle the entire publishing process, from securing your ISBN to distributing your book on major platforms like Amazon, Apple Books, and more, ensuring your book reaches a global audience.",
    keyFeatures: [
      "Global distribution to all major online retailers.",
      "ISBN assignment and copyright registration.",
      "You retain 100% of your royalties.",
    ],
    imageSrc: "/services/publishing.jpg",
    imageAlt: "A world map showing distribution.",
  },
  {
    id: "audiobook",
    icon: <Mic size={20} />,
    title: "Audiobook Production",
    detailedDescription: "Tap into the fastest-growing segment of the publishing market. Our team handles everything from finding the perfect narrator to professional audio engineering and distribution.",
    keyFeatures: [
      "Professional voice actor casting.",
      "High-quality audio recording and mastering.",
      "Distribution to Audible, Spotify, and more.",
    ],
    imageSrc: "/services/audiobook.jpg",
    imageAlt: "A microphone in a recording studio.",
  },
  {
    id: "branding",
    icon: <Feather size={20} />,
    title: "Author Branding",
    detailedDescription: "A successful author needs more than just a book. We help you build a compelling author brand, from designing a professional website to creating a content strategy that engages your readers.",
    keyFeatures: [
      "Author website design and development.",
      "Social media strategy and setup.",
      "Newsletter and reader magnet creation.",
    ],
    imageSrc: "/services/branding.jpg",
    imageAlt: "A person building their author brand online.",
  },
  {
    id: "marketing",
    icon: <Star size={20} />,
    title: "Book Marketing",
    detailedDescription: "Your book deserves to be discovered. We design and execute targeted marketing campaigns to get your book in front of the right readers and turn them into loyal fans.",
    keyFeatures: [
      "Targeted advertising campaigns.",
      "Book review and influencer outreach.",
      "Strategic launch planning and execution.",
    ],
    imageSrc: "/services/marketing.jpg",
    imageAlt: "A marketing campaign chart showing growth.",
  },
];

// --- Main Component ---
export const DetailedServices = () => {
  // --- ADDED: State for Carousel API ---
  const [api, setApi] = useState<CarouselApi>();
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find((service) => service.id === activeTab);

  // --- ADDED: Effect to sync carousel scroll with active tab ---
  useEffect(() => {
    if (!api) {
      return;
    }

    // Function to run when a new slide is selected
    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      const selectedServiceId = servicesData[selectedIndex].id;
      setActiveTab(selectedServiceId);
    };

    api.on("select", onSelect);

    // Cleanup listener on component unmount
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // --- ADDED: Handler to scroll carousel on button click ---
  const handleButtonClick = (serviceId: string, index: number) => {
    setActiveTab(serviceId);
    api?.scrollTo(index);
  };

  return (
    <section id="detailed-services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Section Header --- */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Services Designed for <span className="text-rose-600">Authors</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-lg text-gray-600">
            Everything you need to write, publish, and market your masterpiece.
          </p>
        </div>

        {/* --- Shadcn Carousel for Tab Buttons --- */}
        <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <Carousel
            // --- ADDED: Set API and updated options ---
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {servicesData.map((service, index) => (
                <CarouselItem
                  key={service.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-2 px-10 md:px-4"
                >
                  <button
                    // --- MODIFIED: Using new click handler ---
                    onClick={() => handleButtonClick(service.id, index)}
                    className={`w-full shadow-lg flex items-center justify-center gap-2 px-4 py-3 font-semibold transition-colors duration-300 my-8
                      ${
                        activeTab === service.id
                          ? "bg-rose-600 text-white shadow-xl shadow-rose-200"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>

        {/* --- Tab Content Area --- */}
        <div className="mt-8 w-full bg-white shadow-xl overflow-hidden min-h-[480px]">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center"
              >
                {/* --- Text Content Column --- */}
                <div className="p-8 md:p-12 order-last md:order-first">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {activeService.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {activeService.detailedDescription}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {activeService.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- Image Column --- */}
                <div className="relative w-full h-64 md:h-[480px] order-first md:order-last">
                  <Image
                    src="/hero.png"
                    alt={activeService.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};