import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!start) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, numericTarget, duration]);

  return `${count}${suffix}`;
}

export default function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const displayValue = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-white/10 sm:p-8"
    >
      <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        {isInView ? displayValue : '0'}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
        {stat.label}
      </p>
    </motion.div>
  );
}
