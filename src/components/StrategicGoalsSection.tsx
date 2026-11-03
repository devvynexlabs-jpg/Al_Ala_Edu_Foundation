import React from 'react';
import { STRATEGIC_GOALS_2026_2027 } from '../data/foundationData';
import { PageView } from '../types';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface StrategicGoalsSectionProps {
  setCurrentView?: (view: PageView) => void;
  isStandalonePage?: boolean;
}

export const StrategicGoalsSection: React.FC<StrategicGoalsSectionProps> = ({ 
  setCurrentView,
  isStandalonePage = false 
}) => {
  return (
    <section className={`py-16 md:py-24 ${isStandalonePage ? 'bg-[#F8FAFC]' : 'bg-white'} border-t border-stone-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Target className="w-4 h-4" />
              <span>Strategic Objectives 2026–2027</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0D3B82]">
              Key Institutional Goals & Roadmap (2026–2027)
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Approved by Chairperson Ma'am Tayyiba Imtiaz and the Board of Trustees to guide our next phase of institutional expansion and community service.
            </p>
          </div>
        </ScrollReveal>

        {/* Strategic Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_GOALS_2026_2027.map((goal, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 200];
            const delay = delays[idx % delays.length];

            return (
              <ScrollReveal key={goal.id} delay={delay} className="h-full">
                <div 
                  className="p-6 rounded-2xl bg-[#F4F7FA] border border-[#E6EEF5] hover:border-[#008CD3] hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 space-y-3 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#008CD3] bg-white px-2.5 py-1 rounded shadow-2xs border border-stone-200">
                        Goal 0{goal.id}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-200/60 px-2 py-0.5 rounded">
                        {goal.targetCategory}
                      </span>
                    </div>

                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#0D3B82] leading-snug">
                      {goal.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {goal.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Active 2026–2027 Objective</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {!isStandalonePage && setCurrentView && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setCurrentView('goals')}
              className="inline-flex items-center gap-2 bg-[#0D3B82] hover:bg-[#008CD3] text-white text-xs font-bold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <span>View Strategic Plan Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
