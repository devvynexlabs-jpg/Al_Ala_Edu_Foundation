import React, { useState, useEffect, useRef } from 'react';
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
  const stats = [
    {
      number: <AnimatedNumber value={27} suffix="+" />,
      label: 'Years of Service',
      sub: 'Founded in 1999'
    },
    {
      number: <AnimatedNumber value={8} suffix=" Pillars" />,
      label: 'Welfare Sectors',
      sub: 'Education, health, food & relief'
    },
    {
      number: <AnimatedNumber value={100} suffix="%" />,
      label: 'Free for Orphans',
      sub: 'Tuition, uniforms & books'
    },
    {
      number: 'Active',
      label: 'Emergency Relief',
      sub: 'Gaza, floods & food drives'
    }
  ];

  return (
    <section className="w-full bg-[#0D3B82] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-[#1A4E9E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 75} className="w-full">
              <div className="text-center sm:text-left space-y-1 sm:border-l sm:border-white/15 sm:pl-6">
                <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
                  {item.number}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {item.label}
                </div>
                <p className="text-xs text-stone-300 font-sans">
                  {item.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
