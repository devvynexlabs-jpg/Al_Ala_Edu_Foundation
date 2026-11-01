import React from 'react';
import { PageView, ActivityStory } from '../types';
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
      {/* 1. Spacious, Editorial Hero with Integrated Photo Slideshow */}
      <HeroSection 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal} 
      />
      
      {/* 2. Sleek 4-Metric Impact Bar */}
      <StatBand />

      {/* 3. Curated 4-Pillar Welfare Preview with View All Button */}
      <FocusAreasGrid 
        setCurrentView={setCurrentView}
        setSelectedPillarId={setSelectedPillarId}
        openPillarModal={openPillarModal}
      />

      {/* 4. Elegant Leadership Pull Quote */}
      <ChairpersonQuote />

      {/* 5. Minimal Community Engagement / Newsletter Banner */}
      <NewsletterBand 
        setCurrentView={setCurrentView} 
      />
    </div>
  );
};
