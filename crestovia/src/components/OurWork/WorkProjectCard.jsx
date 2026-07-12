import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { getCategoryLabel } from '../../data/projects';

export default function WorkProjectCard({ project, previewImage, onViewProject }) {
  const categoryLabel = getCategoryLabel(project.categoryId);
  const isDiagram = project.categoryId === 'ai-web-app';

  return (
    <article className="group flex h-full w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-100/80 bg-white/80 shadow-lg shadow-navy/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 sm:w-[340px] lg:w-[380px]">
      <div className={`relative aspect-[4/3] overflow-hidden ${isDiagram ? 'bg-white' : 'bg-slate-100'}`}>
        {previewImage ? (
          <img
            src={previewImage}
            alt={project.title}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              isDiagram ? 'object-contain p-3' : 'object-cover'
            }`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {categoryLabel}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm">
          {categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy sm:text-xl">{project.title}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {project.description}
        </p>

        <motion.button
          type="button"
          whileHover={{ x: 2 }}
          onClick={(e) => {
            e.stopPropagation();
            onViewProject(project);
          }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          View Project
          <HiArrowRight size={16} />
        </motion.button>
      </div>
    </article>
  );
}
