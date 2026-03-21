/** מיפוי slug באנגלית (קבצי /img/ads/) ↔ נתיב legacy ב-public */
export type AdCarouselEntry = { slug: string; legacySrc: string };

export const adCarouselImages: AdCarouselEntry[] = [
  { slug: 'boutique-magurim', legacySrc: '/מגורי בוטיק.png' },
  { slug: 'genesis-bike', legacySrc: '/genesis_bike.jfif' },
  { slug: 'rega-news', legacySrc: '/רגע ניוס.jpeg' },
  { slug: 'larnaka-2502', legacySrc: '/לרנקה 2502.png' },
  { slug: 'cruise-post', legacySrc: '/פו2סט קרוז.jpg' },
  { slug: 'atem-haltem', legacySrc: '/אתם החלטתם.png' },
  { slug: 'chofesh-reviva', legacySrc: '/חופשת רכיבה במגוון יעדים.jpg' },
  { slug: 'ready-rook', legacySrc: '/מוכן לחשוב כמו תוקף.png' },
  { slug: 'gil-p2ost', legacySrc: '/gil p2ost.jpg' },
  { slug: 'tsvi-yehezkeli', legacySrc: '/צבי יחזקאלי.jpeg.jpeg' },
  { slug: 'deal-kosher-place', legacySrc: '/מבצע כולל מקום כשר.jpg2.jpg' },
  { slug: 'sharon-gal-follow', legacySrc: '/שרון גל הזמנה לעקוב.png' },
  { slug: 'photography-rolling', legacySrc: '/מסע צילום מתגלגל.jpg' },
  { slug: 'post-tzuna', legacySrc: '/פוסט תזונה.jpg' },
];

export const adCarouselSrcSet = (slug: string) =>
  `/img/ads/${slug}-320.webp 320w, /img/ads/${slug}-640.webp 640w, /img/ads/${slug}-960.webp 960w`;

export const adCarouselSizes = '(max-width: 640px) 80vw, (max-width: 1024px) 420px, 420px';
