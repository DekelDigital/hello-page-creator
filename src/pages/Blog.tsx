import React from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts, calculateReadTime } from '../data/blogPosts';

const BlogHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 py-3">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50 rounded-full px-6 py-2">
        <a href="/" className="flex items-center gap-2 -my-2 md:-my-3">
          <img src="/logo.png" alt="דקל דיגיטל" className="h-20 md:h-24 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8" dir="rtl">
          <a href="/" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">דף הבית</a>
          <a href="/blog" className="text-blue-700 font-bold transition-colors">בלוג</a>
        </nav>
        <a href="/#contact" className="hidden md:inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-blue-700 hover:bg-blue-800 transition-all shadow-md">
          אני רוצה שיווק
        </a>
      </div>
    </div>
  </header>
);

const BlogFooter = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <a href="/">
        <img src="/logo.png" alt="דקל דיגיטל" className="h-20 mx-auto mb-4 brightness-0 invert" />
      </a>
      <p className="text-slate-400 text-lg mb-4">שיווק דיגיטלי שמביא תוצאות אמיתיות.</p>
      <div className="flex justify-center gap-6 text-slate-400 text-base" dir="rtl">
        <a href="/" className="hover:text-white transition-colors">דף הבית</a>
        <a href="/blog" className="hover:text-white transition-colors">בלוג</a>
        <a href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</a>
        <a href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</a>
      </div>
      <p className="text-slate-500 mt-8">© {new Date().getFullYear()} Dekel Digital. כל הזכויות שמורות.</p>
    </div>
  </footer>
);

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Helmet>
        <title>בלוג דקל דיגיטל | תובנות על שיווק ממומן וניהול קמפיינים</title>
        <meta name="description" content="תובנות על שיווק ממומן, ניהול קמפיינים וקריאייטיב שמביא לידים ומכירות. מדריכים מקצועיים מדקל דיגיטל." />
        <link rel="canonical" href="https://www.dekeldigital.co.il/blog" />
        <meta property="og:title" content="בלוג דקל דיגיטל | תובנות על שיווק ממומן" />
        <meta property="og:description" content="תובנות על שיווק ממומן, ניהול קמפיינים וקריאייטיב שמביא לידים ומכירות." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dekeldigital.co.il/blog" />
      </Helmet>

      <div className="min-h-screen bg-slate-50" style={{ fontFamily: '"Heebo", sans-serif' }}>
        <BlogHeader />
        
        <main className="pt-32 pb-20" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                בלוג <span className="text-blue-600">דקל דיגיטל</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                תובנות על שיווק ממומן, ניהול קמפיינים וקריאייטיב שמביא לידים ומכירות
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{calculateReadTime(post.content)} דק׳ קריאה</span>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-4 text-blue-600 font-bold text-base group-hover:underline">
                      למאמר המלא ←
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>

        <BlogFooter />
      </div>
    </>
  );
}
