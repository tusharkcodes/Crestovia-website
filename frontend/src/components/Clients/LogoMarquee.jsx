import { motion } from 'framer-motion';
import { loadClientLogos } from '../../utils/loadAssets';
import LogoCard from './LogoCard';

export default function LogoMarquee() {
  const logos = loadClientLogos();

  if (logos.length === 0) {
    return (
      <p className="text-center text-sm text-white/50">
        Add client logos to <code className="text-gold">src/assets/clients/</code>
      </p>
    );
  }

  const repeatCount = logos.length <= 3 ? 4 : 2;
  const duplicated = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <div className="space-y-12">
      {/* Featured large display for immediate impact */}
      {/* <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-14"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={`featured-${logo.name}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group relative flex h-40 w-64 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white p-8 shadow-2xl shadow-primary/20 sm:h-48 sm:w-80 md:h-56 md:w-96 lg:h-64 lg:w-[28rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-gold/10" />
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="relative z-10 max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
            />
            <p className="absolute bottom-4 left-0 right-0 z-20 text-center text-sm font-bold uppercase tracking-[0.2em] text-navy/70">
              {logo.name}
            </p>
          </motion.div>
        ))}
      </motion.div> */}

      {/* Infinite marquee — large, full-color, expressive */}
      <div className="relative overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy via-navy/80 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-navy via-navy/80 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14 lg:gap-20">
          {duplicated.map((logo, index) => (
            <LogoCard key={`${logo.name}-${index}`} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
