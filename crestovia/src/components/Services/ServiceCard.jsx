import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { getServiceSeo } from '../../data/seo';

export default function ServiceCard({ service, index, compact = false }) {
  const Icon = service.icon;
  const iconSize = compact ? 28 : (service.iconSize ?? 48);
  const href = getServiceSeo(service.id).path || `/services/${service.id}`;

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
      className={`card-premium group relative flex h-full flex-col ${
        compact ? 'rounded-xl p-3.5 sm:p-4 lg:p-5' : 'p-6 sm:p-8'
      }`}
    >
      <Link to={href} className="flex h-full min-h-0 flex-1 flex-col">
        <div
          className={`mb-3 inline-flex shrink-0 items-center justify-center rounded-lg bg-surface-alt sm:mb-3.5 ${
            compact ? 'h-10 w-10 sm:h-11 sm:w-11' : 'mb-6 h-16 w-16 rounded-xl'
          }`}
        >
          <Icon size={iconSize} />
        </div>

        <h3
          className={`mb-1.5 font-bold leading-snug text-foreground ${
            compact ? 'text-xs sm:text-sm lg:text-[15px]' : 'mb-3 text-xl'
          }`}
        >
          {service.name}
        </h3>
        <p
          className={`mb-3 flex-grow leading-relaxed text-muted ${
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
