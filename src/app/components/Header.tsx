"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/useUIStore"; // adjust path if needed

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/authors", label: "Authors" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu, modalOpen } =
    useUIStore();

  return (
    <header
      className={` bg-white/80 font-poppins shadow-md ${
        modalOpen ? " bg-white/50 -z-20 md:z-10 blur-sm" : ""
      } border-b border-gray-200/80`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* --- Logo --- */}
        <Link href="/" className="flex-shrink-0 mt-2 flex items-center">
          <Image
            src="/nuvoice.webp"
            alt="Hubhawks Logo"
            width={120}
            height={50}
            priority
            className="h-16 w-auto mb-2"
          />
          <span className="text-3xl hidden lg:block font-serif font-medium ml-2 text-rose-600">
            NuVoice <span className="italic -ml-1">Press</span>
          </span>
        </Link>

        <div className="flex gap-8 uppercase">
          {/* --- Call-to-Action Buttons (Desktop) --- */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/publish"
              className="bg-rose-600 text-white text-sm font-medium px-5 py-2.5 hover:bg-rose-700"
            >
              Publish with Us
            </Link>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-rose-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden border-t lg:flex justify-center py-5 items-center gap-12 font-medium text-gray-900">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group font-medium text-base transition-colors capitalize hover:text-rose-600"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* --- Mobile Menu Panel --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden min-h-screen absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 overflow-hidden">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-rose-600 font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 space-y-2 p-4">
              <Link
                href="/contact"
                className="block w-full bg-white text-gray-900 text-center font-semibold px-5 py-2.5 hover:bg-gray-100 border border-gray-600"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <Link
                href="/publish"
                className="block w-full bg-rose-600 text-white text-center font-semibold px-5 py-2.5 hover:bg-rose-700"
                onClick={closeMobileMenu}
              >
                Publish with Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
