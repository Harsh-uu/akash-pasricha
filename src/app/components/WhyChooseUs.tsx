// src/components/WhyChooseUs.tsx
"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const differentiators = [
    { title: '360° Author Support', desc: 'One team for everything you need.' },
    { title: 'Transparent Pricing', desc: 'No hidden fees, clear costs from day one.' },
    { title: 'Proven Bestseller Strategy', desc: 'We know what it takes to top the charts.' },
    { title: '100% Royalties to You', desc: 'You keep all your earnings. Period.' },
];

export const WhyChooseUs = () => {
    return (
        <section className="py-20 md:py-28">
             <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 text-center">Why Partner with Hubhawks?</h2>
             <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {differentiators.map((item, index) => (
                    <motion.div
                        key={item.title}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <CheckCircle className="mx-auto text-rose-600" size={40}/>
                        <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};