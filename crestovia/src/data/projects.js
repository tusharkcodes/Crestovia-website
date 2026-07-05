/**
 * Our Work portfolio — data-driven.
 * Add projects to a category array; images load from assets/projects/[imageSlug]/.
 */

export const workCategories = [
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'meta-ads', label: 'Meta Ads' },
  { id: 'social-media', label: 'Social Media Management' },
  { id: 'landing-pages', label: 'Landing Pages' },
  { id: 'ai-web-app', label: 'AI / Web / App Development' },
  { id: 'influencer-shoots', label: 'Influencer Shoots' },
];

const project = (
  id,
  categoryId,
  title,
  imageSlug,
  description,
  tags,
  details
) => ({
  id,
  categoryId,
  title,
  imageSlug,
  description,
  tags,
  client: details.client,
  challenge: details.challenge,
  solution: details.solution,
  process: details.process,
  result: details.result,
  services: details.services,
  metrics: details.metrics ?? [],
});

export const workProjects = [
  // ── Real Estate ──────────────────────────────────────────
  project('royal-complex', 'real-estate', 'Royal Complex', 'royal-complex',
    'End-to-end brand launch and property marketing for a premium residential development.',
    ['Branding', 'Brochures', 'Social Media', 'Launch Campaign'],
    {
      client: 'Royal Complex Developers',
      challenge: 'Fragmented visuals and inconsistent messaging diluted perceived value in a competitive market.',
      solution: 'A unified luxury narrative deployed across digital, print, and on-ground touchpoints.',
      process: 'Brand workshops, identity system, brochure design, social calendars, and launch orchestration.',
      result: 'Premium identity that elevated inquiry quality and empowered the sales team.',
      services: ['Graphic Design', 'Branding', 'Social Media', 'Print Design'],
      metrics: [
        { label: 'Qualified Inquiries', value: '↑ 48%' },
        { label: 'Social Engagement', value: '↑ 62%' },
        { label: 'Brochure Downloads', value: '↑ 3.2×' },
      ],
    }
  ),
  project('airavat', 'real-estate', 'Airavat', 'airavat',
    'Aspirational storytelling and performance-driven distribution for a luxury development.',
    ['Property Marketing', 'Creative Direction', 'Campaigns'],
    {
      client: 'Airavat Realty',
      challenge: 'Generic campaigns failed to convey architectural excellence and lifestyle proposition.',
      solution: 'Editorial-grade visuals with benefit-led copy tailored to each channel.',
      process: 'Competitive audit, creative direction, asset production, and weekly optimization.',
      result: 'Distinctive identity with stronger brand recall and experience-center footfall.',
      services: ['Graphic Design', 'Meta Ads', 'Branding'],
      metrics: [
        { label: 'Site Visits', value: '↑ 35%' },
        { label: 'Cost Per Lead', value: '↓ 28%' },
        { label: 'Campaign Reach', value: '1.2M+' },
      ],
    }
  ),
  project('green-one', 'real-estate', 'Green One', 'green-one',
    'Sustainable luxury positioning connecting eco-conscious design with premium living.',
    ['Branding', 'Sustainability', 'Promotional'],
    {
      client: 'Green One Properties',
      challenge: 'Green messaging felt clinical and failed to attract premium buyers.',
      solution: 'Nature-forward palettes with lifestyle-centric storytelling.',
      process: 'Tone development, environmental narrative, multi-format production, phased rollout.',
      result: 'Recognizable identity that resonated with target demographics.',
      services: ['Branding', 'Graphic Design', 'Social Media'],
      metrics: [
        { label: 'Lead Volume', value: '↑ 41%' },
        { label: 'Brand Recall', value: '↑ 55%' },
      ],
    }
  ),
  project('abri-crystal', 'real-estate', 'Abri Crystal', 'abri-crystal',
    'Premium visual toolkit — ads, social creatives, and print-ready collateral.',
    ['Print Design', 'Social Creatives', 'Brand Identity'],
    {
      client: 'Abri Crystal',
      challenge: 'Ad-hoc designs from multiple vendors weakened brand equity.',
      solution: 'Modular creative system with locked typography, colors, and layout grids.',
      process: 'Template creation, social series, print layouts, and team handoff docs.',
      result: 'Gallery-grade consistency across every marketing channel.',
      services: ['Graphic Design', 'Branding', 'Print Design'],
      metrics: [
        { label: 'Creative Turnaround', value: '↓ 60%' },
        { label: 'Ad Click-Through', value: '↑ 34%' },
      ],
    }
  ),
  project('ivory-vista', 'real-estate', 'Ivory Vista', 'ivory-vista',
    'Refined property advertisements and social creatives for discerning buyers.',
    ['Property Ads', 'Premium Social', 'Print'],
    {
      client: 'Ivory Vista',
      challenge: 'Stock creatives undermined premium pricing and attracted low-intent leads.',
      solution: 'Custom art direction with bespoke layouts and architectural typography.',
      process: 'Mood exploration, hero creatives, format variations, and A/B testing.',
      result: 'Commanding presence with improved engagement and lead quality.',
      services: ['Graphic Design', 'Social Media', 'Branding'],
      metrics: [
        { label: 'Engagement Rate', value: '↑ 71%' },
        { label: 'Lead Quality', value: '↑ 45%' },
      ],
    }
  ),
  project('siddhi-aspire', 'real-estate', 'Siddhi Aspire', 'siddhi-aspire',
    'Launch-ready creative across hoardings, brochures, digital ads, and social.',
    ['Brand Identity', 'Launch Creative', 'Marketing'],
    {
      client: 'Siddhi Aspire',
      challenge: 'Tight timelines threatened launch consistency and creative quality.',
      solution: 'Parallel workstreams with centralized creative direction.',
      process: 'Stakeholder alignment, concept sprints, QA cycles, launch delivery.',
      result: 'On-schedule launch with unified premium identity.',
      services: ['Branding', 'Graphic Design', 'Print Design'],
      metrics: [
        { label: 'Launch Assets', value: '120+' },
        { label: 'Walk-in Traffic', value: '↑ 33%' },
      ],
    }
  ),
  project('aurm-abir', 'real-estate', 'Aurm Abir', 'aurm-abir',
    'Brand identity balancing cultural resonance with contemporary luxury.',
    ['Brand Identity', 'Cultural Design', 'Collateral'],
    {
      client: 'Aurm Abir',
      challenge: 'Branding felt too traditional or too generic for the target audience.',
      solution: 'Cultural motifs integrated into modern layout systems.',
      process: 'Brand workshops, logo development, collateral design, channel adaptation.',
      result: 'Memorable identity supporting premium pricing confidence.',
      services: ['Branding', 'Graphic Design', 'Print Design'],
      metrics: [
        { label: 'Brand Awareness', value: '↑ 52%' },
        { label: 'Inquiry Conversion', value: '↑ 29%' },
      ],
    }
  ),

  // ── Meta Ads ───────────────────────────────────────────────
  project('siddhi-aspire-meta', 'meta-ads', 'Siddhi Aspire Campaign', 'siddhi-aspire',
    'Full-funnel Meta campaign from awareness creatives to retargeting sequences.',
    ['Facebook Ads', 'Instagram Ads', 'Retargeting'],
    {
      client: 'Siddhi Aspire',
      challenge: 'High reach but poor conversion — audiences too broad, creatives untested.',
      solution: 'Lookalike layering, creative A/B matrix, and retargeting funnels.',
      process: 'Audience research, creative production, pixel setup, weekly optimization.',
      result: 'Qualified leads below target CPA with clear attribution.',
      services: ['Meta Ads', 'Graphic Design', 'Landing Pages'],
      metrics: [
        { label: 'Cost Per Lead', value: '₹420' },
        { label: 'ROAS', value: '↑ 4.8×' },
        { label: 'Site Visits', value: '↑ 156%' },
      ],
    }
  ),
  project('airavat-meta', 'meta-ads', 'Airavat Performance', 'airavat',
    'Luxury Meta execution with editorial creatives and performance metrics.',
    ['Luxury Ads', 'Video Creative', 'Audience Strategy'],
    {
      client: 'Airavat Realty',
      challenge: 'Luxury campaigns often sacrifice performance for aesthetics.',
      solution: 'Editorial-style ads with income-based targeting and carousel tests.',
      process: 'Creative concepting, copy variants, tier structure, bi-weekly reviews.',
      result: 'Strong engagement among high-intent luxury audiences.',
      services: ['Meta Ads', 'Graphic Design', 'Video Production'],
      metrics: [
        { label: 'CTR', value: '↑ 3.2%' },
        { label: 'Engagement', value: '↑ 84%' },
        { label: 'Qualified Leads', value: '↑ 92%' },
      ],
    }
  ),
  project('green-one-meta', 'meta-ads', 'Green One Ads', 'green-one',
    'Sustainability-focused Meta campaign targeting eco-conscious homebuyers.',
    ['Lead Gen', 'Carousel Ads', 'Retargeting'],
    {
      client: 'Green One Properties',
      challenge: 'Reaching niche eco-conscious buyers at scale without wasting budget.',
      solution: 'Interest-based targeting with sustainability-led creative hooks.',
      process: 'Audience segmentation, creative testing, budget pacing, conversion tracking.',
      result: 'Efficient lead generation with strong engagement from target segment.',
      services: ['Meta Ads', 'Graphic Design'],
      metrics: [
        { label: 'Leads', value: '↑ 250%' },
        { label: 'CPA', value: '↓ 35%' },
      ],
    }
  ),

  // ── Social Media Management ────────────────────────────────
  project('royal-complex-social', 'social-media', 'Royal Complex Social', 'royal-complex',
    'Always-on social presence with premium content calendars and community growth.',
    ['Content Strategy', 'Instagram', 'Facebook'],
    {
      client: 'Royal Complex Developers',
      challenge: 'Inconsistent posting and low engagement on social channels.',
      solution: 'Structured content pillars with premium visual templates.',
      process: 'Strategy, monthly calendars, creative production, community management.',
      result: 'Consistent premium feed that drives organic inquiries.',
      services: ['Social Media Management', 'Graphic Design', 'Content Strategy'],
      metrics: [
        { label: 'Engagement', value: '↑ 4×' },
        { label: 'Follower Growth', value: '↑ 180%' },
      ],
    }
  ),
  project('abri-crystal-social', 'social-media', 'Abri Crystal Social', 'abri-crystal',
    'Premium social media creatives and management for property launch momentum.',
    ['Reels', 'Stories', 'Community'],
    {
      client: 'Abri Crystal',
      challenge: 'Launch window required daily high-quality content without brand drift.',
      solution: 'Template-driven production with rapid turnaround workflows.',
      process: 'Content batching, scheduling, engagement monitoring, monthly reporting.',
      result: 'Sustained launch momentum with cohesive visual storytelling.',
      services: ['Social Media Management', 'Graphic Design', 'Video Editing'],
      metrics: [
        { label: 'Reach', value: '↑ 320%' },
        { label: 'Saves & Shares', value: '↑ 95%' },
      ],
    }
  ),
  project('ivory-vista-social', 'social-media', 'Ivory Vista Social', 'ivory-vista',
    'Luxury lifestyle content strategy elevating brand perception on social.',
    ['Luxury Content', 'Paid Social', 'Analytics'],
    {
      client: 'Ivory Vista',
      challenge: 'Social feed didn\'t reflect the premium positioning of the development.',
      solution: 'Editorial content strategy with architectural and lifestyle photography.',
      process: 'Audit, strategy, content creation, performance analytics.',
      result: 'Feed that commands attention and attracts qualified followers.',
      services: ['Social Media Management', 'Graphic Design', 'Meta Ads'],
      metrics: [
        { label: 'Profile Visits', value: '↑ 210%' },
        { label: 'Engagement Rate', value: '↑ 71%' },
      ],
    }
  ),

  // ── Landing Pages ──────────────────────────────────────────
  project('royal-complex-landing', 'landing-pages', 'Royal Complex Landing', 'royal-complex',
    'High-converting landing page capturing qualified leads with minimal friction.',
    ['UI/UX', 'CRO', 'Responsive'],
    {
      client: 'Royal Complex Developers',
      challenge: 'Main website was information-heavy; paid traffic needed a focused path.',
      solution: 'Single-purpose page with strong value prop, social proof, and streamlined form.',
      process: 'Wireframing, UI design, development, speed optimization, CRO iterations.',
      result: 'Conversion rate exceeding industry benchmarks.',
      services: ['Landing Pages', 'Web Development', 'UI/UX Design'],
      metrics: [
        { label: 'Conversion Rate', value: '↑ 8.4%' },
        { label: 'Bounce Rate', value: '↓ 42%' },
        { label: 'Load Time', value: '1.2s' },
      ],
    }
  ),
  project('abri-crystal-landing', 'landing-pages', 'Abri Crystal Digital', 'abri-crystal',
    'Mobile-first landing experience for amenity and lifestyle storytelling.',
    ['Mobile-First', 'Performance', 'UI/UX'],
    {
      client: 'Abri Crystal',
      challenge: 'High mobile traffic but low conversion on existing pages.',
      solution: 'Thumb-first vertical narrative with sticky CTAs and lazy-loaded media.',
      process: 'User flow mapping, mobile design, development, conversion tracking.',
      result: 'Dramatic mobile conversion lift with sub-2s load times.',
      services: ['Landing Pages', 'Web Development', 'UI/UX Design'],
      metrics: [
        { label: 'Mobile Conversions', value: '↑ 67%' },
        { label: 'Session Duration', value: '↑ 2.1 min' },
      ],
    }
  ),
  project('siddhi-aspire-landing', 'landing-pages', 'Siddhi Aspire Landing', 'siddhi-aspire',
    'Conversion-focused landing page for launch campaign traffic.',
    ['CRO', 'Lead Capture', 'Analytics'],
    {
      client: 'Siddhi Aspire',
      challenge: 'Launch ads needed a dedicated page optimized for lead capture.',
      solution: 'Benefit-led layout with trust signals and single-field progressive forms.',
      process: 'Design, development, A/B testing, heatmap analysis.',
      result: 'Predictable lead pipeline for the sales team.',
      services: ['Landing Pages', 'Web Development', 'Meta Ads'],
      metrics: [
        { label: 'Leads', value: '↑ 250%' },
        { label: 'Form Completion', value: '↑ 60%' },
      ],
    }
  ),

  // ── AI / Web / App Development ─────────────────────────────
  project('lead-automation', 'ai-web-app', 'Lead Automation System', null,
    'AI-powered lead qualification routing Meta Ads, forms, and CRM in real time.',
    ['AI Agents', 'CRM Integration', 'Automation'],
    {
      client: 'Real Estate Developer',
      challenge: 'Leads sat unassigned for hours; response time killed conversions.',
      solution: 'AI scoring model with webhook integrations and WhatsApp notifications.',
      process: 'Process mapping, API integration, prompt engineering, monitoring dashboards.',
      result: 'Response time dropped from hours to under two minutes.',
      services: ['AI Automation', 'CRM Integration', 'Web Development'],
      metrics: [
        { label: 'Response Time', value: '< 2 min' },
        { label: 'Assignment Accuracy', value: '94%' },
        { label: 'Follow-up Rate', value: '↑ 78%' },
      ],
    }
  ),
  project('crm-automation', 'ai-web-app', 'CRM Workflow Automation', null,
    'End-to-end automation connecting marketing, sales, and customer success.',
    ['Workflow', 'AI Summaries', 'Integrations'],
    {
      client: 'Multi-service Agency Client',
      challenge: 'Teams spent more time on spreadsheets than selling.',
      solution: 'Unified automation layer with trigger-based workflows and AI summaries.',
      process: 'Workflow audit, blueprint, phased implementation, team training.',
      result: 'Operations overhead reduced; data accuracy and productivity improved.',
      services: ['AI Automation', 'CRM Integration'],
      metrics: [
        { label: 'Manual Tasks', value: '↓ 85%' },
        { label: 'Productivity', value: '↑ 40%' },
      ],
    }
  ),
  project('crestovia-web', 'ai-web-app', 'Crestovia Website', null,
    'Premium agency website with modern React architecture and performance focus.',
    ['React', 'UI/UX', 'Performance'],
    {
      client: 'Crestovia',
      challenge: 'Needed a digital presence matching the premium quality of client work.',
      solution: 'React + Tailwind stack with Framer Motion micro-interactions.',
      process: 'Design system, component architecture, responsive build, deployment.',
      result: 'Fast, polished site that serves as a living portfolio.',
      services: ['Web Development', 'UI/UX Design', 'Branding'],
      metrics: [
        { label: 'Lighthouse Score', value: '96' },
        { label: 'Load Time', value: '< 1.5s' },
      ],
    }
  ),

  // ── Influencer Shoots ──────────────────────────────────────
  project('airavat-influencer', 'influencer-shoots', 'Airavat Influencer Campaign', 'airavat',
    'Curated influencer partnerships showcasing luxury lifestyle at Airavat.',
    ['Influencer Marketing', 'Content Production', 'Luxury'],
    {
      client: 'Airavat Realty',
      challenge: 'Needed authentic lifestyle content to reach younger affluent buyers.',
      solution: 'Hand-picked influencers with architectural and lifestyle briefs.',
      process: 'Talent curation, shoot direction, content editing, cross-channel distribution.',
      result: 'Authentic content that expanded reach into new demographic segments.',
      services: ['Influencer Shoots', 'Social Media', 'Video Production'],
      metrics: [
        { label: 'Reach', value: '↑ 500K' },
        { label: 'Engagement', value: '↑ 4×' },
      ],
    }
  ),
  project('royal-complex-influencer', 'influencer-shoots', 'Royal Complex Shoot', 'royal-complex',
    'On-site influencer production capturing the premium living experience.',
    ['On-site Shoot', 'Reels', 'Stories'],
    {
      client: 'Royal Complex Developers',
      challenge: 'Static marketing assets weren\'t conveying the lived experience.',
      solution: 'Professional on-site shoots with lifestyle and architectural angles.',
      process: 'Location scouting, talent briefing, multi-day production, post-production.',
      result: 'High-quality UGC-style content for ads and organic social.',
      services: ['Influencer Shoots', 'Graphic Design', 'Meta Ads'],
      metrics: [
        { label: 'Video Views', value: '↑ 1.2M' },
        { label: 'Ad Performance', value: '↑ 3×' },
      ],
    }
  ),
  project('green-one-influencer', 'influencer-shoots', 'Green One Eco Shoot', 'green-one',
    'Sustainability-focused influencer content for eco-conscious audiences.',
    ['Eco Lifestyle', 'Content Series', 'Brand Story'],
    {
      client: 'Green One Properties',
      challenge: 'Needed credible voices to validate sustainability claims.',
      solution: 'Eco-lifestyle influencers documenting the green living experience.',
      process: 'Influencer matching, creative briefs, shoot coordination, content rollout.',
      result: 'Credible third-party validation driving trust and inquiries.',
      services: ['Influencer Shoots', 'Social Media Management', 'Branding'],
      metrics: [
        { label: 'Trust Score', value: '↑ 45%' },
        { label: 'Inquiries', value: '↑ 38%' },
      ],
    }
  ),
];

export function getProjectsByCategory(categoryId) {
  return workProjects.filter((p) => p.categoryId === categoryId);
}

export function getCategoryLabel(categoryId) {
  return workCategories.find((c) => c.id === categoryId)?.label ?? '';
}

export function getProjectById(id) {
  return workProjects.find((p) => p.id === id);
}

/** Homepage featured projects — unchanged API */
export const projectsConfig = [
  { slug: 'aurm-abir', name: 'Aurm Abir' },
  { slug: 'siddhi-aspire', name: 'Siddhi Aspire' },
  { slug: 'green-one', name: 'Green One' },
  { slug: 'airavat', name: 'Airavat' },
  { slug: 'abri-crystal', name: 'Abri Crystal' },
  { slug: 'royal-complex', name: 'Royal Complex' },
  { slug: 'ivory-vista', name: 'Ivory Vista' },
];
