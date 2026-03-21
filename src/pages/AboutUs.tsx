import InnerPageShell from '../components/site/InnerPageShell';
import { AboutSection, AboutStrategySection } from '../components/site/aboutSections';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { aboutSeoAfterForm } from '../content/seoAboutAfterForm';

export default function AboutUs() {
  return (
    <InnerPageShell
      title="מי אנחנו"
      description="דקל דיגיטל: ניסיון בניהול קמפיינים ממומנים, לידים מדויקים ושקיפות מלאה. הכירו את הצוות והגישה שלנו."
      metaTitle="מי אנחנו | Dekel Digital"
    >
      <AboutSection hideMainHeading contactFormId="contact" />
      <AboutStrategySection />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...aboutSeoAfterForm} />
    </InnerPageShell>
  );
}
