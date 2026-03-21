import { Helmet } from 'react-helmet-async';
import { SITE_ORIGIN, buildBreadcrumbJsonLd, type BreadcrumbItem } from './siteSeo';

type Props = {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumbItems: BreadcrumbItem[];
};

export function PageHelmet({ title, description, canonicalPath, breadcrumbItems }: Props) {
  const path = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const url = `${SITE_ORIGIN}${path === '/' ? '/' : path}`;
  const breadcrumbLd = buildBreadcrumbJsonLd(breadcrumbItems);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="he_IL" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
    </Helmet>
  );
}
