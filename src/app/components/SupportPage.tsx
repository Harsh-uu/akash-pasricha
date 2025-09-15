// src/app/support/page.tsx
"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// --- Data for Contact Methods ---
const contactInfo = [
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    description: "For general inquiries, support, or feedback.",
    contact: "tanvi@hubhawks.com",
    href: "mailto:tanvi@hubhawks.com",
  },
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    description: "For urgent matters, speak with a team member directly.",
    contact: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: <MapPin size={28} />,
    title: "Our Office",
    description: "Visit us at our headquarters for a meeting.",
    contact: "Unit-125, First floor, Vipul Trade Centre, Gurugram, India",
    href: "#map", // Link to the map section on this page
  },
];

// --- Data for FAQ Preview ---
const faqData = [
  {
    question: "What are your publishing fees?",
    answer: "Our pricing is transparent and tailored to your specific needs. Please book a free consultation for a detailed quote.",
  },
  {
    question: "How long does the publishing process take?",
    answer: "The timeline can vary from 3 to 9 months, depending on the scope of editing, design, and marketing required.",
  },
  {
    question: "Do I retain the rights to my book?",
    answer: "Absolutely. You, the author, always retain 100% of the rights and royalties to your work.",
  },
  {
    question: "Do you provide editing and design services?",
    answer: "Yes, we offer professional editing, cover design, and interior formatting to ensure your book meets industry standards.",
  },
  {
    question: "Can you help with book marketing and distribution?",
    answer: "We provide marketing support, distribution across major platforms, and guidance to help your book reach the right audience.",
  },
  {
    question: "What types of books do you publish?",
    answer: "We work with a wide range of genres including fiction, non-fiction, academic, and business books. Each project receives a customized approach.",
  },
];


// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// --- Main Page Component ---
export default function SupportPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* --- Section 2: Contact Information Grid --- */}
      <section className="py-20 md:py-28 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-center md:text-4xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="border-2 bg-white shadow-lg p-8 text-center"
              >
                
                <div className="inline-flex bg-rose-100 text-rose-600 rounded-full p-4 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{info.title}</h3>
                <p className="mt-2 text-gray-600">{info.description}</p>
                <a
                  href={info.href}
                  className="mt-4 inline-block font-semibold text-rose-600 hover:underline"
                >
                  {info.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Section 4: FAQ Preview --- */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-center md:text-4xl font-semibold text-gray-900">Frequently Asked <span className="text-rose-600"> Questions</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}