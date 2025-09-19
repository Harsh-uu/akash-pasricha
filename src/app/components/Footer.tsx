// src/components/Footer.tsx
"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-200 text-center md:text-left">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Brand and Newsletter */}
          <div className="md:col-span-4">
            <Image src="/nuvoice.webp" width={100} height={50} alt="hero" className="w-fit mx-auto md:mx-0"></Image>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-medium text-gray-800 uppercase">Navigation</h4>
            <nav className="flex flex-col text-sm">
              <a href="#services" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Case Studies</a>
              <a href="#" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Blog</a>
              <a href="/about" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3: Legal & Social */}
          <div className="md:col-span-2">
            <h4 className="font-medium text-gray-800 uppercase">Legal</h4>
            <nav className="flex flex-col text-sm">
              <a href="#" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 font-extralight hover:text-rose-600 transition-colors">Terms of Service</a>
            </nav>
          </div>


          <div className="md:col-span-2">
            <h4 className="font-medium text-gray-800 uppercase">Get In Touch</h4>
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 font-extralight">
                Unit-125, First floor, Vipul Trade Centre,<br/>
                Sector-48, Sohna Road, South City-2<br/>
                Gurugram, Haryana, 122018
              </p>
              <a href="tel:+911234567890" className="text-sm text-gray-600 font-extralight hover:text-rose-600 transition-colors">
                +91 12345 67890
              </a>
              <a href="mailto:tanvi@hubhawks.com" className="text-sm text-gray-600 font-extralight hover:text-rose-600 transition-colors">
                tanvi@hubhawks.com
              </a>
              </div>
          </div>
        

        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center sm:flex justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NuVoicePress. All Rights Reserved.</p>
          <div className="flex justify-center items-center gap-4 mt-4 sm:mt-0">
            <a 
              href="https://facebook.com/hubhawks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/FacebookLogo.png" 
                alt="Facebook" 
                className="w-6 h-6 object-contain"
              />
            </a>
            <a 
              href="https://instagram.com/hubhawks_in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/InstagramLogo.png" 
                alt="Instagram" 
                className="w-6 h-6 object-contain"
              />
            </a>
            <a 
              href="https://linkedin.com/company/hubhawks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <img 
                src="/LinkedinLogo.png" 
                alt="LinkedIn" 
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};