import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import WhyContactUs from '../components/Contact/WhyContactUs';
import ContactCTA from '../components/Contact/ContactCTA';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <ContactHero />
        <div id="contact-form">
          <ContactSection />
        </div>
        <WhyContactUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
