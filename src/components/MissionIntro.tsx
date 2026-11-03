import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { BookMarked, Sparkles, Heart, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface MissionIntroProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const MissionIntro: React.FC<MissionIntroProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F4F7FA] border-b border-[#E6EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Photo Composite */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={100}>
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group zoom-container">
                <img 
                  src="/assets/img_-008.png" 
                  alt="Al-Ala Education Foundation Annual Initiatives"
                  className="w-full h-[380px] sm:h-[420px] object-cover zoom-image"
                />
                <div className="p-4 bg-[#0D3B82] text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Annual Report 2025–2026 • Introduction</span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1 font-sans italic">
                    Serving students, families, women, and communities guided by Islamic principles of service.
                  </p>
                </div>
              </div>

              {/* Small Overlay Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#008CD3] text-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="font-mono text-xl font-bold">1999–2026</div>
                <div className="text-[11px] font-medium leading-tight text-amber-100">
                  27 Years of Unbroken Educational & Social Service
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                  <BookMarked className="w-4 h-4" />
                  <span>Foundation Introduction & Vision</span>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0D3B82] leading-tight">
                  Guided by Islamic Values, Dedicated to Human Dignity
                </h2>

                <p className="text-base sm:text-lg text-[#1A4E9E] leading-relaxed font-sans">
                  Alhamdulillah, during the academic year 2025–2026, <strong className="text-[#0D3B82] font-semibold">Al-Ala Education Foundation</strong> continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives.
                </p>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                  Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility. Operating under the umbrella of <strong className="text-[#0D3B82]">Al-Ala International Islamic School</strong>, our trust integrates academic rigor with compassionate social care.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-white rounded-lg border border-stone-200/80 shadow-2xs flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#008CD3] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0D3B82]">Orphan & Support Staff Support</h4>
                      <p className="text-[11px] text-stone-500">Free tuition, stationery, books, and tarbiyyah classes.</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-lg border border-stone-200/80 shadow-2xs flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#008CD3] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0D3B82]">Health & Hospital Partnerships</h4>
                      <p className="text-[11px] text-stone-500">Shaukat Khanum Cancer Hospital & Edhi Homes aid.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentView('about')}
                    className="bg-[#0D3B82] hover:bg-[#008CD3] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    Learn More About Our History →
                  </button>
                  
                  <button
                    onClick={openReportModal}
                    className="text-xs font-bold text-[#008CD3] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Read Official 2025–2026 Report Summary
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
