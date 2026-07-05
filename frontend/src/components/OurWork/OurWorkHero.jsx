import { motion } from 'framer-motion';

export default function OurWorkHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block font-bold text-xl uppercase tracking-widest text-gold">
            Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Work
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Every project represents a business challenge solved through creativity,
            marketing, design, and technology. Explore how we help brands grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
