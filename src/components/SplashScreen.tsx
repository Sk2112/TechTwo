import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (forceShow) {
      setIsVisible(true);
      setProgress(0);
    }
  }, [forceShow]);

  useEffect(() => {
    if (!isVisible) return;

    // Smoothly increment progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 28);

    // Trigger exit animation after progress completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="TwoTech-splash-screen"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.05,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain reveal
            },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-[#0d090b] text-[#faf9f7] overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(107,30,46,0.35)_0%,rgba(13,9,11,0.95)_70%)] pointer-events-none" />
          
          {/* Subtle Grid Lines for Architectural Feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-5xl px-8 pt-8 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#dac0c2]/60 uppercase z-10"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
              <span>Studio Engine v2.5</span>
            </div>
            <span className="hidden sm:inline">Q3/Q4 Production Edition</span>
          </motion.div>

          {/* Center Brand Monogram & Typography */}
          <div className="flex flex-col items-center text-center z-10 my-auto px-6">
            {/* Geometric Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-[#dac0c2]/30 rotate-45 rounded-sm" />
              <div className="absolute inset-1.5 border border-[#ffb2bb]/20 rotate-12 rounded-sm" />
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#6b1e2e] to-[#4e061a] border border-[#ffdadc]/30 flex items-center justify-center shadow-[0_0_24px_rgba(107,30,46,0.6)]">
                <div className="w-3 h-3 bg-[#faf9f7] rotate-45" />
              </div>
            </motion.div>

            {/* Title with Masked Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] uppercase font-['Manrope'] text-white">
                TwoTech
              </h1>
              <p className="text-xs sm:text-sm font-medium tracking-[0.25em] text-[#dac0c2]/80 uppercase">
                Digital Solutions Studio
              </p>
            </motion.div>

            {/* Editorial Philosophy Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 text-sm text-[#faf9f7]/65 max-w-sm font-['Newsreader'] italic font-normal tracking-wide"
            >
              "Understand the problem, build the right solution, and improve it over time."
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Gradient Edge */}
          <div className="w-full max-w-md px-8 pb-10 flex flex-col items-center gap-3 z-10">
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#dac0c2]/70">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#10b981]" />
                Initializing Systems
              </span>
              <span>{Math.round(progress)}%</span>
            </div>

            {/* Sleek Gradient Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6b1e2e] via-[#ee8594] to-[#10b981]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Skip action button */}
            <button
              onClick={() => {
                setIsVisible(false);
                if (onComplete) onComplete();
              }}
              className="mt-2 text-[11px] font-mono text-white/40 hover:text-white/80 transition-colors cursor-pointer uppercase tracking-wider"
            >
              Skip Intro [Esc]
            </button>
          </div>

          {/* Luxury Bottom Gradient Feathering to enhance the upward wipe */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
