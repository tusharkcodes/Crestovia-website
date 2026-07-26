import { motion } from 'framer-motion';
import { vision, mission } from '../../data/about';
import { fadeInUp } from '../../utils/animations';
import AboutImage from './AboutImage';
import visionImage from '../../assets/about/vision.png';
import missionImage from '../../assets/about/mission.png';

function ContentCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-8 shadow-xl shadow-primary/5 sm:p-10 lg:p-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg lg:text-xl lg:leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function VisionMission() {
  return (
    <>
      <section className="section-padding section-alt">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
            >
              <ContentCard title={vision.title} description={vision.description} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              custom={0.1}
            >
              <AboutImage
                src={visionImage}
                alt="Team collaborating on design and strategy for our vision"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt/50">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <AboutImage
                src={missionImage}
                alt="Team working together on puzzle pieces representing our mission"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              custom={0.1}
              className="order-1 lg:order-2"
            >
              <ContentCard title={mission.title} description={mission.description} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
