import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Clock, Facebook, MessageCircle } from 'lucide-react';

export type SiteNavVariant = 'home' | 'inner';

const Logo = () => (
  <div className="flex items-center gap-2 -my-2 md:-my-3">
    <img
      src="/logo.png"
      alt="Dekel Digital Logo"
      className="h-20 md:h-24 object-contain"
      onError={(e) => {
        e.currentTarget.src = 'https://placehold.co/150x50/1d4ed8/ffffff?text=Dekel+Digital';
      }}
    />
  </div>
);

export function SiteHeader({ variant }: { variant: SiteNavVariant }) {
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

  const navClass =
    'text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1';

  const renderNavItems = () => (
    <>
      {variant === 'home' ? (
        <>
          <button type="button" onClick={() => scrollTo('about')} className={navClass}>
            אודות
          </button>
          <button type="button" onClick={() => scrollTo('services')} className={navClass}>
            מה אנחנו עושים
          </button>
          <button type="button" onClick={() => scrollTo('ads')} className={navClass}>
            מודעות
          </button>
          <button type="button" onClick={() => scrollTo('results')} className={navClass}>
            תוצאות
          </button>
          <button type="button" onClick={() => scrollTo('reviews')} className={navClass}>
            ביקורות
          </button>
        </>
      ) : (
        <>
          <Link to="/about" className={navClass} onClick={() => setMobileMenuOpen(false)}>
            אודות
          </Link>
          <Link to="/campaigns" className={navClass} onClick={() => setMobileMenuOpen(false)}>
            ניהול קמפיינים
          </Link>
          <Link to="/ads" className={navClass} onClick={() => setMobileMenuOpen(false)}>
            מודעות
          </Link>
          <Link to="/results" className={navClass} onClick={() => setMobileMenuOpen(false)}>
            תוצאות
          </Link>
          <a href="/#reviews" className={navClass} onClick={() => setMobileMenuOpen(false)}>
            ביקורות
          </a>
        </>
      )}
      <a href="/blog" className={navClass} onClick={() => setMobileMenuOpen(false)}>
        בלוג
      </a>
    </>
  );

  const cta =
    variant === 'home' ? (
      <button
        type="button"
        onClick={() => scrollTo('contact')}
        className="hidden md:inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        אני רוצה שיווק
      </button>
    ) : (
      <Link
        to="/contact"
        className="hidden md:inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        onClick={() => setMobileMenuOpen(false)}
      >
        אני רוצה שיווק
      </Link>
    );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50 rounded-full px-6 py-2 transition-all ${isScrolled ? 'shadow-md' : ''}`}
        >
          <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full" onClick={() => setMobileMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8" dir="rtl">
            {renderNavItems()}
          </nav>

          {cta}

          <button
            type="button"
            className="md:hidden p-2 text-slate-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="תפריט"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-4 z-50">
            <div className="flex flex-col gap-1" dir="rtl">
              {variant === 'home' ? (
                <>
                  <button
                    type="button"
                    onClick={() => scrollTo('about')}
                    className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                  >
                    אודות
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo('services')}
                    className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                  >
                    מה אנחנו עושים
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo('ads')}
                    className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                  >
                    מודעות
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo('results')}
                    className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                  >
                    תוצאות
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo('reviews')}
                    className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                  >
                    ביקורות
                  </button>
                </>
              ) : (
                <>
                  <Link to="/about" className="text-right text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                    אודות
                  </Link>
                  <Link to="/campaigns" className="text-right text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                    ניהול קמפיינים
                  </Link>
                  <Link to="/ads" className="text-right text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                    מודעות
                  </Link>
                  <Link to="/results" className="text-right text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                    תוצאות
                  </Link>
                  <a href="/#reviews" className="text-right text-slate-700 font-medium py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>
                    ביקורות
                  </a>
                </>
              )}
              <a
                href="/blog"
                className="text-right text-[17px] leading-snug text-slate-700 font-medium py-2.5 border-b border-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                בלוג
              </a>
            </div>
            {variant === 'home' ? (
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full mt-2 px-6 py-3 text-center font-bold rounded-full text-white bg-blue-700"
              >
                אני רוצה שיווק
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full mt-2 px-6 py-3 text-center font-bold rounded-full text-white bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                אני רוצה שיווק
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter({ variant }: { variant: SiteNavVariant }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass = 'text-slate-400 hover:text-white transition-colors text-right text-xl';

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-right md:items-start" dir="rtl">
          <div className="md:-mt-[1.68rem]">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Dekel Digital"
                className="h-28 mb-0.5 brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/150x50/ffffff/1d4ed8?text=Dekel+Digital';
                }}
              />
            </Link>
            <p className="text-slate-400 text-lg md:text-xl leading-snug mb-2">
              דקל דיגיטל - שיווק דיגיטלי
              <br />
              שמביא תוצאות אמיתיות.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61587026532997"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-6">ניווט מהיר</h4>
            <nav className="flex flex-col gap-3">
              {variant === 'home' ? (
                <>
                  <Link to="/about" className={linkClass}>
                    אודות
                  </Link>
                  <Link to="/campaigns" className={linkClass}>
                    ניהול קמפיינים
                  </Link>
                  <Link to="/ads" className={linkClass}>
                    מודעות
                  </Link>
                  <Link to="/results" className={linkClass}>
                    תוצאות
                  </Link>
                  <button type="button" onClick={() => scrollTo('reviews')} className={linkClass}>
                    ביקורות
                  </button>
                  <a href="/blog" className={linkClass}>
                    בלוג
                  </a>
                </>
              ) : (
                <>
                  <Link to="/about" className={linkClass}>
                    אודות
                  </Link>
                  <Link to="/campaigns" className={linkClass}>
                    ניהול קמפיינים
                  </Link>
                  <Link to="/ads" className={linkClass}>
                    מודעות
                  </Link>
                  <Link to="/results" className={linkClass}>
                    תוצאות
                  </Link>
                  <a href="/#reviews" className={linkClass}>
                    ביקורות
                  </a>
                  <a href="/blog" className={linkClass}>
                    בלוג
                  </a>
                </>
              )}
            </nav>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-6">תנאים ומדיניות</h4>
            <div className="flex flex-col gap-3">
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-xl">
                מדיניות פרטיות
              </a>
              <a href="/accessibility" className="text-slate-400 hover:text-white transition-colors text-xl">
                הצהרת נגישות
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-6">פרטי התקשורת</h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xl"
              >
                <MessageCircle size={22} className="flex-shrink-0" />
                יצירת קשר
              </Link>
              <a href="mailto:contact@dekeldigital.co.il" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xl">
                <Mail size={22} className="flex-shrink-0" />
                contact@dekeldigital.co.il
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-xl">
                <Clock size={22} className="flex-shrink-0" />
                א׳-ה׳ 9:00-18:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8 text-center">
          <p className="text-slate-500 text-lg">© {new Date().getFullYear()} Dekel Digital. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl =
    'https://wa.me/972503225510?text=%D7%94%D7%99%D7%99%21+%D7%94%D7%92%D7%A2%D7%AA%D7%99+%D7%9E%D7%94%D7%90%D7%AA%D7%A8+%D7%A9%D7%9C%D7%9B%D7%9D+%D7%95%D7%90%D7%A9%D7%9E%D7%97+%D7%9C%D7%A7%D7%91%D7%9C+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A2%D7%9C+%D7%A0%D7%99%D7%94%D7%95%D7%9C+%D7%A7%D7%9E%D7%A4%D7%99%D7%99%D7%A0%D7%99%D7%9D%F0%9F%9A%80';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp fixed bottom-6 left-6 z-50 rounded-full flex items-center justify-center"
      aria-label="שלחו הודעה בוואטסאפ"
    >
      <span className="absolute w-[88px] h-[88px] rounded-full bg-[#25D366]/30 animate-[wa-ping_2s_ease-out_infinite]"></span>
      <span className="absolute w-[88px] h-[88px] rounded-full bg-[#25D366]/20 animate-[wa-ping_2s_ease-out_0.6s_infinite]"></span>

      <span className="relative w-[76px] h-[76px] rounded-full bg-[#25D366] shadow-2xl shadow-green-900/40 hover:bg-[#1ebe5d] hover:scale-110 transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>
    </a>
  );
}
