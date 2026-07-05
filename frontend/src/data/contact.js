import {
  HiOutlineClock,
  HiOutlineAdjustments,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { company } from './company';

export const contactHero = {
  eyebrow: 'Contact Us',
  title: "Let's Build Something Extraordinary",
  subtitle:
    'Whether you need branding, digital marketing, AI automation, or complete business growth solutions, our team is ready to help.',
};

export const contactInfo = {
  title: 'Contact Information',
  description:
    "We're excited to hear about your project. Fill out the form and our team will get back to you as soon as possible.",
  email: company.email,
  phone: company.phone,
  address: company.address,
  website: 'www.crestovia.in',
  businessHours: 'Mon – Fri: 9:00 AM – 6:00 PM IST',
  social: company.social,
};

export const serviceOptions = [
  'Real Estate Marketing',
  'Graphic Design',
  'SEO',
  'Social Media Marketing',
  'Meta Ads',
  'Google Ads',
  'Content Creation',
  'Landing Pages',
  'AI Development',
  'Web Development',
  'App Development',
  'AI Automation',
  'Video Production',
  'Other',
];

export const budgetOptions = [
  'Under ₹25K',
  '₹25K–₹50K',
  '₹50K–₹1L',
  '₹1L–₹5L',
  '₹5L+',
];

export const whyContactUs = [
  {
    icon: HiOutlineClock,
    title: 'Fast Response',
    description: 'We typically respond within 24 hours.',
  },
  {
    icon: HiOutlineAdjustments,
    title: 'Tailored Strategy',
    description: 'Every solution is customized for your business.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Experienced Team',
    description: 'Creative experts across branding, marketing and technology.',
  },
  {
    icon: HiOutlineBadgeCheck,
    title: 'Long-Term Partnership',
    description: "We don't just deliver projects—we build lasting partnerships.",
  },
];

export const contactCta = {
  title: 'Ready to Grow Your Business?',
  description: "Let's discuss your vision and create something remarkable together.",
  buttonLabel: 'Schedule a Free Consultation',
};
