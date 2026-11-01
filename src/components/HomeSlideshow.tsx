import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { url: '/assets/home_slide_2.png', alt: 'Al-Ala International Islamic School students in uniform' },
  { url: '/assets/home_slide_1.jpg', alt: 'Al-Ala Education Foundation Ramadan Food Drive' },
  { url: '/assets/home_slide_3.jpg', alt: 'Food Bank distribution drive' },
  { url: '/assets/home_slide_4.jpg', alt: 'Alkhidmat Palestine humanitarian support packaging' },
  { url: '/assets/home_slide_5.jpg', alt: 'Welfare volunteers packaging boxes' }
];

export const HomeSlideshow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  return (
    <div className="relative w-full h-52 sm:h-72 md:h-84 lg:h-[380px] xl:h-[420px] overflow-hidden bg-stone-900 border-b border-stone-200 group">
      {/* Slides (Pure authentic photography with zero blue gradient) */}
      {IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover object-[center_70%] transition-transform duration-5000 ease-out"
            style={{
              transform: idx === activeIndex ? 'scale(1.03)' : 'scale(1.0)'
            }}
          />
        </div>
      ))}

      {/* Manual Control Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(idx);
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === activeIndex 
                ? 'bg-white w-6 shadow-sm' 
                : 'bg-white/50 hover:bg-white/80 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
