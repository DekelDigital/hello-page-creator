import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** גלילה לראש העמוד בכל מעבר בין routes (קישורי פוטר, תפריט וכו׳). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
