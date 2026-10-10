import React from "react";
import { Film, Share2, TrendingUp, Layers } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-b border-[#C8B6A6]/25 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section Index Kicker in Deep Burgundy */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-4 font-bold">
          <span>01</span>
          <span className="text-[#C8B6A6]">/</span>
          <span>THE PHILOSOPHY</span>
        </div>

        {/* Main Heading with Deep Burgundy Gradient */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-950 mb-8 leading-[1.15] max-w-4xl">
          WE DON'T JUST CREATE CONTENT.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A1B29] via-[#8E2538] to-[#4A0E17]">
            WE BUILD BRAND PRESENCE.
          </span>
        </h2>

        {/* Body Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 pt-6 border-t border-[#C8B6A6]/25">
          <p className="text-lg sm:text-xl text-zinc-700 font-normal leading-relaxed">
            In a world where every brand is competing for attention, good content isn't enough.
            <br />
            <br />
            <span className="text-[#6A1B29] font-bold">AURA CAPTURES MARKETING AGENCY</span> combines creative cinema production, social media strategy and digital performance marketing to help businesses turn fleeting attention into meaningful, sustainable revenue.
          </p>

          <div className="flex flex-col justify-between">
            <p className="text-base text-zinc-600 leading-relaxed font-normal mb-8">
              From the very first script concept to the final commercial campaign cut and targeted distribution, we bring strategic clarity and cinematic execution under one singular roof. No fragmented freelancers. No disconnected ad accounts.
            </p>

            {/* Apple Liquid Glass Capability Highlights in Cosmic Latte & Burgundy */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#C8B6A6]/25 font-mono text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl liquid-glass text-zinc-800 shadow-xs border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/40 transition-colors">
                <Film className="w-4 h-4 text-[#6A1B29] shrink-0" />
                <span className="font-semibold truncate">Professional Camera Setup Used</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl liquid-glass text-zinc-800 shadow-xs border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/40 transition-colors">
                <Share2 className="w-4 h-4 text-[#6A1B29] shrink-0" />
                <span className="font-semibold truncate">Instagram Growth Systems</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl liquid-glass text-zinc-800 shadow-xs border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/40 transition-colors">
                <TrendingUp className="w-4 h-4 text-[#6A1B29] shrink-0" />
                <span className="font-semibold truncate">Meta Ads Funnels</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl liquid-glass text-zinc-800 shadow-xs border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/40 transition-colors">
                <Layers className="w-4 h-4 text-[#6A1B29] shrink-0" />
                <span className="font-semibold truncate">Brand Narrative Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
