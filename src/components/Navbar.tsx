import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { AuraLogo } from "./AuraLogo";

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "The Difference", href: "#difference" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "Packages", href: "#packages" },
    { name: "About & Team", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "liquid-glass-nav py-3.5"
          : "bg-[#FFFDF9]/60 backdrop-blur-md py-4 border-b border-[#C8B6A6]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand wordmark and emblem featuring the real Aura logo */}
        <a
          href="#"
          className="inline-flex items-center hover:opacity-95 transition-opacity"
          aria-label="Aura Captures Marketing Agency Home"
        >
          <AuraLogo variant="horizontal" size="md" theme="light" />
        </a>

        {/* Zone 2: Clean text navigation links with Deep Burgundy hover */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#6A1B29] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#6A1B29] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button in Deep Burgundy & Cosmic Latte */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917351318800"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-700 hover:text-[#6A1B29] transition-colors font-mono py-2 px-3 rounded-xl liquid-glass shadow-xs border border-[#C8B6A6]/40"
            title="Studio Call: +91 7351318800"
          >
            <Phone className="w-3.5 h-3.5 text-[#6A1B29]" />
            <span>+91 7351318800</span>
          </a>

          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] active:bg-[#400B15] transition-all duration-150 px-4 py-2.5 rounded-xl shadow-md shadow-[#6A1B29]/25 whitespace-nowrap cursor-pointer hover:shadow-lg hover:shadow-[#6A1B29]/35 hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-700 hover:text-[#6A1B29] focus:outline-none rounded-xl liquid-glass border border-[#C8B6A6]/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown in Apple Liquid Glass & Cosmic Latte */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9]/95 backdrop-blur-2xl border-b border-[#C8B6A6]/30 px-6 py-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#6A1B29] border-b border-[#C8B6A6]/20 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6A1B29]/60" />
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+917351318800"
                className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl liquid-glass text-xs font-mono text-zinc-700 border border-[#C8B6A6]/40"
              >
                <Phone className="w-3.5 h-3.5 text-[#6A1B29]" />
                +91 7351318800
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full text-center py-3 bg-[#6A1B29] text-[#FFF8E7] rounded-xl font-semibold text-xs tracking-wider shadow-md shadow-[#6A1B29]/25"
              >
                START A PROJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
