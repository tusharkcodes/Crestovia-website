import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-navy/5 transition-shadow duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/15 sm:p-8"
    >
      <div
        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
      >
        <Icon size={32} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-navy">{service.name}</h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-500 sm:text-base">
        {service.description}
      </p>

      <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>Learn more</span>
        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-blue-600/5 group-hover:opacity-100" />
    </motion.article>
  );
}
