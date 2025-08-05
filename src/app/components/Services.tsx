// src/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Edit, Book, Send, Mic, Feather, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-rose-100 text-rose-600 rounded-full p-3 inline-flex">{children}</div>
);

const servicesData = [
    { icon: <Edit size={24}/>, title: 'Editing & Proofreading', desc: 'Polish your manuscript to perfection.' },
    { icon: <Book size={24}/>, title: 'Cover Design & Typesetting', desc: 'Create a stunning, professional book.' },
    { icon: <Send size={24}/>, title: 'Publishing & Distribution', desc: 'Reach readers worldwide.' },
    { icon: <Mic size={24}/>, title: 'Audiobooks', desc: 'Bring your story to life with audio.' },
    { icon: <Feather size={24}/>, title: 'Author Branding', desc: 'Build your platform and connect with fans.' },
    { icon: <Star size={24}/>, title: 'Book Marketing', desc: 'Launch with a strategy that sells.' },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Everything You Need to Publish</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">From first draft to final launch, we handle every step.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
                 <motion.div
                    key={service.title}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg text-left hover:shadow-xl transition-shadow"
                >
                    <IconWrapper>{service.icon}</IconWrapper>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.desc}</p>
                    <a href="#" className="mt-4 inline-block font-semibold text-rose-600 hover:underline">Learn More →</a>
                </motion.div>
            ))}
        </div>
    </section>
  );
};