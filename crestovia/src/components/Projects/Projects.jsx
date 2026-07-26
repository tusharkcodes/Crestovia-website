import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { projectsConfig } from '../../data/projects';
import { loadProjectImages } from '../../utils/loadAssets';
import { fadeInUp } from '../../utils/animations';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectImages = loadProjectImages();

  const projects = projectsConfig
    .map((config) => ({
      ...config,
      image: projectImages[config.slug]?.[0] ?? null,
    }))
    .filter((project) => project.image);

  return (
    <section id="projects" className="section-padding bg-surface-alt">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary"
          >
            Portfolio
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            A curated showcase of our finest work across real estate, lifestyle,
            and premium brand campaigns.
          </motion.p>
          <motion.div variants={fadeInUp} custom={0.3}>
            <Link
              to="/our-work"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              View All Case Studies
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">
            Add project images to{' '}
            <code className="text-primary">src/assets/projects/[client-folder]/</code>
          </p>
        )}
      </div>
    </section>
  );
}
