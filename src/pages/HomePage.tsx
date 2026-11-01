import React from 'react';
import { PageView, ActivityStory } from '../types';
import { HeroSection } from '../components/HeroSection';
import { StatBand } from '../components/StatBand';
import { MissionIntro } from '../components/MissionIntro';
import { FocusAreasGrid } from '../components/FocusAreasGrid';
import { ChairpersonQuote } from '../components/ChairpersonQuote';
import { FeaturedPrograms } from '../components/FeaturedPrograms';
import { StrategicGoalsSection } from '../components/StrategicGoalsSection';
import { NewsletterBand } from '../components/NewsletterBand';
import { HomeSlideshow } from '../components/HomeSlideshow';

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
  onStorySelect
}) => {
  return (
    <div className="w-full">
      {/* Full-width Slideshow Banner just below Navbar */}
      <HomeSlideshow />

      <HeroSection 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal} 
      />
      
      <StatBand />

      <MissionIntro 
        setCurrentView={setCurrentView} 
        openReportModal={openReportModal} 
      />

      <FocusAreasGrid 
        setCurrentView={setCurrentView}
        setSelectedPillarId={setSelectedPillarId}
        openPillarModal={openPillarModal}
      />

      <ChairpersonQuote />

      <FeaturedPrograms 
        onStorySelect={onStorySelect}
      />

      <StrategicGoalsSection 
        setCurrentView={setCurrentView} 
      />

      <NewsletterBand 
        setCurrentView={setCurrentView} 
      />
    </div>
  );
};
