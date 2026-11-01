import React, { useState, useEffect, useRef } from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { GraduationCap, HeartHandshake, Users, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  duration = 1200
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalSteps = Math.min(Math.floor(duration / 16), 100);
    const increment = end / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextVal = Math.round(increment * currentStep);
      if (nextVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextVal);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export const StatBand: React.FC = () => {
  return (
    <section className="w-full bg-[#0D3B82] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-[#1A4E9E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Banner Headline (Inspired by Malala Fund's stat callout) */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <ScrollReveal direction="fade" delay={75}>
            <p className="text-xs uppercase tracking-widest text-[#008CD3] font-bold">
              2025–2026 Annual Report Summary
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-stone-100">
              "27 Years of Serving Communities Through Education & Welfare."
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-sans">
              Grounded in Islamic values of service (Khidmah & Sadaqah), bridging inequality across 8 comprehensive welfare sectors in Pakistan.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Key Stat Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#1A4E9E]">
          
          <ScrollReveal delay={100} className="w-full">
            <div className="text-center space-y-1 p-4 rounded-xl bg-[#1A4E9E]/50 border border-[#1A4E9E] h-full">
              <div className="inline-flex p-2 rounded-lg bg-[#008CD3]/20 text-[#008CD3] mb-1">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                <AnimatedNumber value={27} suffix=" Years" />
              </div>
              <div className="text-xs font-semibold text-stone-300">
                Educational Excellence (Est. 1999)
              </div>
              <p className="text-[11px] text-stone-400">Under Al-Ala Int'l Islamic School</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="w-full">
            <div className="text-center space-y-1 p-4 rounded-xl bg-[#1A4E9E]/50 border border-[#1A4E9E] h-full">
              <div className="inline-flex p-2 rounded-lg bg-[#008CD3]/20 text-[#008CD3] mb-1">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                <AnimatedNumber value={8} suffix=" Pillars" />
              </div>
              <div className="text-xs font-semibold text-stone-300">
                Welfare & Relief Sectors
              </div>
              <p className="text-[11px] text-stone-400">Child, Women, Health, Relief & More</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full">
            <div className="text-center space-y-1 p-4 rounded-xl bg-[#1A4E9E]/50 border border-[#1A4E9E] h-full">
              <div className="inline-flex p-2 rounded-lg bg-[#008CD3]/20 text-[#008CD3] mb-1">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                <AnimatedNumber value={100} suffix="% Free" />
              </div>
              <div className="text-xs font-semibold text-stone-300">
                Scholarships for Orphans & Poor
              </div>
              <p className="text-[11px] text-stone-400">Tuition, Uniforms & Free Books</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250} className="w-full">
            <div className="text-center space-y-1 p-4 rounded-xl bg-[#1A4E9E]/50 border border-[#1A4E9E] h-full">
              <div className="inline-flex p-2 rounded-lg bg-[#008CD3]/20 text-[#008CD3] mb-1">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                Active Aid
              </div>
              <div className="text-xs font-semibold text-stone-300">
                Gaza & Flood Emergency Relief
              </div>
              <p className="text-[11px] text-stone-400">Community Bake Sales & Medical Camps</p>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
