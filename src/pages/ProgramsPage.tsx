import React, { useState, useEffect } from 'react';
import { WELFARE_PILLARS } from '../data/foundationData';
import { PageView } from '../types';
import { CheckCircle2, Heart, Search, Filter, Layers, ArrowUpRight } from 'lucide-react';

interface ProgramsPageProps {
  selectedPillarId: string | null;
  setSelectedPillarId: (id: string | null) => void;
  setCurrentView: (view: PageView) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  selectedPillarId,
  setSelectedPillarId,
  setCurrentView
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTabId, setActiveTabId] = useState<string>('all');

  useEffect(() => {
    if (selectedPillarId) {
      setActiveTabId(selectedPillarId);
      // Smooth scroll to the specific pillar section
      const element = document.getElementById(`pillar-${selectedPillarId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setActiveTabId('all');
    }
  }, [selectedPillarId]);

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setSelectedPillarId(id === 'all' ? null : id);
    if (id !== 'all') {
      const element = document.getElementById(`pillar-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const filteredPillars = WELFARE_PILLARS.filter((p) => {
    const matchesTab = activeTabId === 'all' || p.id === activeTabId;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.activities.some((act) => act.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F8FAFC] pb-24 font-sans">
      
      {/* Top Header */}
      <section className="relative bg-[#0D3B82] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1A4E9E] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay"
          style={{ backgroundImage: "url('/assets/img_-020.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B82] via-[#0D3B82]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#008CD3]" />
            <span>ANNUAL REPORT 2025–2026 PROGRAM DIRECTORY</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight">
            Our 8 Focus Areas & Welfare Programs
          </h1>
          <p className="text-stone-300 text-base max-w-3xl leading-relaxed">
            Detailed breakdown of activities across Social Welfare, Child Welfare, Educational Welfare, Women Welfare, Elderly & Disabled Care, Health Welfare, Economic Relief, and Community Outreach.
          </p>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Pillar Tabs (Horizontal Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTabId === 'all'
                  ? 'bg-[#0D3B82] text-white'
                  : 'bg-[#F4F7FA] text-stone-700 hover:bg-stone-200'
              }`}
            >
              All 8 Pillars
            </button>
            {WELFARE_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabChange(p.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTabId === p.id
                    ? 'bg-[#008CD3] text-white'
                    : 'bg-[#F4F7FA] text-stone-700 hover:bg-stone-200'
                }`}
              >
                {p.number}. {p.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search activities (e.g., cancer, Gaza, books)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#F4F7FA] text-xs font-medium text-[#0D3B82] focus:outline-none focus:ring-2 focus:ring-[#008CD3] border border-stone-200"
            />
          </div>

        </div>
      </div>

      {/* Main Program List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {filteredPillars.length === 0 ? (
          <div className="p-12 text-center bg-[#F4F7FA] rounded-2xl border border-stone-200 space-y-3">
            <Filter className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="font-sans font-bold text-base sm:text-lg text-[#0D3B82]">
              No matching programs found
            </h3>
            <p className="text-xs text-stone-500">
              Try searching for terms like "scholarship", "cancer", "food", "dental", or "relief".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTabId('all'); }}
              className="text-xs font-bold text-[#008CD3] underline cursor-pointer"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          filteredPillars.map((pillar, idx) => {
            const isImageRight = idx % 2 === 1;
            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="scroll-mt-32 bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/90 transition-all duration-300"
              >
                {/* Top Banner Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Photo (5 cols) - Alternating layout on large screens */}
                  <div className={`lg:col-span-5 relative h-64 lg:h-auto bg-stone-900 ${isImageRight ? 'lg:order-last' : 'lg:order-first'}`}>
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82] via-transparent to-transparent lg:hidden"></div>
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs font-bold text-white bg-[#008CD3] px-3 py-1 rounded shadow-sm">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  {pillar.impactMetric && (
                    <div className="absolute bottom-4 left-4 right-4 z-10 lg:bottom-6 lg:left-6 lg:right-6">
                      <div className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white text-xs border border-white/20 font-medium">
                        ★ {pillar.impactMetric}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Content (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#008CD3]">
                        ANNUAL REPORT 2025–2026
                      </span>
                      {pillar.highlightTag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-amber-400 px-2 py-0.5 rounded">
                          {pillar.highlightTag}
                        </span>
                      )}
                    </div>

                    <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#0D3B82]">
                      {pillar.title}
                    </h2>
 
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-sans">
                      "{pillar.fullDescription}"
                    </p>
                  </div>

                  {/* Verbatim Major Activities Checklist */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-bold text-xs text-[#0D3B82] uppercase tracking-wider border-b border-stone-200 pb-2">
                      Official Activities & Initiatives:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-2.5 bg-[#F4F7FA] rounded-lg border border-[#E6EEF5] hover:border-[#008CD3] transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#008CD3] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#1A4E9E] font-medium leading-snug">
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pillar CTA */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-stone-500">
                      Total Listed Activities: {pillar.activities.length}
                    </span>

                    <button
                      onClick={() => setCurrentView('donate')}
                      className="w-full sm:w-auto bg-[#008CD3] hover:bg-[#007AB8] text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white/20" />
                      <span>Donate to {pillar.title}</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })
        )}

      </div>
    </div>
  );
};
