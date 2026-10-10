import React, { useState, useEffect } from "react";
import { ArrowUpRight, Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
  initialPackage?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = "",
  initialPackage = "",
  initialNotes = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    websiteOrInstagram: "",
    serviceNeeded: "Social Media Management",
    budget: "₹20K–₹35K",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: initialService,
        message: prev.message || `Interested in ${initialService} services.`,
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        budget: initialPackage === "START" ? "₹10K–₹20K" : initialPackage === "GROW" ? "₹20K–₹35K" : initialPackage === "SIGNATURE" ? "₹35K–₹50K" : "₹50K+",
        message: prev.message || `Interested in the ${initialPackage} Growth Package.`,
      }));
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        message: `Saw case study: "${initialNotes}". Would love to discuss a similar campaign.`,
      }));
    }
  }, [initialNotes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide at least your Name and Phone number so we can reach out.");
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `Hi Vinay, I would like to inquire with Aura Captures Marketing Agency:%0A%0A*Name:* ${encodeURIComponent(
      formData.name || "Client"
    )}%0A*Business:* ${encodeURIComponent(
      formData.businessName || "N/A"
    )}%0A*Phone:* ${encodeURIComponent(formData.phone || "N/A")}%0A*Email:* ${encodeURIComponent(
      formData.email || "N/A"
    )}%0A*Service:* ${encodeURIComponent(
      formData.serviceNeeded
    )}%0A*Budget:* ${encodeURIComponent(
      formData.budget
    )}%0A*Project Notes:* ${encodeURIComponent(formData.message || "Looking to scale our brand.")}`;
    return `https://wa.me/917351318800?text=${text}`;
  };

  return (
    <section id="contact" className="py-28 sm:py-36 px-5 sm:px-8 bg-transparent border-t border-b border-[#C8B6A6]/25 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Studio Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#6A1B29] uppercase mb-3 font-bold">
                <span>11</span>
                <span className="text-[#C8B6A6]">/</span>
                <span>INITIATE COLLABORATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight">
                LET'S BUILD SOMETHING PEOPLE REMEMBER.
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                Tell us about your business, your goals and what you're trying to achieve. We usually respond within 4 business hours.
              </p>
            </div>

            {/* Direct Studio Contact Cards in Apple Liquid Glass & Cosmic Latte */}
            <div className="space-y-4 pt-4 border-t border-[#C8B6A6]/25 font-mono text-xs">
              <div className="liquid-glass p-4 rounded-2xl flex items-center gap-3 border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 shadow-xs">
                <MapPin className="w-5 h-5 text-[#6A1B29] shrink-0" />
                <div>
                  <span className="text-[#8C6D58] block text-[11px] font-bold">STUDIO LOCATION</span>
                  <span className="text-zinc-950 font-semibold">Agra, Uttar Pradesh, India</span>
                  <span className="text-zinc-500 block text-[10px]">Serving Agra &middot; Delhi NCR &middot; Jaipur &middot; Lucknow &middot; Pan-India</span>
                </div>
              </div>

              <div className="liquid-glass p-4 rounded-2xl flex items-center gap-3 border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 shadow-xs">
                <Phone className="w-5 h-5 text-[#6A1B29] shrink-0" />
                <div>
                  <span className="text-[#8C6D58] block text-[11px] font-bold">DIRECT PHONE / WHATSAPP</span>
                  <a href="tel:+917351318800" className="text-zinc-950 hover:text-[#6A1B29] transition-colors font-semibold">
                    +91 7351318800
                  </a>
                </div>
              </div>

              <div className="liquid-glass p-4 rounded-2xl flex items-center gap-3 border border-[#C8B6A6]/40 bg-[#FFFDF9]/85 shadow-xs">
                <Mail className="w-5 h-5 text-[#6A1B29] shrink-0" />
                <div>
                  <span className="text-[#8C6D58] block text-[11px] font-bold">DIRECT EMAIL</span>
                  <a href="mailto:vinaykumar207125@gmail.com" className="text-zinc-950 hover:text-[#6A1B29] transition-colors font-semibold">
                    vinaykumar207125@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Callout in Apple Liquid Glass */}
            <div className="p-5 rounded-2xl liquid-glass border border-[#C8B6A6]/45 bg-[#FFF8E7]/90 shadow-xs">
              <h4 className="text-xs font-mono font-bold text-[#6A1B29] uppercase tracking-wider mb-1">
                Prefer Instant Chat?
              </h4>
              <p className="text-xs text-zinc-600 mb-3 font-normal">
                Message founder Vinay Kumar directly on WhatsApp for immediate campaign availability.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#6A1B29] hover:text-[#52131F] font-bold"
              >
                <span>Launch WhatsApp Quick Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form in Apple Liquid Glass */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-7 sm:p-10 shadow-xl relative border border-[#C8B6A6]/45 bg-[#FFFDF9]/90">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8E7] border border-[#C8B6A6]/45 flex items-center justify-center mx-auto text-[#6A1B29] shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">
                    ENQUIRY RECEIVED
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto font-normal leading-relaxed">
                    Thank you, <strong className="text-zinc-950">{formData.name}</strong>. Vinay and the Aura Captures team will review your project brief for <strong className="text-zinc-950">{formData.businessName || "your business"}</strong> and get back to you shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold font-mono tracking-wider uppercase text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] py-3 px-6 rounded-xl transition-colors shadow-md shadow-[#6A1B29]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Ping Us On WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-zinc-600 hover:text-zinc-950 py-3 px-4 rounded-xl liquid-glass border border-[#C8B6A6]/40 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-600">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vinay Kumar"
                        className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Bloom & Roast Café"
                        className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 73513 18800"
                        className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="founder@yourbusiness.com"
                        className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                      Business Website / Instagram Handle
                    </label>
                    <input
                      type="text"
                      name="websiteOrInstagram"
                      value={formData.websiteOrInstagram}
                      onChange={handleChange}
                      placeholder="@yourbrand or yourwebsite.com"
                      className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Dropdown: What do you need? */}
                  <div>
                    <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                      What Do You Need?
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Reels / Content Creation">Reels / Content Creation</option>
                      <option value="Photography">Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Branding">Branding</option>
                      <option value="Meta Ads">Meta Ads</option>
                      <option value="Complete Marketing">Complete Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2.5 font-bold">
                      Monthly Marketing Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["₹10K–₹20K", "₹20K–₹35K", "₹35K–₹50K", "₹50K+"].map((tier) => (
                        <label
                          key={tier}
                          className={`flex items-center justify-center p-3 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-colors ${
                            formData.budget === tier
                              ? "bg-[#6A1B29] text-[#FFF8E7] border-[#6A1B29] shadow-sm"
                              : "bg-white/80 border-[#C8B6A6]/40 text-zinc-700 hover:bg-white hover:text-[#6A1B29]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={tier}
                            checked={formData.budget === tier}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span>{tier}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-[#8C6D58] uppercase tracking-wider mb-2 font-bold">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Current challenges, goals, preferred timeline, or shoot details..."
                      className="w-full bg-white/90 border border-[#C8B6A6]/40 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl text-xs font-bold font-mono tracking-widest uppercase text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] active:bg-[#400B15] transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-[#6A1B29]/25 hover:shadow-xl hover:shadow-[#6A1B29]/35 cursor-pointer hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
