import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import WhyContactUs from '../components/Contact/WhyContactUs';
import ContactCTA from '../components/Contact/ContactCTA';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Contact() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
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
    </motion.div>
  );
}
