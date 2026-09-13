import React from 'react';
import { motion } from 'motion/react';
import { Globe, BarChart3, Terminal, ArrowRight } from 'lucide-react';
import { ServicePillar } from '../types';

interface WhatWeDoProps {
  onSelectPillar: (pillar: ServicePillar) => void;
}

export const servicesData: ServicePillar[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites',
    tagline: 'A better digital presence for your organization.',
    description:
      'We design and develop modern, responsive websites for schools, businesses, startups and organizations. Built for velocity, clarity, and ease of editing.',
    tags: ['Business websites', 'School websites', 'Landing pages', 'Responsive design', 'Enquiry forms'],
    ctaText: 'Explore websites',
    iconName: 'web',
    caseStudy: {
      client: 'St. Hedwig Preparatory Academy',
      impact: '100% mobile accessibility & 3x parent engagement surge within 60 days of launch.',
      keyDeliverables: [
        'Custom headless CMS with granular staff role permissions',
        'Automated parent enquiry routing & tour scheduling',
        'Sub-second page load times with zero tracking bloat',
      ],
      timeline: '4-6 weeks typical delivery',
    },
  },
  {
    id: 'data-insights',
    number: '02',
    title: 'Data & Insights',
    tagline: 'You already have the data. We help you understand it.',
    description:
      'Turn spreadsheets, operational records and existing databases into automated dashboards, clear reports and useful insights that support confident decisions.',
    tags: ['Data cleaning', 'Dashboards', 'Reporting', 'Trend analysis', 'Business insights'],
    ctaText: 'Explore data solutions',
    iconName: 'stats',
    caseStudy: {
      client: 'TwoTech Logistics Core',
      impact: 'Consolidated 18 disparate CSV sheets into a unified single-pane operational pulse.',
      keyDeliverables: [
        'Automated ETL pipelines syncing accounting & attendance databases',
        'Real-time anomaly variance detection and alerts',
        'Executive board export formats with instant PDF delivery',
      ],
      timeline: '2-4 weeks typical sprint',
    },
  },
  {
    id: 'custom-software',
    number: '03',
    title: 'Custom Software',
    tagline: 'Software built around the way you work.',
    description:
      'When off-the-shelf software is too clunky or restrictive, we construct custom web applications and automated workflows mapped directly to your internal workflow.',
    tags: ['Management systems', 'Internal portals', 'Automation', 'Web applications', 'REST APIs'],
    ctaText: 'Discuss a solution',
    iconName: 'terminal',
    caseStudy: {
      client: 'Internal Enterprise Operations',
      impact: 'Eliminated 14 hours per week of manual invoice & vendor compliance tracking.',
      keyDeliverables: [
        'Custom web application with role-based JWT authentication',
        'Automated document verification pipeline with webhook dispatches',
        'Audit-ready logging engine with historical revisions',
      ],
      timeline: '6-8 weeks milestone delivery',
    },
  },
];

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectPillar }) => {
  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#4e061a] font-bold mb-2">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1c1b] tracking-tight font-['Manrope']">
              Digital solutions built around real needs.
            </h2>
          </div>

          <p className="text-[#544244] text-[15px] max-w-md leading-relaxed">
            Three disciplined pillars engineered to eliminate operational bottlenecks and elevate your organization's digital impact.
          </p>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className="group bg-white p-7 sm:p-8 rounded-xl shadow-sm border border-[#e3e2e0] hover:border-[#4e061a]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header with Number & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl sm:text-5xl font-mono text-[#4e061a] font-semibold leading-none">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#4e061a] group-hover:bg-[#4e061a] group-hover:text-white transition-colors duration-300">
                      {service.iconName === 'web' && <Globe className="w-5 h-5" />}
                      {service.iconName === 'stats' && <BarChart3 className="w-5 h-5" />}
                      {service.iconName === 'terminal' && <Terminal className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a1c1b] mb-1 font-['Manrope']">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8e4a55] font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-[#544244] text-[14px] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#efeeec] text-[#1a1c1b] text-xs font-medium border border-transparent group-hover:border-[#dac0c2]/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectPillar(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4e061a] group-hover:text-[#6b1e2e] transition-colors pt-4 border-t border-[#f4f3f1] text-left cursor-pointer w-full"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
