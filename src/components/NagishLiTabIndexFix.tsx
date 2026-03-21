import { useEffect } from 'react';

/** מתקן tabindex>0 של שורת נגישלי אחרי טעינת הסקריפט */
export default function NagishLiTabIndexFix() {
  useEffect(() => {
    const fix = () => {
      const el = document.getElementById('NagishLiBarStrip');
      if (!el) return;
      const t = el.getAttribute('tabindex');
      if (t !== null && t !== '0' && t !== '-1') {
        el.setAttribute('tabindex', '0');
      }
    };

    fix();
    const obs = new MutationObserver(fix);
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['tabindex', 'id'],
    });
    const id = window.setInterval(fix, 400);
    return () => {
      obs.disconnect();
      window.clearInterval(id);
    };
  }, []);

  return null;
}
