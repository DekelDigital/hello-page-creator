import InnerPageShell from '../components/site/InnerPageShell';
import ServicesSection from '../components/site/servicesSection';
import LeadForm from '../components/site/LeadForm';
import { SeoAfterFormSection } from '../components/site/SeoAfterFormSection';
import { campaignsSeoAfterForm } from '../content/seoCampaignsAfterForm';
import { campaignsPageSeo } from '../seo/pageMeta';

export default function CampaignManagement() {
  return (
    <InnerPageShell hidePageHeading seo={campaignsPageSeo}>
      <ServicesSection
        compactTop
        sectionTitle="ניהול קמפיינים"
        sectionSubtitle={
          'הפלטפורמות המובילות בעולם: מטא אדס, גוגל אדס וטיקטוק אדס -\nעם האסטרטגיה המנצחת של דקל דיגיטל'
        }
      />
      <LeadForm id="contact" />
      <SeoAfterFormSection formId="contact" {...campaignsSeoAfterForm} />
    </InnerPageShell>
  );
}
