import { useEffect, useMemo, useState } from 'react';

const DEFAULT_ITEMS = [
  'Performance Marketing',
  'Google Ads',
  'Meta Ads',
  'Real Estate Marketing',
  'Social Media Management',
  'Branding & Graphic Design',
  'Video Editing',
  'Web Development',
  'App Development',
  'AI Development',
];

/**
 * Typewriter that cycles through phrases with a blinking cursor.
 * Reserves space with the longest phrase to prevent layout shift.
 */
export default function RotatingTypewriter({
  items = DEFAULT_ITEMS,
  interval = 2500,
  typingSpeed = 42,
  deletingSpeed = 28,
  className = '',
}) {
  const phrases = useMemo(
    () => (items.length > 0 ? items : DEFAULT_ITEMS),
    [items],
  );

  const longest = useMemo(
    () => phrases.reduce((a, b) => (a.length >= b.length ? a : b), ''),
    [phrases],
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | deleting
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(phrases[index]);
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % phrases.length);
      }, interval);
      return () => clearInterval(id);
    }

    const current = phrases[index];
    let timer;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), interval);
      }
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
    } else {
      setIndex((i) => (i + 1) % phrases.length);
      setPhase('typing');
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, phrases, interval, typingSpeed, deletingSpeed, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) setText(phrases[index]);
  }, [index, phrases, reducedMotion]);

  return (
    <span
      className={`relative inline-flex max-w-full justify-center text-center ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="invisible select-none whitespace-nowrap px-1" aria-hidden="true">
        {longest}
      </span>
      <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap px-1">
        <span className="text-gradient-gold">{text}</span>
        {!reducedMotion && (
          <span
            className="typewriter-cursor ml-0.5 inline-block h-[1em] w-[2px] shrink-0 bg-gold align-middle"
            aria-hidden="true"
          />
        )}
      </span>
    </span>
  );
}

export { DEFAULT_ITEMS as specialtyServices };
