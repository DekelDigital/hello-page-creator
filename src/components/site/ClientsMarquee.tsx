import React, { useEffect, useState } from 'react';
import tzvi from '../../assets/clients/tzvi-yehezkeli.png';
import tal from '../../assets/clients/tal-ben-gigi.png';
import west from '../../assets/clients/west-garden.png';
import bazelet from '../../assets/clients/bazelet.png';
import hillel from '../../assets/clients/hillel-pinui.png';

const logos = [
  { src: tzvi, alt: 'צבי יחזקאלי' },
  { src: tal, alt: 'טל בן גיגי' },
  { src: west, alt: 'West Garden' },
  { src: bazelet, alt: 'בזלת אדריכלות ועיצוב פנים' },
  { src: hillel, alt: 'הלל פינוי דירות' },
];

const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

const ClientsMarquee: React.FC = () => {
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

  return (
    <section
      aria-label="בין לקוחותינו"
      className="py-14 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-10">
          בין לקוחותינו
        </h2>
      </div>

      <div className="flex overflow-hidden group" dir="ltr">
        <div
          className={`flex w-max gap-16 md:gap-24 ${prefersReducedMotion ? 'pause-animation' : 'animate-scroll-left'}`}
          style={{ animationDuration: '60s' }}
        >
          {[...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
            <div
              key={idx}
              className="w-56 md:w-72 h-28 md:h-36 flex-shrink-0 flex items-center justify-center"
              aria-hidden={idx >= marqueeLogos.length ? 'true' : undefined}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 md:max-h-32 max-w-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
