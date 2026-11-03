import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { FOUNDATION_META, WELFARE_PILLARS } from '../data/foundationData';
import { 
  Heart, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator, 
  BookOpen, 
  Search
} from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  selectedPillarId: string | null;
  setSelectedPillarId: (id: string | null) => void;
  openZakatModal: () => void;
  openReportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  setSelectedPillarId,
  openZakatModal,
  openReportModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePillarSelect = (pillarId: string) => {
    setSelectedPillarId(pillarId);
    setCurrentView('programs');
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Our Programs', view: 'programs' },
    { label: 'Strategic Goals', view: 'goals' },
    { label: 'Get Involved', view: 'donate' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200 py-3' 
            : 'bg-[#F8FAFC] border-stone-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Foundation Name */}
          <button 
            onClick={() => { setCurrentView('home'); setSelectedPillarId(null); }}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <img 
              src="/assets/logo.png" 
              alt="Al-Ala Education Foundation Logo" 
              className="w-11 h-11 rounded-full object-cover bg-white shadow-sm border border-stone-200" 
            />
            <div>
              <div className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-black text-[#0D3B82] leading-tight group-hover:text-[#008CD3] transition-colors">
                Al-Ala Education Foundation
              </div>
              <div className="hidden sm:block text-xs text-stone-500 font-medium tracking-wide">
                Under Al-Ala Int'l Islamic School • Est. 1999
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.view === 'programs') {
                return (
                  <div 
                    key={item.view}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentView('programs');
                        setSelectedPillarId(null);
                      }}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 cursor-pointer nav-link-slide ${
                        currentView === 'programs'
                          ? 'text-[#008CD3] font-semibold nav-link-slide-active'
                          : 'text-[#1A4E9E] hover:text-[#008CD3]'
                      }`}
                    >
                      <span>Our Programs</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-[#008CD3]' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {isMegaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-stone-200 p-6 grid grid-cols-2 gap-4 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-3 mb-1 border-b border-stone-100 flex justify-between items-center">
                          <div>
                            <h4 className="font-sans font-bold text-base text-[#0D3B82]">
                              Welfare Pillars & Community Initiatives
                            </h4>
                            <p className="text-xs text-stone-500">
                              8 core areas of educational & humanitarian service (2025–2026)
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setCurrentView('programs');
                              setSelectedPillarId(null);
                              setIsMegaMenuOpen(false);
                            }}
                            className="text-xs font-semibold text-[#008CD3] hover:underline"
                          >
                            View All Programs →
                          </button>
                        </div>

                        {WELFARE_PILLARS.map((pillar) => (
                          <button
                            key={pillar.id}
                            onClick={() => handlePillarSelect(pillar.id)}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F4F7FA] transition-all text-left group cursor-pointer"
                          >
                            <span className="font-mono text-xs font-bold text-[#008CD3] bg-[#F4F7FA] group-hover:bg-[#008CD3] group-hover:text-white w-7 h-7 rounded flex items-center justify-center transition-colors">
                              {pillar.number}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-[#0D3B82] group-hover:text-[#008CD3] transition-colors">
                                {pillar.title}
                              </div>
                              <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                {pillar.shortDescription}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view);
                    if (item.view !== 'programs') setSelectedPillarId(null);
                  }}
                  className={`font-medium text-sm transition-colors py-2 cursor-pointer nav-link-slide ${
                    currentView === item.view
                      ? 'text-[#008CD3] font-semibold nav-link-slide-active'
                      : 'text-[#1A4E9E] hover:text-[#008CD3]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('donate')}
              className="bg-[#008CD3] hover:bg-[#007AB8] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/20 text-white" />
              <span>Donate</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A4E9E] hover:text-[#008CD3] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view);
                    setSelectedPillarId(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentView === item.view
                      ? 'bg-[#F4F7FA] text-[#008CD3] font-bold'
                      : 'text-[#1A4E9E] hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Programs Pillar List */}
            <div className="pt-2 border-t border-stone-100">
              <div className="text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider px-3 mb-2">
                Our 8 Focus Areas
              </div>
              <div className="grid grid-cols-1 gap-1">
                {WELFARE_PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePillarSelect(p.id)}
                    className="w-full text-left px-3 py-2 text-xs text-[#1A4E9E] hover:text-[#008CD3] hover:bg-stone-50 rounded flex items-center gap-2"
                  >
                    <span className="font-mono text-[10px] text-[#008CD3] font-bold">{p.number}.</span>
                    <span>{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  openZakatModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-[#0D3B82] bg-[#F4F7FA] rounded-lg flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#008CD3]" />
                <span>Zakat & Sadaqah Calculator</span>
              </button>
              
              <button
                onClick={() => {
                  openReportModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-[#0D3B82] border border-stone-200 rounded-lg flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Annual Report 2025–2026 Summary</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
