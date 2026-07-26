import { motion } from 'framer-motion';
import { contactHero } from '../../data/contact';
import PageHeroBackdrop, { PAGE_HERO_GRADIENT } from '../Hero/PageHeroBackdrop';

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20"
      style={{ background: PAGE_HERO_GRADIENT }}
    >
      <PageHeroBackdrop />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block text-xl font-bold uppercase tracking-widest text-[#FF7A00]">
            {contactHero.eyebrow}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {contactHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {contactHero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
