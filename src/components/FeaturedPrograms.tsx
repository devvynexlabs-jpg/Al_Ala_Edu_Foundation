import React from 'react';
import { RECENT_STORIES } from '../data/foundationData';
import { ActivityStory } from '../types';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FeaturedProgramsProps {
  onStorySelect: (story: ActivityStory) => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ onStorySelect }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#008CD3]">
              <Sparkles className="w-4 h-4" />
              <span>2025–2026 Impact Stories & Recent Activities</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#0D3B82]">
              Stories of Hope, Transformation & Community Service
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              Highlights from our ongoing ground projects, school programs, healthcare camps, and emergency humanitarian drives.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_STORIES.map((story, idx) => {
            const delays: (75 | 100 | 150 | 200 | 300 | 400 | 500)[] = [75, 150, 200];
            const delay = delays[idx % delays.length];

            return (
              <ScrollReveal key={story.id} delay={delay} className="h-full">
                <div
                  onClick={() => onStorySelect(story)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-stone-200/80 flex flex-col group cursor-pointer h-full"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden bg-stone-100 zoom-container">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-full object-cover zoom-image"
                    />
                    <div className="absolute top-3 left-3 bg-[#0D3B82] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                      {story.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#008CD3]" />
                        <span>{story.date}</span>
                      </div>

                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#0D3B82] group-hover:text-[#008CD3] transition-colors leading-snug">
                        {story.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3">
                        {story.summary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#008CD3]">
                      <span>Read Activity Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
