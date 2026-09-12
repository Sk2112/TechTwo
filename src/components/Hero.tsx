import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const opacityText = useTransform(scrollY, [0, 450], [1, 0.4]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-10 overflow-hidden bg-[#0f0a0c]"
    >
      {/* Parallax Macro Coffee Extraction / Deep Roast Liquid Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 bg-cover bg-center no-repeat transition-transform duration-1000 scale-105"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 10, 12, 0.42) 0%, rgba(15, 10, 12, 0.6) 40%, rgba(15, 10, 12, 0.88) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAHFSma6XTfrUERoFZHZJSIBkXcmRlBg-XJf1uUUX22AcrhINIPwTiwj1cMnijBSXxGOuJ2eVBp3JUbu3DVEdVTIK58MwadDmjHqstv0mT4fpgVPJKC3f-Mg5_MQ7W8ToMuPMvQAdMyMsn8DEt6bM_Qn4SbjyKTrg585y4TAo_B5X4dnmP7L-JWPn4SCnnEbq59NRM4ZVjmCBzmFY8_o_mBbfZ8Um4gSVlX8qY41232KXlu6liRlZyKQ')`,
          }}
        />
      </motion.div>

      {/* Ambient Vignette & Warm Radial Shimmer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(107,30,46,0.22)_0%,transparent_75%)] pointer-events-none" />

      {/* Floating Header Component */}
      <Navbar />

      {/* Centered Typography & Impact Hero */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto py-12 md:py-20"
      >
        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0 select-none"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase leading-[0.92] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] font-['Manrope']">
            GOOD<br />SOFTWARE
          </h1>
        </motion.div>

        {/* Editorial Sub-headline with cursive/serif contrasts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium tracking-wide mt-5 md:mt-7 drop-shadow-md font-['Manrope']"
        >
          Made by <span className="italic font-['Newsreader'] font-normal text-white px-0.5">us</span> • Delivered for{' '}
          <span className="italic font-['Newsreader'] font-normal text-white px-0.5">you</span>
        </motion.div>

        {/* Studio Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 max-w-xl text-white/80 font-['Inter'] text-sm md:text-base leading-relaxed px-4"
        >
          Bespoke digital architecture, clean data pipelines, and high-impact web software built without enterprise bloat.
        </motion.p>

        {/* Credibility Badges (3 Column Row matching Reference Figma) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-14 mt-10 md:mt-14 w-full max-w-2xl px-2"
        >
          {/* Badge 1 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-2 shadow-inner group-hover:bg-white/20 transition-all">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-white font-medium text-xs sm:text-sm leading-tight tracking-tight drop-shadow font-['Inter']">
              Two-Person Specialist Team
            </span>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-2 shadow-inner group-hover:bg-white/20 transition-all">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-white font-medium text-xs sm:text-sm leading-tight tracking-tight drop-shadow font-['Inter']">
              Zero Bloat &amp; Direct Access
            </span>
          </motion.div>

          {/* Badge 3 */}
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-2 shadow-inner group-hover:bg-white/20 transition-all">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-white font-medium text-xs sm:text-sm leading-tight tracking-tight drop-shadow font-['Inter']">
              Practical, High-Impact Solutions
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Floating Pill CTA Capsule (Reference: Build with us - Q3/Q4 Availability) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="relative z-10 w-full flex justify-center pb-2"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10b981] hover:bg-[#059669] text-white text-[13px] font-semibold shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group font-['Inter']"
        >
          <span>Build with us — Q3/Q4 Availability</span>
          <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3 h-3 text-white stroke-[2.5]" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};
