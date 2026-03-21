import type { BreadcrumbItem } from './siteSeo';

export type PageSeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumbItems: BreadcrumbItem[];
};

/** דף הבית */
export const homePageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - ניהול קמפיינים ממומנים ושיווק מנצח',
  description:
    'דקל דיגיטל מנהלים קמפיינים ממומנים בגוגל אדס מטא אדס וטיקטוק אדס עם מדידה ברורה, מעקב המרות ואופטימיזציה שמייצרת תוצאות. משאירים פרטים ונותנים לנו לדאוג לשיווק.',
  canonicalPath: '/',
  breadcrumbItems: [{ name: 'בית', path: '/' }],
};

export const campaignsPageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - ניהול קמפיינים ממומנים בגוגל מטא וטיקטוק',
  description:
    'שירות ניהול קמפיינים ממומנים בדקל דיגיטל: תכנון, הקמה, מדידה ואופטימיזציה לפי נתונים. ניהול קמפיינים בגוגל אדס, מטא אדס וטיקטוק אדס עם שקיפות ומיקוד בתוצאות',
  canonicalPath: '/campaigns',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'ניהול קמפיינים', path: '/campaigns' },
  ],
};

export const resultsPageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - תוצאות מפרסום ממומן וצילומי מסך אמיתיים',
  description:
    'תוצאות אמיתיות מתוך חשבונות מודעות של לקוחות דקל דיגיטל. צילומי מסך, נתונים ברורים והסבר איך קוראים תוצאות בפרסום ממומן בגוגל אדס ומטא אדס בצורה נכונה',
  canonicalPath: '/results',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'תוצאות', path: '/results' },
  ],
};

export const adsPageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - מודעות וקריאייטיב לקמפיינים ממומנים',
  description:
    'דוגמאות קריאייטיב ומודעות שדקל דיגיטל יצרו לקמפיינים ממומנים. התאמת מסר לקהל, עקביות עם דף נחיתה ושיפור יחס המרה בעזרת פרסום ממומן בגוגל, מטא וטיקטוק',
  canonicalPath: '/ads',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'מודעות', path: '/ads' },
  ],
};

export const contactPageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - צור קשר לשיווק ממומן וניהול קמפיינים',
  description:
    'רוצים להתחיל קמפיינים ממומנים או לשפר ניהול פרסום ממומן? השאירו פרטים בדף יצירת קשר של דקל דיגיטל ונחזור עם כיוון ברור ותוכנית פעולה לגוגל אדס, מטא וטיקטוק',
  canonicalPath: '/contact',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'צור קשר', path: '/contact' },
  ],
};

export const blogPageSeo: PageSeoConfig = {
  title: 'בלוג דקל דיגיטל - טיפים לניהול קמפיינים ושיווק ממומן',
  description:
    'מדריכים ומאמרים של דקל דיגיטל על שיווק ממומן וניהול קמפיינים בגוגל אדס, מטא אדס וטיקטוק אדס. רעיונות לקריאייטיב, מדידה, דף נחיתה ומעקב המרות בצורה ברורה',
  canonicalPath: '/blog',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'בלוג', path: '/blog' },
  ],
};

export const aboutPageSeo: PageSeoConfig = {
  title: 'דקל דיגיטל - מי אנחנו ואיך אנחנו מנהלים קמפיינים ממומנים',
  description:
    'הכירו את דקל דיגיטל ואיך אנחנו עובדים בניהול קמפיינים ממומנים. תהליך עבודה ברור, מדידה, מעקב המרות ואופטימיזציה שמייצרת תוצאות בגוגל אדס, מטא אדס וטיקטוק אדס',
  canonicalPath: '/about',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'מי אנחנו', path: '/about' },
  ],
};

export const privacyPageSeo: PageSeoConfig = {
  title: 'מדיניות פרטיות - דקל דיגיטל',
  description:
    'מדיניות הפרטיות של דקל דיגיטל. פירוט לגבי איסוף מידע, שימוש בפרטים שנשלחים בטפסים, עוגיות, ושמירה על נתונים בהתאם למדיניות האתר',
  canonicalPath: '/privacy',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'מדיניות פרטיות', path: '/privacy' },
  ],
};

export const accessibilityPageSeo: PageSeoConfig = {
  title: 'הצהרת נגישות - דקל דיגיטל',
  description:
    'הצהרת הנגישות של דקל דיגיטל. מידע על התאמות נגישות באתר, אמצעי ניווט, תמיכה בטכנולוגיות מסייעות ודרכי יצירת קשר בנושא נגישות',
  canonicalPath: '/accessibility',
  breadcrumbItems: [
    { name: 'בית', path: '/' },
    { name: 'הצהרת נגישות', path: '/accessibility' },
  ],
};
