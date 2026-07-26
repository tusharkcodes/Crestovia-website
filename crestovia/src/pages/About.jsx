import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import WhatWeStandFor from '../components/About/WhatWeStandFor';
import VisionMission from '../components/About/VisionMission';
import AboutCTA from '../components/About/AboutCTA';
import SEO from '../components/seo/SEO';
import { OrganizationSchema, PersonSchema, WebPageSchema } from '../components/seo/Schema';
import { pageSeo } from '../data/seo';

export default function About() {
  const seo = pageSeo.about;

  return (
    <>
      <SEO {...seo} canonical={seo.path} />
      <OrganizationSchema />
      <PersonSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={seo.path} />
      <Navbar />
      <main className="min-h-screen bg-background">
        <AboutHero />
        <WhoWeAre />
        <WhatWeStandFor />
        <VisionMission />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
