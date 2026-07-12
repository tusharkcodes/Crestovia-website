import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { workCategories } from '../../data/projects';

export default function CategoryTabs({ activeCategory, onCategoryChange }) {
  const listRef = useRef(null);

  // Keep active tab visible when switching categories
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector('[data-active="true"]');
    if (!active) return;
    active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeCategory]);

  return (
    <div className="border-b border-slate-100 bg-white">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div
          ref={listRef}
          className="flex gap-1 overflow-x-auto overscroll-x-contain pb-px [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {workCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                data-active={isActive}
                onClick={() => onCategoryChange(category.id)}
                className={`relative shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-200 sm:px-5 ${
                  isActive ? 'text-navy' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {category.label}
                {isActive && (
                  <motion.span
                    layoutId="work-tab-indicator"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
