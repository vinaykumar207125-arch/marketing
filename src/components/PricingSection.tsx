import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PACKAGES } from "../data/content";

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent border-t border-b border-[#C8B6A6]/25 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
            <span>07</span>
            <span className="text-[#C8B6A6]">/</span>
            <span>TRANSPARENT ENGAGEMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950 mb-4">
            CHOOSE YOUR GROWTH STAGE
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal">
            Flexible monthly retainers crafted for business stages from early social traction to market-dominating cinema production.
          </p>
        </div>

        {/* Pricing Cards Grid in Apple Liquid Glass & Cosmic Latte */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.featured
                  ? "liquid-glass-accent border-2 border-[#6A1B29] shadow-xl shadow-[#6A1B29]/15 scale-[1.02] bg-[#FFFDF8]"
                  : "liquid-glass-card border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
              }`}
            >
              {/* Badge for Featured Package in Deep Burgundy & Cosmic Latte */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#6A1B29] text-[10px] font-mono font-bold tracking-widest text-[#FFF8E7] uppercase shadow-md shadow-[#6A1B29]/30">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="mb-6 pb-4 border-b border-[#C8B6A6]/20">
                  <h3 className="text-xl font-display font-bold text-zinc-950 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-950 tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-[#8C6D58] font-semibold">
                      {pkg.unit}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 font-normal min-h-[32px]">
                    {pkg.description}
                  </p>
                </div>

                {/* Scope items */}
                <div className="space-y-3 mb-8">
                  {pkg.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-normal">
                      <Check className="w-4 h-4 text-[#6A1B29] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#C8B6A6]/20">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold font-mono tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.featured
                      ? "bg-[#6A1B29] hover:bg-[#52131F] text-[#FFF8E7] shadow-lg shadow-[#6A1B29]/30 hover:shadow-xl hover:shadow-[#6A1B29]/40 hover:-translate-y-0.5"
                      : "liquid-glass hover:bg-white text-zinc-900 hover:text-[#6A1B29] border border-[#C8B6A6]/45 shadow-2xs hover:-translate-y-0.5"
                  }`}
                >
                  <span>
                    {pkg.id === "start"
                      ? "Get Started"
                      : pkg.id === "grow"
                      ? "Select Grow"
                      : pkg.id === "signature"
                      ? "Talk to Us"
                      : "Request Proposal"}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-12 p-4 rounded-2xl liquid-glass text-center text-xs font-mono text-[#7A6F68] max-w-xl mx-auto border border-[#C8B6A6]/40 shadow-2xs bg-[#FFFDF9]/80">
          <p>
            * Advertising spend is paid directly to Meta/Google platforms and is separate from management fees.
          </p>
        </div>
      </div>
    </section>
  );
};
