import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo/SEO';
import { pageSeo } from '../data/seo';

export default function NotFound() {
  const seo = pageSeo.notFound;

  return (
    <>
      <SEO {...seo} canonical="/" noindex />
      <Navbar />
      <main className="hero-gradient flex min-h-[70vh] items-center">
        <div className="container-wide px-4 py-28 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            This page does not exist or may have moved. Explore Crestovia’s digital marketing services
            in Pune or return home.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
