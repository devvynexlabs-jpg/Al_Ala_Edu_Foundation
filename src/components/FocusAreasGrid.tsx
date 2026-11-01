import React from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { Layers, ArrowUpRight } from 'lucide-react';
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
  const openPillarModalAndFocus = (id: string) => {
    openPillarModal(id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                <Layers className="w-4 h-4" />
                <span>Our Focus Areas</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0D3B82] text-balance">
                Where We Work: 8 Core Welfare Pillars
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-sans">
                Mirroring our holistic community development model, each pillar addresses a vital social need with dedicated programs, trained staff, and volunteer outreach.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentView('programs');
                setSelectedPillarId(null);
              }}
              className="self-start md:self-end bg-[#F4F7FA] hover:bg-[#008CD3] hover:text-white text-[#0D3B82] text-xs font-bold px-5 py-2.5 rounded-lg border border-stone-300 transition-all cursor-pointer shrink-0"
            >
              View All Program Details →
            </button>
          </div>
        </ScrollReveal>

        {/* 8-Tile Photo Grid (Inspired by Malala Fund's country photo grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WELFARE_PILLARS.map((pillar, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 200, 300, 75, 150, 200, 300];
            const delay = delays[idx % delays.length];

            return (
              <ScrollReveal key={pillar.id} delay={delay} className="h-full">
                <div
                  onClick={() => openPillarModalAndFocus(pillar.id)}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-stone-900 border border-stone-200/80 flex flex-col justify-end p-6 text-white h-full zoom-container"
                >
                  {/* Background Photo */}
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover zoom-image opacity-75 group-hover:opacity-85"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-[#0D3B82]/40 to-transparent group-hover:from-[#0D3B82]/95 transition-all"></div>

                  {/* Number Badge Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs font-bold text-white bg-[#008CD3] px-2.5 py-1 rounded shadow-sm">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  {/* Highlight Tag Top Right if exists */}
                  {pillar.highlightTag && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2 py-0.5 rounded shadow-sm">
                        {pillar.highlightTag}
                      </span>
                    </div>
                  )}

                  {/* Bottom Content */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-semibold text-stone-300 tracking-wide">
                        {pillar.activities.length} Key Initiatives
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#008CD3] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <h3 className="font-sans text-lg font-bold leading-tight text-white group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 font-sans">
                      {pillar.shortDescription}
                    </p>

                    {pillar.impactMetric && (
                      <div className="pt-1 text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                        <span>★ {pillar.impactMetric}</span>
                      </div>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
