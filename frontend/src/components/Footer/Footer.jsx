import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from 'react-icons/fa';
import { company } from '../../data/company';
import { navLinks } from '../../data/navigation';
import { services } from '../../data/services';

const socialIcons = [
  { icon: FaFacebookF, href: company.social.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: company.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: company.social.linkedin, label: 'LinkedIn' },
  { icon: FaYoutube, href: company.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-black text-white">
      <div className="section-padding pb-8">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-700">
                  <span className="text-sm font-bold">AD</span>
                </div>
                <span className="text-lg font-bold">{company.name}</span>
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
                {company.description}
              </p>
              <div className="mt-6 flex gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">
                Services
              </h4>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/#services"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gold">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">
                    Email
                  </span>
                  <a
                    href={`mailto:${company.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </span>
                  <a href={`tel:${company.phone}`} className="transition-colors hover:text-gold">
                    {company.phone}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs uppercase tracking-wider text-white/40">
                    Address
                  </span>
                  <span>{company.address}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-gold/50 hover:text-gold"
            >
              Back To Top
              <FaArrowUp className="transition-transform group-hover:-translate-y-0.5" size={12} />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </footer>
  );
}
