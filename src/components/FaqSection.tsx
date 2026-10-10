import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/content";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
            <span>10</span>
            <span className="text-[#C8B6A6]">/</span>
            <span>CLARITY &amp; COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-zinc-950 mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Everything you need to know about our production workflows, retainers, and location coverage.
          </p>
        </div>

        {/* FAQ Accordion List in Apple Liquid Glass & Cosmic Latte */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`liquid-glass-card rounded-2xl overflow-hidden border transition-colors ${
                  isOpen
                    ? "border-[#6A1B29]/40 bg-[#FFFDF8]"
                    : "border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/40"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-zinc-950">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-xl bg-[#FFF8E7] text-zinc-500 shadow-2xs transition-transform duration-200 ${isOpen ? "rotate-180 text-[#6A1B29]" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-700 font-normal leading-relaxed border-t border-[#C8B6A6]/20 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
