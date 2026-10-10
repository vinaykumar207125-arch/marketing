import React from "react";
import { IMAGES } from "../data/content";

interface AuraLogoProps {
  variant?: "horizontal" | "stacked" | "icon" | "image";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showSubtext?: boolean;
  theme?: "light" | "dark";
}

export const AuraLogo: React.FC<AuraLogoProps> = ({
  variant = "horizontal",
  size = "md",
  className = "",
  showSubtext = true,
  theme = "light",
}) => {
  const isLight = theme === "light";

  const sizeConfigs = {
    sm: {
      box: "w-8 h-8 rounded-lg",
      textMain: "text-base tracking-[0.14em]",
      textSub: "text-[8px] tracking-[0.24em]",
    },
    md: {
      box: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl",
      textMain: "text-lg sm:text-xl tracking-[0.16em]",
      textSub: "text-[9px] sm:text-[10px] tracking-[0.26em]",
    },
    lg: {
      box: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl",
      textMain: "text-2xl sm:text-3xl tracking-[0.16em]",
      textSub: "text-[11px] sm:text-xs tracking-[0.28em]",
    },
    xl: {
      box: "w-20 h-20 sm:w-24 sm:h-24 rounded-3xl",
      textMain: "text-3xl sm:text-4xl tracking-[0.18em]",
      textSub: "text-xs sm:text-sm tracking-[0.3em]",
    },
  };

  const current = sizeConfigs[size] || sizeConfigs.md;

  // The authentic Aura Captures Marketing Agency logo container
  const LogoBadge = (
    <div
      className={`relative ${current.box} overflow-hidden shadow-sm shrink-0 p-[2px] transition-transform duration-300 group-hover:scale-105 border border-[#C8B6A6]/50 bg-white/90 backdrop-blur-xl`}
      style={{
        boxShadow: "0 4px 14px rgba(106, 27, 41, 0.08), inset 0 1px 1px rgba(255, 255, 255, 1)",
      }}
    >
      <img
        src={IMAGES.logo}
        alt="Aura Captures Marketing Agency"
        className="w-full h-full object-cover rounded-[inherit]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
      {/* Liquid glass light reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/60 pointer-events-none rounded-[inherit]" />
    </div>
  );

  if (variant === "image" || variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{LogoBadge}</div>;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        {LogoBadge}
        <div className="mt-3">
          <span
            className={`block font-serif font-bold leading-none ${current.textMain} ${
              isLight ? "text-[#1d1d1f] group-hover:text-[#6A1B29]" : "text-white"
            } transition-colors`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            AURA CAPTURES
          </span>
          {showSubtext && (
            <span
              className={`block font-mono uppercase font-semibold mt-1.5 ${current.textSub} ${
                isLight ? "text-[#6A1B29]" : "text-[#C8B6A6]"
              }`}
            >
              MARKETING AGENCY
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 group text-left ${className}`}>
      {LogoBadge}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold transition-colors leading-tight ${current.textMain} ${
            isLight
              ? "text-[#1d1d1f] group-hover:text-[#6A1B29]"
              : "text-white group-hover:text-[#FFF8E7]"
          }`}
          style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
        >
          AURA CAPTURES
        </span>
        {showSubtext && (
          <span
            className={`font-mono uppercase font-semibold transition-colors mt-0.5 ${current.textSub} ${
              isLight ? "text-[#6A1B29] group-hover:text-[#4A0E17]" : "text-[#C8B6A6]"
            }`}
          >
            MARKETING AGENCY
          </span>
        )}
      </div>
    </div>
  );
};
