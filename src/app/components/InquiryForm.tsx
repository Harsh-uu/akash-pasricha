// src/components/InquiryForm.tsx
"use client";

import React, { useState } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, CheckCircle, X } from "lucide-react"; // Icons for checkbox, dropdown, and toast

// --- Data for Service Checkboxes ---
const servicesOptions = [
  "Editing & Proofreading",
  "Cover Design",
  "Publishing & Distribution",
  "Audiobook Production",
  "Author Branding",
  "Book Marketing",
];

// --- Animation Variants ---
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const InquiryForm = () => {
  // --- State to manage all form data ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactInfo: "",
    inquiry: "",
    services: [] as string[],
  });

  // --- State for dropdown visibility ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // --- State for toast notification ---
  const [showToast, setShowToast] = useState(false);

  // --- Close dropdown when clicking outside ---
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".services-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // --- Handler for text inputs and textarea ---
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- Handler for checkbox changes ---
  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  // --- Handler for form submission ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Show toast notification
    setShowToast(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      contactInfo: "",
      inquiry: "",
      services: [],
    });

    // Close dropdown if open
    setIsDropdownOpen(false);

    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <section className=" pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg border-2 border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* --- First and Last Name --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 transition-colors outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 transition-colors outline-none"
                />
              </div>
            </div>

            {/* --- Email or Phone --- */}
            <div>
              <input
                type="email"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2.5 border border-gray-300 transition-colors outline-none"
              />
            </div>

            {/* --- Services Required (Dropdown with Checkboxes) --- */}
            <div className="relative services-dropdown">
              {/* Dropdown trigger */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2.5 border border-gray-300 transition-colors outline-none bg-white flex items-center justify-between"
              >
                <span
                  className={`${
                    formData.services.length > 0
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {formData.services.length > 0
                    ? `${formData.services.length} service(s) selected`
                    : "Choose Services"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-gray-50 border border-gray-300 shadow-lg max-h-48 overflow-y-auto">
                  <div className="">
                    {servicesOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-200 border-b border-black/10"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="sr-only peer"
                        />
                        {/* Custom checkbox */}
                        <div className="w-5 h-5 border-2 border-gray-300 flex items-center transition-colors peer-checked:bg-rose-500 peer-checked:border-rose-600">
                          <Check className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* --- Inquiry Message --- */}
            <div>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                placeholder="Tell us a little about your book and what you're looking for..."
                rows={5}
                required
                className="w-full min-h-40 max-h-96 px-4 py-2.5 border border-gray-300 transition-colors outline-none"
              ></textarea>
            </div>

            {/* --- Submit Button --- */}
            <div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white font-semibold text-lg py-3 transition-colors hover:bg-rose-700 focus:outline-none focus:ring-offset-2 focus:ring-rose-500"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Toast Notification */}
       <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-5 sm:right-5 z-50 bg-white p-4 shadow-xl border border-gray-200 w-72 md:w-full max-w-sm"
        >
          <div className="flex items-start gap-4">
            {/* --- Icon --- */}
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
            </div>
            
              <p className="text-sm text-gray-600">Thank you for your inquiry. We'll be in touch shortly.</p>
            
            {/* --- Close Button --- */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setShowToast(false)}
                className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};
