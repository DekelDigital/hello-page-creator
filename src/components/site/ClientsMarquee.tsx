import React from 'react';
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

const REPEATS = 4;

const ClientsMarquee: React.FC = () => {
  const loop = Array.from({ length: REPEATS }).flatMap(() => logos);

  return (
    <section
      aria-label="בין לקוחותינו"
      className="py-14 bg-white border-y border-slate-100"
    >
      <style>{`
        @keyframes clients-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-${100 / REPEATS}%); }
        }
        .clients-marquee-track {
          animation: clients-marquee 40s linear infinite;
          will-change: transform;
        }
        .clients-marquee-wrapper:hover .clients-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-black text-slate-900 mb-8">
          בין לקוחותינו
        </h2>

        <div
          className="clients-marquee-wrapper relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          }}
        >
          <div
            className="clients-marquee-track flex items-center"
            style={{ width: 'max-content' }}
          >
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 w-40 md:w-56 h-20 md:h-24 mx-6 md:mx-10 flex items-center justify-center"
                aria-hidden={idx >= logos.length ? 'true' : undefined}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 md:max-h-20 max-w-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
