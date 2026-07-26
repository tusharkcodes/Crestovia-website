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
      {/* Soft radial blue glows */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(17,74,174,0.45),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(10,52,120,0.55),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#114AAE]/25 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-float"
        aria-hidden="true"
      />
      {/* Subtle white grid @ 8% */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
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
              <span className="text-base font-semibold text-[#FF7A00] sm:text-lg">
                Performance Marketing
              </span>
            }
          >
            <RotatingTypewriter
              className="text-base font-semibold sm:text-lg md:text-xl"
              accentClassName="text-[#FF7A00]"
            />
          </Suspense>
        ) : (
          <span className="text-base font-semibold text-[#FF7A00] sm:text-lg">
            Performance Marketing
          </span>
        )}
      </div>
    </div>
  );
}

/** Split tagline so only "That Sell." is orange — no gradient text */
function HeroTagline({ tagline }) {
  const marker = 'That Sell.';
  const idx = tagline.indexOf(marker);
  if (idx === -1) {
    return <span className="mt-2 block text-white">{tagline}</span>;
  }
  const before = tagline.slice(0, idx);
  return (
    <span className="mt-2 block text-white">
      {before}
      <span className="text-[#FF7A00]">{marker}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36"
      style={{
        background: 'linear-gradient(135deg, #082C67 0%, #0A3478 55%, #114AAE 100%)',
      }}
    >
      <HeroBackdrop />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Crest<span className="text-[#FF7A00]">o</span>via
            <HeroTagline tagline={company.tagline} />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-8 sm:text-lg">
            {HERO_SUBHEADING}
          </p>

          <SpecialtyLine />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0A3478] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF7A00] hover:text-white sm:w-auto"
            >
              Get Started
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-[#FF7A00] hover:bg-[#FF7A00]/5 hover:text-[#FF7A00] sm:w-auto"
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
