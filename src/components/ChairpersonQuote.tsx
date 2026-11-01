import React from 'react';
import { CHAIRPERSON_MESSAGE, FOUNDATION_META } from '../data/foundationData';
import { Quote, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ChairpersonQuote: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1A4E9E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url('/assets/img_-002.png')` }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="space-y-8">
            {/* Quote Icon & Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CD3]/30 border border-[#008CD3]/50 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#008CD3]" />
              <span>CHAIRPERSON'S ANNUAL MESSAGE • 2025–2026</span>
            </div>

            <Quote className="w-12 h-12 text-[#008CD3] mx-auto opacity-80" />

            {/* Large Editorial Pull Quote */}
            <blockquote className="font-sans text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-snug text-stone-100 max-w-4xl mx-auto italic">
              "{CHAIRPERSON_MESSAGE.quote}"
            </blockquote>

            {/* Author Signature Line */}
            <div className="pt-4 border-t border-stone-600/60 max-w-md mx-auto space-y-1">
              <div className="font-sans text-base sm:text-lg font-bold text-amber-400">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                {CHAIRPERSON_MESSAGE.role}
              </div>
              <div className="text-[11px] text-stone-400">
                {FOUNDATION_META.name} • Est. 1999
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
