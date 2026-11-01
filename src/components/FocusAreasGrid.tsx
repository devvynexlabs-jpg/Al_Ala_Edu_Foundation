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
  // Show 4 flagship pillars on Home for a neat, uncluttered presentation
  const flagshipPillars = WELFARE_PILLARS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE WELFARE INITIATIVES</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#0D3B82] tracking-tight">
              Where We Make an Impact
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Our holistic community model addresses essential social needs through targeted, transparent programs.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Tile Curated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flagshipPillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 75} className="h-full">
              <div
                onClick={() => openPillarModal(pillar.id)}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-stone-900 border border-stone-200/70 flex flex-col justify-end p-6 text-white h-full zoom-container"
              >
                {/* Background Photo */}
                <img
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover zoom-image opacity-75 group-hover:opacity-85"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-[#0D3B82]/50 to-transparent group-hover:from-[#0D3B82]/95 transition-all"></div>

                {/* Pillar Number */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-xs font-bold text-white bg-[#008CD3] px-2.5 py-1 rounded shadow-sm">
                    Pillar {pillar.number}
                  </span>
                </div>

                {/* Arrow Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#008CD3] text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="font-sans text-lg font-bold leading-tight text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed opacity-90 font-sans">
                    {pillar.shortDescription}
                  </p>

                  {pillar.impactMetric && (
                    <div className="pt-1 text-[11px] font-semibold text-amber-300">
                      ★ {pillar.impactMetric}
                    </div>
                  )}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Programs CTA */}
        <ScrollReveal delay={200}>
          <div className="pt-12 text-center">
            <button
              onClick={() => {
                setCurrentView('programs');
                setSelectedPillarId(null);
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#0D3B82] hover:text-[#008CD3] text-sm font-bold px-7 py-3.5 rounded-xl border border-stone-300 shadow-sm transition-all cursor-pointer group"
            >
              <span>Explore All 8 Welfare Programs</span>
              <ArrowRight className="w-4 h-4 text-[#008CD3] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
