import React from 'react';
import { PageView } from '../types';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-16 md:py-24 lg:py-28 overflow-hidden border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Minimal Trust Badge */}
        <ScrollReveal direction="fade" delay={75}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E2E8F0] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#008CD3]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B82]">
              Established 1999 • Celebrating 27 Years of Service
            </span>
          </div>
        </ScrollReveal>

        {/* Editorial Display Headline */}
        <ScrollReveal delay={150}>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#0D3B82] leading-[1.16] tracking-tight text-balance max-w-4xl mx-auto">
            Every child deserves to learn. Every family deserves dignity.
          </h1>
        </ScrollReveal>

        {/* Focused Mission Statement */}
        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-sans font-normal">
            For over 27 years, <strong className="text-[#0D3B82] font-semibold">Al-Ala Education Foundation</strong> (under Al-Ala International Islamic School) has provided 100% free quality education for orphans and underprivileged students, complemented by community healthcare and emergency relief across Pakistan.
          </p>
        </ScrollReveal>

        {/* Streamlined Action Buttons */}
        <ScrollReveal delay={300}>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentView('donate')}
              className="w-full sm:w-auto bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
              <span>Support Our Mission</span>
            </button>

            <button
              onClick={() => setCurrentView('programs')}
              className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#0D3B82] font-semibold text-base px-7 py-4 rounded-xl border border-stone-200 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore 8 Focus Areas</span>
              <ArrowRight className="w-4 h-4 text-[#008CD3] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* Minimal Governance & Report Link */}
        <ScrollReveal delay={400}>
          <div className="pt-3 flex items-center justify-center gap-2.5 text-xs text-stone-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Transparent Registered Charity •{' '}
              <button 
                onClick={openReportModal}
                className="text-[#008CD3] font-semibold underline hover:text-[#007AB8] cursor-pointer"
              >
                View 2025–2026 Annual Report
              </button>
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
