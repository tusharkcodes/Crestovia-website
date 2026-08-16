import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import CrestoviaFeature from './components/CrestoviaFeature'
import CaseStudies from './components/CaseStudies'
import Experience from './components/Experience'
import ToolsPlatforms from './components/ToolsPlatforms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/portfolioData'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: portfolioData.name,
  jobTitle: portfolioData.role,
  description: portfolioData.metaDescription,
  image: '/prajakta.jpg',
  worksFor: {
    '@type': 'Organization',
    name: portfolioData.crestovia.name,
    url: portfolioData.crestovia.url,
  },
  url: portfolioData.canonicalUrl.startsWith('ADD_')
    ? undefined
    : portfolioData.canonicalUrl,
}

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <CrestoviaFeature />
        <CaseStudies />
        <Experience />
        <ToolsPlatforms />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
