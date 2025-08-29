// src/components/HowItWorks.tsx
"use client";

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const processSteps = [
  'Share your manuscript',
  'Get a personalized plan',
  'We execute the strategy',
  'You launch with confidence'
];

export const HowItWorks = () => {
  return (
    <section className=' pb-20 md:pb-28'>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading text-center">The Road to <span className='font-caveat text-5xl md:text-6xl'>Publishing Success</span> </h2>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative">
            {/* Dashed line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 -translate-y-1/2 -z-10"></div>
           {processSteps.map((step, index) =>(
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center max-w-xs relative bg-white px-2"
            >
                <div className="text-3xl font-bold text-rose-600 bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white">{index + 1}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{step}</h3>
            </motion.div>
           ))}
        </div>
    </section>
  );
};