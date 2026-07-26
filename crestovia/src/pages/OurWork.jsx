import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OurWorkHero from '../components/OurWork/OurWorkHero';
import CategoryTabs from '../components/OurWork/CategoryTabs';
import ProjectShowcase from '../components/OurWork/ProjectShowcase';
import ProjectModal from '../components/OurWork/ProjectModal';
import SEO from '../components/seo/SEO';
import { OrganizationSchema, WebPageSchema } from '../components/seo/Schema';
import { getProjectById } from '../data/projects';
import { pageSeo } from '../data/seo';

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('real-estate');
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
  const seo = pageSeo.portfolio;
  const canonical = location.pathname === '/our-work' ? '/our-work' : seo.path;

  return (
    <>
      <SEO {...seo} canonical={canonical} />
      <OrganizationSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={canonical} />
      <Navbar />
      <main className="min-h-screen bg-background">
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
    </>
  );
}
