import campaign1Fallback from '../assets/images/campaigns/campaign-1.svg'
import campaign2Fallback from '../assets/images/campaigns/campaign-2.svg'
import campaign3Fallback from '../assets/images/campaigns/campaign-3.svg'
import campaign4Fallback from '../assets/images/campaigns/campaign-4.svg'
import campaign5Fallback from '../assets/images/campaigns/campaign-5.svg'
import campaign6Fallback from '../assets/images/campaigns/campaign-6.svg'
import campaign7Fallback from '../assets/images/campaigns/campaign-7.svg'
import campaign8Fallback from '../assets/images/campaigns/campaign-8.svg'
import { getFolderImages } from '../utils/images'

const campaignImages = getFolderImages('campaigns')
const fallbacks = [
  campaign1Fallback,
  campaign2Fallback,
  campaign3Fallback,
  campaign4Fallback,
  campaign5Fallback,
  campaign6Fallback,
  campaign7Fallback,
  campaign8Fallback,
]

const getCampaignImage = (index) => campaignImages[index] || fallbacks[index]

export const socialCampaigns = [
  {
    id: 1,
    type: 'Luxury Apartment Launch',
    image: getCampaignImage(0),
    likes: '2.4K',
    comments: '186',
  },
  {
    id: 2,
    type: 'Festival Campaign',
    image: getCampaignImage(1),
    likes: '3.1K',
    comments: '242',
  },
  {
    id: 3,
    type: 'Possession Announcement',
    image: getCampaignImage(2),
    likes: '1.8K',
    comments: '97',
  },
  {
    id: 4,
    type: 'Construction Update',
    image: getCampaignImage(3),
    likes: '956',
    comments: '64',
  },
  {
    id: 5,
    type: 'Drone Shoot',
    image: getCampaignImage(4),
    likes: '4.2K',
    comments: '312',
  },
  {
    id: 6,
    type: 'Walkthrough Reel',
    image: getCampaignImage(5),
    likes: '5.6K',
    comments: '428',
  },
  {
    id: 7,
    type: 'Lifestyle Video',
    image: getCampaignImage(6),
    likes: '2.9K',
    comments: '175',
  },
  {
    id: 8,
    type: 'Customer Testimonial',
    image: getCampaignImage(7),
    likes: '1.5K',
    comments: '89',
  },
]
