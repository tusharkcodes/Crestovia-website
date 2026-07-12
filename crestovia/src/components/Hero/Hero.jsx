import { lazy, Suspense, useEffect, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

const RotatingTypewriter = lazy(() => import('./RotatingTypewriter'));

const HERO_SUBHEADING =
  'We help ambitious businesses grow through data-driven marketing, creative design, and intelligent technology solutions that generate measurable business results.';

function HeroBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,0.35),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(212,175,55,0.12),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
    </>
  );
}

function SpecialtyLine() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-2 text-center sm:mt-10 sm:flex-row sm:gap-3">
      <p className="text-sm font-medium tracking-wide text-white/70 sm:text-base">
        We specialize in
      </p>
      <div className="relative flex min-h-[1.75rem] w-full max-w-md items-center justify-center sm:min-h-[2rem] sm:w-auto sm:max-w-none">
        {ready ? (
          <Suspense
            fallback={
              <span className="text-base font-semibold text-gold sm:text-lg">
                Performance Marketing
              </span>
            }
          >
            <RotatingTypewriter className="text-base font-semibold sm:text-lg md:text-xl" />
          </Suspense>
        ) : (
          <span className="text-base font-semibold text-gold sm:text-lg">
            Performance Marketing
          </span>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#0c1f3d] pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      <HeroBackdrop />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
         {/*  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-md sm:text-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Premium Digital Marketing
          </div> */}

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Crest<span className='text-[#d4af37]'>ovia</span>
            <span className="mt-2 block text-gradient">{company.tagline}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg">
            {HERO_SUBHEADING}
          </p>

          <SpecialtyLine />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/40 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/50 sm:w-auto"
            >
              Get Started
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/our-work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-gold/50 hover:bg-white/15 sm:w-auto"
            >
              View Our Work
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
