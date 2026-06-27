import collage1Fallback from '../assets/images/about/collage-1.svg'
import collage2Fallback from '../assets/images/about/collage-2.svg'
import collage3Fallback from '../assets/images/about/collage-3.svg'
import collage4Fallback from '../assets/images/about/collage-4.svg'
import { getFolderImages } from '../utils/images'

const aboutImages = getFolderImages('about')
const siddhiImages = getFolderImages('portfolio/siddhi-aspire')
const svgFallbacks = [collage1Fallback, collage2Fallback, collage3Fallback, collage4Fallback]

const fillCollage = (images) => {
  if (images.length >= 4) return images.slice(0, 4)
  const extras = [...siddhiImages, ...aboutImages, ...svgFallbacks]
  return [...images, ...extras].slice(0, 4)
}

export const collageImages = fillCollage(siddhiImages.length > 0 ? siddhiImages : aboutImages)
