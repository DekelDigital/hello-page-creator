import React, { useState, useEffect } from 'react';

type AdsCarouselProps = {
  /** כשמוצגת כותרת דף מעל - מסתיר את כותרת הסקשן */
  hideIntro?: boolean;
};

export default function AdsCarouselSection({ hideIntro }: AdsCarouselProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const adImages = [
    '/מגורי בוטיק.png',
    '/genesis_bike.jfif',
    '/רגע ניוס.jpeg',
    '/לרנקה 2502.png',
    '/פו2סט קרוז.jpg',
    '/אתם החלטתם.png',
    '/חופשת רכיבה במגוון יעדים.jpg',
    '/מוכן לחשוב כמו תוקף.png',
    '/gil p2ost.jpg',
    '/צבי יחזקאלי.jpeg.jpeg',
    '/מבצע כולל מקום כשר.jpg2.jpg',
    '/שרון גל הזמנה לעקוב.png',
    '/מסע צילום מתגלגל.jpg',
    '/פוסט תזונה.jpg',
  ];

  const row1 = adImages.slice(0, 7);
  const row2 = adImages.slice(7, 14);

  return (
    <section
      id="ads"
      className={`overflow-hidden relative ${hideIntro ? 'pt-6 pb-24 md:pt-8' : 'py-24'}`}
      tabIndex={-1}
      style={{ background: '#F3F7FF' }}
    >
      {!hideIntro && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">מודעות שעיצבנו לכם</h2>
          <p className="text-2xl md:text-3xl text-slate-700 font-medium">קריאייטיבים שנועדו לעצור גלילה ולהניע לפעולה</p>
        </div>
      )}

      <div className="relative flex flex-col gap-6 w-full" dir="ltr">
        <div className="flex overflow-hidden group">
          <div className={`flex w-max gap-6 ${prefersReducedMotion ? 'pause-animation' : 'animate-scroll-left'}`}>
            {[...row1, ...row1].map((src, i) => (
              <div key={`r1-${i}`} className="w-80 h-80 md:w-[420px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50">
                <img
                  src={src}
                  alt="Ad Creative"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x400/1e293b/ffffff?text=Ad+${(i % row1.length) + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden group">
          <div className={`flex w-max gap-6 ${prefersReducedMotion ? 'pause-animation' : 'animate-scroll-right'}`}>
            {[...row2, ...row2].map((src, i) => (
              <div key={`r2-${i}`} className="w-80 h-80 md:w-[420px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50">
                <img
                  src={src}
                  alt="Ad Creative"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x400/1e293b/ffffff?text=Ad+${(i % row2.length) + 7}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
