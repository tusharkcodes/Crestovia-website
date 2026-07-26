import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../../data/navigation';
import ServicesDropdown, { ServicesMobileAccordion } from './ServicesDropdown';
import Logo from '../Logo/Logo';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = navLinks.map((link) => link.sectionId).filter(Boolean);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();

  // Navy heroes: white nav links when transparent; dark links once glass bar appears on scroll
  const useLightNavText = !scrolled;

  const isActive = (link) => {
    if (link.href === '/our-work') {
      return location.pathname === '/our-work' || location.pathname === '/portfolio';
    }
    if (link.href === '/about') return location.pathname === '/about';
    if (link.href === '/contact') return location.pathname === '/contact';
    if (link.sectionId === 'hero') return location.pathname === '/' && activeSection === 'hero';
    if (!link.sectionId) return false;
    return location.pathname === '/' && activeSection === link.sectionId;
  };

  const handleNavClick = () => setMobileOpen(false);

  const linkClass = (link) => {
    if (isActive(link)) return useLightNavText ? 'text-white' : 'text-primary';
    return useLightNavText ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-primary';
  };

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
              ? 'glass-light border border-white/60 shadow-lg shadow-primary/5'
              : 'bg-transparent'
          }`}
        >
          <Logo size="lg" onClick={handleNavClick} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  aria-current={isActive(link) ? 'page' : undefined}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${linkClass(link)}`}
                >
                  {link.label}
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <ServicesDropdown useLightText={useLightNavText} onNavigate={handleNavClick} />
            {navLinks.slice(2).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  aria-current={isActive(link) ? 'page' : undefined}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${linkClass(link)}`}
                >
                  {link.label}
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center rounded-full bg-[#FF7A00] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#FF7A00]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#E86D00] hover:shadow-xl hover:shadow-[#FF7A00]/40"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              useLightNavText ? 'text-white' : 'text-foreground'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
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
            <div className="mt-2 rounded-2xl border border-white/20 bg-primary/95 p-4 shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {navLinks.slice(0, 2).map((link) => (
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
                <ServicesMobileAccordion onNavigate={handleNavClick} />
                {navLinks.slice(2).map((link) => (
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
                to="/contact"
                onClick={handleNavClick}
                className="mt-4 block w-full rounded-full bg-[#FF7A00] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#E86D00]"
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
