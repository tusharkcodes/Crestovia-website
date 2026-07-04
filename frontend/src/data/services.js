import {
  HiOutlineSearch,
  HiOutlineColorSwatch,
  HiOutlineSpeakerphone,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineShare,
  HiOutlinePhotograph,
} from 'react-icons/hi';

export const services = [
  {
    id: 'seo',
    name: 'SEO',
    description:
      'Data-driven search strategies that elevate rankings, traffic, and qualified leads for lasting growth.',
    icon: HiOutlineSearch,
    accent: 'from-blue-500 to-blue-700',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description:
      'Striking visual identities and marketing assets crafted to captivate audiences and build brand recall.',
    icon: HiOutlineColorSwatch,
    accent: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    description:
      'High-converting Facebook and Instagram campaigns optimized for reach, engagement, and measurable ROI.',
    icon: HiOutlineSpeakerphone,
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description:
      'Fast, responsive, and conversion-focused websites engineered for performance and premium user experience.',
    icon: HiOutlineCode,
    accent: 'from-sky-500 to-blue-700',
  },
  {
    id: 'ai-app-development',
    name: 'AI App Development',
    description:
      'Intelligent applications powered by AI that automate workflows and deliver next-generation digital products.',
    icon: HiOutlineChip,
    accent: 'from-violet-500 to-blue-600',
  },
  {
    id: 'social-media-campaigns',
    name: 'Social Media Campaigns',
    description:
      'Strategic social storytelling that builds communities, sparks conversations, and drives brand loyalty.',
    icon: HiOutlineShare,
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'real-estate-graphic-design',
    name: 'Real Estate Graphic Design',
    description:
      'Luxury property marketing visuals — brochures, listings, and campaigns that sell premium real estate.',
    icon: HiOutlinePhotograph,
    accent: 'from-amber-400 to-blue-600',
  },
];
