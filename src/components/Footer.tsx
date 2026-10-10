import React from "react";
import { ArrowUp, Instagram, Linkedin, Youtube, Facebook, MapPin } from "lucide-react";
import { AuraLogo } from "./AuraLogo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent border-t border-[#C8B6A6]/25 text-zinc-600 py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#C8B6A6]/25">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <AuraLogo variant="horizontal" size="lg" theme="light" />
            <p className="text-xs font-mono tracking-widest text-[#6A1B29] uppercase font-bold">
              CREATE. CONNECT. GROW.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D58] pt-2">
              <MapPin className="w-4 h-4 text-[#6A1B29] shrink-0" />
              <span>Agra, Uttar Pradesh, India &middot; Operating Pan-India</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-mono text-zinc-950 uppercase tracking-wider mb-4 font-bold">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#services" className="hover:text-[#6A1B29] transition-colors">
                  Content Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#6A1B29] transition-colors">
                  Social Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#6A1B29] transition-colors">
                  Growth &amp; Meta Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#6A1B29] transition-colors">
                  Creative Direction
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-mono text-zinc-950 uppercase tracking-wider mb-4 font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#about" className="hover:text-[#6A1B29] transition-colors">
                  About &amp; Team
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#6A1B29] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#6A1B29] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#6A1B29] transition-colors">
                  Growth Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#6A1B29] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Connect */}
          <div>
            <h4 className="text-xs font-mono text-zinc-950 uppercase tracking-wider mb-4 font-bold">
              Social Presence
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm font-normal">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#6A1B29] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#6A1B29]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#6A1B29] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#8C6D58]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#6A1B29] transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-[#6A1B29]" />
                <span>YouTube</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#6A1B29] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-[#8C6D58]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C6D58]">
          <div>
            &copy; 2026 Aura Captures Marketing Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Agra &middot; Delhi NCR &middot; India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#6A1B29] transition-colors cursor-pointer font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
