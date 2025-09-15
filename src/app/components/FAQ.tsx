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

// Modal component for the popup
const JoinUsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const { setModalOpen } = useUIStore();

  // Update global state when modal state changes
  useEffect(() => {
    setModalOpen(isOpen);
    return () => setModalOpen(false);
  }, [isOpen, setModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted", { name, contact });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-60 flex items-center justify-center"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Content */}
              <div className="px-6 pb-8">
                <h3 className="text-3xl font-bold text-center mb-2 text-gray-900">
                  Join Us
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Take the first step towards publishing your masterpiece.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact (Email or Phone)
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your email or phone"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-rose-600 text-white py-2 px-4 hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 mt-6"
                  >
                    Try For Free
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

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

const FAQItem = ({ question, answer }: { question: string; answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full flex justify-between items-center  text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
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
            <div className=" mt-2 text-gray-600">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setModalOpen: setGlobalModalOpen } = useUIStore();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Show modal when FAQ section comes into view
  useEffect(() => {
    if (inView) {
      // Short delay before showing the modal for better UX
      const timer = setTimeout(() => {
        setModalOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Handle modal close
  const handleCloseModal = () => {
    setModalOpen(false);
    setGlobalModalOpen(false);
  };

  return (
    <>
      {/* Join Us Modal */}
      <JoinUsModal isOpen={modalOpen} onClose={handleCloseModal} />
      
      {/* FAQ Section */}
      <section id="faq" ref={ref} className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className=" px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-poppins font-semibold text-gray-900`}
            >
              Frequently Asked <span className="text-rose-600">Questions</span>
            </h2>
          </div>
          <MotionComponent>
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
            <Link href="/support" className="inline-flex items-center gap-2 font-semibold text-rose-600 hover:underline">
              View All FAQs <ArrowRight size={18} />
            </Link>
            </div>
          </MotionComponent>
        </div>
      </section>
    </>
  );
};

export default FAQ;