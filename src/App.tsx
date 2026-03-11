import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  BarChart3, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  Play, 
  Pause, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  Clock,
  
  Facebook
} from 'lucide-react';
import ChessHero from './components/ChessHero';
import chessHeroBg from './assets/chess-hero-bg.png';
import adsBg from './assets/ads-bg.png';
import chessRookBlue from './assets/chess-rook-blue.png';
import chessQueenWhite from './assets/chess-queen.png';
import reviewImg1 from './assets/review_screenshot.png';
import reviewImg2 from './assets/review_screenshot2.png';
import reviewImg3 from './assets/review_screenshot3.png';

const Logo = () => (
  <div className="flex items-center gap-2 -my-2 md:-my-3">
    <img src="/logo.png" alt="Dekel Digital Logo" className="h-20 md:h-24 object-contain" onError={(e) => {
      e.currentTarget.src = 'https://placehold.co/150x50/1d4ed8/ffffff?text=Dekel+Digital';
    }} />
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.focus({ preventScroll: true });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'אודות', id: 'about' },
    { name: 'מה אנחנו עושים', id: 'services' },
    { name: 'מודעות', id: 'ads' },
    { name: 'תוצאות', id: 'results' },
    { name: 'ביקורות', id: 'reviews' },
    { name: 'דברו איתנו', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50 rounded-full px-6 py-2 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            אני רוצה שיווק
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="תפריט"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-right text-slate-700 font-medium py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full mt-2 px-6 py-3 text-center font-bold rounded-full text-white bg-blue-700"
            >
              אני רוצה שיווק
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero moved to ChessHero component

const About = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-[#F0F5FF] to-[#FFFFFF] overflow-hidden" tabIndex={-1}>
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      
      {/* Soft glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-right max-w-7xl mx-auto mb-8" dir="rtl"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="relative inline-block">
              <span style={{ color: '#2563eb' }}>מי אנחנו?</span>
              <span className="absolute -bottom-2 right-0 w-full h-1 rounded-full" style={{ backgroundColor: '#2563eb' }}></span>
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-4 max-w-7xl mx-auto">
          
          {/* Desktop Image Column (Hidden on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex w-full lg:w-6/12 relative justify-center items-center mt-12 lg:mt-0 lg:-ml-16"
          >
            <div className="relative w-[140%] flex justify-center">
              {/* Blue glow behind the head */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/40 rounded-full blur-[90px] animate-pulse-slow z-0"></div>
              
              {/* Simple Image */}
              <img 
                src="/next_move.png" 
                alt="Next Move Chess" 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 text-center md:text-right flex flex-col justify-center items-center md:items-start"
          >
            <div className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8 space-y-6">
              <p>
                <strong className="text-slate-900 text-3xl md:text-4xl block mb-1">ברוכים הבאים ל- Dekel Digital</strong>
                עם ניסיון של שנים בניהול קמפיינים ממומנים, אנחנו מביאים מקצועיות שיווקית שמביאה תוצאות לאורך זמן.
              </p>
              <p>
                <strong className="text-slate-900 block mb-2">הגישה שלנו פשוטה:<br className="sm:hidden" /> <span className="text-blue-600">איכות לפני כמות.</span></strong>
                לידים מדויקים שמובילים למכירות - לא סתם מספרים. שילוב חכם של מדידה ואופטימיזציה יחד עם קריאייטיב עוצמתי.
              </p>
              <p className="font-bold text-slate-900 text-3xl md:text-4xl mt-6">
                אנחנו דואגים לשיווק, כדי שתוכל להתמקד במה שבאמת חשוב - <span className="text-blue-600">העסק שלך</span>
              </p>
            </div>

            {/* Mobile Image (Visible only on mobile) */}
            <div className="lg:hidden w-full relative flex justify-center items-center mb-8">
              <div className="relative w-full max-w-[400px] flex justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-[70px] animate-pulse-slow z-0"></div>
                <img 
                  src="/next_move.png" 
                  alt="Next Move Chess" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_15px_30px_rgba(37,99,235,0.2)]"
                />
              </div>
            </div>

            <div>
              <button 
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-12 py-6 text-2xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 relative z-10 w-full sm:w-auto"
              >
                אני רוצה שיווק
                <ArrowLeft size={28} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};

const About2 = () => {
  return (
    <section id="about-2" className="relative py-32 bg-gradient-to-b from-[#EEF4FF] to-[#F5F8FF] overflow-hidden" tabIndex={-1}>
      {/* Subtle background graphic */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            <span className="text-blue-600">אסטרטגיה</span> חכמה
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium mb-0">
            קמפיין נכון מתחיל בתכנון מהלך - וממשיך בשיפור מתמיד לפי נתונים.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-blue-100 via-blue-300 to-blue-100"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-12 bottom-12 right-12 w-0.5 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100"></div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 relative">
            {[
              {
                num: '01',
                icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
                title: 'שיחת אפיון',
                desc: 'מבינים את העסק, המסר וקהל היעד - ובונים תוכנית קמפיינים ברורה לפני שמוציאים שקל.'
              },
              {
                num: '02',
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: 'אופטימיזציה',
                desc: 'בודקים, משפרים ומדייקים קהלים וקריאייטיב כדי להוציא יותר תוצאה מכל תקציב.'
              },
              {
                num: '03',
                icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
                title: 'שקיפות מלאה',
                desc: 'דוח שבועי ברור, תובנות מה עבד ומה לא, והחלטות להמשך כדי שתמיד תדעו איפה עומדים ולאן מתקדמים.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="flex-1 flex flex-row md:flex-col items-start md:items-center text-right md:text-center gap-6 md:gap-8 group"
              >
                <div className="relative z-10 flex-shrink-0 w-28 h-28 rounded-full bg-white shadow-xl shadow-blue-900/10 border border-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-blue-900/20 transition-all duration-300">
                  {item.icon}
                  <div className="absolute -top-4 -right-4 text-5xl font-black text-blue-100/60 select-none pointer-events-none">{item.num}</div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotionLocal, setPrefersReducedMotionLocal] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const rookControls = useAnimationControls();
  const queenControls = useAnimationControls();
  const maskControls = useAnimationControls();

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

  // Synchronized: pieces move out + mask opens together, then floating

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

      // Floating loop
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
  }, [hasAnimated, prefersReducedMotionLocal, isMobile, rookControls, queenControls, maskControls]);

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
    <section ref={sectionRef} id="services" className="py-24 bg-sky-50 relative overflow-hidden" tabIndex={-1}>
      {/* Chess pieces layer - above content */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 20 }}>
        <motion.img
          src={chessRookBlue}
          alt=""
          className="chess-piece-rook absolute"
          style={{
            width: 'clamp(120px, 18vw, 280px)',
            bottom: '5%',
            left: '50%',
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
          }}
          initial={skipMotion ? { x: '-300%', opacity: 0.85, scale: 1, rotate: -2 } : { x: '-60%', opacity: 0.9, scale: 1.15, rotate: 0 }}
          animate={rookControls}
        />
        <motion.img
          src={chessQueenWhite}
          alt=""
          className="chess-piece-queen absolute"
          style={{
            width: 'clamp(110px, 16vw, 260px)',
            bottom: '12%',
            left: '50%',
            filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
          }}
          initial={skipMotion ? { x: '210%', opacity: 0.8, scale: 1, rotate: 3 } : { x: '-40%', opacity: 0.9, scale: 1.15, rotate: 0 }}
          animate={queenControls}
        />
      </div>

      {/* Content layer */}
      <div
        className="relative"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">שלוש זירות</h2>
            <p className="text-2xl md:text-3xl text-slate-600 mb-2">הפלטפורמות המובילות בעולם, עם האסטרטגיה המנצחת שלנו</p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-1.5 md:gap-8 items-stretch px-1 md:px-0" dir="ltr">
            {cards.map((card, i) => {
              // Mobile order: Meta(1)→first, Google(2)→second, TikTok(0)→third
              const mobileOrder = i === 1 ? 'order-first lg:order-none' : i === 2 ? 'order-2 lg:order-none' : 'order-3 lg:order-none';
              return (
              <div
                key={i}
                className={`bg-white rounded-2xl md:rounded-[2rem] p-2 py-4 md:p-10 ${card.shadowClass} ${card.borderClass} hover:shadow-xl hover:border-blue-200 transition-all relative overflow-hidden group text-center flex flex-col items-center h-full ${mobileOrder}`}
                dir="rtl"
              >
                <div className={`absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-gradient-to-br ${card.gradientFrom} to-transparent rounded-bl-full -z-10`}></div>
                <div className="mb-2 md:mb-8 flex justify-center w-full">
                  <img src={card.logo} alt={card.logoAlt} className="h-16 md:h-20 object-contain" onError={(e) => { e.currentTarget.src = card.fallback; }} />
                </div>
                <p className="text-[0.95rem] leading-tight md:text-3xl font-semibold text-slate-900 mb-0.5 md:mb-2 text-center">שיווק ממומן</p>
                <h3 className="text-[1.1rem] leading-tight md:text-5xl font-black text-slate-900 mb-1 md:mb-4 text-center whitespace-nowrap">{card.title}</h3>
                <p className="hidden md:block text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center flex-grow">{card.desc}</p>
                <div className={`mt-2 md:mt-8 h-1 w-8 md:w-12 ${card.barColor} rounded-full group-hover:w-[80%] transition-all duration-500 mx-auto`}></div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AdsCarousel = () => {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Use the uploaded ad images
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
    '/פוסט תזונה.jpg'
  ];
  
  // Split for two rows
  const row1 = adImages.slice(0, 7);
  const row2 = adImages.slice(7, 14);

  return (
    <section id="ads" className="py-24 overflow-hidden relative" tabIndex={-1} style={{ background: '#0066ff' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">מודעות שעיצבנו לכם</h2>
        <p className="text-2xl md:text-3xl text-white font-medium">קריאייטיבים שנועדו לעצור גלילה ולהניע לפעולה</p>
      </div>

      <div className="relative flex flex-col gap-6 w-full" dir="ltr">
        {/* Row 1 - Moves Left */}
        <div className="flex overflow-hidden group">
          <div className={`flex w-max gap-6 ${prefersReducedMotion ? 'pause-animation' : 'animate-scroll-left'}`}>
            {[...row1, ...row1].map((src, i) => (
              <div key={`r1-${i}`} className="w-80 h-80 md:w-[420px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50">
                <img src={src} alt="Ad Creative" className="w-full h-full object-cover" loading="lazy" onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/400x400/1e293b/ffffff?text=Ad+${(i % row1.length) + 1}`;
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex overflow-hidden group">
          <div className={`flex w-max gap-6 ${prefersReducedMotion ? 'pause-animation' : 'animate-scroll-right'}`}>
            {[...row2, ...row2].map((src, i) => (
              <div key={`r2-${i}`} className="w-80 h-80 md:w-[420px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-700/50">
                <img src={src} alt="Ad Creative" className="w-full h-full object-cover" loading="lazy" onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/400x400/1e293b/ffffff?text=Ad+${(i % row2.length) + 7}`;
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

const LeadForm = ({ id }: { id: string }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // TODO: Connect to actual webhook/API
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 rounded-[2rem] p-12 text-center border border-emerald-100 h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-emerald-900 mb-4">הפרטים התקבלו בהצלחה!</h3>
        <p className="text-xl text-emerald-700">
          נציג מטעמנו יחזור אליך בהקדם עם תוכנית פעולה.
        </p>
      </div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id={id} 
      className="bg-[#3b82f6] relative py-16 md:py-24 w-full" 
      tabIndex={-1}
    >
      {/* Decorative background elements - hidden on mobile, visible on desktop */}
      {/* Right Stroke */}
      <svg className="hidden md:block absolute top-0 right-0 h-full w-64 text-white/20 pointer-events-none transform translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 Q50,50 0,100 L100,100 L100,0 Z" fill="currentColor" />
      </svg>
      {/* Left Stroke */}
      <svg className="hidden md:block absolute top-0 left-0 h-full w-64 text-white/20 pointer-events-none transform -translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100,0 Q50,50 100,100 L0,100 L0,0 Z" fill="currentColor" />
      </svg>

      {/* Mobile-only vertical decorative shapes */}
      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top ellipse behind title */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[120%] h-[45%] rounded-[50%] bg-white/10" />
        {/* Bottom ellipse behind form */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[110%] h-[40%] rounded-[50%] bg-white/8" />
      </div>
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-sm">
            מוכנים למהלך הבא?
          </h3>
          <p className="text-2xl md:text-3xl text-white/90 font-medium drop-shadow-sm max-w-4xl mx-auto">
            משאירים פרטים - ואנחנו חוזרים עם כיוון ברור למהלך הבא.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-6 mb-6 items-stretch justify-center">
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="text" 
                id={`${id}-name`} 
                required 
                dir="rtl"
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="שם מלא"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="tel" 
                id={`${id}-phone`} 
                required 
                dir="rtl"
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="מספר טלפון"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="email" 
                id={`${id}-email`} 
                required 
                dir="rtl"
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="אימייל"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="text" 
                id={`${id}-business`} 
                required 
                dir="rtl"
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="שם העסק"
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full max-w-[400px] py-4 px-8 bg-black hover:bg-slate-900 text-white text-xl md:text-2xl font-bold rounded-full transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 disabled:opacity-70 flex justify-center items-center gap-4 group whitespace-nowrap"
            >
              {status === 'submitting' ? (
                <span className="animate-pulse">שולח...</span>
              ) : (
                <>
                  שליחת פרטים
                  <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                    <ArrowLeft size={24} />
                  </div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

// Mobile swipe carousel hook
const useMobileCarousel = (total: number, autoInterval = 3000) => {
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
      setCurrent(prev => (prev + 1) % total);
    }, autoInterval);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
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
};

const Results = () => {
  const caseStudies = [
    { image: '/וובינר השקעות.png', title: 'השקעות', leads: '150+' },
    { image: '/מימון עסקי.png', title: 'מימון עסקי', leads: '500+' },
    { image: '/סייבר.png', title: 'סייבר', leads: '750+' },
    { image: '/ספורט.png', title: 'טיולי ספורט', leads: '1,300+' },
  ];

  const { current, goTo, resetTimer, slideDir, onTouchStart, onTouchEnd } = useMobileCarousel(caseStudies.length);

  return (
    <section id="results" className="py-28 md:py-36 bg-slate-900 relative overflow-hidden" tabIndex={-1}>
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">התוצאות שלנו</h2>
          <p className="text-xl md:text-3xl text-blue-300/90 max-w-3xl mx-auto leading-relaxed">
            צילומי מסך אמיתיים מחשבונות מודעות
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
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
                  <img src={study.image} alt={study.title} className="w-full h-auto object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50" loading="lazy" onError={(e) => { e.currentTarget.src = `https://placehold.co/700x500/f1f5f9/94a3b8?text=Screenshot+${idx + 1}`; }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          {/* Arrows */}
          <button
            onClick={() => { goTo(current - 1, 'right'); resetTimer(); }}
            className="absolute top-1/2 -translate-y-1/2 -right-1 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="קודם"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => { goTo(current + 1, 'left'); resetTimer(); }}
            className="absolute top-1/2 -translate-y-1/2 -left-1 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="overflow-hidden mx-8 relative rounded-[1.5rem]"
            style={{ height: '200px' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
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
                      <span className="text-xs font-bold text-blue-500">לידים</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3">
                    <img src={caseStudies[current].image} alt={caseStudies[current].title} className="w-full object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/50" style={{ height: '130px' }} loading="lazy" onError={(e) => { e.currentTarget.src = `https://placehold.co/700x500/f1f5f9/94a3b8?text=Screenshot`; }} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, i) => (
              <button key={i} onClick={() => { goTo(i); resetTimer(); }} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-blue-400 scale-110' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`תוצאה ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const FinalLeadSection = () => (
  <LeadForm id="contact" />
);

const Reviews = () => {
  const screenshots = [
    { src: reviewImg1 },
    { src: reviewImg2 },
    { src: reviewImg3 },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#F0F5FF] to-white relative overflow-hidden" tabIndex={-1}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">מה הלקוחות אומרים</h2>
          <p className="text-xl md:text-2xl text-slate-600">ביקורות אמיתיות מלקוחות מרוצים</p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative">
          <button
            /* onClick={() => {}} */
            disabled
            className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="ביקורות קודמות"
          >
            <ChevronRight size={24} />
          </button>
          <button
            /* onClick={() => {}} */
            disabled
            className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="ביקורות הבאות"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {screenshots.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex items-center justify-center p-4">
                <img src={s.src} alt="ביקורת לקוח" className="w-full h-auto rounded-2xl object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden relative">
          <button
            /* onClick={() => {}} */
            disabled
            className="absolute top-1/2 -translate-y-1/2 -right-1 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="קודם"
          >
            <ChevronRight size={20} />
          </button>
          <button
            /* onClick={() => {}} */
            disabled
            className="absolute top-1/2 -translate-y-1/2 -left-1 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="הבא"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-col gap-4 mx-8">
            {screenshots.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex items-center justify-center p-4">
                <img src={s.src} alt="ביקורת לקוח" className="w-full h-auto rounded-2xl object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'אודות', id: 'about' },
    { name: 'מה אנחנו עושים', id: 'services' },
    { name: 'תוצאות', id: 'results' },
    { name: 'דברו איתנו', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-right" dir="rtl">
          
          {/* Brand Column */}
          <div>
            <img src="/logo.png" alt="Dekel Digital" className="h-28 mb-6 brightness-0 invert" onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/150x50/ffffff/1d4ed8?text=Dekel+Digital';
            }} />
            <p className="text-slate-400 text-2xl leading-relaxed mb-6">
              שיווק דיגיטלי שמביא תוצאות אמיתיות.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/dekeldigital" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">ניווט מהיר</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-slate-400 hover:text-white transition-colors text-right text-xl"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Terms & Policy Column */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">תנאים ומדיניות</h4>
            <div className="flex flex-col gap-3">
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-xl">מדיניות פרטיות</a>
              <a href="/accessibility" className="text-slate-400 hover:text-white transition-colors text-xl">הצהרת נגישות</a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">פרטי התקשורת</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@dekeldigital.co.il" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xl">
                <Mail size={22} className="flex-shrink-0" />
                info@dekeldigital.co.il
              </a>
              <a href="tel:+972500000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xl">
                <Phone size={22} className="flex-shrink-0" />
                050-000-0000
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-xl">
                <Clock size={22} className="flex-shrink-0" />
                א׳–ה׳ 9:00–18:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8 text-center">
          <p className="text-slate-500 text-lg">© {new Date().getFullYear()} Dekel Digital. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToContact}
      className="fixed bottom-6 left-6 z-50 bg-blue-700 text-white p-4 rounded-full shadow-2xl shadow-blue-900/50 hover:bg-blue-800 hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="צור קשר"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:mr-3 transition-all duration-300 ease-in-out font-bold">
        דברו איתנו
      </span>
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900" style={{ fontFamily: '"Heebo", sans-serif' }}>
      <Header />
      <main>
        <ChessHero />
        <About />
        <Services />
        <About2 />
        <AdsCarousel />
        
        <LeadForm id="lead-form-1" />
        
        <Results />
        <FinalLeadSection />
        <Reviews />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}


