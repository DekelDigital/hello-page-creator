import { Link } from 'react-router-dom';
import { PageHelmet } from '../../seo/PageHelmet';
import type { PageSeoConfig } from '../../seo/pageMeta';
import { SiteHeader, SiteFooter, FloatingCTA } from './SiteChrome';

type Props = {
  title?: string;
  subtitle?: string;
  /** SEO: כותרת, תיאור, canonical, BreadcrumbList JSON-LD */
  seo: PageSeoConfig;
  children: React.ReactNode;
  /** רק כפתור חזרה - בלי כותרת/תיאור בראש הדף */
  hidePageHeading?: boolean;
};

export default function InnerPageShell({ title, subtitle, seo, children, hidePageHeading }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900" dir="rtl">
      <PageHelmet
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        breadcrumbItems={seo.breadcrumbItems}
      />
      <SiteHeader variant="inner" />
      <main className="pt-24 md:pt-28">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${hidePageHeading ? 'pt-3 pb-0' : 'pt-6 pb-2'}`}
        >
          {hidePageHeading ? (
            <div className="flex justify-start">
              <Link
                to="/"
                className="inline-flex shrink-0 items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                <span aria-hidden className="text-xl leading-none">
                  →
                </span>
                לדף הבית
              </Link>
            </div>
          ) : (
            <div className="flex w-full items-start gap-2 sm:gap-4">
              <div className="flex min-w-0 flex-1 justify-start">
                <Link
                  to="/"
                  className="inline-flex shrink-0 items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                >
                  <span aria-hidden className="text-xl leading-none">
                    →
                  </span>
                  לדף הבית
                </Link>
              </div>
              <div className="min-w-0 flex-[2] px-1 text-center sm:px-4">
                {title ? (
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">{title}</h1>
                ) : null}
                {subtitle ? (
                  <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">{subtitle}</p>
                ) : null}
              </div>
              <div className="min-w-0 flex-1" aria-hidden="true" />
            </div>
          )}
        </div>
        {children}
      </main>
      <SiteFooter variant="inner" />
      <FloatingCTA />
    </div>
  );
}
