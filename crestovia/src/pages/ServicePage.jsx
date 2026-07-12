import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceDetails from '../components/Services/ServiceDetails';
import ServicesGrid from '../components/Services/ServicesGrid';
import { getServiceById } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceById(slug);

  if (!service) {
    return <Navigate to="/services/real-estate" replace />;
  }

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <ServiceDetails service={service} />
        <ServicesGrid activeServiceId={service.id} compact />
      </main>
      <Footer />
    </>
  );
}
