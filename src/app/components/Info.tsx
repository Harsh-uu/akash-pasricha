// src/components/Services.tsx
"use client";

import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export const Info = () => {
  return (
    <section id="services" className="text-center sm:px-40 pb-20 md:pb-28">
      <Image src="/hubhawks.png" width={100} height={50} alt="hero" className="mx-auto w-fit"></Image>
        <h2 className="md:text-lg font-heading text-gray-900">Hubhawks was founded to solve the real problems aspiring authors face. Our sessions are inspired by common challenges, addressing the issues that can hold back a writer's career. We exist to fill in the gaps, provide clear guidance, and help you navigate the path to the top of the bestseller lists.</h2>
    </section>
  );
};