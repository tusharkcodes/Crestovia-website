import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { getCategoryLabel } from '../../data/projects';
import { getProjectImagesBySlug } from '../../utils/loadAssets';

export default function ProjectModal({ project, onClose }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const images = project?.imageSlug ? getProjectImagesBySlug(project.imageSlug) : [];
  const heroImage = images[0] ?? null;
  const categoryLabel = getCategoryLabel(project.categoryId);
  const isDiagram = project.categoryId === 'ai-web-app';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        setGalleryIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        setGalleryIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, images.length]);

  useEffect(() => {
    setGalleryIndex(0);
  }, [project.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-colors hover:bg-white"
          aria-label="Close"
        >
          <HiX size={20} />
        </button>

        <div className="overflow-y-auto">
          {/* Hero image */}
          <div className={`relative aspect-[16/9] shrink-0 ${isDiagram ? 'bg-surface' : 'bg-surface-alt'}`}>
            {heroImage ? (
              <img
                src={heroImage}
                alt={project.title}
                className={`h-full w-full ${isDiagram ? 'object-contain p-4' : 'object-cover'}`}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface-alt to-border">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted">
                  {categoryLabel}
                </span>
              </div>
            )}
            <div className={`absolute inset-0 ${isDiagram ? 'bg-gradient-to-t from-primary/70 via-transparent to-transparent' : 'bg-gradient-to-t from-primary/50 via-transparent to-transparent'}`} />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                {categoryLabel}
              </span>
              <h2
                id="project-modal-title"
                className="mt-2 text-2xl font-extrabold text-white sm:text-3xl"
              >
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Description & tags */}
            <p className="text-base leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 px-5 py-2.5"
              >
                Visit {project.url.replace(/^https?:\/\//, '')}
                <HiExternalLink size={16} />
              </a>
            )}

            {/* Gallery */}
            {images.length > 1 && (
              <section className="mt-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                  Gallery
                </h3>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={images[galleryIndex]}
                    alt={`${project.title} ${galleryIndex + 1}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setGalleryIndex((i) => (i - 1 + images.length) % images.length)
                    }
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md"
                    aria-label="Previous image"
                  >
                    <HiChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setGalleryIndex((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md"
                    aria-label="Next image"
                  >
                    <HiChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setGalleryIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === galleryIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Project details */}
            <section className="mt-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
                Project Details
              </h3>
              <div className="space-y-5">
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Challenge', value: project.challenge },
                  { label: 'Solution', value: project.solution },
                  { label: 'Process', value: project.process },
                  { label: 'Final Result', value: project.result },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl border border-border bg-surface-alt/50 p-4">
                    <h4 className="text-sm font-bold text-foreground">{label}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            {project.services?.length > 0 && (
              <section className="mt-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                  Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {project.metrics?.length > 0 && (
              <section className="mt-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                  Results
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm"
                    >
                      <p className="text-xl font-extrabold text-primary">{metric.value}</p>
                      <p className="mt-1 text-xs text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
