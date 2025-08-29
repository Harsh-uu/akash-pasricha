// src/components/OurTeam.tsx (or integrate into your page)
"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

// --- TEAM DATA ---
// Easily add or remove team members here.
// Replace placeholders with your actual team data and image paths.
const teamMembers = [
  {
    id: 1,
    name: "Kevin Missal",
    role: "CEO & Founder",
    imageSrc: "/Kevin.jpg", // Your existing image
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Head of Publishing",
    imageSrc: "/authors/jane-doe.jpg", // Placeholder path
  },
  {
    id: 3,
    name: "John Smith",
    role: "Lead Designer",
    imageSrc: "/authors/john-smith.jpg", // Placeholder path
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
  },
  {
    id: 5,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
  },
  {
    id: 6,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
  },
  {
    id: 7,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
  },
  {
    id: 8,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
  },
  // Add more team members here if needed
];

// --- Animation Variants for Cards ---
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const OurTeam = () => {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-5xl md:text-6xl font-black font-caveat"> Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }} // Staggered animation
              className="text-center"
            >
              {/* --- Team Member Image --- */}
              <div className="relative w-full aspect-square mx-auto mb-4">
                <Image
                  src="/Kevin.jpg"
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover shadow-lg"
                />
              </div>

              {/* --- Team Member Details --- */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-caveat">{member.name}</h3>
                <p className="text-rose-600 font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};