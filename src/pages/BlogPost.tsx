import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, calculateReadTime } from '../data/blogPosts';
import BlogLeadForm from '../components/BlogLeadForm';

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
}

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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const readTime = calculateReadTime(post.content);
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  // Extract first paragraph for mobile form placement
  const contentParts = post.content.split('</h2>');
  const firstSection = contentParts.length > 1 ? contentParts[0] + '</h2>' + contentParts[1].split('<h2>')[0] : '';
  const restContent = contentParts.length > 1 ? '<h2>' + contentParts.slice(1).map((p, i) => i > 0 ? p : p.split('<h2>').slice(1).join('<h2>')).join('</h2>') : post.content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": post.author },
    "image": post.coverImage,
    "description": post.seoDescription,
    "publisher": {
      "@type": "Organization",
      "name": "דקל דיגיטל",
      "logo": { "@type": "ImageObject", "url": "https://www.dekeldigital.co.il/logo.png" }
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <link rel="canonical" href={`https://www.dekeldigital.co.il/blog/${post.slug}`} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.dekeldigital.co.il/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-50" style={{ fontFamily: '"Heebo", sans-serif' }}>
        <BlogHeader />

        <main className="pt-32 pb-20" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
              <a href="/" className="hover:text-blue-600 transition-colors">בית</a>
              <span>›</span>
              <a href="/blog" className="hover:text-blue-600 transition-colors">בלוג</a>
              <span>›</span>
              <span className="text-slate-700">{post.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Article Content */}
              <article className="flex-1 min-w-0">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-slate-500 text-base mb-8">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{readTime} דק׳ קריאה</span>
                </div>

                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full rounded-2xl mb-10 aspect-video object-cover"
                />

                {/* Mobile lead form after intro */}
                <div className="lg:hidden mb-10">
                  <div
                    className="prose prose-lg prose-slate max-w-none mb-8
                      [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4
                      [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3
                      [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-slate-700 [&_p]:mb-4
                      [&_ul]:pr-6 [&_ul]:mb-4 [&_li]:text-lg [&_li]:text-slate-700 [&_li]:mb-2
                      [&_img]:rounded-2xl [&_img]:my-8"
                    dangerouslySetInnerHTML={{ __html: firstSection }}
                  />
                  <BlogLeadForm compact />
                </div>

                {/* Desktop: full content / Mobile: rest of content */}
                <div
                  className="prose prose-lg prose-slate max-w-none
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3
                    [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-slate-700 [&_p]:mb-4
                    [&_ul]:pr-6 [&_ul]:mb-4 [&_li]:text-lg [&_li]:text-slate-700 [&_li]:mb-2
                    [&_strong]:text-slate-900
                    [&_img]:rounded-2xl [&_img]:my-8"
                  dangerouslySetInnerHTML={{ __html: window.innerWidth < 1024 ? restContent : post.content }}
                />

                {/* Mobile lead form at bottom */}
                <div className="lg:hidden mt-12">
                  <BlogLeadForm />
                </div>

                {/* Related Articles */}
                <section className="mt-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">מאמרים נוספים</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {related.map(r => (
                      <a
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img src={r.coverImage} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{r.title}</h3>
                          <p className="text-sm text-slate-500 mt-2">{formatDate(r.date)}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              </article>

              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-[360px] flex-shrink-0">
                <div className="sticky top-32">
                  <BlogLeadForm />
                </div>
              </aside>
            </div>
          </div>
        </main>

        <BlogFooter />
      </div>
    </>
  );
}
