"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const faqItems = [
    {
        question: "How does the publishing process work with Hubhawks?",
        answer:
            "Our process is designed to be simple and author-friendly. It starts with a manuscript assessment, followed by editing, cover design, formatting, and finally, distribution to major online retailers. We guide you through every step.",
    },
    {
        question: "Do I retain full rights to my book?",
        answer:
            "Absolutely. You, the author, always retain 100% of the rights to your work. We are a service provider, and our goal is to help you publish, not to own your content. You have complete creative and legal control.",
    },
    {
        question: "How long does the entire publishing process take?",
        answer:
            "The timeline can vary depending on the length of your manuscript and the services you choose. On average, the process from manuscript submission to publication takes between 3 to 6 months. We also offer expedited services if you have a specific deadline.",
    },
    {
        question: "What kind of marketing support do you provide?",
        answer:
            "We offer a range of marketing services, including author website creation, social media strategy, press release distribution, and targeted ad campaigns. Our goal is to build your author platform and get your book in front of the right readers.",
    },
];

const FAQItem = ({ question, answer }: { question: string; answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full flex justify-between items-center  text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="md:text-lg text-gray-800">{question}</span>
          <FiChevronDown className="text-gray-900" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <div
            className="overflow-hidden"
          >
            <div className=" mt-2 text-gray-600">
              <p className="text-gray-600">{answer}</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {


  return (
    <>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 max-w-7xl mx-auto">
        <div className=" px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-serif text-gray-900`}
            >
              Frequently Asked <span className="text-rose-600 italic font-medium">Questions</span>
            </h2>
          </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
          </div>
              <div className="mt-8 text-center">
            </div>
        </div>
        <Link
        href="/services"
        className="px-4 py-2 mx-auto mt-12 bg-rose-600 text-white font-poppins uppercase font-semibold hover:bg-rose-800 transition-all duration-300 cursor-pointer flex w-fit justify-center"
      >
        VIEW ALL FAQS
      </Link>
      </section>
    </>
  );
};

export default FAQ;