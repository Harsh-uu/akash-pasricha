// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Hero = () => {
  return (
    <section className="pt-8 sm:pt-20 pb-20 md:pb-28">
          <div className="max-w-7xl text-gray-900 grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="z-20 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
              >
                Make your book a
                <span className={`text-rose-600 font-caveat text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black`}> Bestseller</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`mt-4 sm:mt-6 text-base sm:text-lg max-w-md mx-auto lg:mx-0 lg:max-w-lg`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat saepe architecto quam, recusandae molestias.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  className={`hidden sm:block px-4 py-2 bg-rose-600 text-white uppercase font-medium 
                                hover:bg-rose-800 transition-all duration-300 cursor-pointer`}
                >
                  Start Exploring
                </button>
              </motion.div>
            </div>
            
            <div className="relative z-10 mt-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-full aspect-[4/3]"
              >
                <Image
                  src="/hero.jpg"
                  alt="Featured Art"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="shadow-2xl object-cover"
                  priority
                />
               
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className=" bg-rose-100 w-fit text-rose-600 font-bold border-rose-600 border-2 px-4 py-3 sm:py-4 absolute -top-2 -right-2 sm:-top-5 sm:-right-5 sm:text-5xl rounded-full font-caveat"
              >
                #1
              </motion.div>
              
            </div>
          </div>
        </section>
  );
};