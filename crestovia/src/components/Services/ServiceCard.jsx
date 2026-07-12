import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function ServiceCard({ service, index, compact = false }) {
  const Icon = service.icon;
  const iconSize = compact ? 28 : (service.iconSize ?? 48);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col rounded-xl border border-slate-100 bg-white shadow-md shadow-navy/5 transition-shadow duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 ${
        compact ? 'p-3.5 sm:p-4 lg:p-5' : 'rounded-2xl p-6 shadow-lg sm:p-8'
      }`}
    >
      <Link to={`/services/${service.id}`} className="flex h-full min-h-0 flex-1 flex-col">
        <div
          className={`mb-3 inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-50 sm:mb-3.5 ${
            compact ? 'h-10 w-10 sm:h-11 sm:w-11' : 'mb-6 h-16 w-16 rounded-xl'
          }`}
        >
          <Icon size={iconSize} />
        </div>

        <h3
          className={`mb-1.5 font-bold leading-snug text-navy ${
            compact ? 'text-xs sm:text-sm lg:text-[15px]' : 'mb-3 text-xl'
          }`}
        >
          {service.name}
        </h3>
        <p
          className={`mb-3 flex-grow leading-relaxed text-slate-500 ${
            compact
              ? 'line-clamp-3 text-[11px] sm:line-clamp-4 sm:text-xs lg:text-[13px] lg:leading-relaxed'
              : 'mb-6 text-sm sm:text-base'
          }`}
        >
          {service.description}
        </p>

        <div
          className={`mt-auto flex items-center gap-1.5 font-semibold text-primary ${
            compact ? 'text-[11px] sm:text-xs' : 'gap-2 text-sm'
          }`}
        >
          <span>Learn more</span>
          <HiArrowRight
            size={compact ? 12 : 16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.article>
  );
}
