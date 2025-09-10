// src/components/OpenPositions.tsx
"use client";

import React, { useState, useMemo } from "react";
import { motion, easeOut } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Building,
  ArrowRight,
} from "lucide-react";

// --- DUMMY DATA for Job Posts ---
const jobPostsData = [
  {
    id: 1,
    title: "Senior Editor, Fiction",
    department: "Editorial",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Book Cover Designer",
    department: "Design",
    location: "Gurugram, India",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Publishing Assistant",
    department: "Editorial",
    location: "Gurugram, India",
    type: "Internship",
  },
  {
    id: 5,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Junior Typesetter",
    department: "Design",
    location: "Gurugram, India",
    type: "Full-time",
  },
];

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

export const OpenPositions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const uniqueDepartments = [
    "All",
    ...Array.from(new Set(jobPostsData.map((job) => job.department))),
  ];

  const filteredJobs = useMemo(() => {
    return jobPostsData.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesDept =
        filterDept === "All" || job.department === filterDept;
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, filterDept]);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">
            Open Positions
          </h2>

          {/* --- Filter Controls --- */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for a job title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
            <div className="self-end">
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className="w-fit sm:w-48 border border-gray-300 py-2.5 px-4 focus:ring-rose-500 focus:border-rose-500"
              >
                {uniqueDepartments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* --- Job List --- */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  layout // Animate layout changes when filtering
                  className="bg-white p-6 border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Building size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-rose-600 text-white font-semibold px-5 py-2.5 hover:bg-rose-700 transition-colors"
                  >
                    Apply Now <ArrowRight size={18} />
                  </a>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">
                No open positions match your search. Please check back later!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};