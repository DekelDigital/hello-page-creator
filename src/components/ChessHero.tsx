import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import chessKingWhite from '../assets/chess-king-white.png';
import chessKnightBlue from '../assets/chess-knight-blue.png';
import chessRookMarble from '../assets/chess-rook-marble.png';
import chessBishopMarble from '../assets/chess-bishop-marble.png';
import chessPawnMarble from '../assets/chess-pawn-marble.png';

/* ─── Floating Light Particles ─── */
const LightParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.1,
        isGold: Math.random() > 0.6,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.isGold
              ? 'radial-gradient(circle, rgba(255,215,100,0.9), rgba(255,215,100,0))'
              : 'radial-gradient(circle, rgba(200,220,255,0.9), rgba(200,220,255,0))',
            boxShadow: p.isGold
              ? '0 0 6px rgba(255,215,100,0.5)'
              : '0 0 6px rgba(200,220,255,0.4)',
          }}
          animate={{
            y: [0, -40 - Math.random() * 30, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
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
  );
};

/* ─── Chess Piece Component ─── */
interface PieceProps {
  src: string;
  alt: string;
  className: string;
  entryFrom: { x?: number; y?: number; scale?: number; rotate?: number };
  delay?: number;
  floatY?: number;
  floatDuration?: number;
  parallaxFactor?: number;
  mouseX: any;
  mouseY: any;
  glowColor?: string;
  glowSize?: number;
}

const FloatingPiece = ({
  src, alt, className, entryFrom, delay = 0,
  floatY = 10, floatDuration = 6, parallaxFactor = 1,
  mouseX, mouseY, glowColor = 'rgba(59,130,246,0.3)', glowSize = 1.6,
}: PieceProps) => {
  const px = useTransform(mouseX, (v: number) => v * parallaxFactor);
  const py = useTransform(mouseY, (v: number) => v * parallaxFactor);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, ...entryFrom }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ x: px, y: py }}
    >
      {/* Glow behind piece */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          transform: `scale(${glowSize})`,
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Floating piece */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5)) drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
        }}
        animate={{ y: [-floatY, floatY, -floatY] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        draggable={false}
      />
    </motion.div>
  );
};

/* ─── Main Hero Section ─── */
const ChessHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(rawMouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawMouseX.set((e.clientX - cx) / 35);
      rawMouseY.set((e.clientY - cy) / 35);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* ── Background layers ── */}
      {/* Deep gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 30%, #122a5e 0%, #0a1a3a 40%, #060e1f 100%)',
        }}
      />

      {/* Chessboard grid receding into perspective */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(147,197,253,0.4) 1px, transparent 1px),
            linear-gradient(0deg, rgba(147,197,253,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
          transform: 'perspective(600px) rotateX(45deg) translateY(30%)',
          transformOrigin: 'center bottom',
        }}
      />

      {/* Checkerboard pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.15) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.15) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.15) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      />

      {/* Dramatic vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(4,8,20,0.7) 100%)',
        }}
      />

      {/* Top-down light beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] z-[2] pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(147,197,253,0.4) 0%, transparent 70%)',
        }}
      />

      <LightParticles />

      {/* ── Chess Pieces ── */}

      {/* KING - Right side, colossal white marble */}
      <FloatingPiece
        src={chessKingWhite}
        alt="Chess King"
        className="w-[300px] h-[420px] lg:w-[380px] lg:h-[520px] xl:w-[440px] xl:h-[600px] right-[-2%] lg:right-[3%] xl:right-[6%] top-[14%] z-[4] hidden md:block"
        entryFrom={{ x: 200, y: -80, scale: 0.6, rotate: 8 }}
        delay={0.4}
        parallaxFactor={1.8}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={10}
        floatDuration={7}
        glowColor="rgba(147,197,253,0.25)"
        glowSize={1.8}
      />

      {/* KNIGHT - Left side, deep blue marble */}
      <FloatingPiece
        src={chessKnightBlue}
        alt="Chess Knight"
        className="w-[280px] h-[380px] lg:w-[340px] lg:h-[460px] xl:w-[400px] xl:h-[540px] left-[-2%] lg:left-[3%] xl:left-[6%] top-[16%] z-[4] hidden md:block"
        entryFrom={{ x: -200, scale: 0.6, rotate: -8 }}
        delay={0.6}
        parallaxFactor={1.5}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={12}
        floatDuration={8}
        glowColor="rgba(37,99,235,0.3)"
        glowSize={1.8}
      />

      {/* ROOK - Background right, blurred */}
      <FloatingPiece
        src={chessRookMarble}
        alt="Chess Rook"
        className="w-[100px] h-[140px] lg:w-[140px] lg:h-[190px] right-[20%] lg:right-[18%] bottom-[8%] z-[2] hidden lg:block"
        entryFrom={{ y: 80, scale: 0.5 }}
        delay={1.0}
        parallaxFactor={0.4}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={5}
        floatDuration={6}
        glowColor="rgba(147,197,253,0.15)"
        glowSize={1.4}
      />

      {/* BISHOP - Background left, blurred */}
      <FloatingPiece
        src={chessBishopMarble}
        alt="Chess Bishop"
        className="w-[90px] h-[130px] lg:w-[130px] lg:h-[180px] left-[18%] lg:left-[16%] bottom-[6%] z-[2] hidden lg:block"
        entryFrom={{ y: 80, scale: 0.5 }}
        delay={1.1}
        parallaxFactor={0.35}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={4}
        floatDuration={7}
        glowColor="rgba(59,130,246,0.15)"
        glowSize={1.4}
      />

      {/* PAWN - Small accent top-left */}
      <FloatingPiece
        src={chessPawnMarble}
        alt="Chess Pawn"
        className="w-[70px] h-[95px] lg:w-[90px] lg:h-[120px] left-[28%] top-[8%] z-[2] hidden lg:block"
        entryFrom={{ y: -60, scale: 0.4 }}
        delay={1.3}
        parallaxFactor={0.25}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={3}
        floatDuration={9}
        glowColor="rgba(255,255,255,0.1)"
        glowSize={1.3}
      />

      {/* ── Mobile Pieces ── */}
      <FloatingPiece
        src={chessKingWhite}
        alt="Chess King"
        className="w-[160px] h-[220px] right-[-15px] top-[70px] z-[3] md:hidden opacity-70"
        entryFrom={{ x: 80, scale: 0.5 }}
        delay={0.4}
        parallaxFactor={0}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={6}
        floatDuration={7}
        glowColor="rgba(147,197,253,0.2)"
      />
      <FloatingPiece
        src={chessKnightBlue}
        alt="Chess Knight"
        className="w-[140px] h-[190px] left-[-15px] bottom-[50px] z-[3] md:hidden opacity-70"
        entryFrom={{ x: -80, scale: 0.5 }}
        delay={0.6}
        parallaxFactor={0}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={5}
        floatDuration={8}
        glowColor="rgba(37,99,235,0.2)"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Main heading */}
        <motion.h1
          className="text-[2.6rem] sm:text-5xl lg:text-7xl xl:text-[5rem] font-black text-white leading-[1.12] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
        >
          מהלך אחד נכון
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(to left, #93c5fd, #dbeafe, #bfdbfe)',
            }}
          >
            שווה יותר מעוד מודעה.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-bold mb-6 leading-snug max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          אנחנו מנהלים קמפיינים כמו שחמט — אסטרטגיה, דיוק ותוצאה.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-blue-200/80 mb-14 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Meta, Google ו-TikTok — עם מדידה חכמה וקריאייטיב שמוכר, כדי להביא
          לידים איכותיים ומכירות.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-3 px-12 py-5 text-xl sm:text-2xl font-bold rounded-full text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
              boxShadow:
                '0 10px 50px rgba(37,99,235,0.5), 0 4px 20px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 16px 60px rgba(37,99,235,0.7), 0 6px 25px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 10px 50px rgba(37,99,235,0.5), 0 4px 20px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
            }}
          >
            אני רוצה שיווק
            <ArrowLeft size={26} />
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F0F5FF] to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default ChessHero;
