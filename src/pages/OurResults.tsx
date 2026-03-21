import InnerPageShell from '../components/site/InnerPageShell';
import ResultsSection from '../components/site/resultsSection';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { resultsSeoAfterForm } from '../content/seoResultsAfterForm';
import { resultsPageSeo } from '../seo/pageMeta';

export default function OurResults() {
  return (
    <InnerPageShell
      title="התוצאות שלנו"
      subtitle="צילומי מסך אמיתיים מחשבונות מודעות"
      seo={resultsPageSeo}
    >
      <ResultsSection hideIntro />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...resultsSeoAfterForm} />
    </InnerPageShell>
  );
}
