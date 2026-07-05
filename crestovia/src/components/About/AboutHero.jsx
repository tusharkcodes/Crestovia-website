import { motion } from 'framer-motion';
import { aboutHero } from '../../data/about';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.08),transparent_45%)]" />
      <div className="absolute -right-24 top-1/4 h-64 w-64 rounded-full border border-white/5 bg-white/[0.02]" />
      <div className="absolute -left-16 bottom-1/4 h-48 w-48 rounded-full border border-gold/10 bg-gold/[0.03]" />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block text-xl font-bold uppercase tracking-widest text-gold">
            {aboutHero.eyebrow}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {aboutHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {aboutHero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
