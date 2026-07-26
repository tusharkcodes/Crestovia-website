import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceDetails from '../components/Services/ServiceDetails';
import ServicesGrid from '../components/Services/ServicesGrid';
import SEO from '../components/seo/SEO';
import InlineBreadcrumb from '../components/seo/InlineBreadcrumb';
import {
  BreadcrumbSchema,
  OrganizationSchema,
  ServiceSchema,
  WebPageSchema,
} from '../components/seo/Schema';
import { getServiceById } from '../data/services';
import { getServiceSeo } from '../data/seo';
import { resolveServiceId } from '../config/seo';

export default function ServicePage({ forcedSlug, seoPath }) {
  const { slug: paramSlug } = useParams();
  const rawSlug = forcedSlug || paramSlug;
  const serviceId = resolveServiceId(rawSlug);
  const service = getServiceById(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const baseSeo = getServiceSeo(service.id);
  const seo =
    seoPath === '/google-ads'
      ? {
          ...baseSeo,
          title: 'Google Ads & Meta Ads Agency in Pune | Crestovia',
          description:
            'Google Ads agency in Pune and Meta Ads specialists delivering high-intent leads with performance-focused paid campaigns.',
          keywords:
            'Google Ads agency pune, Meta Ads, Facebook Ads, performance marketing, PPC agency pune',
          path: '/google-ads',
        }
      : seoPath === '/meta-ads'
        ? getServiceSeo('meta-ads')
        : baseSeo;
  const canonicalPath = seoPath || seo.path || `/services/${service.id}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: canonicalPath },
  ];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={canonicalPath}
      />
      <OrganizationSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={canonicalPath} />
      <ServiceSchema name={service.name} description={seo.description} path={canonicalPath} />
      <BreadcrumbSchema items={crumbs} />
      <Navbar />
      <main>
        <ServiceHero
          service={service}
          breadcrumb={<InlineBreadcrumb items={crumbs} tone="dark" />}
        />
        <ServiceDetails service={service} />
        <ServicesGrid activeServiceId={service.id} compact />
        <section className="border-t border-border bg-surface-alt/50 py-10">
          <div className="container-wide px-4 text-center text-sm text-muted sm:px-6 lg:px-8">
            Related:{' '}
            <Link to="/website-development" className="font-medium text-primary hover:text-accent">
              Website Development in Pune
            </Link>
            {' · '}
            <Link to="/seo-services" className="font-medium text-primary hover:text-accent">
              SEO Company Pune
            </Link>
            {' · '}
            <Link to="/google-ads" className="font-medium text-primary hover:text-accent">
              Google Ads Agency Pune
            </Link>
            {' · '}
            <Link to="/contact" className="font-medium text-primary hover:text-accent">
              Contact Crestovia
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
