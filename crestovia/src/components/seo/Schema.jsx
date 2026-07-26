import { Helmet } from 'react-helmet-async';
import { company } from '../../data/company';
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../../config/seo';

function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

const sameAs = [company.social?.instagram, company.social?.linkedin].filter(Boolean);

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_OG_IMAGE,
        },
        image: DEFAULT_OG_IMAGE,
        description: company.description,
        email: company.email,
        telephone: company.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Baner',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411045',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.559,
          longitude: 73.7868,
        },
        areaServed: [
          { '@type': 'City', name: 'Pune' },
          { '@type': 'State', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' },
        ],
        sameAs,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '19:00',
          },
        ],
        priceRange: '$$',
        foundingDate: '2024',
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: company.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/blogs?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

export function WebPageSchema({ title, description, path = '/' }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      }}
    />
  );
}

export function ServiceSchema({ name, description, path }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: absoluteUrl(path),
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: ['Pune', 'Maharashtra', 'India'],
        serviceType: name,
      }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}

export function FAQPageSchema({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function PersonSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Prajakta Pawar',
        jobTitle: 'Founder',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
      }}
    />
  );
}

export function ArticleSchema({ post }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image ? absoluteUrl(post.image) : DEFAULT_OG_IMAGE,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt || post.publishedAt,
        author: {
          '@type': 'Person',
          name: post.author || 'Crestovia Team',
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
        },
        mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`),
        wordCount: post.content?.join(' ').split(/\s+/).length,
        timeRequired: post.readingTime,
      }}
    />
  );
}

export function BlogSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${SITE_NAME} Blog`,
        url: absoluteUrl('/blogs'),
        description: 'Digital marketing insights from Crestovia, Pune.',
        publisher: { '@id': `${SITE_URL}/#organization` },
      }}
    />
  );
}

/** Convenience bundle for homepage */
export default function Schema({ type = 'organization', ...props }) {
  switch (type) {
    case 'website':
      return <WebsiteSchema {...props} />;
    case 'webpage':
      return <WebPageSchema {...props} />;
    case 'service':
      return <ServiceSchema {...props} />;
    case 'breadcrumb':
      return <BreadcrumbSchema {...props} />;
    case 'faq':
      return <FAQPageSchema {...props} />;
    case 'person':
      return <PersonSchema {...props} />;
    case 'article':
      return <ArticleSchema {...props} />;
    case 'blog':
      return <BlogSchema {...props} />;
    default:
      return <OrganizationSchema />;
  }
}
