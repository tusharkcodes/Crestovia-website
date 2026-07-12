import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Projects from '../components/Projects/Projects';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Projects />
        <AboutCompany />
      </main>
      <Footer />
    </>
  );
}
