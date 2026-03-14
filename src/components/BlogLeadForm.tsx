import React, { useState } from 'react';

interface BlogLeadFormProps {
  compact?: boolean;
}

export default function BlogLeadForm({ compact }: BlogLeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', business: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://hook.eu2.make.com/your-webhook-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-blue-50 border border-blue-200 rounded-2xl ${compact ? 'p-4' : 'p-8'} text-center`}>
        <p className="text-2xl font-bold text-blue-700 mb-2">קיבלנו! 🎯</p>
        <p className="text-lg text-slate-600">נחזור אליכם בהקדם עם כיוון ברור.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-slate-200 rounded-2xl shadow-lg ${compact ? 'p-4' : 'p-8'}`} dir="rtl">
      <h3 className={`font-bold text-slate-900 mb-2 ${compact ? 'text-xl' : 'text-2xl'}`}>
        משאירים פרטים ואנחנו חוזרים עם כיוון ברור
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          placeholder="שם מלא"
          required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-right text-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          placeholder="טלפון"
          required
          value={form.phone}
          onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-right text-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="שם העסק"
          value={form.business}
          onChange={e => setForm({...form, business: e.target.value})}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-right text-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="אימייל"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-right text-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-colors disabled:opacity-60"
        >
          {loading ? 'שולח...' : 'בואו נעשה את המהלך הבא'}
        </button>
      </form>
    </div>
  );
}
