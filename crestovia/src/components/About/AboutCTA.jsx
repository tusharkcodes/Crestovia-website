import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { aboutCta } from '../../data/about';
import { fadeInUp } from '../../utils/animations';

export default function AboutCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {aboutCta.title}
          </h2>
          <Link
            to={aboutCta.buttonHref}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/40"
          >
            {aboutCta.buttonLabel}
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
