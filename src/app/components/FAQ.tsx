"use client";
import { useState } from "react";
import { Syne } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronDown } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const faqItems = [
    {
        question: "How does the publishing process work with Hubhawks?",
        answer:
            "Our process is designed to be simple and author-friendly. It starts with a manuscript assessment, followed by editing, cover design, formatting, and finally, distribution to major online retailers. We guide you through every step.",
        border: true,
    },
    {
        question: "Do I retain full rights to my book?",
        answer:
            "Absolutely. You, the author, always retain 100% of the rights to your work. We are a service provider, and our goal is to help you publish, not to own your content. You have complete creative and legal control.",
        border: true,
    },
    {
        question: "How long does the entire publishing process take?",
        answer:
            "The timeline can vary depending on the length of your manuscript and the services you choose. On average, the process from manuscript submission to publication takes between 3 to 6 months. We also offer expedited services if you have a specific deadline.",
        border: true,
    },
    {
        question: "What kind of marketing support do you provide?",
        answer:
            "We offer a range of marketing services, including author website creation, social media strategy, press release distribution, and targeted ad campaigns. Our goal is to build your author platform and get your book in front of the right readers.",
        border: false,
    },
];

const MotionComponent = ({ children }: { children: React.ReactNode }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const FAQItem = ({ question, answer, border }: { question: string; answer: string; border: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={border ? "border-b border-black" : ""}>
      <button
        className="w-full flex justify-between items-center p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md sm:text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-gray-900" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600">
              <p className="text-md sm:text-lg">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="pb-20 md:pb-28">
      <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl md:text-6xl font-caveat font-bold text-[#111827]`}
            >
              FAQs
            </h2>
          </div>
        <MotionComponent>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                border={item.border}
              />
            ))}
          </div>
        </MotionComponent>
      </div>
    </section>
  );
};

export default FAQ;