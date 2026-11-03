import React from 'react';
import { PageView, ActivityStory } from '../types';
import { HomeSlideshow } from '../components/HomeSlideshow';
import { HeroSection } from '../components/HeroSection';
import { StatBand } from '../components/StatBand';
import { FocusAreasGrid } from '../components/FocusAreasGrid';
import { ChairpersonQuote } from '../components/ChairpersonQuote';
import { NewsletterBand } from '../components/NewsletterBand';

interface HomePageProps {
  setCurrentView: (view: PageView) => void;
  setSelectedPillarId: (id: string | null) => void;
  openPillarModal: (pillarId: string) => void;
  openReportModal: () => void;
  onStorySelect: (story: ActivityStory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentView,
  setSelectedPillarId,
  openPillarModal,
  openReportModal,
}) => {
  return (
    <div className="w-full">
      {/* 1. Full-width Photography Slideshow (Natural Colors, Zero Blue Gradient) */}
      <HomeSlideshow />

      {/* 2. Spacious, Editorial Hero */}
      <HeroSection 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal} 
      />
      
      {/* 3. Sleek 4-Metric Impact Bar */}
      <StatBand />

      {/* 4. Curated 4-Pillar Welfare Preview with View All Button */}
      <FocusAreasGrid 
        setCurrentView={setCurrentView}
        setSelectedPillarId={setSelectedPillarId}
        openPillarModal={openPillarModal}
      />

      {/* 5. Elegant Leadership Pull Quote */}
      <ChairpersonQuote />

      {/* 6. Minimal Community Engagement / Newsletter Banner */}
      <NewsletterBand 
        setCurrentView={setCurrentView} 
      />
    </div>
  );
};
