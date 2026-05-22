import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PageHelmet } from './seo/PageHelmet';
import { homePageSeo } from './seo/pageMeta';
import ChessHero from './components/ChessHero';
import reviewImg1w from './assets/review_screenshot.webp';
import reviewImg1p from './assets/review_screenshot.png';
import reviewImg2w from './assets/review_screenshot2.webp';
import reviewImg2p from './assets/review_screenshot2.png';
import reviewImg3w from './assets/review_screenshot3.webp';
import reviewImg3p from './assets/review_screenshot3.png';
import LeadForm from './components/site/LeadForm';
import { AboutSection, AboutStrategySection } from './components/site/aboutSections';
import ServicesSection from './components/site/servicesSection';
import AdsCarouselSection from './components/site/adsCarouselSection';
import ResultsSection from './components/site/resultsSection';
import { SiteHeader, SiteFooter, FloatingCTA } from './components/site/SiteChrome';
import ClientsMarquee from './components/site/ClientsMarquee';

const Reviews = () => {
  const screenshots = [
    { webp: reviewImg1w, png: reviewImg1p },
    { webp: reviewImg2w, png: reviewImg2p },
    { webp: reviewImg3w, png: reviewImg3p },
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
                <picture>
                  <source srcSet={s.webp} type="image/webp" />
                  <img
                    src={s.png}
                    alt="ביקורת לקוח"
                    className="w-full h-auto rounded-2xl object-contain"
                    width={943}
                    height={746}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
                <picture>
                  <source srcSet={s.webp} type="image/webp" />
                  <img
                    src={s.png}
                    alt="ביקורת לקוח"
                    className="w-full h-auto rounded-2xl object-contain"
                    width={943}
                    height={746}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <PageHelmet
        title={homePageSeo.title}
        description={homePageSeo.description}
        canonicalPath={homePageSeo.canonicalPath}
        breadcrumbItems={homePageSeo.breadcrumbItems}
      />
      <SiteHeader variant="home" />
      <main>
        <ChessHero />
        <ClientsMarquee />
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
