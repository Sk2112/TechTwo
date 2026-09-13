import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { PrototypeProject } from '../types';

interface OurWorkProps {
  onSelectProject?: (project: PrototypeProject) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onSelectProject }) => {
  // Interactive state for Project 2 (Variance Matrix Bars)
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const [varianceMultiplier, setVarianceMultiplier] = useState(1);

  // Interactive state for Project 3 (Workflow demo simulation)
  const [workflowState, setWorkflowState] = useState({
    invoice: 'Auto',
    compliance: 'Review',
    onboarding: 'Syncing',
  });
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerWorkflowSimulation = () => {
    setIsSimulating(true);
    setWorkflowState({
      invoice: 'Processing...',
      compliance: 'Auditing...',
      onboarding: 'Connecting...',
    });

    setTimeout(() => {
      setWorkflowState({
        invoice: 'Reconciled',
        compliance: 'Compliant',
        onboarding: 'Completed',
      });
      setIsSimulating(false);
    }, 1200);
  };

  const barData = [
    { label: 'Mon', height: 42, value: '$24.5k' },
    { label: 'Tue', height: 68, value: '$38.2k' },
    { label: 'Wed', height: 52, value: '$29.1k' },
    { label: 'Thu', height: 86, value: '$49.4k' },
    { label: 'Fri', height: 62, value: '$34.8k' },
    { label: 'Sat', height: 96, value: '$56.0k' },
  ];

  return (
    <section id="work" className="w-full bg-[#f4f3f1] py-20 sm:py-24 border-b border-[#e9e8e6]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1440px] mx-auto px-6 sm:px-12"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4e061a] font-bold mb-2">
              Our Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1c1b] tracking-tight font-['Manrope']">
              Things we've built and things we're exploring.
            </h2>
          </div>

          <p className="text-[#544244] text-[15px] max-w-md leading-relaxed">
            We believe in honest craftsmanship. Here is a selection of real deployments, client systems, and interactive working prototypes.
          </p>
        </div>

        {/* 3 High-Fidelity Project Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* ================= Project 01: School Portal ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e3e2e0] hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Mockup Window Header */}
            <div className="bg-[#e9e8e6] px-4 py-2.5 flex items-center justify-between border-b border-[#dadad8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
              </div>
              <span className="text-[11px] font-mono text-[#544244]">portal.st-hedwig.edu</span>
              <span className="w-2 h-2" />
            </div>

            {/* Mockup Content */}
            <div className="p-4 sm:p-5 bg-[#f4f3f1] flex-grow flex flex-col justify-between select-none">
              <div className="space-y-3">
                {/* Banner notice */}
                <div className="bg-[#4e061a] text-white p-3 rounded-lg flex items-center justify-between shadow-sm">
                  <span className="text-[12px] font-semibold font-['Manrope']">
                    Term 2 Examination Schedule Published
                  </span>
                  <span className="text-[10px] bg-[#6b1e2e] text-[#ffd9dd] px-1.5 py-0.5 rounded font-mono font-medium">
                    Action Req
                  </span>
                </div>

                {/* 2 Stats Cards */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec]">
                    <span className="text-[10px] text-[#8e4a55] uppercase font-bold tracking-wider font-mono">
                      Attendance Rate
                    </span>
                    <div className="text-xl font-bold text-[#1a1c1b] font-['Manrope'] mt-0.5">
                      96.4%
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec]">
                    <span className="text-[10px] text-[#8e4a55] uppercase font-bold tracking-wider font-mono">
                      Academic Calendar
                    </span>
                    <div className="text-xl font-bold text-[#1a1c1b] font-['Manrope'] mt-0.5">
                      14 Events
                    </div>
                  </div>
                </div>

                {/* Live portals status */}
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec] space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-[#1a1c1b]">Grade 11 STEM Portal</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-[#1a1c1b]">Parent Direct Gateway</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5 bg-white border-t border-[#efeeec]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#1a1c1b] font-['Manrope']">
                  Modern School Website
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#ffd9dc] text-[#400011]">
                  Website / Concept
                </span>
              </div>
              <p className="text-[13px] text-[#544244] leading-relaxed">
                A website concept designed to make important school information easier for students, staff and parents to discover quickly.
              </p>
            </div>
          </motion.div>

          {/* ================= Project 02: Operational Data Dashboard ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e3e2e0] hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Mockup Window Header */}
            <div className="bg-[#e9e8e6] px-4 py-2.5 flex items-center justify-between border-b border-[#dadad8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
              </div>
              <span className="text-[11px] font-mono text-[#544244]">analytics.TwoTech-core.io</span>
              <span className="w-2 h-2" />
            </div>

            {/* Mockup Content with interactive bar graph */}
            <div className="p-4 sm:p-5 bg-[#f4f3f1] flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                {/* 2 KPI Metric Boxes */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec]">
                    <span className="text-[10px] text-[#8e4a55] font-mono uppercase">
                      NET REVENUE
                    </span>
                    <div className="text-xl font-bold text-[#4e061a] font-['Manrope'] mt-0.5">
                      ${Math.round(184200 * varianceMultiplier).toLocaleString()}
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                      ↑ 14% this month
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec]">
                    <span className="text-[10px] text-[#8e4a55] font-mono uppercase">
                      AVG ATTENDANCE
                    </span>
                    <div className="text-xl font-bold text-[#1a1c1b] font-['Manrope'] mt-0.5">
                      1,248
                    </div>
                    <span className="text-[10px] text-[#4e061a] font-semibold block mt-0.5">
                      Normal Variance
                    </span>
                  </div>
                </div>

                {/* Variance Matrix Bar Visualizer */}
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#efeeec]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase text-[#544244] font-mono font-bold tracking-wider">
                      Variance Matrix
                    </span>
                    <span className="text-[10px] font-mono text-[#4e061a] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4e061a] animate-pulse" />
                      Live feed
                    </span>
                  </div>

                  {/* Interactive Bars */}
                  <div className="h-12 w-full flex items-end gap-2 pt-1">
                    {barData.map((bar, i) => (
                      <div
                        key={bar.label}
                        onMouseEnter={() => {
                          setActiveBarIndex(i);
                          setVarianceMultiplier(1 + (i - 2) * 0.05);
                        }}
                        onMouseLeave={() => {
                          setActiveBarIndex(null);
                          setVarianceMultiplier(1);
                        }}
                        className="relative flex-1 flex flex-col items-center group/bar cursor-pointer"
                      >
                        {activeBarIndex === i && (
                          <div className="absolute -top-6 bg-[#1a1c1b] text-white text-[9px] font-mono px-1 rounded shadow pointer-events-none whitespace-nowrap z-10">
                            {bar.value}
                          </div>
                        )}
                        <div
                          style={{ height: `${bar.height}%` }}
                          className={`w-full rounded-t transition-all duration-200 ${
                            activeBarIndex === i
                              ? 'bg-[#4e061a]'
                              : i === 5
                              ? 'bg-[#6b1e2e]'
                              : 'bg-[#6b1e2e]/45 hover:bg-[#6b1e2e]'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5 bg-white border-t border-[#efeeec]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#1a1c1b] font-['Manrope']">
                  Operational Data Dashboard
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#ffd9dd] text-[#71333e]">
                  Data / Concept
                </span>
              </div>
              <p className="text-[13px] text-[#544244] leading-relaxed">
                A dashboard concept that transforms raw operational logs into clean KPI metrics, trends and actionable executive insights.
              </p>
            </div>
          </motion.div>

          {/* ================= Project 03: Workflow Management ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e3e2e0] hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Mockup Window Header */}
            <div className="bg-[#e9e8e6] px-4 py-2.5 flex items-center justify-between border-b border-[#dadad8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
                <span className="w-2 h-2 rounded-full bg-[#dac0c2]" />
              </div>
              <span className="text-[11px] font-mono text-[#544244]">flow.internal.TwoTech</span>
              <button
                onClick={triggerWorkflowSimulation}
                title="Test trigger automation"
                className="text-[#544244] hover:text-[#4e061a] transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-[#4e061a]' : ''}`} />
              </button>
            </div>

            {/* Mockup Content */}
            <div className="p-4 sm:p-5 bg-[#f4f3f1] flex-grow flex flex-col justify-between select-none">
              <div className="space-y-2">
                {/* Workflow Item 1 */}
                <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#efeeec] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-[12px] font-mono text-[#1a1c1b]">
                      Invoice Reconciliation
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#efeeec] px-1.5 py-0.5 rounded text-[#544244]">
                    {workflowState.invoice}
                  </span>
                </div>

                {/* Workflow Item 2 */}
                <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#efeeec] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[12px] font-mono text-[#1a1c1b]">
                      Vendor Compliance Check
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#ffd9dc] text-[#7b2b3a] px-1.5 py-0.5 rounded font-medium">
                    {workflowState.compliance}
                  </span>
                </div>

                {/* Workflow Item 3 */}
                <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#efeeec] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[12px] font-mono text-[#1a1c1b]">
                      Client Onboarding Trigger
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#efeeec] px-1.5 py-0.5 rounded text-[#544244]">
                    {workflowState.onboarding}
                  </span>
                </div>
              </div>

              {/* Simulation button banner inside card */}
              <div className="mt-3 pt-2 border-t border-[#e3e2e0] flex items-center justify-between text-[11px] font-mono text-[#544244]">
                <span>Pipeline Engine</span>
                <button
                  onClick={triggerWorkflowSimulation}
                  className="text-[#4e061a] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {isSimulating ? 'Simulating...' : 'Test Trigger →'}
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5 bg-white border-t border-[#efeeec]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#1a1c1b] font-['Manrope']">
                  Workflow Management
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#e3e2e0] text-[#1a1c1b]">
                  Software / Demo
                </span>
              </div>
              <p className="text-[13px] text-[#544244] leading-relaxed">
                A demonstration of how repetitive business processes can be organized into a simple, automated digital workflow.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Link to Contact / Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4e061a] hover:text-[#6b1e2e] transition-colors group cursor-pointer"
          >
            <span>View all work and prototypes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
