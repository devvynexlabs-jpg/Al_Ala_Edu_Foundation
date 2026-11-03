import React from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { Layers, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FocusAreasGridProps {
  setCurrentView: (view: PageView) => void;
  setSelectedPillarId: (id: string | null) => void;
  openPillarModal: (pillarId: string) => void;
}

export const FocusAreasGrid: React.FC<FocusAreasGridProps> = ({ 
  setCurrentView, 
  setSelectedPillarId,
  openPillarModal
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE WELFARE INITIATIVES</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#0D3B82] tracking-tight">
              Our 8 Welfare Programs
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans max-w-2xl mx-auto">
              Through our 8 core pillars, Al-Ala Education Foundation provides holistic community care, free education, healthcare, and humanitarian relief.
            </p>
          </div>
        </ScrollReveal>

        {/* 8-Card Responsive Grid (Clean natural photos, zero blue hue) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {WELFARE_PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={(idx % 4) * 75} className="h-full">
              <div
                onClick={() => openPillarModal(pillar.id)}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Card Top: Natural Photography (No Blue Gradient / No Hue) */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Pillar Number Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="font-mono text-xs font-bold text-white bg-[#0D3B82]/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  {/* Highlight Tag */}
                  {pillar.highlightTag && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2 py-0.5 rounded shadow-xs">
                        {pillar.highlightTag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4 bg-white">
                  <div className="space-y-2">
                    <h3 className="font-sans text-lg font-bold text-[#0D3B82] group-hover:text-[#008CD3] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 font-sans">
                      {pillar.shortDescription}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-medium truncate max-w-[65%]">
                      {pillar.impactMetric || `${pillar.activities.length} Key Initiatives`}
                    </span>
                    <span className="font-bold text-[#008CD3] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Programs Details CTA */}
        <ScrollReveal delay={200}>
          <div className="pt-14 text-center">
            <button
              onClick={() => {
                setCurrentView('programs');
                setSelectedPillarId(null);
              }}
              className="inline-flex items-center gap-2 bg-[#0D3B82] hover:bg-[#1A4E9E] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>View Full Program Details</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
