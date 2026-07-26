import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/seo/Breadcrumb';
import {
  OrganizationSchema,
  WebPageSchema,
  WebsiteSchema,
} from '../components/seo/Schema';
import { services } from '../data/services';
import { pageSeo, getServiceSeo } from '../data/seo';
import FAQSection from '../components/FAQ/FAQSection';
import PageHeroBackdrop, { PAGE_HERO_GRADIENT } from '../components/Hero/PageHeroBackdrop';

export default function ServicesIndex() {
  const seo = pageSeo.services;

  return (
    <>
      <SEO {...seo} canonical={seo.path} />
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={seo.path} />
      <Navbar />
      <main>
        <header
          className="relative overflow-hidden border-b border-white/10 pt-28 pb-12 sm:pt-32"
          style={{ background: PAGE_HERO_GRADIENT }}
        >
          <PageHeroBackdrop />
          <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              tone="dark"
              items={[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
              ]}
            />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF7A00]">Services</p>
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Digital Marketing Services in Pune
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              From website development and SEO to Google Ads, Meta Ads, branding, social media
              marketing, and AI automation — Crestovia helps businesses across Maharashtra and India
              grow with measurable performance marketing.
            </p>
          </div>
        </header>

        <section className="section-padding bg-surface" aria-labelledby="services-list-heading">
          <div className="container-wide">
            <h2 id="services-list-heading" className="sr-only">
              All Crestovia services
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const serviceMeta = getServiceSeo(service.id);
                return (
                  <li key={service.id}>
                    <article className="card-premium flex h-full flex-col p-6">
                      <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted">{service.tagline}</p>
                      <Link
                        to={serviceMeta.path}
                        className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Explore {service.name}
                        <span className="sr-only"> — {serviceMeta.path}</span>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
            <p className="mt-10 text-center text-sm text-muted">
              Looking for a partner?{' '}
              <Link to="/contact" className="font-semibold text-primary hover:text-accent">
                Contact our Pune team
              </Link>
              .
            </p>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
