import { motion } from 'framer-motion';
import { contactCta } from '../../data/contact';
import { fadeInUp } from '../../utils/animations';

export default function ContactCTA() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_45%)]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {contactCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {contactCta.description}
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-sm font-semibold text-gold backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-gold hover:text-navy"
          >
            {contactCta.buttonLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
