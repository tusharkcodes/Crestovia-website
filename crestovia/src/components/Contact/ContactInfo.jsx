import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineClock,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { contactInfo } from '../../data/contact';

const socialIcons = [
  { icon: FaFacebookF, href: contactInfo.social.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: contactInfo.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: contactInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FaYoutube, href: contactInfo.social.youtube, label: 'YouTube' },
];

const details = [
  { icon: HiOutlineMail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: HiOutlinePhone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: HiOutlineLocationMarker, label: 'Office Address', value: contactInfo.address },
  { icon: HiOutlineGlobe, label: 'Website', value: contactInfo.website, href: `https://${contactInfo.website}` },
  { icon: HiOutlineClock, label: 'Business Hours', value: contactInfo.businessHours },
];

export default function ContactInfo() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-hover to-primary/90 p-8 sm:rounded-3xl sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full border border-accent/10 bg-accent/[0.06]" />

      <div className="relative z-10">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{contactInfo.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
          {contactInfo.description}
        </p>

        <ul className="mt-8 space-y-5">
          {details.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="mt-0.5 block text-sm text-white transition-colors hover:text-accent sm:text-base"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm text-white sm:text-base">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex gap-3">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
