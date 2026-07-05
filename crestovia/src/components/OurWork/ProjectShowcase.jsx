import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectsByCategory } from '../../data/projects';
import { getProjectImagesBySlug } from '../../utils/loadAssets';
import WorkProjectCard from './WorkProjectCard';

const SCROLL_SPEED = 0.4;

export default function ProjectShowcase({ activeCategory, onViewProject }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const projects = getProjectsByCategory(activeCategory);

  const projectsWithImages = projects.map((project) => ({
    ...project,
    previewImage: project.imageSlug
      ? getProjectImagesBySlug(project.imageSlug)[0] ?? null
      : null,
  }));

  const showcaseItems = [...projectsWithImages, ...projectsWithImages];

  const handleWheel = useCallback((e) => {
    const el = scrollRef.current;
    if (!el || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel, activeCategory]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused || projects.length === 0) return;

    let frameId;
    const step = () => {
      el.scrollLeft += SCROLL_SPEED;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, activeCategory, projects.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  return (
    <div className="relative bg-slate-50/50 py-10 sm:py-14">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {projects.length === 0 ? (
              <p className="py-20 text-center text-slate-400">Projects coming soon.</p>
            ) : (
              <div
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {showcaseItems.map((project, index) => (
                  <WorkProjectCard
                    key={`${project.id}-${index}`}
                    project={project}
                    previewImage={project.previewImage}
                    onViewProject={onViewProject}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50/50 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50/50 to-transparent sm:w-20" />
    </div>
  );
}
