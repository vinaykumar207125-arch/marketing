import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/90 backdrop-blur-2xl border-t border-[#C8B6A6]/35 px-4 py-2.5 shadow-xl">
      <div className="max-w-md mx-auto flex items-center gap-3">
        {/* WhatsApp Quick CTA */}
        <a
          href="https://wa.me/917351318800?text=Hi%20Aura%20Captures,%20I%20am%20interested%20in%20scaling%20my%20brand%20with%20your%20agency."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-mono font-semibold tracking-wide shadow-md transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp &rarr;</span>
        </a>

        {/* Call Quick CTA in Deep Burgundy & Cosmic Latte */}
        <a
          href="tel:+917351318800"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#6A1B29] hover:bg-[#52131F] active:bg-[#400B15] text-[#FFF8E7] text-xs font-mono font-semibold tracking-wide shadow-md transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Studio &rarr;</span>
        </a>
      </div>
    </div>
  );
};
