import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { getProjectsByCategory } from '../../data/projects';
import { getProjectImagesBySlug } from '../../utils/loadAssets';
import WorkProjectCard from './WorkProjectCard';

const AUTO_SPEED = 0.45;
const RESUME_DELAY_MS = 2200;

export default function ProjectShowcase({ activeCategory, onViewProject }) {
  const trackRef = useRef(null);
  const resumeTimer = useRef(null);
  const dragging = useRef(false);
  const dragMoved = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const projects = getProjectsByCategory(activeCategory);

  const projectsWithImages = projects.map((project) => ({
    ...project,
    previewImage: project.imageSlug
      ? getProjectImagesBySlug(project.imageSlug)[0] ?? null
      : null,
  }));

  // Duplicate only when there are enough cards for a seamless loop
  const shouldLoop = projectsWithImages.length >= 3;
  const showcaseItems = shouldLoop
    ? [...projectsWithImages, ...projectsWithImages]
    : projectsWithImages;

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollable = maxScroll > 4;
    setCanScroll(scrollable);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(!scrollable || el.scrollLeft >= maxScroll - 4);
  }, []);

  const pauseTemporarily = useCallback(() => {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  }, []);

  const scrollByCard = useCallback((direction) => {
    const el = trackRef.current;
    if (!el) return;
    pauseTemporarily();
    const card = el.querySelector('[data-work-card]');
    const amount = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }, [pauseTemporarily]);

  // Measure overflow + reset on category change
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollLeft = 0;
    const measure = () => updateScrollState();
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [activeCategory, projects.length, updateScrollState]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  // Convert vertical wheel to horizontal when over the track
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (!canScroll) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const atLeft = el.scrollLeft <= 0 && e.deltaY < 0;
      const atRight = el.scrollLeft >= maxScroll - 1 && e.deltaY > 0;
      if (atLeft || atRight) return;

      e.preventDefault();
      pauseTemporarily();
      el.scrollLeft += e.deltaY;
      updateScrollState();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [canScroll, pauseTemporarily, updateScrollState, activeCategory]);

  // Auto-scroll loop (no CSS scroll-smooth — that fights RAF)
  useEffect(() => {
    const el = trackRef.current;
    if (!el || isPaused || !shouldLoop || !canScroll) return;

    let frameId;
    const step = () => {
      if (dragging.current) {
        frameId = requestAnimationFrame(step);
        return;
      }

      el.scrollLeft += AUTO_SPEED;
      const half = el.scrollWidth / 2;
      if (half > 0 && el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
      updateScrollState();
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, shouldLoop, canScroll, activeCategory, updateScrollState]);

  // Pointer drag for desktop + smooth touch feel
  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el || !canScroll) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    // Don't hijack clicks on buttons/links inside cards
    if (e.target.closest('button, a')) return;

    dragging.current = true;
    dragMoved.current = false;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = el.scrollLeft;
    setIsPaused(true);
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) dragMoved.current = true;
    if (!dragMoved.current) return;
    el.scrollLeft = dragScrollLeft.current - delta;
    updateScrollState();
  };

  const onPointerUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const el = trackRef.current;
    if (el) el.releasePointerCapture?.(e.pointerId);
    pauseTemporarily();
  };

  const onClickCapture = (e) => {
    // Suppress accidental clicks after a drag
    if (dragMoved.current) {
      e.preventDefault();
      e.stopPropagation();
      dragMoved.current = false;
    }
  };

  return (
    <div className="relative bg-slate-50/50 py-10 sm:py-14">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {projects.length === 0 ? (
              <p className="py-20 text-center text-slate-400">Projects coming soon.</p>
            ) : (
              <div className="relative">
                {canScroll && (
                  <>
                    <button
                      type="button"
                      aria-label="Scroll projects left"
                      onClick={() => scrollByCard(-1)}
                      disabled={atStart && !shouldLoop}
                      className="absolute -left-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-md transition enabled:hover:border-primary/30 enabled:hover:text-primary disabled:opacity-30 sm:-left-2 sm:flex lg:h-11 lg:w-11"
                    >
                      <HiChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      aria-label="Scroll projects right"
                      onClick={() => scrollByCard(1)}
                      disabled={atEnd && !shouldLoop}
                      className="absolute -right-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-md transition enabled:hover:border-primary/30 enabled:hover:text-primary disabled:opacity-30 sm:-right-2 sm:flex lg:h-11 lg:w-11"
                    >
                      <HiChevronRight size={20} />
                    </button>
                  </>
                )}

                <div
                  ref={trackRef}
                  onScroll={updateScrollState}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => {
                    if (!dragging.current) setIsPaused(false);
                  }}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  onClickCapture={onClickCapture}
                  className="flex cursor-grab gap-5 overflow-x-auto overscroll-x-contain pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory touch-pan-x active:cursor-grabbing sm:gap-6 [&::-webkit-scrollbar]:hidden"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {showcaseItems.map((project, index) => (
                    <div key={`${project.id}-${index}`} data-work-card className="shrink-0 snap-start">
                      <WorkProjectCard
                        project={project}
                        previewImage={project.previewImage}
                        onViewProject={onViewProject}
                      />
                    </div>
                  ))}
                </div>

                {canScroll && (
                  <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
                    <button
                      type="button"
                      aria-label="Previous"
                      onClick={() => scrollByCard(-1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm"
                    >
                      <HiChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next"
                      onClick={() => scrollByCard(1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm"
                    >
                      <HiChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50/80 to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50/80 to-transparent sm:w-16" />
    </div>
  );
}
