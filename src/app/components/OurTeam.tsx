// src/components/OurTeam.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon, X } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

// --- TEAM DATA with BIO added ---
const teamMembers = [
  {
    id: 1,
    name: "Kevin Missal",
    role: "CEO & Founder",
    imageSrc: "/Kevin.jpg", // Your existing image
    bio: "Kevin Missal wrote his first book at 14 and became a bestselling author by 22. He channels his passion for mythology and fantasy into helping other authors succeed. His work has been featured in major publications, making him an expert in navigating the literary world.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Head Publisher",
    imageSrc: "/authors/jane-doe.jpg", // Placeholder path
    bio: "With over a decade of experience at major publishing houses, Jane oversees the entire publishing process at Hubhawks, ensuring every book meets the highest standards of quality and reaches a global audience.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Lead Designer",
    imageSrc: "/authors/john-smith.jpg", // Placeholder path
    bio: "John is the creative force behind our award-winning book covers. He believes every story deserves a beautiful design and works closely with authors to capture the essence of their manuscript visually.",
  },
  {
    id: 4,
    name: "Emily White",
    role: "Marketing Director",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
    bio: "Emily specializes in creating targeted marketing campaigns that turn books into bestsellers. Her innovative strategies ensure our authors' work gets discovered by the right readers.",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Senior Editor",
    imageSrc: "/authors/michael-chen.jpg", // Placeholder path
    bio: "Michael is a meticulous editor with an eye for detail. He works collaboratively with authors to refine their prose, strengthen their narrative, and prepare their manuscripts for publication.",
  },
  {
    id: 6,
    name: "Sarah Jones",
    role: "Audiobook Producer",
    imageSrc: "/authors/jane-doe.jpg", // Placeholder path
    bio: "Sarah brings stories to life through audio. She manages the entire audiobook production process, from casting the perfect narrator to ensuring the final product is of the highest quality.",
  },
  {
    id: 7,
    name: "David Lee",
    role: "Distribution Manager",
    imageSrc: "/authors/john-smith.jpg", // Placeholder path
    bio: "David ensures our authors' books are available worldwide. He handles the complexities of global distribution, making sure titles are accessible on all major platforms.",
  },
  {
    id: 8,
    name: "Jessica",
    role: "Brand Strategist",
    imageSrc: "/authors/emily-white.jpg", // Placeholder path
    bio: "Jessica helps authors build their brand beyond the book. She develops strategies for social media, author websites, and reader engagement to create a loyal fanbase.",
  },
];

// Define a type for a single team member for cleaner state management
type TeamMember = (typeof teamMembers)[0];

// Custom Modal component
const TeamMemberModal = ({ member, isOpen, onClose }: { member: TeamMember | null; isOpen: boolean; onClose: () => void }) => {
  const { setModalOpen } = useUIStore();
  const scrollPositionRef = React.useRef(0);

  // Update global modal state when this modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      setModalOpen(true);
    } else {
      // Restore scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
      setModalOpen(false);
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      setModalOpen(false);
    };
  }, [isOpen, setModalOpen]);

  if (!member) return null;

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
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white shadow-2xl max-w-4xl w-full mx-4 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-full p-2 shadow-md"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              {/* Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative h-64 sm:h-80 lg:h-full w-full">
                    <Image
                      src="/Kevin.jpg"
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="p-6 sm:p-8 lg:p-12 flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 font-poppins mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-semibold text-lg mb-6">
                    {member.role}
                  </p>
                  <div className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const OurTeam = () => {
  // State to hold the currently selected member for the modal
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
              Our <span className="text-rose-600"> Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                // --- ADDED: Hover effect and transition ---
                className="text-center transition-transform relative duration-300 ease-in-out"
              >
                {/* --- Team Member Image --- */}
                <div className="relative w-full group aspect-square mx-auto mb-4 overflow-hidden transition-all duration-300 ease-in-out hover:bg-rose-600">
                  <Image
                    // --- FIXED: Using dynamic image source ---
                    src="/Kevin.jpg"
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover shadow-lg transition-opacity duration-300 group-hover:opacity-20"
                  />
                  {/* Eye Icon - positioned inside the image container */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <EyeIcon className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* --- Team Member Details --- */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 font-poppins">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-semibold text-sm">{member.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Team Member Modal */}
      <TeamMemberModal 
        member={selectedMember} 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </>
  );
};
