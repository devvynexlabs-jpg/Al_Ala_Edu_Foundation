import React from 'react';
import { PageView } from '../types';
import { Heart, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="relative w-full bg-[#F8FAFC] pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Headline + High Impact Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 27 Years Trust Badge */}
            <ScrollReveal direction="fade" delay={75}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F7FA] border border-[#E6EEF5]">
                <span className="w-2 h-2 rounded-full bg-[#008CD3] animate-pulse-ring"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B82]">
                  Established 1999 • 27 Years of Service
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-xs font-sans italic text-[#008CD3]">
                  Annual Report 2025–2026
                </span>
              </div>
            </ScrollReveal>

            {/* Editorial Serif Display Headline */}
            <ScrollReveal delay={150}>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0D3B82] leading-[1.2] tracking-tight text-balance">
                Every child deserves to learn. Every family deserves dignity.
              </h1>
            </ScrollReveal>

            {/* Subtitle / Mission Statement */}
            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-sans">
                For 27 years, <strong className="text-[#0D3B82] font-semibold">Al-Ala Education Foundation</strong> (under Al-Ala International Islamic School) has empowered underprivileged communities across Pakistan through quality education, healthcare, women's skill development, and emergency humanitarian relief.
              </p>
            </ScrollReveal>

            {/* Key Value Pill Highlights */}
            <ScrollReveal delay={300}>
              <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#1A4E9E] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008CD3]" />
                  <span>100% Free Education for Orphans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008CD3]" />
                  <span>Islamic Values of Service (Khidmah)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008CD3]" />
                  <span>Shaukat Khanum & Edhi Collaborations</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={400}>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setCurrentView('donate')}
                  className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Support Our Work</span>
                </button>

                <button
                  onClick={() => setCurrentView('programs')}
                  className="bg-[#F4F7FA] hover:bg-[#E6EEF5] text-[#0D3B82] font-semibold text-base px-6 py-3.5 rounded-lg border border-stone-300 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Explore 8 Focus Areas</span>
                  <ArrowRight className="w-4 h-4 text-[#008CD3] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>

            {/* Annual Report Quick Trigger */}
            <ScrollReveal delay={500}>
              <div className="pt-2 flex items-center gap-3 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Transparent Non-Profit Governance. View our{' '}
                  <button 
                    onClick={openReportModal}
                    className="text-[#008CD3] font-semibold underline hover:text-[#007AB8] cursor-pointer"
                  >
                    2025–2026 Annual Report Summary
                  </button>
                </span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Hero Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group zoom-container">
                
                {/* Main Classroom Image */}
                <img 
                  src="/assets/img_-016.png" 
                  alt="Students studying at Al-Ala International Islamic School"
                  className="w-full h-[420px] sm:h-[480px] object-cover zoom-image"
                />

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AL-ALA INTERNATIONAL ISLAMIC SCHOOL</span>
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold leading-tight">
                    "Talent Deserves Opportunity"
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 font-sans">
                    Free education, textbooks, and moral tarbiyyah for underprivileged children.
                  </p>
                </div>

                {/* Floating Stat Badge top right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-stone-200 text-right">
                  <div className="font-mono text-lg font-bold text-[#008CD3]">
                    27th Year
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-600 font-mono">
                    Since 1999
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Decorative Offset Background Shape */}
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#E6EEF5] -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
