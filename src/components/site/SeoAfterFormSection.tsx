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
  /** מזהה ייחודי לסקשן - ל-aria ול-JSON-LD */
  sectionDomId: string;
  h2: string;
  /** מחלקות נוספות ל-H2 (למשל whitespace-nowrap לכותרת בשורה אחת) */
  h2ClassName?: string;
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

/** סלקטורים לתוכן ה-intro (מקבצי content) - דורשים ! כדי לעקוף מחלקות על אלמנטי הצאצא */
const introProseClass =
  'text-right [&_p]:!text-[16px] md:[&_p]:!text-[18px] [&_p]:!leading-[1.85] [&_p]:!text-slate-700 [&_p+p]:!mt-4 ' +
  '[&_h3]:!text-[20px] md:[&_h3]:!text-[26px] [&_h3]:!font-bold [&_h3]:!leading-snug [&_h3]:!mt-10 [&_h3]:!mb-3 [&_h3]:!text-slate-900 ' +
  '[&_ul]:!mt-4 [&_ul]:!space-y-2 [&_ul]:!pr-5 [&_ul]:!list-disc [&_ul]:!marker:text-blue-500 ' +
  '[&_li]:!text-[16px] md:[&_li]:!text-[18px] [&_li]:!leading-[1.85] [&_li]:!text-slate-700 ' +
  '[&_a]:!text-blue-600 [&_a]:!font-semibold [&_a]:!underline [&_a]:!underline-offset-4 [&_a]:!decoration-blue-200 hover:[&_a]:!text-blue-700 ' +
  '[&_small]:!text-sm md:[&_small]:!text-[16px] [&_small]:!leading-[1.85] [&_small]:!text-slate-600';

const guideBodyClass =
  'text-right space-y-4 [&_p]:!text-[16px] md:[&_p]:!text-[18px] [&_p]:!leading-[1.85] [&_p]:!text-slate-700 [&_p+p]:!mt-4 ' +
  '[&_a]:!text-blue-600 [&_a]:!font-semibold [&_a]:!underline [&_a]:!underline-offset-4 [&_a]:!decoration-blue-200 hover:[&_a]:!text-blue-700 ' +
  '[&_ul]:!mt-4 [&_ul]:!space-y-2 [&_ul]:!pr-5 [&_ul]:!list-disc [&_ul]:!marker:text-blue-500 ' +
  '[&_li]:!text-[16px] md:[&_li]:!text-[18px] [&_li]:!leading-[1.85] [&_li]:!text-slate-700';

const cardLinkClass =
  '[&_a]:!text-blue-600 [&_a]:!font-semibold [&_a]:!underline [&_a]:!underline-offset-4 [&_a]:!decoration-blue-200 hover:[&_a]:!text-blue-700';

export function SeoAfterFormSection({
  formId,
  sectionDomId,
  h2,
  h2ClassName,
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
        className="relative border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-blue-50/35 to-slate-50 py-14 md:py-20"
        dir="rtl"
        aria-labelledby={`${sectionDomId}-h2`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-[980px] px-6">
          <header>
            <h2
              id={`${sectionDomId}-h2`}
              className={`text-center text-[30px] font-extrabold leading-tight text-slate-900 md:text-[42px] ${h2ClassName ?? ''}`}
            >
              {h2}
            </h2>
          </header>

          <div className={`mt-8 ${introProseClass}`}>{intro}</div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-7">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              >
                <h3 className="text-lg font-bold text-slate-900 md:text-[20px]">{card.title}</h3>
                <div
                  className={`mt-2 text-sm leading-[1.85] text-slate-600 md:text-[16px] ${cardLinkClass}`}
                >
                  {card.body}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
            {guideBlocks.map((block, i) => (
              <div key={i} className={i === 0 ? '' : 'mt-8'}>
                <h3 className="text-xl font-bold leading-snug text-slate-900 md:text-[26px]">{block.title}</h3>
                <div className={`mt-3 ${guideBodyClass}`}>{block.content}</div>
              </div>
            ))}
          </div>

          <div className="mb-12 mt-10 text-right" role="region" aria-labelledby={`${sectionDomId}-faq-h3`}>
            <h3
              id={`${sectionDomId}-faq-h3`}
              className="text-xl font-bold leading-snug text-slate-900 md:text-[26px]"
            >
              שאלות נפוצות
            </h3>
            <div className="mt-6 space-y-3">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:shadow-md md:py-5"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none md:text-[18px] [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3 text-right">
                      <span>{item.question}</span>
                      <ChevronDown
                        className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 transition-transform group-open:-rotate-180"
                        aria-hidden
                      />
                    </span>
                  </summary>
                  <div
                    className={`mt-3 border-t border-slate-100 pt-3 text-right text-sm leading-[1.85] text-slate-600 md:text-[16px] ${cardLinkClass}`}
                  >
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-between gap-6 rounded-3xl border border-blue-200/60 bg-gradient-to-l from-white to-blue-50/50 px-6 py-8 text-right shadow-sm md:flex-row md:items-center">
            <p className="text-base font-medium leading-[1.85] text-slate-700 md:max-w-xl md:text-[18px]">
              רוצים לדבר על הצעד הבא? השאירו פרטים בטופס למעלה - דקל דיגיטל יחזרו אליכם עם הצעדים הבאים.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex shrink-0 items-center justify-center self-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:self-auto"
            >
              {ctaLabel}
            </button>
          </div>

          <p className="mt-10 text-right text-sm leading-relaxed text-slate-600 md:text-[16px]" lang="he">
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
    <Link
      to={to}
      className="font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-700"
    >
      {children}
    </Link>
  );
}
