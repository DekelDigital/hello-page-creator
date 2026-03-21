import React from 'react';
import { PageHelmet } from '../seo/PageHelmet';
import { blogPageSeo } from '../seo/pageMeta';
import { blogPosts, calculateReadTime, dashesToHyphen } from '../data/blogPosts';
import WhatsAppButton from '../components/WhatsAppButton';
import { SiteFooter } from '../components/site/SiteChrome';
import { LogoPicture } from '../components/LogoPicture';

const BlogHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 py-3">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/50 rounded-full px-6 py-2">
        <a href="/" className="flex items-center gap-2 -my-2 md:-my-3">
          <LogoPicture variant="blog" alt="דקל דיגיטל" className="h-20 md:h-24 w-auto object-contain" width={96} height={96} decoding="async" />
        </a>
        <nav className="hidden md:flex items-center gap-8" dir="rtl">
          <a href="/" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            דף הבית
          </a>
          <a href="/about" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            אודות
          </a>
          <a href="/campaigns" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            ניהול קמפיינים
          </a>
          <a href="/ads" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            מודעות
          </a>
          <a href="/results" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            תוצאות
          </a>
          <a href="/#reviews" className="text-[17px] md:text-[18px] leading-snug text-slate-600 hover:text-blue-700 font-medium transition-colors">
            ביקורות
          </a>
          <a href="/blog" className="text-[17px] md:text-[18px] leading-snug text-blue-700 font-bold transition-colors">
            בלוג
          </a>
        </nav>
        <a href="/contact" className="hidden md:inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-bold rounded-full text-white bg-blue-700 hover:bg-blue-800 transition-all shadow-md">
          אני רוצה שיווק
        </a>
      </div>
    </div>
  </header>
);

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Blog() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHelmet
        title={blogPageSeo.title}
        description={blogPageSeo.description}
        canonicalPath={blogPageSeo.canonicalPath}
        breadcrumbItems={blogPageSeo.breadcrumbItems}
      />

      <div className="min-h-screen bg-slate-50">
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
                    <picture>
                      <source srcSet={post.coverImage} type="image/webp" />
                      <img
                        src={post.coverImage.replace(/\.webp$/i, '.png')}
                        alt={dashesToHyphen(post.title)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={675}
                      />
                    </picture>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {dashesToHyphen(post.title)}
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

        <SiteFooter variant="inner" />
        <WhatsAppButton />
      </div>
    </>
  );
}
