import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import PageHeroBackdrop, { PAGE_HERO_GRADIENT } from '../Hero/PageHeroBackdrop';

export default function ServiceHero({ service, breadcrumb = null }) {
  const Icon = service.icon;

  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20"
      style={{ background: PAGE_HERO_GRADIENT }}
    >
      <PageHeroBackdrop />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {breadcrumb}
            <span className="mb-4 inline-block text-xl font-bold uppercase tracking-widest text-[#FF7A00]">
              Our Services
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90">{service.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {service.heroDescription}
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0A3478] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF7A00] hover:text-white"
            >
              Get Started
              <HiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-sm sm:h-56 sm:w-56">
              <Icon size={service.iconSize ?? 100} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
