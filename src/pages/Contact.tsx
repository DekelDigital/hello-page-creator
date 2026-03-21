import InnerPageShell from '../components/site/InnerPageShell';
import LeadForm from '../components/site/LeadForm';

export default function Contact() {
  return (
    <InnerPageShell
      title="יצירת קשר"
      description="יצירת קשר עם דקל דיגיטל: השאירו שם, טלפון, אימייל ושם העסק ונציג יחזור אליכם."
      metaTitle="יצירת קשר | Dekel Digital"
    >
      <LeadForm id="contact" />
    </InnerPageShell>
  );
}
