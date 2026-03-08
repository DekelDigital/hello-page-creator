import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import chessKing from '../assets/chess-king.png';
import chessKnight from '../assets/chess-knight.png';
import chessRook from '../assets/chess-rook.png';
import chessBishop from '../assets/chess-bishop.png';
import chessPawn from '../assets/chess-pawn.png';

/* ─── Dust Particles ─── */
const Particles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity],
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

/* ─── Chess Piece Wrapper ─── */
interface ChessPieceProps {
  src: string;
  alt: string;
  className: string;
  initial: Record<string, number>;
  floatY?: number;
  floatDuration?: number;
  delay?: number;
  parallaxFactor?: number;
  mouseX: any;
  mouseY: any;
  glowColor?: string;
  blur?: number;
}

const ChessPiece = ({
  src, alt, className, initial, floatY = 8, floatDuration = 5,
  delay = 0, parallaxFactor = 1, mouseX, mouseY, glowColor = 'rgba(59,130,246,0.3)', blur = 0
}: ChessPieceProps) => {
  const px = useTransform(mouseX, (v: number) => v * parallaxFactor);
  const py = useTransform(mouseY, (v: number) => v * parallaxFactor);

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ x: px, y: py, filter: blur ? `blur(${blur}px)` : undefined }}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          transform: 'scale(1.5)',
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Floating */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        animate={{ y: [-floatY, floatY, -floatY] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        draggable={false}
      />
    </motion.div>
  );
};

/* ─── Main Hero ─── */
const ChessHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawMouseX.set((e.clientX - cx) / 40);
      rawMouseY.set((e.clientY - cy) / 40);
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
      style={{
        background: 'linear-gradient(165deg, #0a1628 0%, #0f2847 35%, #1a3a6b 60%, #2563eb 100%)',
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,10,25,0.6) 100%)',
      }} />

      {/* Chessboard texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      />

      <Particles />

      {/* ── Chess Pieces ── */}
      {/* King - right side (desktop) */}
      <ChessPiece
        src={chessKing}
        alt="Chess King"
        className="w-[280px] h-[380px] lg:w-[340px] lg:h-[460px] right-[2%] lg:right-[6%] top-[18%] z-[3] hidden md:block"
        initial={{ x: 120, scale: 0.8 }}
        delay={0.3}
        parallaxFactor={1.5}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={8}
        floatDuration={6}
        glowColor="rgba(147,197,253,0.25)"
      />

      {/* Knight - left side (desktop) */}
      <ChessPiece
        src={chessKnight}
        alt="Chess Knight"
        className="w-[260px] h-[350px] lg:w-[320px] lg:h-[430px] left-[2%] lg:left-[6%] top-[20%] z-[3] hidden md:block"
        initial={{ x: -120, scale: 0.8 }}
        delay={0.5}
        parallaxFactor={1.2}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={10}
        floatDuration={7}
        glowColor="rgba(37,99,235,0.3)"
      />

      {/* Rook - secondary, back-right */}
      <ChessPiece
        src={chessRook}
        alt="Chess Rook"
        className="w-[120px] h-[160px] lg:w-[160px] lg:h-[220px] right-[22%] lg:right-[20%] bottom-[12%] z-[2] hidden lg:block"
        initial={{ y: 60, scale: 0.7 }}
        delay={0.8}
        parallaxFactor={0.6}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={6}
        floatDuration={5.5}
        blur={1.5}
        glowColor="rgba(147,197,253,0.2)"
      />

      {/* Bishop - secondary, back-left */}
      <ChessPiece
        src={chessBishop}
        alt="Chess Bishop"
        className="w-[110px] h-[150px] lg:w-[150px] lg:h-[200px] left-[20%] lg:left-[18%] bottom-[10%] z-[2] hidden lg:block"
        initial={{ y: 60, scale: 0.7 }}
        delay={0.9}
        parallaxFactor={0.5}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={5}
        floatDuration={6.5}
        blur={2}
        glowColor="rgba(59,130,246,0.2)"
      />

      {/* Pawn - small accent top-left */}
      <ChessPiece
        src={chessPawn}
        alt="Chess Pawn"
        className="w-[80px] h-[110px] lg:w-[100px] lg:h-[140px] left-[30%] top-[10%] z-[2] hidden lg:block"
        initial={{ y: -40, scale: 0.6 }}
        delay={1.1}
        parallaxFactor={0.3}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={4}
        floatDuration={8}
        blur={3}
        glowColor="rgba(255,255,255,0.15)"
      />

      {/* ── Mobile pieces ── */}
      <ChessPiece
        src={chessKing}
        alt="Chess King"
        className="w-[140px] h-[190px] right-[-10px] top-[80px] z-[2] md:hidden opacity-60"
        initial={{ x: 60, scale: 0.7 }}
        delay={0.3}
        parallaxFactor={0}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={6}
        floatDuration={6}
        glowColor="rgba(147,197,253,0.2)"
        blur={1}
      />
      <ChessPiece
        src={chessKnight}
        alt="Chess Knight"
        className="w-[120px] h-[160px] left-[-10px] bottom-[60px] z-[2] md:hidden opacity-60"
        initial={{ x: -60, scale: 0.7 }}
        delay={0.5}
        parallaxFactor={0}
        mouseX={mouseX}
        mouseY={mouseY}
        floatY={5}
        floatDuration={7}
        glowColor="rgba(37,99,235,0.2)"
        blur={1}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Main heading */}
        <motion.h1
          className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.15] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
        >
          מהלך אחד נכון
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-sky-100">
            שווה יותר מעוד מודעה.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-bold mb-6 leading-snug max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          אנחנו מנהלים קמפיינים כמו שחמט — אסטרטגיה, דיוק ותוצאה.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-blue-200/80 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Meta, Google ו-TikTok — עם מדידה חכמה וקריאייטיב שמוכר, כדי להביא לידים איכותיים ומכירות.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl sm:text-2xl font-bold rounded-full text-white transition-all w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
              boxShadow: '0 8px 40px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 12px 50px rgba(37,99,235,0.7), inset 0 1px 0 rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(37,99,235,0.5), inset 0 1px 0 rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            אני רוצה שיווק
            <ArrowLeft size={26} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl sm:text-2xl font-bold rounded-full text-white border-2 border-white/25 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all w-full sm:w-auto"
            style={{
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            }}
          >
            בואו נדבר
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F5FF] to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default ChessHero;
