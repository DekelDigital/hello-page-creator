import { motion } from 'motion/react';
import { ArrowLeft, BarChart3, Target, TrendingUp } from 'lucide-react';

type AboutProps = {
  hideMainHeading?: boolean;
  /** id של טופס הלידים לגלילה מכפתור ה-CTA */
  contactFormId?: string;
};

export function AboutSection({ hideMainHeading, contactFormId = 'contact' }: AboutProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-[#F0F5FF] to-[#FFFFFF] overflow-hidden" tabIndex={-1}>
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideMainHeading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-right max-w-7xl mx-auto mb-8"
            dir="rtl"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
              <span className="relative inline-block">
                <span style={{ color: '#2563eb' }}>מי אנחנו?</span>
                <span className="absolute -bottom-2 right-0 w-full h-1 rounded-full" style={{ backgroundColor: '#2563eb' }}></span>
              </span>
            </h2>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`hidden lg:flex w-full lg:w-6/12 relative justify-center items-center ${hideMainHeading ? 'lg:mt-0' : 'mt-12 lg:mt-0'} lg:-ml-16`}
          >
            <div className="relative w-[140%] flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/40 rounded-full blur-[90px] animate-pulse-slow z-0"></div>

              <img
                src="/next_move.png"
                alt="Next Move Chess"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 text-center md:text-right flex flex-col justify-center items-center md:items-start"
          >
            <div className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8 space-y-6">
              <p>
                <strong className="text-slate-900 text-3xl md:text-4xl block mb-1">ברוכים הבאים לדקל דיגיטל</strong>
                עם ניסיון של שנים בניהול קמפיינים ממומנים, אנחנו מביאים מקצועיות שיווקית שמביאה תוצאות לאורך זמן.
              </p>
              <p>
                <strong className="text-slate-900 block mb-2">
                  הגישה שלנו פשוטה:
                  <br className="sm:hidden" /> <span className="text-blue-600">איכות לפני כמות.</span>
                </strong>
                לידים מדויקים שמובילים למכירות - לא סתם מספרים. שילוב חכם של מדידה ואופטימיזציה יחד עם קריאייטיב עוצמתי.
              </p>
              <p className="font-bold text-slate-900 text-3xl md:text-4xl mt-6">
                אנחנו דואגים לשיווק, כדי שתוכל להתמקד במה שבאמת חשוב - <span className="text-blue-600">העסק שלך</span>
              </p>
            </div>

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
                type="button"
                onClick={() => scrollTo(contactFormId)}
                className="inline-flex items-center justify-center gap-2 px-12 py-6 text-2xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 relative z-10 w-full sm:w-auto"
              >
                אני רוצה שיווק
                <ArrowLeft size={28} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export function AboutStrategySection() {
  return (
    <section id="about-2" className="relative py-32 bg-gradient-to-b from-[#EEF4FF] to-[#F5F8FF] overflow-hidden" tabIndex={-1}>
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            <span className="text-blue-600">אסטרטגיה</span> חכמה
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-medium mb-0">
            קמפיין נכון מתחיל בתכנון מהלך - וממשיך בשיפור מתמיד לפי נתונים
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-blue-100 via-blue-300 to-blue-100"></div>

          <div className="md:hidden absolute top-12 bottom-12 right-12 w-0.5 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100"></div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-8 relative">
            {[
              {
                num: '01',
                icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
                title: 'שיחת אפיון',
                desc: 'מבינים את העסק, המסר וקהל היעד - ובונים תוכנית קמפיינים ברורה לפני שמוציאים שקל.',
              },
              {
                num: '02',
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: 'אופטימיזציה',
                desc: 'בודקים, משפרים ומדייקים קהלים וקריאייטיב כדי להוציא יותר תוצאה מכל תקציב.',
              },
              {
                num: '03',
                icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
                title: 'שקיפות מלאה',
                desc: 'דוח שבועי ברור, תובנות מה עבד ומה לא, והחלטות להמשך כדי שתמיד תדעו איפה עומדים ולאן מתקדמים.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
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
}
