import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function ProjectCard({ slug, name, image, index }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-surface shadow-lg shadow-primary/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/15"
    >
      <Link to="/our-work" className="block">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
          <div
            className={`absolute inset-0 z-10 bg-border transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={image}
            alt={name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured Project</p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{name}</h3>
            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span>View Case Study</span>
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
