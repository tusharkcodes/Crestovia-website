import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import ServicesIndex from './pages/ServicesIndex';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/AdminLogin';
import RequireAdmin from './components/admin/RequireAdmin';
import Analytics from './components/seo/Analytics';
import { SERVICE_SEO_ALIASES } from './config/seo';

const LazyAdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname.startsWith('/admin')) return;

    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function ServiceAlias({ alias }) {
  const serviceId = SERVICE_SEO_ALIASES[alias] || alias;
  return <ServicePage forcedSlug={serviceId} seoPath={`/${alias}`} />;
}

export default function App() {
  const gsc = import.meta.env.VITE_GSC_VERIFICATION;

  return (
    <HelmetProvider>
      {gsc ? (
        <Helmet>
          <meta name="google-site-verification" content={gsc} />
        </Helmet>
      ) : null}
      <Analytics />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />

          <Route path="/website-development" element={<ServiceAlias alias="website-development" />} />
          <Route path="/seo-services" element={<ServiceAlias alias="seo-services" />} />
          <Route path="/google-ads" element={<ServiceAlias alias="google-ads" />} />
          <Route path="/meta-ads" element={<ServiceAlias alias="meta-ads" />} />
          <Route path="/branding" element={<ServiceAlias alias="branding" />} />
          <Route path="/social-media-marketing" element={<ServiceAlias alias="social-media-marketing" />} />
          <Route path="/ai-automation" element={<ServiceAlias alias="ai-automation" />} />

          <Route path="/portfolio" element={<OurWork />} />
          <Route path="/our-work" element={<OurWork />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

          <Route path="/admin/log-in" element={<AdminLogin />} />
          <Route path="/admin/login" element={<Navigate to="/admin/log-in" replace />} />
          <Route
            path="/admin/dash-board"
            element={
              <RequireAdmin>
                <Suspense
                  fallback={
                    <div className="flex min-h-screen items-center justify-center bg-primary text-white/70">
                      Loading…
                    </div>
                  }
                >
                  <LazyAdminDashboard />
                </Suspense>
              </RequireAdmin>
            }
          />
          <Route path="/admin/dashboard" element={<Navigate to="/admin/dash-board" replace />} />
          <Route path="/admin" element={<Navigate to="/admin/log-in" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
