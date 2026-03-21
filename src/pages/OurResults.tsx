import InnerPageShell from '../components/site/InnerPageShell';
import ResultsSection from '../components/site/resultsSection';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { resultsSeoAfterForm } from '../content/seoResultsAfterForm';

export default function OurResults() {
  return (
    <InnerPageShell
      title="התוצאות שלנו"
      subtitle="צילומי מסך אמיתיים מחשבונות מודעות"
      description="תוצאות ולידים אמיתיים מקמפיינים ממומנים בדקל דיגיטל. בקשו סקירה למהלך הבא."
      metaTitle="התוצאות שלנו | Dekel Digital"
    >
      <ResultsSection hideIntro />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...resultsSeoAfterForm} />
    </InnerPageShell>
  );
}
