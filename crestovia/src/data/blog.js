/**
 * Blog posts for listing + future articles.
 * Add new posts here; routes and schema update automatically.
 */
export const blogPosts = [
  {
    slug: 'why-digital-marketing-agency-pune-matters',
    title: 'Why a Digital Marketing Agency in Pune Matters for Growing Brands',
    excerpt:
      'How partnering with a local digital marketing agency in Pune helps with SEO, ads, websites, and faster go-to-market execution.',
    keywords: 'digital marketing agency pune, local SEO, marketing partner',
    author: 'Crestovia Team',
    publishedAt: '2026-06-01',
    modifiedAt: '2026-06-01',
    readingTime: '5 min read',
    image: '/crestovia-logo.png',
    category: 'Digital Marketing',
    content: [
      'Choosing a digital marketing agency in Pune gives growing brands a partner who understands Maharashtra’s competitive markets while executing modern SEO, ads, and web experiences.',
      'Crestovia combines website development, SEO, Google Ads, Meta Ads, branding, and AI automation so your funnel stays consistent from first click to closed deal.',
      'If you are evaluating SEO company Pune options or need a Google Ads agency in Pune, start with clear KPIs — then pick a team that reports against them weekly.',
    ],
  },
  {
    slug: 'seo-vs-google-ads-for-indian-businesses',
    title: 'SEO vs Google Ads: What Indian Businesses Should Prioritize',
    excerpt:
      'A practical guide to balancing organic SEO and paid Google Ads for sustainable lead generation in India.',
    keywords: 'SEO services pune, Google Ads, performance marketing',
    author: 'Crestovia Team',
    publishedAt: '2026-06-15',
    modifiedAt: '2026-06-15',
    readingTime: '6 min read',
    image: '/crestovia-logo.png',
    category: 'SEO & Ads',
    content: [
      'SEO builds durable visibility; Google Ads captures high-intent demand quickly. Most businesses in Pune and across India need both — sequenced by budget and sales cycle.',
      'Use SEO for educational and category queries, and Google Ads for bottom-funnel keywords where conversion rates justify CPA.',
      'Crestovia’s SEO and paid media teams collaborate so messaging, landing pages, and analytics stay aligned.',
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
