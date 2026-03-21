import InnerPageShell from '../components/site/InnerPageShell';
import LeadForm from '../components/site/LeadForm';
import { contactPageSeo } from '../seo/pageMeta';

export default function Contact() {
  return (
    <InnerPageShell title="יצירת קשר" seo={contactPageSeo}>
      <LeadForm id="contact" />
    </InnerPageShell>
  );
}
