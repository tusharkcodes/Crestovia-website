import airavatFallback from '../assets/images/portfolio/airavat.svg'
import ivoryVistaFallback from '../assets/images/portfolio/ivory-vista.svg'
import royalComplexFallback from '../assets/images/portfolio/royal-complex.svg'
import abriCrystalFallback from '../assets/images/portfolio/abri-crystal.svg'
import aurumAbirFallback from '../assets/images/portfolio/aurum-abir.svg'
import greenOneFallback from '../assets/images/portfolio/green-one.svg'
import { getProjectImages } from '../utils/images'

const airavat = getProjectImages('airavat', airavatFallback)
const ivoryVista = getProjectImages('ivory-vista', ivoryVistaFallback)
const royalComplex = getProjectImages('royal-complex', royalComplexFallback)
const abriCrystal = getProjectImages('abri-crystal', abriCrystalFallback)
const siddhiAspire = getProjectImages('siddhi-aspire', ivoryVistaFallback)
const aurumAbir = getProjectImages('aurum-abir', aurumAbirFallback)
const greenOne = getProjectImages('green-one', greenOneFallback)

export const portfolioProjects = [
  {
    id: 1,
    name: 'Airavat',
    location: 'Ambegaon',
    image: airavat.image,
    images: airavat.images,
    campaigns: ['Google Ads', 'Meta Ads', 'Landing Page', 'Lead Generation'],
    achievement: '3.2X Qualified Leads',
  },
  {
    id: 2,
    name: 'Ivory Vista',
    location: 'Katraj',
    image: ivoryVista.image,
    images: ivoryVista.images,
    campaigns: ['SEO', 'Google Ads', 'Meta Ads'],
    achievement: '42% Lower CPL',
  },
  // {
  //   id: 3,
  //   name: 'Royal Complex',
  //   location: 'Taloja Phase 2',
  //   image: royalComplex.image,
  //   images: royalComplex.images,
  //   campaigns: ['Facebook Ads', 'Instagram Ads', 'Performance Marketing'],
  //   achievement: '1200+ Site Visits',
  // },
  {
    id: 4,
    name: 'Abri Crystal',
    location: 'Taloja Phase 2',
    image: abriCrystal.image,
    images: abriCrystal.images,
    campaigns: ['Branding', 'Google Ads', 'Lead Generation'],
    achievement: '210% ROI',
  },
  {
    id: 5,
    name: 'Siddhi Aspire',
    location: 'Ambegaon',
    image: siddhiAspire.image,
    images: siddhiAspire.images,
    campaigns: ['Social Media', 'Instagram Reels', 'Meta Ads'],
    achievement: '4.5 Million Reach',
  },
  {
    id: 6,
    name: 'Aurum Abir',
    location: 'Dhankawadi',
    image: aurumAbir.image,
    images: aurumAbir.images,
    campaigns: ['SEO', 'Google Ads'],
    achievement: 'Page 1 Rankings',
  },
  {
    id: 7,
    name: 'Green One',
    location: 'Dhayari',
    image: greenOne.image,
    images: greenOne.images,
    campaigns: ['Video Marketing', 'Instagram', 'Lead Generation'],
    achievement: '980 Qualified Leads',
  },
]
