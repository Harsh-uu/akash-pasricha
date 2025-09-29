// src/components/MediaInquiries.tsx
"use client";

import { Mail, ExternalLink } from "lucide-react";

export const MediaInquiries = () => {
  return (
    <section id="media-inquiries" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Media & <span className="text-[#e9343b]">Inquiries</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Description Text */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            For media inquiries, rights, or event requests, please contact NuvoicePress, 
            an imprint of Penguin Random House India.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center gap-3 text-gray-800">
              <Mail className="w-6 h-6 text-gray-800" />
              <a 
                href="mailto:info@nuvoicepress.com" 
                className="text-lg font-medium hover:text-[#e9343b] transition-colors"
              >
                info@nuvoicepress.com
              </a>
            </div>

            {/* Publisher Button */}
            <div className="mt-8">
              <a
                href="https://nuvoice-revamp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#e9343b] text-white font-semibold py-4 px-8 hover:bg-red-700 transition-colors"
              >
                <span>Visit Publisher</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-white shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Media Kit Available
            </h3>
            <p className="text-gray-600">
              High-resolution images, author bio, and press materials available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};