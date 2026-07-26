import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Projects from '../components/Projects/Projects';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import FAQSection from '../components/FAQ/FAQSection';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo/SEO';
import {
  FAQPageSchema,
  OrganizationSchema,
  PersonSchema,
  WebsiteSchema,
  WebPageSchema,
} from '../components/seo/Schema';
import { pageSeo } from '../data/seo';
import { faqs } from '../data/faq';

export default function Home() {
  const seo = pageSeo.home;

  return (
    <>
      <SEO {...seo} canonical={seo.path} />
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema title={seo.title} description={seo.description} path="/" />
      <PersonSchema />
      <FAQPageSchema faqs={faqs} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Projects />
        <AboutCompany />
        <FAQSection withSchema={false} />
      </main>
      <Footer />
    </>
  );
}
