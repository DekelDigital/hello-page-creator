import { Link } from 'react-router-dom';

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="text-blue-600 hover:underline mb-8 inline-block">← חזרה לעמוד הראשי</Link>
        <h1 className="text-4xl font-bold mb-8">הצהרת נגישות</h1>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>אנו מחויבים להנגשת האתר שלנו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות, וזאת בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ"ח-1998.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">פעולות הנגשה שבוצעו</h2>
          <p>האתר עבר התאמות נגישות על מנת להבטיח חוויית גלישה נוחה ושוויונית לכלל המשתמשים. אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">אמצעי נגישות באתר</h2>
          <p>האתר מותאם לשימוש עם טכנולוגיות מסייעות כגון קוראי מסך, ותומך בניווט באמצעות מקלדת.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">דרכי פנייה בנושא נגישות</h2>
          <p>אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו ואנו נפעל לתקן את הבעיה בהקדם האפשרי. ניתן ליצור איתנו קשר דרך פרטי ההתקשרות המופיעים באתר.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">תאריך עדכון</h2>
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך מרץ 2026.</p>
        </div>
      </div>
    </div>
  );
}
