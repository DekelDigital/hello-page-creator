import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import chessRookBlueWebp from '../../assets/chess-rook-blue.webp';
import chessRookBluePng from '../../assets/chess-rook-blue.png';
import chessQueenWebp from '../../assets/chess-queen.webp';
import chessQueenPng from '../../assets/chess-queen.png';

type ServicesSectionProps = {
  /** בדף פנימי - מצמצם ריווח עליון מתחת לכותרת הדף */
  compactTop?: boolean;
  /** ברירת מחדל: שלוש זירות */
  sectionTitle?: string;
  /** ברירת מחדל: הפלטפורמות המובילות... */
  sectionSubtitle?: string;
};

export default function ServicesSection({
  compactTop,
  sectionTitle = 'שלוש זירות',
  sectionSubtitle = 'הפלטפורמות המובילות בעולם, עם האסטרטגיה המנצחת שלנו',
}: ServicesSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotionLocal, setPrefersReducedMotionLocal] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const rookControls = useAnimationControls();
  const queenControls = useAnimationControls();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotionLocal(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotionLocal(e.matches);
    mq.addEventListener('change', handler);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotionLocal || isMobile) {
      setHasAnimated(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotionLocal, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || prefersReducedMotionLocal) {
      return;
    }

    const animDuration = 1.1;
    const animEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

    const runAnimation = async () => {
      await Promise.all([
        rookControls.start({
          x: '-300%',
          opacity: 0.85,
          scale: 1,
          rotate: -2,
          transition: { duration: animDuration, ease: animEase },
        }),
        queenControls.start({
          x: '210%',
          opacity: 0.8,
          scale: 1,
          rotate: 3,
          transition: { duration: animDuration, ease: animEase },
        }),
      ]);

      rookControls.start({
        y: [0, -12, 0],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      });
      queenControls.start({
        y: [0, -10, 0],
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
      });
    };

    runAnimation();
  }, [hasAnimated, prefersReducedMotionLocal, isMobile, rookControls, queenControls]);

  const skipMotion = prefersReducedMotionLocal || isMobile;

  const cards = [
    {
      logo: '/tiktok_logo.png',
      logoAlt: 'TikTok Ads',
      fallback: 'https://placehold.co/100x100/000000/ffffff?text=TikTok',
      title: 'TikTok Ads',
      desc: 'פרסום וידאו שמבליט את העסק בפיד - קמפיינים שבנויים נכון מההתחלה ויכולים לייצר מודעות, לידים או מכירות לפי המטרה.',
      gradientFrom: 'from-black/5',
      barColor: 'bg-black',
      borderClass: 'border border-slate-200',
      shadowClass: 'shadow-sm',
    },
    {
      logo: '/meta_logo.png',
      logoAlt: 'Meta Ads',
      fallback: 'https://placehold.co/100x100/1877f2/ffffff?text=Meta',
      title: 'Meta Ads',
      desc: 'מגיעים לקהל המדויק בפייסבוק ואינסטגרם, עם קריאייטיב נכון, קהלים ואופטימיזציה שמייצרת פניות איכותיות.',
      gradientFrom: 'from-blue-50',
      barColor: 'bg-blue-600',
      borderClass: 'border-2 border-blue-100',
      shadowClass: 'shadow-lg shadow-blue-900/5',
    },
    {
      logo: '/google ads logo.png',
      logoAlt: 'Google Ads',
      fallback: 'https://placehold.co/100x100/ea4335/ffffff?text=Google',
      title: 'Google Ads',
      desc: 'תופסים את הלקוח בדיוק כשהוא מחפש אותך - פרסום ממוקד בחיפוש ובערוצים של גוגל כדי להביא לקוחות חמים ולהגדיל פניות ומכירות.',
      gradientFrom: 'from-red-50',
      barColor: 'bg-green-500',
      borderClass: 'border border-slate-200',
      shadowClass: 'shadow-sm',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`bg-sky-50 relative overflow-hidden ${compactTop ? 'pt-2 pb-24 md:pt-3' : 'py-24'}`}
      tabIndex={-1}
    >
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 20 }}>
        <motion.div
          className="chess-piece-rook absolute"
          style={{
            width: 'clamp(120px, 18vw, 280px)',
            bottom: '5%',
            left: '50%',
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
            willChange: 'transform',
          }}
          initial={skipMotion ? { x: '-300%', opacity: 0.85, scale: 1, rotate: -2 } : { x: '-60%', opacity: 0.9, scale: 1.15, rotate: 0 }}
          animate={rookControls}
        >
          <picture>
            <source srcSet={chessRookBlueWebp} type="image/webp" />
            <img
              src={chessRookBluePng}
              alt=""
              width={522}
              height={1024}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
        <motion.div
          className="chess-piece-queen absolute"
          style={{
            width: 'clamp(110px, 16vw, 260px)',
            bottom: '12%',
            left: '50%',
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
            willChange: 'transform',
          }}
          initial={skipMotion ? { x: '210%', opacity: 0.8, scale: 1, rotate: 3 } : { x: '-40%', opacity: 0.9, scale: 1.15, rotate: 0 }}
          animate={queenControls}
        >
          <picture>
            <source srcSet={chessQueenWebp} type="image/webp" />
            <img
              src={chessQueenPng}
              alt=""
              width={522}
              height={1024}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      <div className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">{sectionTitle}</h2>
            <p className="whitespace-pre-line text-2xl md:text-3xl text-slate-600 mb-2 px-1">{sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-1.5 md:gap-8 items-stretch px-1 md:px-0" dir="ltr">
            {cards.map((card, i) => {
              const mobileOrder = i === 1 ? 'order-first lg:order-none' : i === 2 ? 'order-2 lg:order-none' : 'order-3 lg:order-none';
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl md:rounded-[2rem] p-2 py-4 md:p-10 ${card.shadowClass} ${card.borderClass} hover:shadow-xl hover:border-blue-200 transition-all relative overflow-hidden group text-center flex flex-col items-center h-full ${mobileOrder}`}
                  dir="rtl"
                >
                  <div className={`absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-gradient-to-br ${card.gradientFrom} to-transparent rounded-bl-full -z-10`}></div>
                  <div className="mb-2 md:mb-8 flex justify-center w-full">
                    <img
                      src={card.logo}
                      alt={card.logoAlt}
                      className="h-16 md:h-20 object-contain"
                      width={256}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = card.fallback;
                      }}
                    />
                  </div>
                  <p className="text-[0.95rem] leading-tight md:text-3xl font-semibold text-slate-900 mb-0.5 md:mb-2 text-center">שיווק ממומן</p>
                  <h3 className="text-[1.1rem] leading-tight md:text-5xl font-black text-slate-900 mb-1 md:mb-4 text-center whitespace-nowrap">{card.title}</h3>
                  <p className="hidden md:block text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center flex-grow">{card.desc}</p>
                  <div
                    className={`mt-2 md:mt-8 h-1 w-8 md:w-12 ${card.barColor} rounded-full origin-center mx-auto group-hover:scale-x-[8] transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
