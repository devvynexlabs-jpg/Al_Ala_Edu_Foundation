import React from 'react';
import { CHAIRPERSON_MESSAGE, FOUNDATION_META } from '../data/foundationData';
import { Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ChairpersonQuote: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0D3B82] text-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="space-y-6">
            
            {/* Elegant Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-amber-300">
              <Quote className="w-6 h-6" />
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="font-sans text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed sm:leading-snug text-stone-100 max-w-3xl mx-auto italic">
              "{CHAIRPERSON_MESSAGE.quote}"
            </blockquote>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-white/15 max-w-xs mx-auto space-y-1">
              <div className="font-sans text-base sm:text-lg font-bold text-amber-400">
                {CHAIRPERSON_MESSAGE.author}
              </div>
              <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                {CHAIRPERSON_MESSAGE.role}
              </div>
              <div className="text-[11px] text-stone-400 font-sans">
                {FOUNDATION_META.name} • Est. 1999
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
