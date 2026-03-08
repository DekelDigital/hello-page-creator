import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
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
  Instagram,
  Facebook
} from 'lucide-react';
import ChessHero from './components/ChessHero';

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
          className="text-right max-w-7xl mx-auto mb-24" dir="rtl"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            <span className="relative inline-block text-white px-8 py-2">
              <span className="relative z-10">מי אנחנו?</span>
              <svg className="absolute inset-0 w-[120%] h-[160%] -right-[10%] -top-[30%] -z-10" preserveAspectRatio="none" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="marker-gradient-about" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                {/* Main marker stroke - organic hand-drawn feel */}
                <path d="M8,28 Q4,22 12,18 Q20,13 50,14 Q100,12 160,14 Q185,15 194,20 Q198,24 196,30 Q194,36 185,38 Q160,40 100,39 Q50,40 20,38 Q8,36 6,32 Z" fill="url(#marker-gradient-about)" opacity="0.95" />
                {/* Slight overlap pass for realism */}
                <path d="M12,26 Q8,20 18,16 Q35,12 100,13 Q170,12 190,18 Q196,22 194,28 Q190,35 170,37 Q100,39 35,37 Q14,35 10,30 Z" fill="url(#marker-gradient-about)" opacity="0.6" />
              </svg>
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
            className="hidden lg:flex w-full lg:w-5/12 relative justify-center items-center mt-12 lg:mt-0"
          >
            <div className="relative w-full flex justify-center">
              {/* Blue glow behind the head */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-400/40 rounded-full blur-[90px] animate-pulse-slow z-0"></div>
              
              {/* Simple Image */}
              <img 
                src="/next_move.png" 
                alt="Next Move Chess" 
                className="relative z-10 w-full max-w-[1200px] h-auto drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 text-right flex flex-col justify-center"
          >
            <div className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8 space-y-6">
              <p>
                <strong className="text-slate-900 text-3xl md:text-4xl block mb-4">אנחנו דואגים לשיווק, כדי שתוכל להתמקד במה שבאמת חשוב - העסק שלך</strong>
                עם ניסיון של שנים בעריכת וידאו, עיצוב גרפי וניהול קמפיינים ממומנים, אנחנו מביאים מקצועיות שיווקית שמביאה תוצאות לאורך זמן.
              </p>
              <p>
                <strong className="text-slate-900 block mb-2">הגישה שלי פשוטה: <span className="text-blue-600">איכות לפני כמות.</span></strong>
                לידים מדויקים שמובילים למכירות אמיתיות - לא מספרים ריקים. שילוב חכם של מדידה ואופטימיזציה יחד עם קריאייטיב שמבטא את הערכים והמסר של העסק.
              </p>
              <p className="font-bold text-slate-900 text-3xl md:text-4xl mt-6">
                אני דואג לשיווק שלך, כדי שתוכל להתמקד במה שבאמת חשוב - <span className="text-blue-600">העסק שלך</span>
              </p>
            </div>

            {/* Mobile Image (Visible only on mobile) */}
            <div className="lg:hidden w-full relative flex justify-center mb-8">
              <div className="relative w-full max-w-[400px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-[70px] animate-pulse-slow z-0"></div>
                <img 
                  src="/next_move.png" 
                  alt="Next Move Chess" 
                  className="relative z-10 w-[120%] h-auto drop-shadow-[0_15px_30px_rgba(37,99,235,0.2)] transform translate-x-[-8%]"
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
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            הדרך שלנו <span className="text-blue-600">להצלחה שלך</span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium">
            עם ניסיון של שנים בניהול קמפיינים, אנחנו מביאים מקצועיות ושקיפות מלאה לכל תהליך. 
            <strong className="text-blue-700 font-bold block mt-4 text-3xl md:text-4xl"> המטרה שלנו היא לא רק להביא לידים, אלא לייצר צמיחה ורווח. </strong>
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
                title: 'מדידה',
                desc: 'אנחנו לא מנחשים. כל שקל שנכנס לקמפיין נמדד ומנותח כדי להביא את התוצאה המקסימלית.'
              },
              {
                num: '02',
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: 'מיקוד',
                desc: 'לידים זה נחמד, אבל מכירות זה מה שחשוב. אנחנו בונים משפכים שמכוונים ללקוחות משלמים.'
              },
              {
                num: '03',
                icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
                title: 'שקיפות',
                desc: 'דוחות ברורים, גישה מלאה לנתונים, ופגישות סטטוס קבועות. אתה תמיד יודע מה קורה.'
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
  return (
    <section id="services" className="py-24 bg-sky-50" tabIndex={-1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">מה אנחנו עושים</h2>
          <p className="text-2xl md:text-3xl text-slate-600 mb-2">הפלטפורמות המובילות בעולם, עם האסטרטגיה המנצחת שלנו.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch" dir="ltr">
          {/* TikTok Ads (Left) */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all relative overflow-hidden group text-center flex flex-col items-center h-full" dir="rtl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 to-transparent rounded-bl-full -z-10"></div>
            <div className="mb-8 flex justify-center w-full">
              <img src="/tiktok_logo.png" alt="TikTok Ads" className="h-20 object-contain" onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x100/000000/ffffff?text=TikTok';
              }} />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4 text-center">TikTok Ads</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center flex-grow">
              קריאייטיב שמוכר, בדיקות מהירות, וסקיילינג שמביא לידים ומכירות.
            </p>
            <div className="mt-8 h-1 w-12 bg-black rounded-full group-hover:w-[80%] transition-all duration-500 mx-auto"></div>
          </div>

          {/* Meta (Middle) */}
          <div className="bg-white rounded-[2rem] p-10 shadow-lg shadow-blue-900/5 border-2 border-blue-100 hover:shadow-xl hover:border-blue-400 transition-all relative overflow-hidden group text-center flex flex-col items-center h-full" dir="rtl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-10"></div>
            <div className="mb-8 flex justify-center w-full">
              <img src="/meta_logo.png" alt="Meta Ads" className="h-20 object-contain" onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x100/1877f2/ffffff?text=Meta';
              }} />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4 text-center">Meta Ads</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center flex-grow">
              משפכים חכמים, רימרקטינג מדויק ואופטימיזציה לפי תוצאות אמיתיות.
            </p>
            <div className="mt-8 h-1 w-12 bg-blue-600 rounded-full group-hover:w-[80%] transition-all duration-500 mx-auto"></div>
          </div>

          {/* Google Ads (Right) */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all relative overflow-hidden group text-center flex flex-col items-center h-full" dir="rtl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full -z-10"></div>
            <div className="mb-8 flex justify-center w-full">
              <img src="/google ads logo.png" alt="Google Ads" className="h-20 object-contain" onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x100/ea4335/ffffff?text=Google';
              }} />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4 text-center">Google Ads</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-center flex-grow">
              חיפוש שמביא לקוחות חמים, מיקוד כוונה גבוה ושיפור איכות שמוריד עלויות.
            </p>
            <div className="mt-8 h-1 w-12 bg-green-500 rounded-full group-hover:w-[80%] transition-all duration-500 mx-auto"></div>
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
    '/צבי יחזקאלי.jpeg',
    '/מבצע כולל מקום כשר.jpg2.jpg',
    '/שרון גל הזמנה לעקוב.png',
    '/מסע צילום מתגלגל.jpg',
    '/פוסט תזונה.jpg'
  ];
  
  // Split for two rows
  const row1 = adImages.slice(0, 7);
  const row2 = adImages.slice(7, 14);

  return (
    <section id="ads" className="py-24 bg-slate-900 overflow-hidden relative" tabIndex={-1}>
      {/* Chess board pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `repeating-conic-gradient(#3b82f6 0% 25%, transparent 0% 50%)`,
        backgroundSize: '60px 60px'
      }}></div>
      {/* Soft blue glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">מודעות שעיצבנו לכם</h2>
        <p className="text-2xl md:text-3xl text-blue-400 font-medium">קריאייטיבים שנבנו כדי לעצור גלילה</p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <button 
          onClick={() => scrollTo('contact')}
          className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 relative z-10"
        >
          אני רוצה שיווק
          <ArrowLeft size={24} />
        </button>
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
      {/* Decorative background elements */}
      {/* Right Stroke */}
      <svg className="absolute top-0 right-0 h-full w-64 text-white/20 pointer-events-none transform translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 Q50,50 0,100 L100,100 L100,0 Z" fill="currentColor" />
      </svg>
      {/* Left Stroke */}
      <svg className="absolute top-0 left-0 h-full w-64 text-white/20 pointer-events-none transform -translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100,0 Q50,50 100,100 L0,100 L0,0 Z" fill="currentColor" />
      </svg>
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-sm">
            מוכנים להפוך שיווק לתוצאות?
          </h3>
          <p className="text-2xl md:text-3xl text-white/90 font-medium drop-shadow-sm max-w-4xl mx-auto">
            משאירים פרטים ועושים את הצעד הראשון לשיווק מנצח
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-6 mb-6 items-stretch justify-center">
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="text" 
                id={`${id}-name`} 
                required 
                className="w-full px-8 py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="שם מלא"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="tel" 
                id={`${id}-phone`} 
                required 
                className="w-full px-8 py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="מספר טלפון"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="email" 
                id={`${id}-email`} 
                required 
                className="w-full px-8 py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="אימייל"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input 
                type="text" 
                id={`${id}-business`} 
                required 
                className="w-full px-8 py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
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
                  אני רוצה יותר תוצאות
                  <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                    <ArrowLeft size={24} />
                  </div>
                </>
              )}
            </button>
          </div>
          
          {/* Checkbox */}
          <div className="flex items-center justify-center gap-3 mt-8 px-2">
            <input 
              type="checkbox" 
              id={`${id}-privacy`} 
              required 
              className="w-6 h-6 rounded-none border-2 border-white/60 bg-white/10 text-blue-600 focus:ring-white focus:ring-offset-[#3b82f6] cursor-pointer transition-all"
            />
            <label htmlFor={`${id}-privacy`} className="text-lg md:text-xl text-white cursor-pointer select-none">
              אני מאשר/ת קבלת דיוור והודעות SMS מ-Dekel Digital, בהתאם <a href="#" className="underline hover:text-blue-100 transition-colors">למדיניות הפרטיות</a>.
            </label>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

const Results = () => {
  const resultsData = [
    { image: '/וובינר השקעות.png', title: 'וובינר השקעות', text: '500 לידים נקודתיים' },
    { image: '/מימון עסקי.png', title: 'מימון עסקי', text: '300 לידים נקודתיים' },
    { image: '/סייבר.png', title: 'סייבר', text: '450 לידים נקודתיים' },
    { image: '/ספורט.png', title: 'ספורט', text: '600 לידים נקודתיים' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % resultsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [resultsData.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % resultsData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + resultsData.length) % resultsData.length);

  return (
    <section id="results" className="py-24 bg-slate-900 relative overflow-hidden" tabIndex={-1}>
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">התוצאות שלנו</h2>
          <p className="text-2xl md:text-3xl text-blue-400">מספרים אמיתיים מתוך חשבונות מודעות של לקוחות.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Screenshots Grid (Desktop) / Slider (Mobile) */}
          <div className="lg:col-span-8">
            {/* Mobile Slider */}
            <div className="sm:hidden relative">
              <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-white flex flex-col">
                <div className="aspect-[16/9] sm:aspect-[2/1] relative bg-slate-50 flex items-center justify-center p-2">
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    src={resultsData[currentIndex].image} 
                    alt={resultsData[currentIndex].title} 
                    className="w-full h-full object-contain drop-shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x450/f1f5f9/94a3b8?text=Screenshot+${currentIndex+1}`;
                    }}
                  />
                </div>
                <div className="bg-[#0B1B3D] text-white p-5 text-center border-t border-blue-900/50">
                  <h4 className="font-bold text-xl md:text-2xl mb-1">{resultsData[currentIndex].title}</h4>
                  <p className="text-blue-100 text-lg">{resultsData[currentIndex].text}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prev}
                className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800 z-20 border border-slate-100"
                aria-label="הקודם"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800 z-20 border border-slate-100"
                aria-label="הבא"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {resultsData.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6">
              {resultsData.map((item, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300 h-full">
                  <div className="aspect-[16/9] sm:aspect-[2/1] relative bg-slate-50 flex items-center justify-center p-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain drop-shadow-sm"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x450/f1f5f9/94a3b8?text=Screenshot+${idx+1}`;
                      }}
                    />
                  </div>
                  <div className="bg-[#0B1B3D] text-white p-5 text-center border-t border-blue-900/50 mt-auto">
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-blue-100 text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="lg:col-span-4 space-y-6">
            
            {[
              { label: 'החזר השקעה ממוצע (ROI)', value: '420%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'לידים בחודש האחרון', value: '12,450+', color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'ירידה בעלות לליד', value: '-35%', color: 'text-indigo-600', bg: 'bg-indigo-50' }
            ].map((kpi, idx) => (
              <div key={idx} className={`${kpi.bg} rounded-3xl p-8 border border-white/50 shadow-sm`}>
                <div className="text-lg text-slate-700 font-bold mb-2">{kpi.label}</div>
                <div className={`text-5xl font-black ${kpi.color}`}>{kpi.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalLeadSection = () => {
  return (
    <LeadForm id="contact" />
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'שם הלקוח', business: 'שם העסק בע״מ', text: 'מאז שהתחלנו לעבוד יחד, כמות הלידים קפצה פי 3 והעלות ירדה משמעותית. צוות מקצועי שבאמת אכפת לו מההצלחה שלנו.' },
    { name: 'שם הלקוח', business: 'שם העסק בע״מ', text: 'שקיפות מלאה מהרגע הראשון. סוף סוף סוכנות שמדברת איתי במספרים של רווח ולא רק בקליקים וחשיפות.' },
    { name: 'שם הלקוח', business: 'שם העסק בע״מ', text: 'הקריאייטיב שלהם פשוט עובד. הם הבינו בדיוק את קהל היעד שלנו והצליחו להביא תוצאות מדהימות תוך חודש אחד בלבד.' },
  ];

  return (
    <section id="reviews" className="py-32 bg-slate-900 text-white relative overflow-hidden" tabIndex={-1}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/30 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">תשמעו מה הלקוחות שלנו אומרים</h2>
          <p className="text-2xl md:text-3xl text-slate-400">אנחנו מאמינים בשקיפות, עבודה קשה ותוצאות שמדברות בעד עצמן.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-800/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 border border-slate-700/50 flex flex-col items-center text-center relative overflow-hidden group hover:bg-slate-800 transition-colors duration-300">
              {/* Large transparent quote mark */}
              <div className="absolute -top-4 -right-2 text-[120px] font-serif text-slate-700/30 leading-none pointer-events-none select-none">"</div>
              
              <div className="flex justify-center gap-1 mb-6 text-yellow-400 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="text-xl md:text-[22px] text-slate-200 mb-8 leading-relaxed relative z-10 font-medium">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto relative z-10 w-full justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-inner shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="text-right">
                  <div className="font-bold text-white text-xl">{review.name}</div>
                  <div className="text-base text-slate-400">{review.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0B1B3D] text-white py-16 border-t border-blue-900/50" dir="rtl">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Navigation Menu */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white mb-6">תפריט ניווט</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">דף הבית</a></li>
            <li><a href="#about" className="text-blue-100 hover:text-white transition-colors text-lg">אודות</a></li>
            <li><a href="#services" className="text-blue-100 hover:text-white transition-colors text-lg">השירותים שלנו</a></li>
            <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors text-lg">צור קשר</a></li>
          </ul>
        </div>

        {/* Terms and Policy */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white mb-6">תנאים ומדיניות</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">מדיניות פרטיות</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-lg">הצהרת נגישות</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white mb-6">פרטי התקשורת</h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-3 text-blue-100 text-lg">
              <Mail size={20} className="text-yellow-400 flex-shrink-0" />
              <a href="mailto:deceldigital@gmail.com" className="hover:text-white transition-colors" dir="ltr">deceldigital@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-blue-100 text-lg">
              <Phone size={20} className="text-yellow-400 flex-shrink-0" />
              <a href="tel:0540000000" className="hover:text-white transition-colors" dir="ltr">054-000-0000</a>
            </li>
            <li className="flex items-center gap-3 text-blue-100 text-lg">
              <Clock size={20} className="text-yellow-400 flex-shrink-0" />
              <span>א'-ה' 09:00 עד 17:00</span>
            </li>
          </ul>
        </div>

        {/* Logo and Socials */}
        <div className="space-y-8 lg:text-left flex flex-col items-start lg:items-end">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Dekel Digital Logo" className="h-12 md:h-16 object-contain brightness-0 invert" onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/120x40/ffffff/000000?text=Dekel+Digital';
            }} />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1B3D] hover:bg-blue-100 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1B3D] hover:bg-blue-100 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

      </div>
      
      <div className="mt-16 pt-8 border-t border-blue-900/50 text-center text-blue-200/60 text-sm">
        © {new Date().getFullYear()} Dekel Digital. כל הזכויות שמורות.
      </div>
    </div>
  </footer>
);

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

