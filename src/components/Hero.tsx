import React from "react";
import { ArrowUpRight, Play, Camera, Sparkles } from "lucide-react";
import { IMAGES } from "../data/content";
import { AuraLogo } from "./AuraLogo";

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background cinematic visuals with measured light scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroCamera}
          alt="Professional Camera setup and lighting in Aura Captures Studio"
          className="w-full h-full object-cover object-center opacity-15 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Apple liquid glass soft lighting mesh with Cosmic Latte & Mocha Cream warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/95 via-[#FAF5EB]/85 to-[#FAF5EB] pointer-events-none" />

        {/* Ambient subtle refractions in Deep Burgundy & Mocha Cream */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#6A1B29]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[320px] bg-[#C8B6A6]/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-10 left-1/4 w-[350px] h-[250px] bg-[#FFF8E7]/80 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Apple Liquid Glass Kicker with Deep Burgundy & Mocha border */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full liquid-glass text-xs font-mono text-zinc-700 mb-6 shadow-xs border border-[#C8B6A6]/45 bg-[#FFFDF9]/80">
          <span className="flex items-center gap-1.5 text-[#6A1B29] font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#6A1B29] animate-pulse" />
            CINEMA PRODUCTION &middot; PROFESSIONAL CAMERA SETUP USED
          </span>
          <span className="text-[#C8B6A6] hidden sm:inline">|</span>
          <span className="hidden sm:inline text-[#7A6F68] font-medium">AGRA &middot; DELHI NCR &middot; NATIONWIDE</span>
        </div>

        {/* Tagline highlighted in Deep Burgundy */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#6A1B29] uppercase font-bold mb-6">
          CREATE. CONNECT. GROW.
        </p>

        {/* Brand Logo Emblem with actual logo framed in Apple Liquid Glass */}
        <div className="mb-6 flex justify-center">
          <div className="p-3.5 rounded-3xl liquid-glass border border-[#C8B6A6]/50 shadow-md hover:shadow-xl hover:shadow-[#6A1B29]/15 hover:scale-105 transition-all duration-300 bg-[#FFFDF9]/90">
            <AuraLogo variant="icon" size="xl" theme="light" />
          </div>
        </div>

        {/* Studio Name Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-zinc-950 mb-3 leading-tight drop-shadow-xs"
          style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
        >
          AURA CAPTURES
        </h1>

        {/* Positioning Subtitle in Deep Burgundy & Mocha */}
        <h2 className="text-sm sm:text-base lg:text-lg font-mono font-bold tracking-[0.24em] text-[#6A1B29] uppercase mb-6 flex items-center gap-2 justify-center">
          <span className="h-px w-6 bg-[#C8B6A6]" />
          <span>MARKETING AGENCY</span>
          <span className="h-px w-6 bg-[#C8B6A6]" />
        </h2>

        {/* Core Value Proposition Copy with Mocha & Burgundy highlights */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We create powerful content, build meaningful social presence, and develop digital campaigns that help ambitious brands get <span className="text-[#6A1B29] font-semibold">noticed</span>, <span className="text-[#6A1B29] font-semibold">remembered</span> and <span className="text-[#6A1B29] font-semibold">chosen</span>.
        </p>

        {/* Primary Action Buttons in Deep Burgundy & Liquid Glass */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] active:bg-[#400B15] transition-all duration-200 px-7 py-3.5 rounded-2xl shadow-lg shadow-[#6A1B29]/25 hover:shadow-xl hover:shadow-[#6A1B29]/35 cursor-pointer whitespace-nowrap hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-zinc-800 hover:text-[#6A1B29] liquid-glass hover:bg-white active:bg-zinc-100 transition-all duration-200 px-7 py-3.5 rounded-2xl border border-[#C8B6A6]/45 shadow-sm cursor-pointer whitespace-nowrap hover:-translate-y-0.5"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#6A1B29]" />
            <span>View Our Work</span>
          </button>
        </div>

        {/* Location & Trust Marker */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#7A6F68] font-mono tracking-wide">
          <span>Agra, India</span>
          <span className="text-[#6A1B29] font-bold" aria-hidden="true">&middot;</span>
          <span>Working with brands beyond boundaries</span>
        </div>

        {/* Professional Camera Setup Used Strip in Apple Liquid Glass & Deep Burgundy */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl liquid-glass text-xs font-mono text-zinc-700 shadow-sm border border-[#C8B6A6]/45 bg-[#FFFDF9]/85">
          <Camera className="w-4 h-4 text-[#6A1B29] shrink-0" />
          <span className="text-[#6A1B29] font-bold tracking-wide">
            Professional Camera Setup Used
          </span>
          <span className="text-[#C8B6A6]" aria-hidden="true">&middot;</span>
          <span className="text-[#7A6F68]">
            Cinema Primes &middot; Studio Lighting &middot; High-Fidelity Color Pipeline
          </span>
        </div>
      </div>
    </section>
  );
};
