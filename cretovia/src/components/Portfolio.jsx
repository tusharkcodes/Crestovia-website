import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import PortfolioCard from './PortfolioCard'
import { portfolioProjects } from '../data/portfolio'
import { staggerContainer, viewportConfig } from '../animations/variants'

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Work"
          subtitle="#RealCampaignsRealResults."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
