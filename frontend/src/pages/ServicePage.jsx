import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceDetails from '../components/Services/ServiceDetails';
import ServicesGrid from '../components/Services/ServicesGrid';
import { getServiceById } from '../data/services';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceById(slug);

  if (!service) {
    return <Navigate to="/services/real-estate" replace />;
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <main>
        <ServiceHero service={service} />
        <ServiceDetails service={service} />
        <ServicesGrid activeServiceId={service.id} compact />
      </main>
      <Footer />
    </motion.div>
  );
}
