import React, { useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { CASE_STUDIES, ProjectCaseStudy } from "../data/content";

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "CAFÉ / RESTAURANT",
    "HOTEL / HOSPITALITY",
    "FASHION / LIFESTYLE",
    "REAL ESTATE",
    "WEDDINGS",
    "PERSONAL BRAND"
  ];

  const filteredProjects = activeCategory === "ALL"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C8B6A6]/25 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
              <span>04</span>
              <span className="text-[#C8B6A6]">/</span>
              <span>CURATED PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md font-normal">
            We don't show 30 shallow clips. We showcase our top cinema productions, visual campaigns, and verified client outcomes.
          </p>
        </div>

        {/* Category Filters (Apple Liquid Glass Pills in Burgundy & Cosmic Latte) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all duration-150 rounded-xl cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#6A1B29] text-[#FFF8E7] font-bold shadow-md shadow-[#6A1B29]/25"
                  : "liquid-glass text-zinc-700 hover:text-[#6A1B29] hover:bg-white border border-[#C8B6A6]/40 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Portfolio Grid in Apple Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer liquid-glass-card rounded-3xl overflow-hidden flex flex-col justify-between relative border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
            >
              {/* Media Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF5EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Top Overlay Badge in Cosmic Latte */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-900 bg-[#FFF8E7]/90 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-xs border border-[#C8B6A6]/40">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center group-hover:bg-[#6A1B29] group-hover:text-[#FFF8E7] transition-colors shadow-xs">
                    <ArrowUpRight className="w-4 h-4 text-zinc-800 group-hover:text-[#FFF8E7]" />
                  </div>
                </div>

                {/* Hover Quick Peek Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8E7] text-[#6A1B29] text-xs font-mono font-bold shadow-lg border border-[#C8B6A6]/50">
                    <Eye className="w-3.5 h-3.5 text-[#6A1B29]" />
                    Read Case Study
                  </span>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#8C6D58] block mb-1 font-semibold">
                    Client &middot; {project.client}
                  </span>
                  <h3 className="text-xl font-display font-bold text-zinc-950 group-hover:text-[#6A1B29] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Primary Metric Preview in Deep Burgundy */}
                <div className="pt-4 border-t border-[#C8B6A6]/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 truncate max-w-[140px]">
                    {project.result.metrics[0]?.label}
                  </span>
                  <span className="text-[#6A1B29] font-bold tabular-nums text-sm">
                    {project.result.metrics[0]?.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Spec & Custom Work */}
        <div className="mt-12 text-center text-xs font-mono text-[#7A6F68]">
          Showing selected commercial &amp; spec campaigns &middot; Full showreel available on discovery call
        </div>
      </div>
    </section>
  );
};
