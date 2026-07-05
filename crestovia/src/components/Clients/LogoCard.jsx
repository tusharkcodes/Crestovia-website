import { motion } from 'framer-motion';

export default function LogoCard({ logo, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex h-36 w-56 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white p-6 shadow-2xl shadow-black/30 sm:h-44 sm:w-72 md:h-52 md:w-80 lg:h-56 lg:w-96"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]" />

      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-navy/90 to-transparent px-4 py-3 transition-transform duration-500 group-hover:translate-y-0">
        <p className="truncate text-center text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
          {logo.name}
        </p>
      </div>
    </motion.div>
  );
}
