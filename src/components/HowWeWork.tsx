import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Hammer, TrendingUp } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Search,
      description:
        'We learn about the problem, current workflow, goals, and constraints. No assumptions, just careful inquiry into what slows you down.',
      tag: 'Discovery & Audit',
    },
    {
      num: '02',
      title: 'Plan',
      icon: Compass,
      description:
        'We identify the simplest practical solution and define the scope clearly. We ruthlessly cut complexity before designing.',
      tag: 'Scoping & Architecture',
    },
    {
      num: '03',
      title: 'Build',
      icon: Hammer,
      description:
        'We design and develop the solution with usability, reliability, and maintainability in mind, keeping code clean and dependable.',
      tag: 'Surgical Development',
    },
    {
      num: '04',
      title: 'Improve',
      icon: TrendingUp,
      description:
        'We learn from how the solution is used in the field, fine-tune the interfaces, and improve functionality over time.',
      tag: 'Telemetry & Evolution',
    },
  ];

  return (
    <section id="process" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4e061a] font-bold mb-2">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1c1b] tracking-tight max-w-2xl font-['Manrope']">
            We don't start with technology. We start with the problem.
          </h2>
        </div>

        {/* Horizontal 4-step process connected by sleek line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#4e061a] via-[#6b1e2e] to-[#dac0c2] z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`p-6 rounded-xl transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#4e061a] shadow-xl'
                      : 'bg-[#faf9f7] border-[#e3e2e0] shadow-sm hover:border-[#dac0c2]'
                  }`}
                >
                  <div>
                    {/* Circular Step Badge with Number and subtle Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-[#e3e2e0] group-hover:border-[#4e061a] transition-colors">
                        <span className="text-xl font-mono text-[#4e061a] font-bold">
                          {step.num}
                        </span>
                      </div>
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isSelected ? 'text-[#4e061a]' : 'text-[#8e4a55]/60'
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#1a1c1b] mb-2 font-['Manrope']">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#544244] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#efeeec] text-[11px] font-mono text-[#8e4a55] font-semibold">
                    {step.tag}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
