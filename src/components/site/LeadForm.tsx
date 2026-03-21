import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function LeadForm({ id }: { id: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    const form = e.target as HTMLFormElement;
    const name = (form.querySelector(`#${id}-name`) as HTMLInputElement).value.trim();
    const phone = (form.querySelector(`#${id}-phone`) as HTMLInputElement).value.trim();
    const email = (form.querySelector(`#${id}-email`) as HTMLInputElement).value.trim();
    const business = (form.querySelector(`#${id}-business`) as HTMLInputElement).value.trim();

    if (name.length < 2) newErrors.name = 'יש להזין שם מלא';
    if (!/^[\d\-+() ]{7,15}$/.test(phone)) newErrors.phone = 'מספר טלפון לא תקין';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'כתובת אימייל לא תקינה';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');
    try {
      await fetch('https://hook.eu2.make.com/070bm6py44qy5j8f3nd89u593hq97xe3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, business }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-blue-50 rounded-[2rem] p-12 text-center border border-blue-100 h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-blue-900 mb-4">הפרטים התקבלו בהצלחה!</h3>
        <p className="text-xl text-blue-700">
          נציג מטעמנו יחזור אליך בהקדם עם תוכנית פעולה.
        </p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id={id}
      className="bg-[#3b82f6] relative py-16 md:py-24 w-full"
      tabIndex={-1}
    >
      <svg className="hidden md:block absolute top-0 right-0 h-full w-64 text-white/20 pointer-events-none transform translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 Q50,50 0,100 L100,100 L100,0 Z" fill="currentColor" />
      </svg>
      <svg className="hidden md:block absolute top-0 left-0 h-full w-64 text-white/20 pointer-events-none transform -translate-x-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100,0 Q50,50 100,100 L0,100 L0,0 Z" fill="currentColor" />
      </svg>

      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[120%] h-[45%] rounded-[50%] bg-white/10" />
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[110%] h-[40%] rounded-[50%] bg-white/8" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-sm">
            מוכנים למהלך הבא?
          </h3>
          <p className="text-2xl md:text-3xl text-white/90 font-medium drop-shadow-sm max-w-4xl mx-auto">
            משאירים פרטים - דקל דיגיטל דואגים לכל השאר
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-6 mb-6 items-stretch justify-center">
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input
                type="text"
                id={`${id}-name`}
                required
                dir="rtl"
                onChange={() => setErrors((prev) => ({ ...prev, name: undefined }))}
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="שם מלא"
              />
              {errors.name && <p className="text-black text-base mt-2 text-center">{errors.name}</p>}
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input
                type="tel"
                id={`${id}-phone`}
                required
                dir="rtl"
                onChange={() => setErrors((prev) => ({ ...prev, phone: undefined }))}
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="מספר טלפון"
              />
              {errors.phone && <p className="text-black text-base mt-2 text-center">{errors.phone}</p>}
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input
                type="email"
                id={`${id}-email`}
                required
                dir="rtl"
                onChange={() => setErrors((prev) => ({ ...prev, email: undefined }))}
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="אימייל"
              />
              {errors.email && <p className="text-black text-base mt-2 text-center">{errors.email}</p>}
            </div>
            <div className="flex-1 min-w-[300px] max-w-[800px] w-full mx-auto xl:mx-0">
              <input
                type="text"
                id={`${id}-business`}
                required
                dir="rtl"
                className="w-full px-8 py-2.5 md:py-4 bg-white border-0 rounded-full focus:ring-4 focus:ring-blue-300 transition-all text-xl md:text-2xl text-slate-900 placeholder:text-slate-500 text-right md:text-center outline-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium h-full"
                placeholder="שם העסק"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full max-w-[400px] py-4 px-8 bg-black hover:bg-slate-900 text-white text-xl md:text-2xl font-bold rounded-full transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 disabled:opacity-70 flex justify-center items-center gap-4 group whitespace-nowrap"
            >
              {status === 'submitting' ? (
                <span className="animate-pulse">שולח...</span>
              ) : (
                <>
                  שליחת פרטים
                  <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                    <ArrowLeft size={24} />
                  </div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
