import React, { useState } from "react";
import { ArrowUpRight, Check, Film, Share2, TrendingUp, Sparkles, X } from "lucide-react";
import { SERVICES } from "../data/content";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<typeof SERVICES[0] | null>(null);

  const getServiceIcon = (key: string) => {
    switch (key) {
      case "content":
        return <Film className="w-5 h-5 text-[#6A1B29]" />;
      case "social":
        return <Share2 className="w-5 h-5 text-[#6A1B29]" />;
      case "growth":
        return <TrendingUp className="w-5 h-5 text-[#6A1B29]" />;
      case "creative":
        return <Sparkles className="w-5 h-5 text-[#6A1B29]" />;
      default:
        return <Film className="w-5 h-5 text-[#6A1B29]" />;
    }
  };

  return (
    <section id="services" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C8B6A6]/25 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
              <span>02</span>
              <span className="text-[#C8B6A6]">/</span>
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal">
            Strategy, high-end cinema production, and revenue-focused distribution integrated under one collaborative studio.
          </p>
        </div>

        {/* 4 Large Structured Cards Grid in Apple Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="liquid-glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8B6A6]/20">
                  <span className="text-xs font-mono text-[#6A1B29] tracking-wider font-bold">
                    {service.id} &mdash; {service.name}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#FFF8E7] border border-[#C8B6A6]/40 shadow-xs group-hover:bg-[#6A1B29]/10 transition-colors">
                    {getServiceIcon(service.key)}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 mb-3 group-hover:text-[#6A1B29] transition-colors">
                  {service.tagline}
                </h3>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-normal"
                    >
                      <Check className="w-3.5 h-3.5 text-[#6A1B29] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#C8B6A6]/20 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-mono text-[#8C6D58] hover:text-[#6A1B29] transition-colors cursor-pointer font-semibold"
                >
                  View Details
                </button>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider uppercase text-[#6A1B29] hover:text-[#52131F] transition-colors cursor-pointer group-hover:translate-x-1 duration-150"
                >
                  <span>Explore {service.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal in Apple Liquid Glass & Cosmic Latte */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#FFFDF9]/95 backdrop-blur-2xl border border-[#C8B6A6]/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-zinc-900">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-800 rounded-xl liquid-glass border border-[#C8B6A6]/30 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-[#6A1B29] font-bold block mb-1">
              SERVICE BREAKDOWN &middot; {activeModalService.id}
            </span>
            <h3 className="text-2xl font-display font-bold text-zinc-950 mb-2">
              {activeModalService.name} &mdash; {activeModalService.tagline}
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
              {activeModalService.description}
            </p>

            <div className="liquid-glass rounded-2xl p-4 mb-6 border border-[#C8B6A6]/40 bg-[#FFF8E7]/70">
              <h4 className="text-xs font-mono text-[#8C6D58] mb-3 uppercase tracking-wider font-bold">
                Key Scope &amp; Deliverables:
              </h4>
              <ul className="space-y-2 text-sm text-zinc-800">
                {activeModalService.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#6A1B29] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const s = activeModalService.name;
                  setActiveModalService(null);
                  onSelectService(s);
                }}
                className="flex-1 py-3 text-xs font-semibold text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] rounded-xl text-center cursor-pointer transition-colors shadow-md shadow-[#6A1B29]/25"
              >
                Inquire About {activeModalService.name}
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 text-xs font-mono text-zinc-600 hover:text-zinc-900 rounded-xl liquid-glass border border-[#C8B6A6]/40 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
