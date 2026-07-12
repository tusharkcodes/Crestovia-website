import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import RequireAdmin from './components/admin/RequireAdmin';

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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/services" element={<Navigate to="/services/real-estate" replace />} />

        {/* Hidden admin routes — not linked from public navigation */}
        <Route path="/admin/log-in" element={<AdminLogin />} />
        <Route
          path="/admin/dash-board"
          element={
            <RequireAdmin>
              <AdminDashboard />
            </RequireAdmin>
          }
        />
        <Route path="/admin" element={<Navigate to="/admin/log-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
