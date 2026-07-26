import { motion } from 'framer-motion';
import { contactCta } from '../../data/contact';
import { fadeInUp } from '../../utils/animations';

export default function ContactCTA() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(10,52,120,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,122,0,0.1),transparent_45%)]" />

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
            className="btn-cta mt-10"
          >
            {contactCta.buttonLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
