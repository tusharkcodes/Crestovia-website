import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-navy/5 transition-shadow duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 sm:p-8"
    >
      <Link to={`/services/${service.id}`} className="flex flex-1 flex-col">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50">
          <Icon size={service.iconSize ?? 48} />
        </div>

        <h3 className="mb-3 text-xl font-bold text-navy">{service.name}</h3>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-500 sm:text-base">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <span>Learn more</span>
          <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
}
