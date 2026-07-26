import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import WhyContactUs from '../components/Contact/WhyContactUs';
import ContactCTA from '../components/Contact/ContactCTA';
import FAQSection from '../components/FAQ/FAQSection';
import SEO from '../components/seo/SEO';
import { OrganizationSchema, WebPageSchema } from '../components/seo/Schema';
import { pageSeo } from '../data/seo';

export default function Contact() {
  const seo = pageSeo.contact;

  return (
    <>
      <SEO {...seo} canonical={seo.path} />
      <OrganizationSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={seo.path} />
      <Navbar />
      <main className="min-h-screen bg-background">
        <ContactHero />
        <div id="contact-form">
          <ContactSection />
        </div>
        <WhyContactUs />
        <FAQSection
          title="Questions before you reach out?"
          subtitle="Common questions about working with Crestovia, a digital marketing agency in Pune."
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
