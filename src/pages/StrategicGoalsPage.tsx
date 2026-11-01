import React from 'react';
import { PageView } from '../types';
import { StrategicGoalsSection } from '../components/StrategicGoalsSection';
import { FOUNDATION_META, CHAIRPERSON_MESSAGE } from '../data/foundationData';
import { Target, BookOpen, Download, ShieldCheck, Sparkles } from 'lucide-react';

interface StrategicGoalsPageProps {
  setCurrentView: (view: PageView) => void;
  openReportModal: () => void;
}

export const StrategicGoalsPage: React.FC<StrategicGoalsPageProps> = ({ 
  setCurrentView,
  openReportModal 
}) => {
  return (
    <div className="w-full bg-[#F8FAFC] pb-20 font-sans">
      
      {/* Header Banner */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-035.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
            <Target className="w-3.5 h-3.5 text-[#008CD3]" />
            <span>INSTITUTIONAL ROADMAP • 2026–2027</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight">
            Strategic Objectives 2026–2027
          </h1>
          <p className="text-stone-300 text-base max-w-3xl leading-relaxed">
            Approved by Chairperson Ma'am Tayyiba Imtiaz and the Board of Trustees. Setting our institutional focus for educational excellence, scholarship expansion, women empowerment, health awareness, and emergency humanitarian relief.
          </p>
        </div>
      </section>

      {/* Main Roadmap Component */}
      <StrategicGoalsSection isStandalonePage={true} />

      {/* Chairperson Endorsement Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 bg-[#1A4E9E] text-white rounded-3xl space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#008CD3]" />
            <span>LEADERSHIP COMMITMENT</span>
          </div>

          <p className="font-sans text-base sm:text-lg font-normal leading-relaxed italic text-stone-100 max-w-4xl">
            "These strategic objectives represent our solemn vow to the communities we serve. Through disciplined governance, research-informed pedagogy, and generous public support, we aim to transform thousands more lives in 2026–2027."
          </p>

          <div className="pt-4 border-t border-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-sans font-bold text-amber-400 text-sm uppercase tracking-wider">
                {FOUNDATION_META.chairperson}
              </div>
              <div className="text-xs text-stone-300">
                Chairperson, Al-Ala Education Foundation
              </div>
            </div>

            <button
              onClick={openReportModal}
              className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>View Full Report Summary</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
