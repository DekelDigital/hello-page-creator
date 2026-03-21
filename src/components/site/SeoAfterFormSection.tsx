import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export type SeoCard = {
  title: string;
  body: React.ReactNode;
};

export type SeoGuideBlock = {
  title: string;
  content: React.ReactNode;
};

export type SeoFaqItem = {
  question: string;
  answer: React.ReactNode;
  /** טקסט פשוט ל-JSON-LD (ללא HTML) */
  answerPlain: string;
};

export type SeoAfterFormSectionProps = {
  /** id של טופס הלידים (למשל contact) */
  formId: string;
  /** מזהה ייחודי לסקשן — ל-aria ול-JSON-LD */
  sectionDomId: string;
  h2: string;
  intro: React.ReactNode;
  cards: [SeoCard, SeoCard, SeoCard];
  guideBlocks: SeoGuideBlock[];
  faqItems: [SeoFaqItem, SeoFaqItem, SeoFaqItem, SeoFaqItem, SeoFaqItem];
  ctaLabel: string;
};

function buildFaqJsonLd(faqItems: SeoFaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerPlain,
      },
    })),
  };
}

export function SeoAfterFormSection({
  formId,
  sectionDomId,
  h2,
  intro,
  cards,
  guideBlocks,
  faqItems,
  ctaLabel,
}: SeoAfterFormSectionProps) {
  const scrollToForm = () => {
    document.getElementById(formId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqJsonLd = buildFaqJsonLd(faqItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section
        id={sectionDomId}
        className="relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-blue-50/35 to-slate-50 py-16 md:py-24"
        dir="rtl"
        aria-labelledby={`${sectionDomId}-h2`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center md:text-right">
            <h2
              id={`${sectionDomId}-h2`}
              className="text-[2rem] font-black leading-tight tracking-tight text-slate-900 md:text-[2.375rem] md:leading-[1.15]"
            >
              {h2}
            </h2>
            <div className="mx-auto mt-5 max-w-4xl space-y-4 text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
              {intro}
            </div>
          </header>

          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="flex flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-[0_8px_30px_rgba(37,99,235,0.06)] backdrop-blur-sm transition-shadow hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]"
              >
                <h3 className="mb-3 text-[1.375rem] font-bold leading-snug text-slate-900 md:text-[1.625rem]">
                  {card.title}
                </h3>
                <div className="text-base leading-relaxed text-slate-600 md:text-lg [&_a]:font-semibold [&_a]:text-blue-700 [&_a]:underline-offset-2 hover:[&_a]:text-blue-800 hover:[&_a]:underline">
                  {card.body}
                </div>
              </article>
            ))}
          </div>

          <div className="mb-14 rounded-3xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm md:p-10">
            <div className="space-y-10">
              {guideBlocks.map((block, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-[1.375rem] font-bold text-slate-900 md:text-[1.625rem]">{block.title}</h3>
                  <div className="space-y-3 text-base leading-relaxed text-slate-600 md:text-lg [&_a]:font-semibold [&_a]:text-blue-700 [&_a]:underline-offset-2 hover:[&_a]:text-blue-800 hover:[&_a]:underline">
                    {block.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12" role="region" aria-labelledby={`${sectionDomId}-faq-h3`}>
            <h3 id={`${sectionDomId}-faq-h3`} className="mb-6 text-[1.375rem] font-bold text-slate-900 md:text-[1.625rem]">
              שאלות נפוצות
            </h3>
            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-lg font-bold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3">
                      <span>{item.question}</span>
                      <ChevronDown
                        className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 transition-transform group-open:-rotate-180"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div className="mt-3 border-t border-slate-100 pt-3 text-base leading-relaxed text-slate-600 md:text-lg">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-3xl border border-blue-200/60 bg-gradient-to-l from-white to-blue-50/50 px-6 py-8 text-center shadow-sm md:flex-row md:justify-between md:text-right">
            <p className="mb-4 text-lg font-medium text-slate-700 md:mb-0 md:max-w-xl md:text-xl">
              רוצים לדבר על הצעד הבא? השאירו פרטים בטופס למעלה — דקל דיגיטל יחזרו אליכם עם הצעדים הבאים.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {ctaLabel}
            </button>
          </div>

          <p className="mt-10 text-center text-sm leading-relaxed text-slate-500 md:text-right" lang="he">
            נכתב על ידי דקל דיגיטל · עודכן לאחרונה: מרץ 2026
          </p>
        </div>
      </section>
    </>
  );
}

/** קישורים פנימיים לשימוש בתוך קבצי התוכן */
export function SeoInternalLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="font-semibold text-blue-700 underline-offset-2 hover:text-blue-800 hover:underline">
      {children}
    </Link>
  );
}
