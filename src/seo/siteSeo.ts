/** דומיין קנוני לאתר (תואם canonical בבלוג וב־sitemap) */
export const SITE_ORIGIN = 'https://www.dekeldigital.co.il';

export type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

export function canonicalUrl(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${p === '//' ? '/' : p}`;
}
