import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detector
      const sections = ['home', 'about', 'services', 'work', 'process', 'product', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Product', href: '#product' },
  ];

  return (
    <header className="relative z-40 w-full max-w-[960px] mx-auto px-4 pt-4 sm:pt-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.18)] border-neutral-200/80 fixed top-4 left-1/2 -translate-x-1/2 max-w-[920px] w-[94%]'
            : 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.25)] border-white/40'
        }`}
      >
        {/* Studio Logo on Left */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          title="TwoTech Digital Studio"
        >
          {/* TwoTech emblem */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#4e061a] flex items-center justify-center shadow-sm group-hover:bg-[#6b1e2e] transition-colors">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border border-white/90 rotate-45" />
          </div>
          <span className="font-['Manrope'] font-bold text-sm tracking-tight text-[#1a1c1b]">
            TwoTech
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-[#544244]/80 border-l border-[#dac0c2]/50 pl-2 ml-0.5">
            Digital Studio
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-['Inter'] text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors font-medium relative py-1 ${
                  isActive
                    ? 'text-[#4e061a] font-semibold'
                    : 'text-[#1a1c1b]/85 hover:text-[#4e061a]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4e061a] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Start Project Green Pill */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#059669] text-white text-[13px] font-semibold shadow-sm transition-all duration-200 active:scale-95 group"
          >
            <span>Start Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#1a1c1b] hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 bg-white/98 backdrop-blur-lg rounded-2xl shadow-xl border border-neutral-200 flex flex-col gap-2 font-['Inter']"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#1a1c1b] hover:bg-neutral-100 font-medium text-sm transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-2.5 rounded-full bg-[#10b981] text-white font-semibold text-sm shadow-sm"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
