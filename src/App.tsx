import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ChessHero from './components/ChessHero';
import reviewImg1 from './assets/review_screenshot.png';
import reviewImg2 from './assets/review_screenshot2.png';
import reviewImg3 from './assets/review_screenshot3.png';
import LeadForm from './components/site/LeadForm';
import { AboutSection, AboutStrategySection } from './components/site/aboutSections';
import ServicesSection from './components/site/servicesSection';
import AdsCarouselSection from './components/site/adsCarouselSection';
import ResultsSection from './components/site/resultsSection';
import { SiteHeader, SiteFooter, FloatingCTA } from './components/site/SiteChrome';

const Reviews = () => {
  const screenshots = [
    { src: reviewImg1 },
    { src: reviewImg2 },
    { src: reviewImg3 },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#F0F5FF] to-white relative overflow-hidden" tabIndex={-1}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">מה הלקוחות אומרים</h2>
          <p className="text-xl md:text-2xl text-slate-600">ביקורות אמיתיות על דקל דיגיטל</p>
        </div>

        <div className="hidden md:block relative">
          <button
            type="button"
            disabled
            className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="ביקורות קודמות"
          >
            <ChevronRight size={24} />
          </button>
          <button
            type="button"
            disabled
            className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="ביקורות הבאות"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {screenshots.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex items-center justify-center p-4">
                <img src={s.src} alt="ביקורת לקוח" className="w-full h-auto rounded-2xl object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden relative">
          <button
            type="button"
            disabled
            className="absolute top-1/2 -translate-y-1/2 -right-1 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="קודם"
          >
            <ChevronRight size={20} />
          </button>
          <button
            type="button"
            disabled
            className="absolute top-1/2 -translate-y-1/2 -left-1 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-col gap-4 mx-8">
            {screenshots.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex items-center justify-center p-4">
                <img src={s.src} alt="ביקורת לקוח" className="w-full h-auto rounded-2xl object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900" style={{ fontFamily: '"Heebo", sans-serif' }}>
      <SiteHeader variant="home" />
      <main>
        <ChessHero />
        <AboutSection />
        <ServicesSection />
        <AboutStrategySection />
        <AdsCarouselSection />
        <LeadForm id="lead-form-1" />
        <ResultsSection />
        <LeadForm id="contact" />
        <Reviews />
      </main>
      <SiteFooter variant="home" />
      <FloatingCTA />
    </div>
  );
}
