import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { serviceNavItems } from '../../data/services';

export default function ServicesDropdown({ useLightText, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isServicesActive =
    location.pathname.startsWith('/services') ||
    [
      '/website-development',
      '/seo-services',
      '/google-ads',
      '/meta-ads',
      '/branding',
      '/social-media-marketing',
      '/ai-automation',
    ].includes(location.pathname);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
        setTechOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const textClass = isServicesActive
    ? useLightText
      ? 'text-white'
      : 'text-primary'
    : useLightText
      ? 'text-white/80 hover:text-white'
      : 'text-foreground/70 hover:text-primary';

  const handleLinkClick = () => {
    setOpen(false);
    setTechOpen(false);
    onNavigate?.();
  };

  return (
    <li ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${textClass}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Our Services
        <HiChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
        {isServicesActive && (
          <motion.span
            layoutId="nav-indicator"
            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-2 w-72 overflow-visible rounded-2xl border border-border bg-surface py-2 shadow-xl shadow-primary/10"
          >
            {serviceNavItems.map((item) =>
              item.children ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setTechOpen(true)}
                  onMouseLeave={() => setTechOpen(false)}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTechOpen((prev) => !prev);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-surface-alt hover:text-primary ${
                      techOpen ? 'bg-surface-alt font-medium text-primary' : 'text-foreground/80'
                    }`}
                    aria-expanded={techOpen}
                  >
                    {item.label}
                    <HiChevronRight
                      size={14}
                      className={`transition-transform duration-200 ${techOpen ? 'rotate-90' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {techOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full top-0 z-50 pl-1"
                      >
                        <div className="w-52 overflow-hidden rounded-xl border border-border bg-surface py-2 shadow-xl shadow-primary/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.id}
                              to={child.href}
                              onClick={handleLinkClick}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-surface-alt hover:text-primary ${
                                location.pathname === child.href
                                  ? 'bg-primary/5 font-semibold text-primary'
                                  : 'text-foreground/80'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`block px-4 py-2.5 text-sm transition-colors hover:bg-surface-alt hover:text-primary ${
                    location.pathname === item.href
                      ? 'bg-primary/5 font-semibold text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function ServicesMobileAccordion({ onNavigate }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    onNavigate?.();
    setServicesOpen(false);
    setTechOpen(false);
  };

  return (
    <li>
      <button
        type="button"
        onClick={() => setServicesOpen(!servicesOpen)}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
          location.pathname.startsWith('/services')
            ? 'bg-primary/20 text-white'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`}
      >
        Our Services
        <HiChevronDown
          size={16}
          className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {servicesOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-2"
          >
            {serviceNavItems.map((item) =>
              item.children ? (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setTechOpen(!techOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm text-white/70"
                  >
                    {item.label}
                    <HiChevronRight
                      size={14}
                      className={`transition-transform ${techOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {techOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              to={child.href}
                              onClick={handleClick}
                              className={`block rounded-lg px-4 py-2 text-sm ${
                                location.pathname === child.href
                                  ? 'text-accent'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    onClick={handleClick}
                    className={`block rounded-lg px-4 py-2.5 text-sm ${
                      location.pathname === item.href
                        ? 'text-accent'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
