import InnerPageShell from '../components/site/InnerPageShell';
import AdsCarouselSection from '../components/site/adsCarouselSection';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { adsSeoAfterForm } from '../content/seoAdsAfterForm';
import { adsPageSeo } from '../seo/pageMeta';

export default function DesignedAds() {
  return (
    <InnerPageShell
      title="מודעות שעיצבנו לכם"
      subtitle="קריאייטיבים שנועדו לעצור גלילה ולהניע לפעולה"
      seo={adsPageSeo}
    >
      <AdsCarouselSection hideIntro />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...adsSeoAfterForm} />
    </InnerPageShell>
  );
}
