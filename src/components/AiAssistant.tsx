import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, RefreshCw, ArrowUpRight } from "lucide-react";
import { AuraLogo } from "./AuraLogo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AiAssistantProps {
  onSelectPackage: (pkg: string) => void;
  onNavigateContact: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  onSelectPackage,
  onNavigateContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am the Aura Captures AI Strategy Advisor. How can I help you elevate your brand? You can ask about our commercial shoots (Professional camera setup used), Instagram systems, Meta Ads, or monthly growth packages.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What packages do you offer?",
    "Do you handle Meta Ads for cafés?",
    "What camera setup do you use?",
    "How does production in Agra & NCR work?",
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from server");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "I am here to help you grow with Aura Captures." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Aura Captures Marketing Agency is ready to partner with you. We shoot cinema-grade content with professional camera setups and manage end-to-end Meta Ads. You can connect with founder Vinay Kumar at +91 7351318800 or tap 'Start a Project' above!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hello! I am the Aura Captures AI Strategy Advisor. How can I help you elevate your brand? You can ask about our commercial shoots (Professional camera setup used), Instagram systems, Meta Ads, or monthly growth packages.",
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Launcher in Apple Liquid Glass & Cosmic Latte */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 lg:bottom-6 right-5 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full liquid-glass hover:bg-white text-zinc-900 border border-[#C8B6A6]/45 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer bg-[#FFFDF9]/90"
          aria-label="Open Aura Captures AI Assistant"
        >
          <AuraLogo variant="icon" size="sm" theme="light" />
          <span className="text-xs font-mono font-semibold tracking-wide group-hover:text-[#6A1B29] transition-colors">
            AI Agency Advisor
          </span>
          <span className="w-2 h-2 rounded-full bg-[#6A1B29] animate-pulse" />
        </button>
      )}

      {/* Slide-out / Floating Chat Drawer in Apple Liquid Glass */}
      {isOpen && (
        <div className="fixed bottom-16 lg:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] h-[600px] flex flex-col rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-2xl border border-[#C8B6A6]/50 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-5 py-4 liquid-glass border-b border-[#C8B6A6]/25 flex items-center justify-between bg-[#FFFDF9]/90">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white border border-[#C8B6A6]/40 flex items-center justify-center shadow-2xs">
                <AuraLogo variant="icon" size="sm" theme="light" />
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-zinc-950 flex items-center gap-2">
                  <span>Aura Captures Advisor</span>
                  <span className="text-[10px] font-mono font-bold text-[#6A1B29] bg-[#FFF8E7] border border-[#C8B6A6]/45 px-1.5 py-0.5 rounded-md">
                    Active
                  </span>
                </h3>
                <p className="text-[11px] font-mono text-[#8C6D58] font-medium">
                  Creative &amp; Growth AI Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 text-zinc-500 hover:text-zinc-950 rounded-lg hover:bg-black/[0.04] transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-500 hover:text-zinc-950 rounded-lg hover:bg-black/[0.04] transition-colors cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick studio trust banner */}
          <div className="px-4 py-2 bg-[#FFF8E7]/90 border-b border-[#C8B6A6]/30 flex items-center justify-between text-[11px] font-mono text-zinc-700">
            <span className="font-semibold text-[#6A1B29]">Professional Camera Setup Used &middot; Meta Ads</span>
            <a
              href="https://wa.me/917351318800"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A1B29] hover:text-[#52131F] inline-flex items-center gap-1 font-bold"
            >
              <span>+91 7351318800</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Messages scroll area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 text-xs sm:text-sm ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="w-6 h-6 rounded-lg bg-[#FFF8E7] border border-[#C8B6A6]/45 flex items-center justify-center shrink-0 mt-0.5 text-[#6A1B29] shadow-2xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#6A1B29] text-[#FFF8E7] font-medium shadow-sm shadow-[#6A1B29]/25"
                      : "liquid-glass border border-[#C8B6A6]/35 text-zinc-800 font-normal shadow-2xs bg-[#FFFDF9]/90"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>

                {m.role === "user" && (
                  <div className="w-6 h-6 rounded-lg bg-[#EFE8E0] border border-[#C8B6A6]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#6A1B29]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-xs font-mono text-[#8C6D58] animate-pulse">
                <div className="w-6 h-6 rounded-lg bg-[#FFF8E7] border border-[#C8B6A6]/40 flex items-center justify-center text-[#6A1B29]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span>Analyzing creative strategy...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick suggested prompt buttons */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-[#C8B6A6]/20 bg-[#FAF4E8]/60 flex flex-wrap gap-1.5">
              {suggestedPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p)}
                  className="text-[11px] font-mono text-zinc-700 hover:text-[#6A1B29] bg-white hover:bg-[#FFF8E7] border border-[#C8B6A6]/35 px-2.5 py-1 rounded-lg cursor-pointer transition-colors shadow-2xs"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input field and actions */}
          <div className="p-3 liquid-glass border-t border-[#C8B6A6]/25 bg-[#FFFDF9]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about packages, video shoots, Meta Ads..."
                className="flex-1 bg-white/95 border border-[#C8B6A6]/40 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6A1B29] transition-colors shadow-2xs"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-[#6A1B29] hover:bg-[#52131F] disabled:opacity-40 text-[#FFF8E7] transition-colors cursor-pointer shrink-0 shadow-md shadow-[#6A1B29]/25"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Direct human backup link */}
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#8C6D58] px-1 font-medium">
              <span>Powered by Gemini 3.8 Flash</span>
              <a
                href="https://wa.me/917351318800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A1B29] hover:text-[#52131F] inline-flex items-center gap-1 font-bold"
              >
                <MessageSquare className="w-2.5 h-2.5 text-[#6A1B29]" />
                <span>Talk to Vinay</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
