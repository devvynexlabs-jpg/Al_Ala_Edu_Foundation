import React from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { Award, BookOpen, Heart, Shield, Sparkles, CheckCircle, Quote } from 'lucide-react';

interface AboutPageProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentView, openReportModal }) => {
  return (
    <div className="w-full bg-[#F8FAFC] pb-20 font-sans">
      
      {/* Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-017.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
            <Award className="w-3 h-3 text-[#008CD3]" />
            <span>ESTABLISHED 1999 • CELEBRATING 27 YEARS</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight max-w-3xl">
            About Al-Ala Education Foundation
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            A charitable trust dedicated to serving society through education, healthcare, social welfare, and humanitarian relief guided by Islamic values.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Intro & History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              OUR HISTORY & FOUNDATION
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#0D3B82]">
              27 Years of Unbroken Trust & Educational Leadership
            </h2>
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="p-4 bg-[#F4F7FA] rounded-xl border-l-4 border-[#008CD3] italic font-sans text-stone-800 text-sm sm:text-base">
                "Alhamdulillah, during the academic year 2025–2026, Al-Ala Education Foundation continued its commitment to serving society through education, welfare, community development, and humanitarian initiatives. Guided by Islamic values and a spirit of service, the Foundation worked across multiple sectors to support students, families, women, and communities while promoting education, health, and social responsibility."
              </p>
              <p>
                Established in 1999, <strong className="text-[#0D3B82]">Al-Ala Education Foundation</strong> operates under <strong className="text-[#0D3B82]">Al-Ala International Islamic School</strong> in Lahore, Pakistan. Over the past 27 years, our trust has evolved into a premier community service organization, combining academic rigor with comprehensive social care.
              </p>
              <p>
                Whether providing full scholarships for orphans, funding chemotherapy for underprivileged cancer patients via Shaukat Khanum Hospital, organizing dental checkups, or distributing emergency rations during floods and Gaza relief campaigns, the Foundation remains deeply rooted in local communities.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openReportModal}
                className="bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read 2025–2026 Report Summary</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="/assets/img_-008.png"
                alt="Al-Ala International Islamic School campus"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 bg-[#0D3B82] text-white space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Al-Ala International Islamic School
                </div>
                <div className="font-sans text-sm">
                  Educating leaders of tomorrow with academic excellence and Islamic tarbiyyah.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairperson Message Section */}
        <div className="p-8 sm:p-10 bg-[#1A4E9E] text-white rounded-3xl space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#008CD3]" />
            <span>LEADERSHIP VISION</span>
          </div>

          <Quote className="w-10 h-10 text-[#008CD3]" />

          <blockquote className="font-sans text-lg sm:text-xl font-medium leading-relaxed italic text-stone-100">
            "{CHAIRPERSON_MESSAGE.quote}"
          </blockquote>

          <div className="pt-4 border-t border-stone-600 flex items-center justify-between">
            <div>
              <div className="font-sans font-bold text-amber-400 text-base uppercase tracking-wider">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs text-stone-300">
                {CHAIRPERSON_MESSAGE.role}
              </div>
            </div>

            <div className="hidden sm:block text-right text-xs text-stone-400">
              {FOUNDATION_META.name} • 27 Years (Est. 1999)
            </div>
          </div>
        </div>

        {/* 4 Core Islamic Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[#008CD3] uppercase tracking-widest">
              OUR FOUNDATIONAL ETHOS
            </div>
            <h2 className="font-sans text-2xl font-bold text-[#0D3B82]">
              Values Grounded in Islamic Service
            </h2>
            <p className="text-stone-600 text-sm font-sans">
              Every project and dollar managed by Al-Ala Foundation is held to the highest standards of transparency and spiritual purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#008CD3]/20 text-[#008CD3] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Khidmah (Service)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Serving creation is the highest form of devotion. We treat every recipient with profound honor and warmth.
              </p>
            </div>

            <div className="p-6 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#008CD3]/20 text-[#008CD3] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Amanah (Trust)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Complete financial and operational transparency. Donor funds go directly to verified social welfare causes.
              </p>
            </div>

            <div className="p-6 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#008CD3]/20 text-[#008CD3] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Tarbiyyah (Character)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nurturing moral, spiritual, and civic leadership in students alongside top-tier academic training.
              </p>
            </div>

            <div className="p-6 bg-[#F4F7FA] rounded-2xl border border-[#E6EEF5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#008CD3]/20 text-[#008CD3] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-sans font-bold text-base text-[#0D3B82]">
                Shumuliyyah (Inclusion)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Equal access to education and welfare regardless of gender, disability, or background. "Care Without Barriers."
              </p>
            </div>

          </div>
        </div>

        {/* CTA Box */}
        <div className="p-8 bg-stone-100 rounded-2xl border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-lg text-[#0D3B82]">
              Partner with Us in Community Transformation
            </h3>
            <p className="text-xs text-stone-600">
              Support our 2025–2026 ongoing welfare projects or join our volunteer network.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('donate')}
            className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Support Our Work →
          </button>
        </div>

      </div>
    </div>
  );
};
