import InnerPageShell from '../components/site/InnerPageShell';
import { AboutSection, AboutStrategySection } from '../components/site/aboutSections';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { aboutSeoAfterForm } from '../content/seoAboutAfterForm';
import { aboutPageSeo } from '../seo/pageMeta';

export default function AboutUs() {
  return (
    <InnerPageShell title="מי אנחנו" seo={aboutPageSeo}>
      <AboutSection hideMainHeading contactFormId="contact" />
      <AboutStrategySection />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...aboutSeoAfterForm} />
    </InnerPageShell>
  );
}
