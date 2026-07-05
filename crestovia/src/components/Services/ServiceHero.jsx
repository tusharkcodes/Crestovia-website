import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function ServiceHero({ service }) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="mb-4 inline-block text-xl font-bold uppercase tracking-widest text-gold">
              Our Services
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90">{service.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {service.heroDescription}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-lg transition-all hover:bg-gold hover:text-navy"
            >
              Get Started
              <HiArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-56 sm:w-56">
              <Icon size={service.iconSize ?? 100} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
