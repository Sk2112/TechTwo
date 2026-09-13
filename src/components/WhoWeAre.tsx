import React from 'react';
import { motion } from 'motion/react';
import { Users2, ArrowUpRight } from 'lucide-react';
import { span } from 'motion/react-client';

export const WhoWeAre: React.FC = () => {
  const approachSteps = [
    {
      step: '01',
      title: 'Understand the problem',
      description: 'Root cause discovery before writing a single line of code. We map the friction first.',
      phase: 'Discovery',
    },
    {
      step: '02',
      title: 'Build the solution',
      description: 'Lean, maintainable, resilient architectures designed without unneeded moving parts.',
      phase: 'Execution',
    },
    {
      step: '03',
      title: 'Improve continuously',
      description: 'Iterative refinement based on real operational usage, feedback, and telemetry.',
      phase: 'Evolution',
    },
  ];

  return (
    <section id="about" className="w-full bg-[#f4f3f1] py-20 sm:py-24 border-b border-[#e9e8e6]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1440px] mx-auto px-6 sm:px-12"
      >
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-[12px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1c1b] tracking-tight font-['Manrope']">
            A small team, building practical software.
          </h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 lg:gap-20 items-start" px-6 py-8>
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-lg text-[#1a1c1b] leading-relaxed font-normal">
              “We are <span className='text-secondary font-bold'>TwoTech</span> — a team of passionate developers helping small businesses grow. From stunning websites to insightful data dashboards, we empower you to reach global audiences and make smarter decisions.”
            </p>
            <p className="text-[15px] text-[#544244] leading-relaxed">
              We don't believe every problem needs a complicated system. Sometimes it's a better website. Sometimes it's better use of existing data. And sometimes it's a custom application built around the way an organization actually works.
            </p>

            {/* Direct Engineering Access Highlight Box */}
            {/* <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-5 bg-[#faf9f7] rounded-lg shadow-sm border border-[#e3e2e0] transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Users2 className="w-4 h-4 text-[#4e061a]" />
                <div className="text-sm text-[#4e061a] font-semibold font-['Manrope']">
                  Direct Engineering Access
                </div>
              </div>
              <p className="text-[13px] text-[#544244] leading-relaxed">
                You speak directly to the engineers building your tool. No account reps, no ticket queues, no translation loss.
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right Column: Approach & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-5"
          >
            {/* Core Approach Banner */}
            <div className="p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-[#e3e2e0]">
              <div className="text-[11px] uppercase tracking-wider text-[#8e4a55] font-mono font-semibold mb-1">
                Our Core Approach
              </div>
              <p className="text-xl text-[#1a1c1b] font-medium font-['Manrope'] leading-snug">
                Understand the problem, build the right solution, and improve it over time.
              </p>
            </div>

            {/* Sequential 3 Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {approachSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-[0_0_35px_rgba(107,30,46,0.45)]">
                  <div>
                    <span className="text-2xl font-mono text-[#4e061a] font-bold block mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-semibold text-[#1a1c1b] mb-1.5 font-['Manrope']">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#544244] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {/* <div className="mt-5 pt-3 border-t border-[#efeeec] text-[#4e061a] flex items-center justify-between text-[11px] font-mono font-semibold">
                    <span>Phase: {item.phase}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div> */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
