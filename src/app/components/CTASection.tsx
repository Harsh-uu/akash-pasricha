// src/components/CTASection.tsx
"use client";

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const CTASection = () => {
    return (
        <section id="contact" className="py-20 md:py-28 bg-rose-600 text-white text-center rounded-lg my-20">
             <motion.h2
                variants={fadeIn}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-heading"
            >
                Ready to Become a Published Author?
            </motion.h2>
             <motion.p
                variants={fadeIn}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                transition={{delay: 0.2}}
                className="mt-4 max-w-xl mx-auto"
            >
                Let's talk about your book. Schedule a free, no-obligation strategy call with our publishing experts.
            </motion.p>
             <motion.div
                variants={fadeIn}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                transition={{delay: 0.4}}
                className="mt-8"
            >
                 <a
                    href="#"
                    className="bg-white text-rose-600 font-semibold px-8 py-4 rounded-full hover:bg-rose-50 transition-transform transform hover:scale-105 inline-block"
                 >
                    Book Your Free Strategy Call
                 </a>
             </motion.div>
        </section>
    );
};