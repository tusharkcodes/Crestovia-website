import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OurWorkHero from '../components/OurWork/OurWorkHero';
import CategoryTabs from '../components/OurWork/CategoryTabs';
import ProjectShowcase from '../components/OurWork/ProjectShowcase';
import ProjectModal from '../components/OurWork/ProjectModal';
import { getProjectById } from '../data/projects';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('real-estate');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <main className="min-h-screen bg-white">
        <OurWorkHero />
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectShowcase
          activeCategory={activeCategory}
          onViewProject={(project) => setSelectedProject(getProjectById(project.id) ?? project)}
        />
      </main>
      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
