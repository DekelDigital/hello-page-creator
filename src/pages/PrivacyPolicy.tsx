import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="text-blue-600 hover:underline mb-8 inline-block">← חזרה לעמוד הראשי</Link>
        <h1 className="text-4xl font-bold mb-8">מדיניות פרטיות</h1>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך בעת השימוש באתר שלנו.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">איסוף מידע</h2>
          <p>אנו עשויים לאסוף מידע אישי כגון שם, כתובת דוא"ל ומספר טלפון כאשר אתה ממלא טפסים באתר שלנו או יוצר איתנו קשר.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">שימוש במידע</h2>
          <p>המידע שנאסף משמש אותנו לצורך מתן שירותים, שיפור חוויית המשתמש ויצירת קשר עם לקוחות פוטנציאליים.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">אבטחת מידע</h2>
          <p>אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע האישי שלך מפני גישה בלתי מורשית, שינוי, חשיפה או השמדה.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">עוגיות (Cookies)</h2>
          <p>האתר שלנו עשוי להשתמש בעוגיות כדי לשפר את חוויית הגלישה שלך. באפשרותך לנהל את הגדרות העוגיות דרך הדפדפן שלך.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8">יצירת קשר</h2>
          <p>לשאלות בנוגע למדיניות הפרטיות שלנו, ניתן ליצור איתנו קשר דרך פרטי ההתקשרות המופיעים באתר.</p>
        </div>
      </div>
    </div>
  );
}
