import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Campaigns from './components/Campaigns'
import WhoWeAre from './components/WhoWeAre'
import GrowthStatement from './components/GrowthStatement'
import TeamVision from './components/TeamVision'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Campaigns />
        <WhoWeAre />
        <GrowthStatement />
        <TeamVision />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
