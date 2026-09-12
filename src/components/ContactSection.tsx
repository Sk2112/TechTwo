import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Handshake, ArrowRight, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { ContactFormState } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    organization: '',
    selectedPillars: ['Websites'],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const availablePillars = [
    'Websites',
    'Data & Insights',
    'Custom Software',
    'Product Collaboration',
  ];

  const togglePillar = (pillar: string) => {
    setFormData((prev) => {
      const exists = prev.selectedPillars.includes(pillar);
      if (exists) {
        return {
          ...prev,
          selectedPillars: prev.selectedPillars.filter((p) => p !== pillar),
        };
      } else {
        return {
          ...prev,
          selectedPillars: [...prev.selectedPillars, pillar],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
    }, 850);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      selectedPillars: ['Websites'],
      message: '',
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
      >
        {/* Left Editorial Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4e061a] font-bold mb-2">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1c1b] tracking-tight leading-tight mb-5 font-['Manrope']">
              Have a problem worth solving?
            </h2>
            <p className="text-lg text-[#544244] leading-relaxed mb-8">
              Whether you need a website, want to understand your data better, or have an idea for a custom system, tell us what you're working on.
            </p>

            {/* Editorial Quote Box */}
            <div className="p-6 bg-[#f4f3f1] rounded-xl border border-[#e3e2e0] shadow-sm">
              <p className="text-[15px] text-[#1a1c1b] font-medium leading-relaxed italic font-['Newsreader']">
                "You don't need to have the technical solution figured out. That's our job. Tell us where the friction is."
              </p>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-10 sm:mt-14 space-y-4 pt-6 border-t border-[#efeeec]">
            <div className="flex items-center gap-3 text-[#544244] text-sm">
              <div className="w-8 h-8 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#4e061a] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-medium">Typical response time: Under 24 hours</span>
            </div>

            <div className="flex items-center gap-3 text-[#544244] text-sm">
              <div className="w-8 h-8 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#4e061a] shrink-0">
                <Handshake className="w-4 h-4" />
              </div>
              <span className="font-medium">Direct conversation with the founding engineers</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-[#e3e2e0] relative">
            <AnimatePresence mode="wait">
              {status === 'submitted' ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1c1b] font-['Manrope']">
                    Enquiry Delivered Directly
                  </h3>
                  <p className="text-sm text-[#544244] max-w-md leading-relaxed">
                    Thank you, <strong>{formData.name || 'Friend'}</strong>. Your brief has been dispatched directly to our engineering desk at Atelier. We will examine your requirements and respond within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-lg bg-[#4e061a] text-white text-sm font-semibold hover:bg-[#6b1e2e] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1a1c1b] uppercase tracking-wider mb-2 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#faf9f7] text-[#1a1c1b] text-sm border border-[#dac0c2]/60 focus:outline-none focus:ring-2 focus:ring-[#4e061a] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1a1c1b] uppercase tracking-wider mb-2 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@institution.edu"
                        className="w-full h-11 px-3.5 rounded-lg bg-[#faf9f7] text-[#1a1c1b] text-sm border border-[#dac0c2]/60 focus:outline-none focus:ring-2 focus:ring-[#4e061a] transition-all"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1c1b] uppercase tracking-wider mb-2 font-mono">
                      Organization / School
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="St. Hedwig Academy or Enterprise Ltd."
                      className="w-full h-11 px-3.5 rounded-lg bg-[#faf9f7] text-[#1a1c1b] text-sm border border-[#dac0c2]/60 focus:outline-none focus:ring-2 focus:ring-[#4e061a] transition-all"
                    />
                  </div>

                  {/* Category Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1c1b] uppercase tracking-wider mb-2.5 font-mono">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availablePillars.map((pillar) => {
                        const isSelected = formData.selectedPillars.includes(pillar);
                        return (
                          <button
                            key={pillar}
                            type="button"
                            onClick={() => togglePillar(pillar)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#4e061a] text-white shadow-sm'
                                : 'bg-[#efeeec] text-[#1a1c1b] hover:bg-[#e3e2e0]'
                            }`}
                          >
                            {pillar}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1c1b] uppercase tracking-wider mb-2 font-mono">
                      Tell us about the project or challenge *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the current challenge or what you are hoping to build..."
                      className="w-full p-3.5 rounded-lg bg-[#faf9f7] text-[#1a1c1b] text-sm border border-[#dac0c2]/60 focus:outline-none focus:ring-2 focus:ring-[#4e061a] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4e061a] hover:bg-[#6b1e2e] text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200 active:scale-95 disabled:opacity-75 cursor-pointer font-['Manrope']"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin" />
                          <span>Routing directly to desk...</span>
                        </>
                      ) : (
                        <>
                          <span>Send enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
