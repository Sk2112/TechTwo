import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#4e061a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-16 pb-12"
      >
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8">
            <div className="space-y-4">
              {/* Brand Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-[#4e061a] shadow-sm">
                  <div className="w-3 h-3 border-2 border-[#4e061a] rotate-45" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white font-['Manrope']">
                  TwoTech
                </span>
              </div>

              <p className="text-[14px] text-[#ee8594] max-w-sm leading-relaxed">
                Architectural digital engineering and bespoke software TwoTech. We materialize robust digital foundations for global industry leaders.
              </p>
            </div>

            {/* Commissions Status */}
            <div className="mt-8 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#ffd9dd] font-medium">
                Available for Work 24/7
              </span>
            </div>
          </div>

          {/* Column 2: Index */}
          {/* <div className="md:col-span-2 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ffd9dd] font-mono font-semibold">
              Index
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-sm text-[#ee8594] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-[#ee8594] hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-[#ee8594] hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-[#ee8594] hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#product" className="text-sm text-[#ee8594] hover:text-white transition-colors">
                  Lab &amp; Systems
                </a>
              </li>
            </ul>
          </div> */}

          {/* Column 3: Capabilities */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ffd9dd] font-mono font-semibold">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-sm text-[#ee8594]">
              
              {/* {/* <li>Enterprise System Architecture</li> */}
              {/* <li>Bespoke Web Platform Dev</li> */}
              {/* <li>Design Systems &amp; Micro-Interactions</li>  */}
              {/* <li>Cloud Infrastructures &amp; Scale</li> */}
              {/* <li>AI Platform Integration</li> */}
            </ul>
          </div>

          {/* Column 4: Network */}
          {/* <div className="md:col-span-2 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ffd9dd] font-mono font-semibold">
              Network
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ee8594] hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              {/* <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ee8594] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://readcv.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ee8594] hover:text-white transition-colors"
                >
                  ReadCV
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://arena.cx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ee8594] hover:text-white transition-colors"
                >
                  Are.na
                </a>
              </li> */}
            {/* </ul> */}
          {/* </div> */} 
        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ee8594]">
          <div>
            © 2026 TwoTech Digital Solutions Studio
          </div>

          <div className="flex items-center gap-6">
            {/* <a href="#about" className="hover:text-white transition-colors">
              Privacy Architecture
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Terms of Retainer
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Imprint
            </a> */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer ml-2"
              title="Return to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
