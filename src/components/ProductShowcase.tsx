import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowDown,
  UserX,
  CalendarCheck,
  Check,
  Send,
  Sparkles,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  // Interactive simulator for Attendance Flow (Workflow A)
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  // Interactive permission slip for Workflow B
  const [signedName, setSignedName] = useState('');
  const [isEventSigned, setIsEventSigned] = useState(false);
  const [responseRate, setResponseRate] = useState(94);

  const handleSelectReason = (reason: string) => {
    setSelectedReason(reason);
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationSuccess(true);
    }, 700);
  };

  const handleSignEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signedName.trim()) return;
    setIsEventSigned(true);
    setResponseRate((prev) => Math.min(prev + 1, 99));
  };

  return (
    <section id="product" className="w-full bg-[#510016] text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle architectural backdrop illumination */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#6b1e2e]/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#4e061a]/60 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10"
      >
        {/* Section Intro */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          {/* Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6f182a]/80 text-[#ffd9dd] mb-4 border border-[#ffb2bb]/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
              Product in Development
            </span>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#ffd9dd] font-semibold mb-2">
              What We're Building
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight font-['Manrope']">
              We're building for a problem we've noticed.
            </h2>
            <p className="text-lg sm:text-xl text-[#f6818f] leading-relaxed font-normal">
              Schools communicate with hundreds of parents every day, while many routine actions still depend on manual messages, phone calls, and paper slips.
            </p>
          </div>
        </div>

        {/* Product Description Master Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-[#6f182a]/50 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/15 shadow-2xl"
        >
          {/* Header Row: Product Title & Follow Action */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-[11px] font-mono text-[#ffd9dd] uppercase tracking-wider block mb-1">
                Product Name
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                School Communication &amp; Automation Platform
              </h3>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-mono uppercase tracking-wider font-semibold border border-white/10">
                Coming Soon • Q3
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-white text-[#4e061a] hover:bg-[#ffd9dd] text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 active:scale-95 group font-['Inter']"
              >
                <span>Follow the product</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <p className="text-[15px] text-[#ffd9dd]/90 max-w-3xl mb-10 leading-relaxed">
            A focused platform we're building to simplify communication between schools and parents and automate routine workflows without cumbersome third-party app installations.
          </p>

          {/* Two Core Workflows Visualized Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ================= Workflow A: Attendance Flow ================= */}
            <div className="bg-[#400010]/70 rounded-xl p-5 sm:p-6 border border-white/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <UserX className="w-5 h-5 text-[#ffd9dd]" />
                    <span className="text-base font-semibold text-white font-['Manrope']">
                      Workflow A: Attendance Flow
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#ffd9dd]">
                    Live Prototype
                  </span>
                </div>

                {/* Flow Steps */}
                <div className="space-y-2 text-sm">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      1
                    </span>
                    <span className="text-white/90">Student marked absent in morning roll call</span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      2
                    </span>
                    <span className="text-white/90">
                      Automated instant SMS/WhatsApp dispatched to parent
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      3
                    </span>
                    <span className="text-white/90">
                      Parent taps 1-click verification link with reason
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center gap-3 p-3 bg-[#10b981]/15 rounded-lg border border-[#10b981]/30">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-[11px] text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-emerald-300 font-semibold">
                      Teacher and admin see verified reason instantly
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Parent View Simulator */}
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#ffd9dd] font-mono font-semibold">
                    <Smartphone className="w-3 h-3 text-[#10b981]" />
                    <span>Parent View Simulator (Interactive)</span>
                  </div>
                  {verificationSuccess && (
                    <span className="text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Logged to SMS Queue
                    </span>
                  )}
                </div>

                <div className="text-xs text-white/95 italic bg-black/20 p-2.5 rounded mb-3 border border-white/5 leading-relaxed">
                  "Hello Marcus, Liam was marked absent today (08:45 AM). Tap here to confirm reason:"
                </div>

                {/* Interactive Reason Selectors */}
                <div className="flex flex-wrap gap-2">
                  {['Medical / Flu', 'Family Emergency', 'Excused Travel', 'Other'].map((reason) => (
                    <button
                      key={reason}
                      onClick={() => handleSelectReason(reason)}
                      disabled={isVerifying}
                      className={`text-xs px-2.5 py-1 rounded transition-all cursor-pointer ${
                        selectedReason === reason
                          ? 'bg-emerald-600 text-white font-semibold shadow'
                          : 'bg-white/10 hover:bg-white/20 text-[#ffd9dd]'
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>

                {/* Live Feedback Toast */}
                <AnimatePresence>
                  {isVerifying && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 text-[11px] text-[#ffd9dd] font-mono flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 animate-spin text-[#10b981]" />
                      Transmitting 1-click confirmation back to school portal...
                    </motion.div>
                  )}
                  {verificationSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 p-2 bg-emerald-950/60 border border-emerald-500/30 rounded text-xs text-emerald-200 flex items-center justify-between"
                    >
                      <span>
                        Verified: <strong>{selectedReason}</strong> automatically updated on roll sheet.
                      </span>
                      <button
                        onClick={() => {
                          setVerificationSuccess(false);
                          setSelectedReason(null);
                        }}
                        className="text-[10px] uppercase text-emerald-400 hover:underline ml-2"
                      >
                        Reset
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ================= Workflow B: School Events Flow ================= */}
            <div className="bg-[#400010]/70 rounded-xl p-5 sm:p-6 border border-white/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-[#ffd9dd]" />
                    <span className="text-base font-semibold text-white font-['Manrope']">
                      Workflow B: School Events Flow
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#ffd9dd]">
                    Live Prototype
                  </span>
                </div>

                {/* Flow Steps */}
                <div className="space-y-2 text-sm">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      1
                    </span>
                    <span className="text-white/90">Event created: Science Excursion (Grade 9)</span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      2
                    </span>
                    <span className="text-white/90">
                      Interactive digital permission notice sent to parents
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 bg-[#6b1e2e]/40 rounded-lg border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#4e061a] flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      3
                    </span>
                    <span className="text-white/90">
                      Digital signature &amp; emergency contact recorded
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1 text-[#ffd9dd]/70">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center gap-3 p-3 bg-[#10b981]/15 rounded-lg border border-[#10b981]/30">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-[11px] text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-emerald-300 font-semibold">
                      Live roster generated; targeted auto-reminders sent
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Bar & Quick Interactive Permission Tester */}
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex justify-between items-center text-[#ffd9dd] text-[11px] font-mono mb-1.5">
                  <span>Response Rate (Avg)</span>
                  <span className="text-white font-bold">{responseRate}% in 24 Hours</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#6b1e2e] h-2 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="bg-gradient-to-r from-[#ffd9dd] to-[#10b981] h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${responseRate}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>

                {/* Quick signature input simulation */}
                {!isEventSigned ? (
                  <form onSubmit={handleSignEvent} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type parent name to test permission sign..."
                      value={signedName}
                      onChange={(e) => setSignedName(e.target.value)}
                      className="bg-black/20 border border-white/10 rounded px-2.5 py-1 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#ffd9dd] flex-1"
                    />
                    <button
                      type="submit"
                      className="bg-[#10b981] hover:bg-[#059669] text-white text-xs font-semibold px-3 py-1 rounded transition-colors cursor-pointer shrink-0"
                    >
                      Sign Notice
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between text-xs text-emerald-300 bg-emerald-950/60 p-2 rounded border border-emerald-500/20">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Permission signed by {signedName}. Excursion roster updated.</span>
                    </div>
                    <button
                      onClick={() => {
                        setIsEventSigned(false);
                        setSignedName('');
                      }}
                      className="text-[10px] uppercase text-emerald-400 hover:underline"
                    >
                      Reset
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
