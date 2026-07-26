import SeoIcon from './icons/SeoIcon';
import GraphicsDesignIcons from './icons/GraphicsDesignIcons';
import MetaIcons from './icons/MetaIcons';
import WebDevelopmentIcon from './icons/WebDevelopmentIcon';
import AIIcons from './icons/AIIcons';
import SocialMediaIcons from './icons/SocialMediaIcons';
import RealEstateDesign from './icons/RealEstateDesign';
import VideoShotIcons from './icons/VideoShotIcons';
import AndroidIcon from './icons/AndroidIcon';

/**
 * Navigation dropdown structure for Our Services.
 * Technology is a parent with nested children (not a page itself).
 */
export const serviceNavItems = [
  { id: 'real-estate', label: 'Real Estate', href: '/services/real-estate' },
  { id: 'graphic-design', label: 'Graphic Designing', href: '/services/graphic-design' },
  {
    id: 'seo',
    label: 'Search Engine Optimization (Real Estate)',
    href: '/services/seo',
  },
  { id: 'meta-ads', label: 'Google & Meta Ads', href: '/services/meta-ads' },
  {
    id: 'social-media-campaigns',
    label: 'Social Media Campaign Management',
    href: '/services/social-media-campaigns',
  },
  {
    id: 'video-production',
    label: 'Video Production (Reels & Influencer Shoots)',
    href: '/services/video-production',
  },
  {
    id: 'technology',
    label: 'Technology',
    children: [
      { id: 'ai-development', label: 'AI Development', href: '/services/ai-development' },
      { id: 'web-development', label: 'Web Development', href: '/services/web-development' },
      { id: 'app-development', label: 'App Development', href: '/services/app-development' },
    ],
  },
];

const base = (id, name, icon, accent, content) => ({
  id,
  name,
  icon,
  iconSize: 120,
  accent,
  description: content.tagline,
  ...content,
});

export const services = [
  base('real-estate', 'Real Estate', RealEstateDesign, 'from-primary to-primary-dark', {
    tagline: 'Premium marketing for property developers who demand excellence.',
    heroDescription:
      'End-to-end branding, property marketing, and digital campaigns that position your developments as the definitive luxury choice in competitive markets.',
    whatItIs:
      'A comprehensive real estate marketing service covering brand identity, property creatives, brochures, social campaigns, and launch strategy.',
    whoItIsFor:
      'Property developers, real estate firms, and builders launching premium residential or commercial projects.',
    problems: [
      'Inconsistent branding across channels',
      'Low-quality leads from generic campaigns',
      'Slow sales velocity due to weak marketing collateral',
      'Fragmented vendor management',
    ],
    benefits: [
      'Unified premium brand presence',
      'Higher-quality buyer inquiries',
      'Faster project sell-through',
      'Single partner for all marketing needs',
    ],
    process: [
      { title: 'Discovery', description: 'Understand your project, audience, and competitive landscape.' },
      { title: 'Strategy', description: 'Define positioning, messaging, and channel plan.' },
      { title: 'Creative', description: 'Produce brochures, ads, social content, and launch assets.' },
      { title: 'Launch', description: 'Execute campaigns and optimize based on performance data.' },
    ],
    deliverables: ['Brand identity system', 'Brochures & print', 'Social media creatives', 'Launch campaigns', 'Performance reports'],
    whyChooseUs:
      'We specialize in luxury real estate with 100+ projects delivered — combining creative excellence with data-driven marketing.',
  }),
  base('graphic-design', 'Graphic Designing', GraphicsDesignIcons, 'from-primary to-primary-hover', {
    tagline: 'Visual identities and marketing assets that captivate and convert.',
    heroDescription:
      'From brand systems to campaign creatives, we craft striking visuals that build recall and drive action across every touchpoint.',
    whatItIs:
      'Professional graphic design for logos, marketing collateral, advertisements, social media, and print materials.',
    whoItIsFor:
      'Brands, agencies, and businesses that need consistent, high-quality visual communication.',
    problems: [
      'Inconsistent visual identity',
      'Slow creative turnaround',
      'Designs that don\'t convert',
      'Multiple vendors creating visual noise',
    ],
    benefits: [
      'Cohesive brand recognition',
      'Faster production with templates',
      'Conversion-focused creative',
      'Dedicated design partner',
    ],
    process: [
      { title: 'Brief', description: 'Align on goals, audience, and brand guidelines.' },
      { title: 'Concept', description: 'Explore directions with mood boards and sketches.' },
      { title: 'Design', description: 'Refine and produce final assets across formats.' },
      { title: 'Deliver', description: 'Hand off files with usage documentation.' },
    ],
    deliverables: ['Logo & identity', 'Social creatives', 'Print ads', 'Brand guidelines', 'Marketing templates'],
    whyChooseUs:
      'Our designers blend aesthetic refinement with marketing strategy — every pixel serves a business purpose.',
  }),
  base('seo', 'Search Engine Optimization', SeoIcon, 'from-primary to-primary-dark', {
    tagline: 'Dominate search rankings for real estate keywords that matter.',
    heroDescription:
      'Data-driven SEO strategies tailored for property developers — elevating organic rankings, traffic, and qualified leads for lasting growth.',
    whatItIs:
      'Technical and content SEO optimized for real estate — local search, property pages, and buyer-intent keywords.',
    whoItIsFor:
      'Real estate developers and agencies seeking sustainable organic visibility and reduced ad dependency.',
    problems: [
      'Invisible on Google for key property searches',
      'Paid ads becoming increasingly expensive',
      'Poor website technical health',
      'Competitors outranking on local terms',
    ],
    benefits: [
      'Sustainable organic traffic',
      'Lower cost per lead over time',
      'Authority in your market',
      'Long-term asset building',
    ],
    process: [
      { title: 'Audit', description: 'Analyze site health, competitors, and keyword opportunities.' },
      { title: 'Strategy', description: 'Build a prioritized roadmap for on-page and off-page SEO.' },
      { title: 'Execute', description: 'Implement technical fixes, content, and link building.' },
      { title: 'Report', description: 'Monthly rankings, traffic, and lead tracking.' },
    ],
    deliverables: ['SEO audit', 'Keyword strategy', 'On-page optimization', 'Content plan', 'Monthly reports'],
    whyChooseUs:
      'We understand real estate search behavior — from "3BHK in Baner" to luxury villa queries — and optimize accordingly.',
  }),
  base('meta-ads', 'Google & Meta Ads', MetaIcons, 'from-primary to-primary-hover', {
    tagline: 'Performance campaigns that turn ad spend into measurable ROI.',
    heroDescription:
      'High-converting Google and Meta campaigns optimized for reach, engagement, and qualified leads with full transparency.',
    whatItIs:
      'Full-funnel paid advertising across Google Search, Display, Facebook, and Instagram with creative production included.',
    whoItIsFor:
      'Businesses needing predictable lead generation with clear cost-per-acquisition targets.',
    problems: [
      'Wasted ad budget on broad audiences',
      'No clear attribution or reporting',
      'Creative fatigue hurting performance',
      'Inability to scale profitably',
    ],
    benefits: [
      'Targeted high-intent audiences',
      'Real-time performance dashboards',
      'Continuous creative testing',
      'Scalable profitable campaigns',
    ],
    process: [
      { title: 'Research', description: 'Audience analysis, competitor ads, and funnel mapping.' },
      { title: 'Setup', description: 'Account structure, pixels, and conversion tracking.' },
      { title: 'Launch', description: 'Creative production and campaign activation.' },
      { title: 'Optimize', description: 'Weekly bid, audience, and creative refinements.' },
    ],
    deliverables: ['Campaign strategy', 'Ad creatives', 'Landing page recommendations', 'Performance dashboard', 'Monthly optimization'],
    whyChooseUs:
      'We manage ₹crores in ad spend with a creative-first approach — your ads look premium and perform.',
  }),
  base('social-media-campaigns', 'Social Media Campaign Management', SocialMediaIcons, 'from-primary to-primary-hover', {
    tagline: 'Strategic social storytelling that builds communities and drives loyalty.',
    heroDescription:
      'End-to-end social media management — content strategy, premium creatives, community engagement, and performance analytics.',
    whatItIs:
      'Always-on social media management across Instagram, Facebook, LinkedIn, and emerging platforms.',
    whoItIsFor:
      'Brands that want a consistent, premium social presence without building an in-house team.',
    problems: [
      'Inconsistent posting schedule',
      'Low engagement and follower growth',
      'No clear content strategy',
      'Time-consuming community management',
    ],
    benefits: [
      'Consistent premium brand voice',
      'Growing engaged community',
      'Data-driven content decisions',
      'Freed internal team bandwidth',
    ],
    process: [
      { title: 'Audit', description: 'Review current presence, competitors, and audience.' },
      { title: 'Strategy', description: 'Content pillars, calendar, and platform mix.' },
      { title: 'Create', description: 'Produce and schedule posts, reels, and stories.' },
      { title: 'Engage', description: 'Monitor, respond, and report on performance.' },
    ],
    deliverables: ['Content strategy', 'Monthly calendars', 'Post & reel creatives', 'Community management', 'Analytics reports'],
    whyChooseUs:
      'We combine creative production with strategic planning — your feed looks as good as your best campaign.',
  }),
  base('video-production', 'Video Production', VideoShotIcons, 'from-primary to-primary-hover', {
    tagline: 'Reels, influencer shoots, and video content that stops the scroll.',
    heroDescription:
      'Professional video production for social media — from on-site influencer shoots to polished reels that drive engagement and conversions.',
    whatItIs:
      'End-to-end video production including concept, shooting, editing, and distribution-ready formats for all platforms.',
    whoItIsFor:
      'Brands needing authentic video content for social ads, organic reach, and property showcases.',
    problems: [
      'Static content failing to engage',
      'No in-house video capability',
      'Poor quality user-generated content',
      'Difficulty reaching younger audiences',
    ],
    benefits: [
      'Scroll-stopping video content',
      'Authentic influencer partnerships',
      'Multi-format delivery (reels, ads, stories)',
      'Higher engagement and shareability',
    ],
    process: [
      { title: 'Concept', description: 'Script, storyboard, and talent selection.' },
      { title: 'Shoot', description: 'On-location or studio production.' },
      { title: 'Edit', description: 'Post-production, color grading, and formatting.' },
      { title: 'Distribute', description: 'Platform-optimized exports and scheduling.' },
    ],
    deliverables: ['Reels & short-form video', 'Influencer collaborations', 'Property walkthroughs', 'Ad video creatives', 'Raw footage archive'],
    whyChooseUs:
      'We produce video that feels editorial, not advertorial — premium quality that performs on every platform.',
  }),
  base('ai-development', 'AI Development', AIIcons, 'from-primary to-primary-hover', {
    tagline: 'Intelligent systems that automate workflows and scale your business.',
    heroDescription:
      'Build intelligent applications and automations powered by AI — from lead scoring to custom agents that eliminate manual bottlenecks.',
    whatItIs:
      'Custom AI solutions including workflow automation, intelligent agents, CRM integrations, and predictive analytics.',
    whoItIsFor:
      'Businesses drowning in manual processes or seeking competitive advantage through AI-powered operations.',
    problems: [
      'Manual data entry and lead routing delays',
      'Repetitive tasks consuming team bandwidth',
      'Siloed data across tools',
      'Inability to leverage AI practically',
    ],
    benefits: [
      'Dramatically reduced response times',
      'Automated lead qualification',
      'Unified intelligent workflows',
      'Scalable without headcount growth',
    ],
    process: [
      { title: 'Map', description: 'Document current workflows and pain points.' },
      { title: 'Design', description: 'Architecture blueprint for AI automation.' },
      { title: 'Build', description: 'Develop integrations, agents, and dashboards.' },
      { title: 'Deploy', description: 'Launch, monitor, and iterate.' },
    ],
    deliverables: ['Workflow automation', 'AI agents', 'CRM integrations', 'Custom dashboards', 'Documentation & training'],
    whyChooseUs:
      'We bridge marketing and technology — AI solutions that solve real business problems, not science projects.',
  }),
  base('web-development', 'Web Development', WebDevelopmentIcon, 'from-primary to-primary-dark', {
    tagline: 'Fast, responsive websites engineered for performance and conversion.',
    heroDescription:
      'Conversion-focused websites and landing pages built with modern technology — responsive, fast, and designed to turn visitors into customers.',
    whatItIs:
      'Custom website development including corporate sites, landing pages, and web applications with premium UI/UX.',
    whoItIsFor:
      'Businesses needing a digital presence that matches their brand quality and drives measurable results.',
    problems: [
      'Slow, outdated websites losing visitors',
      'Poor mobile experience',
      'Low conversion rates',
      'Difficult to update content',
    ],
    benefits: [
      'Sub-2-second load times',
      'Mobile-first responsive design',
      'Conversion-optimized layouts',
      'Easy content management',
    ],
    process: [
      { title: 'Plan', description: 'Sitemap, wireframes, and technical architecture.' },
      { title: 'Design', description: 'UI/UX design aligned with brand identity.' },
      { title: 'Develop', description: 'Build, test, and optimize performance.' },
      { title: 'Launch', description: 'Deploy, monitor, and provide support.' },
    ],
    deliverables: ['Responsive website', 'Landing pages', 'CMS integration', 'SEO foundation', 'Performance optimization'],
    whyChooseUs:
      'We build websites that look premium and perform — engineered with React and modern best practices.',
  }),
  base('app-development', 'App Development', AndroidIcon, 'from-primary to-primary-hover', {
    tagline: 'Next-generation mobile and web applications for modern businesses.',
    heroDescription:
      'Intelligent applications powered by AI that automate workflows, engage users, and deliver next-generation digital products.',
    whatItIs:
      'Custom mobile and web app development — from MVPs to full-scale products with AI capabilities.',
    whoItIsFor:
      'Startups and enterprises building digital products that need reliable, scalable engineering.',
    problems: [
      'No technical team to build products',
      'Existing apps with poor UX',
      'Need for AI-powered features',
      'Scaling challenges with legacy code',
    ],
    benefits: [
      'Production-ready applications',
      'Intuitive user experiences',
      'AI features integrated natively',
      'Scalable cloud architecture',
    ],
    process: [
      { title: 'Define', description: 'Requirements, user stories, and technical spec.' },
      { title: 'Prototype', description: 'Interactive prototypes for validation.' },
      { title: 'Build', description: 'Agile development with regular demos.' },
      { title: 'Ship', description: 'App store deployment and ongoing support.' },
    ],
    deliverables: ['Mobile apps (iOS/Android)', 'Web applications', 'API development', 'AI integrations', 'Maintenance & updates'],
    whyChooseUs:
      'Full-stack capability from design to deployment — we ship products that users love and businesses rely on.',
  }),
];

export function getServiceById(id) {
  return services.find((s) => s.id === id);
}

export function getAllServiceNavLinks() {
  return serviceNavItems.flatMap((item) =>
    item.children ? item.children : [item]
  );
}
