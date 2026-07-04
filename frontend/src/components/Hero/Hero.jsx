import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

function FloatingBlob({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 5) % 100}%`,
    delay: `${(i * 0.7) % 8}s`,
    size: `${2 + (i % 3)}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-white/30"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `particle-drift ${12 + (p.id % 6)}s linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80 pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      <FloatingBlob className="left-[-10%] top-[10%] h-72 w-72 bg-blue-500/30" delay={0} />
      <FloatingBlob className="right-[-5%] top-[30%] h-96 w-96 bg-cyan-400/20" delay={2} />
      <FloatingBlob className="bottom-[10%] left-[30%] h-64 w-64 bg-primary/40" delay={4} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
      <Particles />

      <div className="container-wide relative z-10 grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Premium Digital Marketing
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            {company.name}
            <span className="mt-2 block text-gradient">{company.tagline}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={0.35}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0"
          >
            {company.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              to="/#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/50 sm:w-auto"
            >
              Get Started
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-white/20 sm:w-auto"
            >
              View Our Work
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-navy/40 p-2 shadow-2xl shadow-black/40 backdrop-blur-sm"
          >
            <div className="overflow-hidden rounded-2xl">
              <video
                className="aspect-[4/3] w-full object-cover sm:aspect-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
              </video>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:-left-6"
            >
              <p className="text-2xl font-bold text-white sm:text-3xl">+450%</p>
              <p className="text-xs text-white/70 sm:text-sm">Lead Increase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -right-4 -top-4 rounded-2xl border border-gold/30 bg-navy/80 p-4 shadow-xl backdrop-blur-xl sm:-right-6 sm:-top-6"
            >
              <p className="text-2xl font-bold text-gold sm:text-3xl">95%</p>
              <p className="text-xs text-white/70 sm:text-sm">Success Rate</p>
            </motion.div>
          </motion.div>

          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/30 to-cyan-400/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
