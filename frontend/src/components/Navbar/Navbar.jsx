import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = navLinks.map((link) => link.sectionId).filter(Boolean);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();

  const isActive = (link) => {
    if (link.sectionId === 'hero') return location.pathname === '/' && activeSection === 'hero';
    return activeSection === link.sectionId;
  };

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? 'glass-light border border-white/60 shadow-lg shadow-navy/5'
              : 'bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" onClick={handleNavClick}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-700 shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold text-white">AD</span>
            </div>
            <span
              className={`hidden text-lg font-bold tracking-tight transition-colors sm:block ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Crestovia
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link)
                      ? scrolled
                        ? 'text-primary'
                        : 'text-white'
                      : scrolled
                        ? 'text-navy/70 hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/#contact"
              onClick={handleNavClick}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="container-wide overflow-hidden px-4 sm:px-6 lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-white/20 bg-navy/95 p-4 shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={handleNavClick}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(link)
                          ? 'bg-primary/20 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                onClick={handleNavClick}
                className="mt-4 block rounded-full bg-gradient-to-r from-primary to-blue-600 py-3 text-center text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
