import { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'
import CampaignCard from './CampaignCard'
import { socialCampaigns } from '../data/campaigns'

const Campaigns = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0
      el.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animationId)
    const resume = () => { animationId = requestAnimationFrame(animate) }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animationId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  const duplicated = [...socialCampaigns, ...socialCampaigns]

  return (
    <section id="campaigns" className="relative section-padding bg-bg-secondary/50 overflow-hidden">
      <div className="container-custom mb-14 md:mb-16">
        <SectionHeading
          title="Social Media Campaigns"
          subtitle="Instagram-style campaigns that drive engagement and conversions."
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-6 overflow-x-hidden px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicated.map((campaign, index) => (
          <CampaignCard key={`${campaign.id}-${index}`} campaign={campaign} index={index % socialCampaigns.length} />
        ))}
      </div>
    </section>
  )
}

export default Campaigns
