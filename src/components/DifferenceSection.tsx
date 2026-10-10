import React from "react";
import { Compass, Clapperboard, Share, Gauge } from "lucide-react";

export const DifferenceSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "STRATEGY",
      icon: <Compass className="w-5 h-5 text-[#6A1B29]" />,
      desc: "We understand your business, audience and objectives before creating content.",
      detail: "Audience psychographics, positioning gap analysis, and content themes."
    },
    {
      num: "02",
      title: "CREATE",
      icon: <Clapperboard className="w-5 h-5 text-[#6A1B29]" />,
      desc: "We produce professional visual content designed for today's platforms.",
      detail: "Professional camera setup used, studio lighting, and filmic color grading."
    },
    {
      num: "03",
      title: "DISTRIBUTE",
      icon: <Share className="w-5 h-5 text-[#6A1B29]" />,
      desc: "We put the right content in front of the right audience.",
      detail: "Algorithmic timing, Meta Ads hyper-local targeting, and Instagram engagement."
    },
    {
      num: "04",
      title: "OPTIMIZE",
      icon: <Gauge className="w-5 h-5 text-[#6A1B29]" />,
      desc: "We measure performance and improve the strategy continuously.",
      detail: "Hook retention analysis, cost-per-lead reduction, and iterative creative testing."
    }
  ];

  return (
    <section id="difference" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent border-t border-b border-[#C8B6A6]/25 relative overflow-hidden">
      {/* Background visual subtle ambient glow in Deep Burgundy & Mocha */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6A1B29]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8B6A6]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
            <span>03</span>
            <span className="text-[#C8B6A6]">/</span>
            <span>THE AURA CAPTURES DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-900 mb-4">
            WHY AURA CAPTURES?
          </h2>

          <p className="text-lg sm:text-xl font-mono text-[#6A1B29] font-bold mb-4">
            Strategy + Cinema Production + Digital Growth
          </p>

          <p className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed">
            Most agencies either create content or manage marketing.
            <br />
            <strong className="text-zinc-950 font-bold">We connect both.</strong> By unifying the director's eye with performance analytics, we ensure every rupee spent on production serves an active commercial outcome.
          </p>
        </div>

        {/* 4 Pillars Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="liquid-glass-card rounded-3xl p-7 flex flex-col justify-between group border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8B6A6]/20">
                  <span className="text-2xl font-display font-extrabold text-[#6A1B29] group-hover:scale-105 transition-transform">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-[#FFF8E7] border border-[#C8B6A6]/40 shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-zinc-900 mb-3 tracking-wide group-hover:text-[#6A1B29] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C8B6A6]/20 text-xs font-mono text-[#8C6D58] font-medium">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Large Visual Statement Banner in Apple Liquid Glass & Cosmic Latte */}
        <div className="relative rounded-3xl liquid-glass-accent p-8 sm:p-14 text-center overflow-hidden border border-[#C8B6A6]/50 bg-gradient-to-r from-[#FFFDF8] via-[#FAF4E8] to-[#FFF8E7]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7]/60 via-white/50 to-[#EFE8E0]/60 pointer-events-none" />
          <p className="relative z-10 text-xs font-mono text-[#6A1B29] tracking-[0.25em] uppercase mb-4 font-bold">
            OUR CORE MANDATE
          </p>
          <h3 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950 leading-tight">
            CREATE <span className="text-[#6A1B29]">ATTENTION</span>.
            <br />
            BUILD <span className="text-[#6A1B29]">CONNECTION</span>.
            <br />
            DRIVE <span className="text-[#6A1B29]">GROWTH</span>.
          </h3>
          <p className="relative z-10 text-sm sm:text-base text-zinc-700 max-w-xl mx-auto mt-6 font-normal">
            Every piece of cinema we produce, every caption we write, and every ad we run is engineered around this continuous loop.
          </p>
        </div>
      </div>
    </section>
  );
};
