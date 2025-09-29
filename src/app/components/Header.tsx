"use client";

const navLinks = [
  { href: "#about-the-book", label: "About" },
  { href: "#founder", label: "Author" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#media-inquiries", label: "Media Inquiry" },
];

export const Header = () => {
  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="font-poppins text-white">
      <div className="max-w-7xl mx-auto flex justify-end items-center px-4 py-6">

        <nav className="hidden md:flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium uppercase">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative group transition-colors"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9343b] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
