import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import chessHeroBg from '../assets/chess-hero-bg.png';
import chessKnight from '../assets/chess-knight.png';
import chessKing from '../assets/chess-king.png';

const ChessHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${chessHeroBg})` }}
      />

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none" />

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Chess pieces overlay */}
      <div className="absolute inset-0 pointer-events-none z-[8]">
        {/* Knight - left side */}
        <motion.img
          src={chessKnight}
          alt=""
          className="absolute left-[8%] bottom-[12%] w-[400px] lg:w-[420px] md:w-[300px] sm:w-[180px] max-sm:w-[140px] max-sm:opacity-70 md:opacity-90"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 30px rgba(59,130,246,0.15))',
            transform: 'rotate(5deg)',
          }}
          initial={{ y: 180, opacity: 0 }}
          animate={{
            y: [0, -22, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              duration: 5.5,
              delay: 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            opacity: { duration: 0 },
          }}
          onMount={(controls: any) => {
          }}
          whileInView={{}}
        />

        {/* King - right side */}
        <motion.img
          src={chessKing}
          alt=""
          className="absolute right-[8%] bottom-[10%] w-[320px] lg:w-[340px] md:w-[240px] sm:w-[150px] max-sm:w-[120px] max-sm:opacity-65 md:opacity-90"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25)) drop-shadow(0 0 25px rgba(255,255,255,0.2))',
            transform: 'rotate(-6deg)',
          }}
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
            scale: { duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
            y: {
              duration: 7,
              delay: 1.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-24 lg:pt-32 lg:pb-32">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.1] mb-4 tracking-tight"
          style={{
            color: '#0f2e5e',
            textShadow: '0 2px 20px rgba(255,255,255,0.5)',
          }}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          שיווק מנצח
          <br />
          לעסקים שרוצים לצמוח
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 leading-snug max-w-4xl mx-auto"
          style={{
            color: '#1a3a6b',
            textShadow: '0 1px 10px rgba(255,255,255,0.6)',
          }}
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          מתמחים בקמפיינים ממומנים, מדידה חכמה ואופטימיזציה שמייצרת
          <br className="hidden sm:block" />
          צמיחה אמיתית לעסק שלך.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl sm:text-2xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1 w-full sm:w-auto"
            style={{
              boxShadow: '0 8px 30px rgba(37,99,235,0.4)',
            }}
          >
            אני רוצה שיווק
            <ArrowLeft size={26} />
          </button>
        </motion.div>

        <motion.p
          className="text-blue-700/70 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          מענה תוך 24 שעות • בלי התחייבות • שיחה קצרה וממוקדת
        </motion.p>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F0F5FF] to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default ChessHero;
