import { absoluteUrl, SITE_NAME } from '../config/seo';

/**
 * Unique SEO metadata per route.
 * Keep descriptions ~150–160 chars; titles under ~60 chars where possible.
 */
export const pageSeo = {
  home: {
    title: 'Crestovia | Digital Marketing & AI Automation Agency, Pune',
    description:
      'Crestovia helps businesses grow through Website Development, SEO, Google Ads, Meta Ads, Branding, AI Automation, CRM Automation, Social Media Marketing and Performance Marketing.',
    keywords:
      'digital marketing agency pune, website development pune, SEO services pune, AI automation, branding agency, Google Ads, Meta Ads, performance marketing, business growth, landing page development, CRM automation, digital marketing company, social media marketing, marketing agency india',
    path: '/',
    type: 'website',
  },
  about: {
    title: 'About Crestovia | Digital Marketing Agency in Pune',
    description:
      'Learn about Crestovia — a Pune-based digital marketing and AI automation agency founded to deliver measurable growth through strategy, design, and technology.',
    keywords:
      'about crestovia, digital marketing agency pune, marketing company maharashtra, AI automation company pune',
    path: '/about',
  },
  contact: {
    title: 'Contact Crestovia | Digital Marketing Agency in Pune',
    description:
      'Get in touch with Crestovia in Baner, Pune for website development, SEO, Google Ads, Meta Ads, branding, and AI automation. Free consultation available.',
    keywords:
      'contact crestovia, digital marketing agency pune contact, marketing agency baner pune',
    path: '/contact',
  },
  services: {
    title: 'Digital Marketing Services in Pune | Crestovia',
    description:
      'Explore Crestovia’s full suite of services — website development, SEO, Google & Meta Ads, branding, social media marketing, AI automation, and more in Pune.',
    keywords:
      'digital marketing services pune, SEO company pune, website development pune, Google Ads agency pune',
    path: '/services',
  },
  portfolio: {
    title: 'Our Work & Portfolio | Crestovia Digital Agency Pune',
    description:
      'Browse Crestovia’s portfolio of branding, websites, campaigns, and digital projects for ambitious brands across India.',
    keywords:
      'digital marketing portfolio pune, agency case studies, branding portfolio, website portfolio',
    path: '/portfolio',
  },
  blogs: {
    title: 'Blog | Digital Marketing Insights from Crestovia, Pune',
    description:
      'Practical articles on SEO, paid ads, website development, branding, and AI automation from Crestovia — a digital marketing agency in Pune.',
    keywords:
      'digital marketing blog, SEO tips, Google Ads guide, AI automation insights, marketing blog india',
    path: '/blogs',
  },
  notFound: {
    title: 'Page Not Found | Crestovia',
    description: 'The page you are looking for does not exist. Explore Crestovia’s services or contact our Pune team.',
    keywords: 'crestovia 404',
    path: '/404',
    noindex: true,
  },
};

/** Per-service SEO (keyed by service id) */
export const serviceSeo = {
  'web-development': {
    title: 'Website Development Company in Pune | Crestovia',
    description:
      'Professional website development company in Pune creating fast, responsive and SEO-friendly websites for growing businesses.',
    keywords:
      'website development, react development, business website, landing page, website redesign, responsive websites, website development pune',
    path: '/website-development',
  },
  seo: {
    title: 'SEO Company in Pune | Search Engine Optimization | Crestovia',
    description:
      'SEO company in Pune helping brands rank higher with technical SEO, content strategy, and measurable organic growth.',
    keywords:
      'SEO company pune, SEO services pune, search engine optimization, local SEO, on-page SEO',
    path: '/seo-services',
  },
  'meta-ads': {
    title: 'Meta Ads Agency in Pune | Facebook & Instagram Ads | Crestovia',
    description:
      'Meta Ads agency in Pune running Facebook and Instagram campaigns that generate qualified leads for growing businesses.',
    keywords:
      'Meta Ads agency pune, Facebook Ads, Instagram Ads, social ads agency, performance marketing',
    path: '/meta-ads',
  },
  // Used when visiting /services/meta-ads — prefer Google Ads SEO URL as primary paid-ads landing
  // Canonical for /services/meta-ads stays on services path via ServicePage fallback.
  'graphic-design': {
    title: 'Branding & Graphic Design Agency in Pune | Crestovia',
    description:
      'Branding agency in Pune crafting logos, visual identity, and marketing creatives that build recall and drive action.',
    keywords:
      'branding agency pune, graphic design, logo design, brand identity, creative agency',
    path: '/branding',
  },
  'social-media-campaigns': {
    title: 'Social Media Marketing Agency in Pune | Crestovia',
    description:
      'Social media marketing in Pune — strategy, content, and campaign management that grows engaged audiences and pipeline.',
    keywords:
      'social media marketing pune, Instagram marketing, LinkedIn marketing, social media agency',
    path: '/social-media-marketing',
  },
  'ai-development': {
    title: 'AI Automation Company in Pune | Crestovia',
    description:
      'AI automation company in Pune building intelligent workflows, CRM automation, and AI-powered tools that scale operations.',
    keywords:
      'AI automation company pune, CRM automation, AI development, business automation, chatbots',
    path: '/ai-automation',
  },
  'real-estate': {
    title: 'Real Estate Marketing Agency in Pune | Crestovia',
    description:
      'Premium real estate marketing in Pune — branding, creatives, and digital campaigns that accelerate property sales.',
    keywords:
      'real estate marketing pune, property marketing, real estate branding, developer marketing',
    path: '/services/real-estate',
  },
  'video-production': {
    title: 'Video Production & Reels Agency in Pune | Crestovia',
    description:
      'Video production in Pune for reels, influencer shoots, and brand films that capture attention and convert.',
    keywords:
      'video production pune, reels production, influencer marketing, brand videos',
    path: '/services/video-production',
  },
  'app-development': {
    title: 'App Development Company in Pune | Crestovia',
    description:
      'Mobile and web app development in Pune — scalable products with clean UX and reliable engineering.',
    keywords:
      'app development pune, mobile app development, react native, business apps',
    path: '/services/app-development',
  },
};

export function getServiceSeo(serviceId) {
  const seo = serviceSeo[serviceId];
  if (seo) return seo;
  return {
    title: `${SITE_NAME} Services | Digital Marketing Agency Pune`,
    description: pageSeo.services.description,
    keywords: pageSeo.services.keywords,
    path: `/services/${serviceId}`,
  };
}

export function getBlogSeo(post) {
  return {
    title: `${post.title} | Crestovia Blog`,
    description: post.excerpt,
    keywords: post.keywords || pageSeo.blogs.keywords,
    path: `/blogs/${post.slug}`,
    type: 'article',
    image: post.image ? absoluteUrl(post.image) : undefined,
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt || post.publishedAt,
  };
}
