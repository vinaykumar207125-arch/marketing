import React, { useEffect } from "react";
import { X, ArrowUpRight, Camera, Lightbulb, CheckCircle2 } from "lucide-react";
import { ProjectCaseStudy } from "../data/content";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFDF9]/95 backdrop-blur-2xl border border-[#C8B6A6]/50 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#C8B6A6]/20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#6A1B29] uppercase tracking-wider font-bold">
              CASE STUDY &middot; {project.category}
            </span>
            {project.result.isConcept && (
              <span className="text-[11px] font-mono text-[#8C6D58] bg-[#FFF8E7] border border-[#C8B6A6]/40 px-2.5 py-0.5 rounded-full font-medium">
                Spec / Concept
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-zinc-950 rounded-xl liquid-glass border border-[#C8B6A6]/40 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Hero Banner */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 text-white">
            <span className="text-xs font-mono text-[#EFE8E0] block mb-1">
              Client: {project.client}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2 leading-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 font-normal max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content Sections */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Deliverables row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600 border-b border-[#C8B6A6]/20 pb-4">
            <span className="text-[#8C6D58] uppercase tracking-wider font-bold">Deliverables:</span>
            {project.deliverables.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-zinc-900 font-semibold">{item}</span>
                {idx < project.deliverables.length - 1 && (
                  <span className="text-[#C8B6A6]" aria-hidden="true">&middot;</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 1. THE CHALLENGE */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-red-700 uppercase tracking-wider font-bold">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              THE CHALLENGE
            </div>
            <p className="text-base text-zinc-700 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* 2. THE IDEA */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D58] uppercase tracking-wider font-bold">
              <Lightbulb className="w-3.5 h-3.5 text-[#6A1B29]" />
              THE IDEA &amp; STRATEGY
            </div>
            <p className="text-base text-zinc-700 leading-relaxed font-normal">
              {project.idea}
            </p>
          </div>

          {/* 3. THE EXECUTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#6A1B29] uppercase tracking-wider font-bold">
              <Camera className="w-3.5 h-3.5 text-[#6A1B29]" />
              THE EXECUTION &middot; PRODUCTION BREAKDOWN
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="liquid-glass border border-[#C8B6A6]/40 bg-[#FFF8E7]/60 p-4 rounded-2xl shadow-2xs">
                <span className="text-[11px] font-mono text-[#8C6D58] block mb-1 font-bold uppercase">
                  CAMERA &amp; OPTICS
                </span>
                <p className="text-sm text-zinc-900 font-semibold">{project.execution.camera}</p>
              </div>

              <div className="liquid-glass border border-[#C8B6A6]/40 bg-[#FFF8E7]/60 p-4 rounded-2xl shadow-2xs">
                <span className="text-[11px] font-mono text-[#8C6D58] block mb-1 font-bold uppercase">
                  LIGHTING SETUP
                </span>
                <p className="text-sm text-zinc-800">{project.execution.lighting}</p>
              </div>

              <div className="liquid-glass border border-[#C8B6A6]/40 bg-[#FFF8E7]/60 p-4 rounded-2xl shadow-2xs">
                <span className="text-[11px] font-mono text-[#8C6D58] block mb-1 font-bold uppercase">
                  CREATIVE DIRECTION
                </span>
                <p className="text-sm text-zinc-800">{project.execution.direction}</p>
              </div>

              <div className="liquid-glass border border-[#C8B6A6]/40 bg-[#FFF8E7]/60 p-4 rounded-2xl shadow-2xs">
                <span className="text-[11px] font-mono text-[#8C6D58] block mb-1 font-bold uppercase">
                  EDITING &amp; COLOR GRADE
                </span>
                <p className="text-sm text-zinc-800">{project.execution.editing}</p>
              </div>
            </div>
          </div>

          {/* 4. THE RESULT */}
          <div className="liquid-glass-accent rounded-3xl p-6 sm:p-7 space-y-4 border border-[#C8B6A6]/45 bg-[#FFFDF8] shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                THE RESULT
              </div>
              <span className="text-[11px] font-mono text-[#8C6D58] font-medium">
                {project.result.isConcept ? "Concept Validation" : "Measured Commercial Outcome"}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-3 border-t border-b border-[#C8B6A6]/20">
              {project.result.metrics.map((m, idx) => (
                <div key={idx}>
                  <span className="text-xs font-mono text-zinc-500 block truncate">
                    {m.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-[#6A1B29] tabular-nums">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-700 font-normal leading-relaxed">
              {project.result.summary}
            </p>
          </div>

          {/* CTA Footer inside modal */}
          <div className="pt-4 border-t border-[#C8B6A6]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8C6D58] font-mono">
              Ready to create something distinctive for your business?
            </div>
            <button
              onClick={() => {
                onClose();
                onStartSimilar(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#FFF8E7] bg-[#6A1B29] hover:bg-[#52131F] py-3.5 px-6 rounded-xl transition-colors cursor-pointer shadow-md shadow-[#6A1B29]/25 hover:shadow-lg hover:shadow-[#6A1B29]/35"
            >
              <span>Work With Us On Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
