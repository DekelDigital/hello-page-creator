import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function CaseStudyImg({
  src,
  alt,
  className,
  style,
  onError,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}) {
  const webp = src.replace(/\.(png|jpe?g|jfif|jpeg)$/i, '.webp');
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        decoding="async"
        width={1200}
        height={800}
        onError={onError}
      />
    </picture>
  );
}

function useMobileCarousel(total: number, autoInterval = 3000) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number, dir?: 'left' | 'right') => {
    const d = dir ?? (next > current ? 'left' : 'right');
    setSlideDir(d);
    setCurrent((next + total) % total);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideDir('left');
      setCurrent((prev) => (prev + 1) % total);
    }, autoInterval);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  const onTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    setDragging(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragging) return;
    const delta = e.changedTouches[0].clientX - dragStartX;
    if (Math.abs(delta) > 40) {
      const dir = delta < 0 ? 'left' : 'right';
      goTo(dir === 'left' ? current + 1 : current - 1, dir);
      resetTimer();
    }
    setDragging(false);
  };

  return { current, goTo, resetTimer, slideDir, onTouchStart, onTouchEnd };
}

type ResultsSectionProps = {
  hideIntro?: boolean;
};

export default function ResultsSection({ hideIntro }: ResultsSectionProps) {
  const caseStudies = [
    { image: '/וובינר השקעות.png', title: 'השקעות', leads: '150+' },
    { image: '/מימון עסקי.png', title: 'מימון עסקי', leads: '500+' },
    { image: '/סייבר.png', title: 'סייבר', leads: '750+' },
    { image: '/ספורט.png', title: 'טיולי ספורט', leads: '1,300+' },
  ];

  const { current, goTo, resetTimer, slideDir, onTouchStart, onTouchEnd } = useMobileCarousel(caseStudies.length);

  return (
    <section
      id="results"
      className={`bg-slate-900 relative overflow-hidden ${
        hideIntro ? 'pt-6 pb-28 md:pt-8 md:pb-36' : 'py-28 md:py-36'
      }`}
      tabIndex={-1}
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideIntro && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">התוצאות שלנו</h2>
            <p className="text-xl md:text-3xl text-blue-300/90 max-w-3xl mx-auto leading-relaxed">צילומי מסך אמיתיים מחשבונות מודעות</p>
          </motion.div>
        )}

        <div className="hidden md:grid grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10 hover:shadow-[0_25px_70px_rgba(37,99,235,0.2)] transition-shadow duration-500 h-full flex flex-col">
                <div className="flex items-center justify-between px-7 pt-6 pb-3" dir="rtl">
                  <h3 className="text-3xl font-black text-slate-900">{study.title}</h3>
                  <div className="flex items-baseline gap-1.5 bg-blue-50 rounded-2xl px-4 py-2 border border-blue-100">
                    <span className="text-3xl font-black text-blue-600">{study.leads}</span>
                    <span className="text-base font-bold text-blue-500">לידים</span>
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 p-5">
                  <CaseStudyImg
                    src={study.image}
                    alt={study.title}
                    className="w-full h-auto object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/700x500/f1f5f9/94a3b8?text=Screenshot+${idx + 1}`;
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative">
          <button
            type="button"
            onClick={() => {
              goTo(current - 1, 'right');
              resetTimer();
            }}
            className="absolute top-1/2 -translate-y-1/2 -right-1 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="קודם"
          >
            <ChevronRight size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              goTo(current + 1, 'left');
              resetTimer();
            }}
            className="absolute top-1/2 -translate-y-1/2 -left-1 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden mx-8 relative rounded-[1.5rem]" style={{ height: '200px' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <AnimatePresence initial={false} custom={slideDir}>
              <motion.div
                key={current}
                custom={slideDir}
                initial={{ x: slideDir === 'left' ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: slideDir === 'left' ? '-100%' : '100%' }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
              >
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col">
                  <div className="flex items-center justify-between px-5 pt-4 pb-2" dir="rtl">
                    <h3 className="text-lg font-black text-slate-900">{caseStudies[current].title}</h3>
                    <div className="flex items-baseline gap-1.5 bg-blue-50 rounded-2xl px-3 py-1.5 border border-blue-100">
                      <span className="text-lg font-black text-blue-600">{caseStudies[current].leads}</span>
                      <span className="text-xs font-bold text-blue-700">לידים</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3">
                    <img
                      src={caseStudies[current].image}
                      alt={caseStudies[current].title}
                      className="w-full object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50"
                      style={{ height: '130px' }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/700x500/f1f5f9/94a3b8?text=Screenshot`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1 mt-6">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  goTo(i);
                  resetTimer();
                }}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full"
                aria-label={`תוצאה ${i + 1}`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-blue-400 scale-110' : 'bg-white/30 hover:bg-white/50'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
