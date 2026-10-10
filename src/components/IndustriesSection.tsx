import React from "react";
import { ArrowUpRight, Building2, UtensilsCrossed, HeartHandshake, Sparkles, UserCheck, Store } from "lucide-react";
import { INDUSTRIES } from "../data/content";

interface IndustriesSectionProps {
  onTalkToUs: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onTalkToUs }) => {
  const getIndustryIcon = (title: string) => {
    switch (title) {
      case "HOSPITALITY":
        return <UtensilsCrossed className="w-5 h-5 text-[#6A1B29]" />;
      case "REAL ESTATE":
        return <Building2 className="w-5 h-5 text-[#6A1B29]" />;
      case "WEDDINGS":
        return <HeartHandshake className="w-5 h-5 text-[#6A1B29]" />;
      case "FASHION & LIFESTYLE":
        return <Sparkles className="w-5 h-5 text-[#6A1B29]" />;
      case "PERSONAL BRANDS":
        return <UserCheck className="w-5 h-5 text-[#6A1B29]" />;
      case "LOCAL BUSINESSES":
        return <Store className="w-5 h-5 text-[#6A1B29]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#6A1B29]" />;
    }
  };

  return (
    <section id="industries" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent border-t border-b border-[#C8B6A6]/25 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C8B6A6]/25 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
              <span>05</span>
              <span className="text-[#C8B6A6]">/</span>
              <span>SPECIALIZED DOMAINS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950">
              BUILT FOR AMBITIOUS BUSINESSES
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal">
            We adapt our visual cadence and acquisition funnels specifically to your industry's buying behaviors.
          </p>
        </div>

        {/* 6 Industry Cards in Apple Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8B6A6]/20">
                  <div className="p-2.5 rounded-xl bg-[#FFF8E7] border border-[#C8B6A6]/40 shadow-xs group-hover:bg-[#6A1B29]/10 transition-colors">
                    {getIndustryIcon(ind.title)}
                  </div>
                  <span className="text-xs font-mono text-[#8C6D58] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 mb-2 group-hover:text-[#6A1B29] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-[#6A1B29] mb-4 font-bold">
                  {ind.desc}
                </p>

                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  {ind.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C8B6A6]/20 flex items-center justify-between text-xs font-mono text-[#8C6D58] group-hover:text-[#6A1B29] transition-colors font-medium">
                <span>View approach</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Callout CTA in Apple Liquid Glass */}
        <div className="mt-14 p-8 rounded-3xl liquid-glass border border-[#C8B6A6]/45 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm bg-[#FFFDF9]/85">
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 mb-1">
              DON'T SEE YOUR INDUSTRY?
            </h4>
            <p className="text-sm text-zinc-600 font-normal">
              We design custom growth solutions for unique B2B and retail business models across India.
            </p>
          </div>

          <button
            onClick={onTalkToUs}
            className="inline-flex items-center gap-2 text-xs font-semibold font-mono tracking-wider uppercase text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] py-3.5 px-6 rounded-xl transition-colors cursor-pointer shrink-0 shadow-md shadow-[#6A1B29]/25 hover:shadow-lg hover:shadow-[#6A1B29]/35 hover:-translate-y-0.5"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
