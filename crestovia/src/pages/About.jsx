import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/About/AboutHero';
import WhoWeAre from '../components/About/WhoWeAre';
import WhatWeStandFor from '../components/About/WhatWeStandFor';
import VisionMission from '../components/About/VisionMission';
import AboutCTA from '../components/About/AboutCTA';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <AboutHero />
        <WhoWeAre />
        <WhatWeStandFor />
        <VisionMission />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
