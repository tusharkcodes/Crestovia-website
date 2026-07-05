import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import WhatWeStandFor from '../components/About/WhatWeStandFor';
import VisionMission from '../components/About/VisionMission';
import AboutCTA from '../components/About/AboutCTA';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <main className="min-h-screen bg-white">
        <AboutHero />
        <WhoWeAre />
        <WhatWeStandFor />
        <VisionMission />
        <AboutCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
