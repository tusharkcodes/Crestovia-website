import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Projects from '../components/Projects/Projects';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import Footer from '../components/Footer/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Projects />
        <AboutCompany />
      </main>
      <Footer />
    </motion.div>
  );
}
