import React from 'react';
import tzvi from '@/assets/clients/tzvi-yehezkeli.png';
import tal from '@/assets/clients/tal-ben-gigi.png';
import west from '@/assets/clients/west-garden.png';
import bazelet from '@/assets/clients/bazelet.png';
import hillel from '@/assets/clients/hillel-pinui.png';

const logos = [
  { src: tzvi, alt: 'צבי יחזקאלי' },
  { src: tal, alt: 'טל בן גיגי' },
  { src: west, alt: 'West Garden' },
  { src: bazelet, alt: 'בזלת אדריכלות ועיצוב פנים' },
  { src: hillel, alt: 'הלל פינוי דירות' },
];

const ClientsMarquee: React.FC = () => {
  const loop = [...logos, ...logos];

  return (
    <section
      aria-label="בין לקוחותינו"
      className="py-14 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-black text-slate-900 mb-8">
          בין לקוחותינו
        </h2>

        <div
          className="relative overflow-hidden group"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div
            className="flex items-center gap-16 md:gap-24 animate-scroll-left group-hover:pause-animation"
            style={{ width: 'max-content' }}
          >
            {loop.map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 h-20 md:h-24 flex items-center justify-center"
                aria-hidden={idx >= logos.length ? 'true' : undefined}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 md:max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
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
