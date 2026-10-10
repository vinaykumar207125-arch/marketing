import React from "react";
import { PROCESS_STEPS } from "../data/content";
import { ArrowDown } from "lucide-react";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
            <span>06</span>
            <span className="text-[#C8B6A6]">/</span>
            <span>SYSTEMATIC EXECUTION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950 mb-4">
            HOW WE WORK
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            A linear, transparent, and battle-tested production rhythm designed to protect your time and maximize creative return.
          </p>
        </div>

        {/* 5 Process Steps Flow in Apple Liquid Glass */}
        <div className="space-y-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step}>
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50">
                <div className="flex items-start sm:items-center gap-5 sm:gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8E7] border border-[#C8B6A6]/45 flex items-center justify-center shrink-0 shadow-xs">
                    <span className="text-xl font-display font-extrabold text-[#6A1B29] tabular-nums">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 mb-1.5 group-hover:text-[#6A1B29] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="md:text-right shrink-0 border-t md:border-t-0 border-[#C8B6A6]/20 pt-3 md:pt-0">
                  <span className="text-xs font-mono text-[#8C6D58] uppercase tracking-wider font-semibold">
                    Phase 0{idx + 1} &middot; Active
                  </span>
                </div>
              </div>

              {/* Connecting arrow indicator between steps */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="flex justify-center my-2 text-[#6A1B29]/40">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
