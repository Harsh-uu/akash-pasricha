// src/components/Footer.tsx
"use client";

import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
          {/* Website Name / Brand */}
          <div className="text-center">
            <a 
              href="/" 
              className="text-2xl md:text-3xl font-poppins font-semibold hover:text-[#fec539] transition-colors"
            >
              Akash Pasricha
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Author of Lost Secret: The Hidden Truth of Nalanda
            </p>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex justify-center mt-12 space-x-4">
              <a 
                href="https://twitter.com/akashpasricha" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-black p-3 rounded-full hover:bg-yellow-500 bg-[#fec539] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/akashpasricha" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-black p-3 rounded-full hover:bg-yellow-500 bg-[#fec539] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/akashpasricha" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-black p-3 rounded-full hover:bg-yellow-500 bg-[#fec539] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@akashpasricha.com" 
                className=" text-black p-3 rounded-full hover:bg-yellow-500 bg-[#fec539] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Akash Pasricha. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};