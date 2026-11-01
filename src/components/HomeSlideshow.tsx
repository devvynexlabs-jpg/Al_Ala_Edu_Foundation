import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { 
    url: '/assets/home_slide_2.png', 
    title: 'Al-Ala International Islamic School', 
    caption: '100% Free Quality Education for Deserving Students & Orphans',
    alt: 'Al-Ala International Islamic School students in uniform' 
  },
  { 
    url: '/assets/home_slide_1.jpg', 
    title: 'Ramadan Ration & Food Bank Drives', 
    caption: 'Nutritional food hampers distributed to impoverished families',
    alt: 'Al-Ala Education Foundation Ramadan Food Drive' 
  },
  { 
    url: '/assets/home_slide_3.jpg', 
    title: 'Community Welfare Outreach', 
    caption: 'Direct ground-level support for underprivileged households',
    alt: 'Food Bank distribution drive' 
  },
  { 
    url: '/assets/home_slide_4.jpg', 
    title: 'Emergency Humanitarian Relief', 
    caption: 'Active disaster and international crisis packaging aid',
    alt: 'Alkhidmat Palestine humanitarian support packaging' 
  },
  { 
    url: '/assets/home_slide_5.jpg', 
    title: 'Dedicated Volunteer Network', 
    caption: 'Volunteers and community members packaging aid with care',
    alt: 'Welfare volunteers packaging boxes' 
  }
];

interface HomeSlideshowProps {
  className?: string;
  rounded?: boolean;
}

export const HomeSlideshow: React.FC<HomeSlideshowProps> = ({ 
  className = '',
  rounded = true
}) => {
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
    <div 
      className={`relative w-full overflow-hidden bg-stone-900 group shadow-xl border border-stone-200/80 ${
        rounded ? 'rounded-2xl' : ''
      } ${className}`}
    >
      {/* Slides */}
      <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
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
              className="w-full h-full object-cover object-[center_60%] transition-transform duration-6000 ease-out"
              style={{
                transform: idx === activeIndex ? 'scale(1.05)' : 'scale(1.0)'
              }}
            />
            
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B82]/90 via-[#0D3B82]/25 to-black/10"></div>

            {/* Slide Information */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white z-20 space-y-1">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300">
                {img.title}
              </span>
              <p className="text-sm sm:text-base text-stone-100 font-medium leading-snug max-w-lg">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Control Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Modern Indicator Dots */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === activeIndex 
                ? 'bg-amber-400 w-5' 
                : 'bg-white/50 hover:bg-white w-1.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
