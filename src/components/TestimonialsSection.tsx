import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-transparent border-t border-b border-[#C8B6A6]/25">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
            <span>09</span>
            <span className="text-[#C8B6A6]">/</span>
            <span>CLIENT PERSPECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 mb-3">
            TRUSTED BY VISIONARY BRANDS
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Genuine partners, real business transformations, and direct communication.
          </p>
        </div>

        {/* Testimonials 3-Column Grid in Apple Liquid Glass & Cosmic Latte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
            >
              <div>
                <Quote className="w-8 h-8 text-[#6A1B29]/35 mb-4" />
                <p className="text-zinc-700 text-sm sm:text-base font-normal leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#C8B6A6]/20">
                <h4 className="text-sm font-bold text-zinc-950">
                  {t.author}
                </h4>
                <p className="text-xs font-mono text-[#8C6D58] mt-0.5 font-medium">
                  {t.business}
                </p>
                <span className="inline-block text-[11px] font-mono text-[#6A1B29] font-bold mt-2">
                  Service &middot; {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
