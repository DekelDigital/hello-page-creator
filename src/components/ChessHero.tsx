import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import chessHeroBgWebp from '../assets/chess-hero-bg.webp';
import chessKnight160 from '../assets/chess-knight-160.webp';
import chessKnight280 from '../assets/chess-knight-280.webp';
import chessKnight420 from '../assets/chess-knight-420.webp';
import chessKnight840 from '../assets/chess-knight-840.webp';
import chessKnightPng from '../assets/chess-knight.png';
import chessKing160 from '../assets/chess-king-160.webp';
import chessKing280 from '../assets/chess-king-280.webp';
import chessKing450 from '../assets/chess-king-450.webp';
import chessKing900 from '../assets/chess-king-900.webp';
import chessKingPng from '../assets/chess-king.png';

const knightSrcSet = `${chessKnight160} 160w, ${chessKnight280} 280w, ${chessKnight420} 420w, ${chessKnight840} 840w`;
const knightSizes = '(max-width: 639px) 140px, (max-width: 767px) 180px, (max-width: 1023px) 300px, 420px';

const kingSrcSet = `${chessKing160} 160w, ${chessKing280} 280w, ${chessKing450} 450w, ${chessKing900} 900w`;
const kingSizes = '(max-width: 639px) 160px, (max-width: 767px) 200px, (max-width: 1023px) 320px, 450px';

function useIsDesktopLg() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

/** פחות חלקיקים בדסקטופ + מיקומים יציבים (בלי Math.random בכל רנדר) */
function useHeroParticles(isDesktop: boolean) {
  const count = isDesktop ? 6 : 14;

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: ((i * 37.3) % 100) + (i % 7) * 2,
        top: ((i * 23.7) % 80) + (i % 5),
        duration: 2.5 + (i % 4) * 0.6,
        delay: (i % 5) * 0.5,
      })),
    [count]
  );

  return particles;
}

const ChessHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktopLg();
  const particles = useHeroParticles(isDesktop);

  const floatKnight = isDesktop ? [0, -32, 0] : [0, -46, 0];
  const floatKing = isDesktop ? [0, -28, 0] : [0, -40, 0];
  const knightDur = isDesktop ? 4.2 : 3.6;
  const kingDur = isDesktop ? 4.6 : 3.9;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const piecesY = useTransform(scrollYProgress, [0.3, 1], [0, -400]);
  const piecesOpacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pieceShadowKnight = 'drop-shadow(0 12px 24px rgba(0,0,0,0.25))';
  const pieceShadowKing = 'drop-shadow(0 12px 24px rgba(0,0,0,0.2))';

  const entryEase = [0.25, 0.46, 0.45, 0.94] as const;
  const entryDuration = 0.88;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      <Helmet>
        <link rel="preload" as="image" href={chessHeroBgWebp} />
        <link rel="preload" as="image" href={chessKing160} media="(max-width: 640px)" />
        <link rel="preload" as="image" href={chessKing900} media="(min-width: 641px)" />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${chessHeroBgWebp})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute h-1 w-1 rounded-full bg-white will-change-transform"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              transform: 'translateZ(0)',
            }}
            animate={{
              opacity: [0, 0.75, 0],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[8] will-change-transform"
        style={{ y: piecesY, opacity: piecesOpacity }}
      >
        {/* כניסה בשכבה חיצונית + נדנוד בשכבה פנימית במקביל – בלי "עצירה" אחרי ההגעה */}
        <motion.div
          className="absolute bottom-[8%] left-[15%] w-[400px] max-sm:w-[140px] max-sm:opacity-70 sm:w-[180px] md:w-[300px] md:opacity-90 lg:w-[420px]"
          style={{ filter: pieceShadowKnight, rotate: 5 }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: entryDuration, ease: entryEase }}
        >
          <motion.div
            className="w-full"
            animate={{ y: floatKnight }}
            transition={{
              duration: knightDur,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <picture>
              <source type="image/webp" srcSet={knightSrcSet} sizes={knightSizes} />
              <img
                src={chessKnightPng}
                alt=""
                width={968}
                height={1430}
                className="h-auto max-w-full w-full"
                decoding="async"
              />
            </picture>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[6%] right-[8%] w-[420px] max-sm:w-[160px] max-sm:opacity-65 sm:w-[200px] md:w-[320px] md:opacity-90 lg:w-[450px]"
          style={{ filter: pieceShadowKing, rotate: -6 }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: entryDuration, delay: 0.18, ease: entryEase }}
        >
          <motion.div
            className="w-full"
            animate={{ y: floatKing }}
            transition={{
              duration: kingDur,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <picture>
              <source type="image/webp" srcSet={kingSrcSet} sizes={kingSizes} />
              <img
                src={chessKingPng}
                alt=""
                width={1076}
                height={1788}
                className="h-auto max-w-full w-full"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 pb-24 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-32 lg:pb-32">
        <motion.h1
          className="mb-4 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-[5rem]"
          style={{
            color: '#0f2e5e',
            textShadow: '0 2px 20px rgba(255,255,255,0.5)',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          שיווק מנצח לעסקים שרוצים לצמוח
        </motion.h1>

        <motion.p
          className="mx-auto mb-6 max-w-4xl text-xl font-medium leading-snug sm:text-2xl lg:text-3xl"
          style={{
            color: '#1a3a6b',
            textShadow: '0 1px 10px rgba(255,255,255,0.6)',
          }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          קמפיינים עם אסטרטגיה חדה, מהלכים מדויקים ותוצאות
        </motion.p>

        <motion.div
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-xl font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-700 sm:w-auto sm:text-2xl"
            style={{
              boxShadow: '0 8px 30px rgba(37,99,235,0.4)',
            }}
          >
            אני רוצה שיווק
            <ArrowLeft size={26} />
          </button>
        </motion.div>

        <motion.p
          className="text-lg font-medium text-blue-700/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.85 }}
        >
          שיחה קצרה - ללא התחייבות
        </motion.p>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5] h-24 bg-gradient-to-t from-[#F0F5FF] to-transparent" />
    </section>
  );
};

export default ChessHero;
