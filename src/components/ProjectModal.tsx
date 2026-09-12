import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ServicePillar } from '../types';

interface ProjectModalProps {
  pillar: ServicePillar | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  pillar,
  onClose,
  onContactClick,
}) => {
  if (!pillar) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#e3e2e0] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#f4f3f1] px-6 py-4 border-b border-[#e3e2e0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#4e061a] px-2 py-0.5 rounded bg-white border border-[#dac0c2]/40">
                Pillar {pillar.number}
              </span>
              <h3 className="text-lg font-bold text-[#1a1c1b] font-['Manrope']">
                {pillar.title} Architecture
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#544244] hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <div className="text-xs font-mono uppercase text-[#8e4a55] font-semibold tracking-wider mb-1">
                Strategic Foundation
              </div>
              <p className="text-base text-[#1a1c1b] font-medium leading-snug font-['Manrope']">
                {pillar.tagline}
              </p>
              <p className="text-sm text-[#544244] mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Case study overview */}
            <div className="bg-[#faf9f7] p-5 rounded-xl border border-[#efeeec] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8e4a55]">
                <span>REFERENCE CLIENT STUDY</span>
                <span className="text-[#10b981] font-semibold">{pillar.caseStudy.timeline}</span>
              </div>
              <div className="text-sm font-bold text-[#1a1c1b]">
                {pillar.caseStudy.client}
              </div>
              <p className="text-xs text-[#544244] leading-relaxed italic bg-white p-3 rounded border border-[#efeeec]">
                "{pillar.caseStudy.impact}"
              </p>

              <div>
                <span className="text-xs font-mono uppercase text-[#1a1c1b] font-semibold block mb-2">
                  Key Architectural Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {pillar.caseStudy.keyDeliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#544244]">
                      <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scope Tags */}
            <div>
              <span className="text-xs font-mono uppercase text-[#1a1c1b] font-semibold block mb-2">
                Specialized Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#f4f3f1] text-[#1a1c1b] text-xs font-medium rounded-lg border border-[#e3e2e0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="bg-[#f4f3f1] px-6 py-4 border-t border-[#e3e2e0] flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase text-[#544244] hover:text-[#1a1c1b] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4e061a] hover:bg-[#6b1e2e] text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-200 cursor-pointer font-['Manrope']"
            >
              <span>Consult on {pillar.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
