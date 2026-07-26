import { motion } from 'framer-motion';
import { whoWeAre } from '../../data/about';
import { fadeInUp } from '../../utils/animations';
import AboutImage from './AboutImage';
import whoWeAreImage from '../../assets/about/who-we-are.png';

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">
              {whoWeAre.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {whoWeAre.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {whoWeAre.intro}
            </p>
            <p className="mt-4 text-sm font-medium text-foreground sm:text-base">
              We specialize in:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {whoWeAre.specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0.1}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
              <AboutImage
                src={whoWeAreImage}
                alt="Diverse team representing who we are at Crestovia"
                aspect="aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
