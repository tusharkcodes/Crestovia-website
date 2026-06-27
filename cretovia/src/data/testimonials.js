import client1Fallback from '../assets/images/testimonials/client-1.svg'
import client2Fallback from '../assets/images/testimonials/client-2.svg'
import client3Fallback from '../assets/images/testimonials/client-3.svg'
import client4Fallback from '../assets/images/testimonials/client-4.svg'
import { getFolderImages } from '../utils/images'

const testimonialImages = getFolderImages('testimonials')
const fallbacks = [client1Fallback, client2Fallback, client3Fallback, client4Fallback]

const getClientImage = (index) => testimonialImages[index] || fallbacks[index]

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Patil',
    company: 'Airavat Developers',
    role: 'Managing Director',
    image: getClientImage(0),
    rating: 5,
    feedback:
      'Crestovia transformed our lead generation completely. We saw a 3.2X increase in qualified leads within the first quarter. Their real estate expertise is unmatched.',
  },
  {
    id: 2,
    name: 'Priya Deshmukh',
    company: 'Ivory Vista Properties',
    role: 'Marketing Head',
    image: getClientImage(1),
    rating: 5,
    feedback:
      'The team reduced our cost per lead by 42% while improving lead quality. Their data-driven approach and creative campaigns exceeded every expectation.',
  },
  {
    id: 3,
    name: 'Amit Sharma',
    company: 'Royal Complex',
    role: 'CEO',
    image: getClientImage(2),
    rating: 5,
    feedback:
      'From branding to performance marketing, Crestovia delivered end-to-end excellence. Over 1200 site visits in just 3 months — phenomenal results.',
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    company: 'Siddhi Aspire',
    role: 'Director',
    image: getClientImage(3),
    rating: 5,
    feedback:
      'Their Instagram reels and social media strategy gave us 4.5 million reach. Crestovia truly understands how to market luxury real estate in the digital age.',
  },
]
