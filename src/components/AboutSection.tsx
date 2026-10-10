import React, { useState, useRef } from "react";
import { ArrowUpRight, MessageCircle, MapPin, Award, Clapperboard, TrendingUp, Palette, Sliders, CheckCircle2, Camera, RotateCcw } from "lucide-react";
import { IMAGES, TEAM_MEMBERS } from "../data/content";
import { AuraLogo } from "./AuraLogo";

interface AboutSectionProps {
  onConnectFounder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onConnectFounder }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem("aura_founder_real_photo");
    } catch {
      return null;
    }
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      setCustomPhoto(dataUrl);
      try {
        localStorage.setItem("aura_founder_real_photo", dataUrl);
        await fetch("/api/upload-founder-photo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dataUrl }),
        });
      } catch (err) {
        console.error("Failed to persist uploaded photo:", err);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    try {
      localStorage.removeItem("aura_founder_real_photo");
    } catch {}
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  return (
    <section id="about" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Studio Story Block in Apple Liquid Glass & Cosmic Latte */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8B6A6]/25">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase font-bold">
              <span>08</span>
              <span className="text-[#C8B6A6]">/</span>
              <span>ABOUT AURA CAPTURES</span>
            </div>
            <AuraLogo variant="horizontal" size="sm" showSubtext={false} theme="light" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.15]">
            WE BELIEVE BRANDS SHOULD BE{" "}
            <span className="text-[#6A1B29]">EXPERIENCED</span>, NOT JUST SEEN.
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-zinc-700 font-normal leading-relaxed">
            <p>
              <strong className="text-zinc-950 font-bold">Aura Captures Marketing Agency</strong> is a creative and digital growth studio built around one simple conviction:{" "}
              <span className="text-[#6A1B29] font-semibold underline decoration-[#C8B6A6] underline-offset-4">
                Great creative should generate tangible, measurable commercial value.
              </span>
            </p>

            <p>
              We bring together visual storytelling, cinema-grade content production, social media systems, and performance marketing to help ambitious businesses build an unforgettable presence in an oversaturated digital world.
            </p>

            <p>
              From a cinematic brand film to a high-retention social campaign or a performance-driven ad funnel, every piece of work begins with understanding the brand and ends with a clear commercial outcome.
            </p>

            <div className="liquid-glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs sm:text-sm text-zinc-800 border border-[#C8B6A6]/40 bg-[#FFFDF9]/85">
              <div className="flex items-center gap-2 text-zinc-900 font-medium">
                <MapPin className="w-4 h-4 text-[#6A1B29] shrink-0" />
                <span>Agra, Uttar Pradesh &middot; Serving Pan-India</span>
              </div>
              <div className="text-[#6A1B29] tracking-widest font-bold uppercase">
                CREATE. CONNECT. GROW.
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: THE TEAM & LEADERSHIP — Apple Liquid Glass Theme with Cosmic Latte, Mocha & Burgundy */}
        <div className="border-t border-[#C8B6A6]/25 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-zinc-900 tracking-tight">
                MEET THE TEAM
              </h3>
            </div>
            <p className="text-sm font-normal text-zinc-600 max-w-md">
              A specialized creative team uniting cinematographers, growth strategists, art directors, and colorists under one roof.
            </p>
          </div>

          {/* Founder Spotlight Card (Apple Liquid Glass Card with Cosmic Latte backdrop) */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 mb-10 border border-[#C8B6A6]/45 bg-[#FFFDF9]/85">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Founder Portrait Visual */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-[#C8B6A6]/40 bg-[#FFF8E7] shadow-lg group">
                  <img
                    src={customPhoto || IMAGES.founderVinay}
                    alt="Vinay Kumar - Founder & Creative Director"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hidden file input for uploading exact original photo */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />

                  {/* Direct upload / replace action on the photo */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6A1B29] hover:bg-[#52131F] text-[#FFF8E7] text-[11px] font-mono font-medium shadow cursor-pointer transition-colors"
                      title="Upload your exact original photo directly"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{customPhoto ? "Replace Photo" : "Upload Real Photo"}</span>
                    </button>

                    {customPhoto && (
                      <button
                        type="button"
                        onClick={handleResetPhoto}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-[#FFF8E7] text-[10px] font-mono transition-colors cursor-pointer"
                        title="Reset photo"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="w-full mt-4 text-center sm:text-left px-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6A1B29] text-xs font-mono text-[#FFF8E7] mb-2 font-medium">
                    <Clapperboard className="w-3.5 h-3.5 text-[#FFF8E7]" />
                    <span>Founder &amp; Creative Director</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-zinc-950">
                    Vinay Kumar
                  </h4>
                  <p className="text-xs font-mono text-[#8C6D58] font-semibold">
                    Cinematographer &middot; Creative Director &middot; Marketer
                  </p>
                </div>
              </div>

              {/* Founder Bio & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-pill text-xs font-mono text-[#6A1B29] font-bold mb-1 border border-[#C8B6A6]/45 bg-[#FFF8E7]/90">
                    <Award className="w-3.5 h-3.5 text-[#6A1B29]" />
                    <span>FOUNDER &middot; CREATIVE DIRECTION</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">
                    Leading Production, Creative Strategy &amp; Client Growth
                  </h4>
                </div>

                <p className="text-base text-zinc-700 font-normal leading-relaxed">
                  With deep expertise in cinematography, photography and brand positioning, Vinay founded <strong className="text-zinc-900">Aura Captures Marketing Agency</strong> to eradicate the disconnect between high-end visual filmmaking and performance marketing.
                </p>

                <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                  His methodology combines cinematic aesthetics with business analytics—producing content that doesn’t just captivate eyes, but actively drives bookings, inquiries, and customer retention.
                </p>

                {/* Professional Camera Setup Used Marker with Mocha & Burgundy */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-t border-b border-[#C8B6A6]/25 font-mono text-xs text-zinc-800">
                  <div className="p-3 rounded-xl bg-[#FFF8E7]/70 border border-[#C8B6A6]/30">
                    <span className="text-[#8C6D58] block text-[10px] uppercase font-bold">CORE RIG</span>
                    <span className="text-[#6A1B29] font-bold">Professional Camera Setup Used</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFF8E7]/70 border border-[#C8B6A6]/30">
                    <span className="text-[#8C6D58] block text-[10px] uppercase font-bold">SPECIALIZATION</span>
                    <span className="text-zinc-900 font-semibold">Commercial Films &amp; Meta Ads</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFF8E7]/70 border border-[#C8B6A6]/30">
                    <span className="text-[#8C6D58] block text-[10px] uppercase font-bold">LOCATION HUB</span>
                    <span className="text-zinc-900 font-semibold">Agra &amp; Delhi NCR</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onConnectFounder}
                    className="inline-flex items-center gap-2 text-xs font-semibold font-mono tracking-wider uppercase text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] active:bg-[#400B15] py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-md shadow-[#6A1B29]/25 hover:shadow-lg hover:shadow-[#6A1B29]/35 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect With Vinay</span>
                  </button>

                  <a
                    href="https://wa.me/917351318800?text=Hi%20Vinay,%20I%20saw%20the%20Aura%20Captures%20website%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-800 hover:text-[#6A1B29] py-3.5 px-5 rounded-xl liquid-glass hover:bg-white transition-all shadow-xs border border-[#C8B6A6]/40"
                  >
                    <span>WhatsApp Vinay Directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6A1B29]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Members Grid (Apple Liquid Glass Cards with Cosmic Latte & Burgundy) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.slice(1).map((member) => (
              <div
                key={member.id}
                className="liquid-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 hover:border-[#6A1B29]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C8B6A6]/20">
                    <span className="text-xs font-mono font-bold text-[#6A1B29] uppercase tracking-wider">
                      {member.role}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFF8E7] border border-[#C8B6A6]/40 flex items-center justify-center text-[#6A1B29] shadow-xs">
                      {(member.id.includes("growth") || member.role.includes("Growth")) && <TrendingUp className="w-4 h-4" />}
                      {(member.id.includes("disha") || member.role.includes("Art")) && <Palette className="w-4 h-4" />}
                      {(member.id.includes("ponia") || member.role.includes("Post-Production")) && <Sliders className="w-4 h-4" />}
                    </div>
                  </div>

                  <h4 className="text-xl font-display font-bold text-zinc-900 mb-1 group-hover:text-[#6A1B29] transition-colors">
                    {member.name}
                  </h4>

                  <p className="text-xs font-mono text-[#8C6D58] mb-4 font-semibold">
                    {member.specialty}
                  </p>

                  <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C8B6A6]/20">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-800 font-medium mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6A1B29] shrink-0" />
                    <span className="truncate">{member.gearOrSkill}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#FFF8E7] border border-[#C8B6A6]/40 text-[11px] font-mono text-[#7A5E4E] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
