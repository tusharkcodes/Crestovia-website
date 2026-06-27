import { motion } from 'framer-motion'
import { FaHeart, FaComment, FaInstagram } from 'react-icons/fa'

const CampaignCard = ({ campaign, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      <div className="glass-card overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.12)]">
        {/* Instagram-style header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <FaInstagram className="text-white text-xs" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900">crestovia</p>
            <p className="text-[10px] text-gray-500">Sponsored</p>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={campaign.image}
            alt={campaign.type}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10">
              {campaign.type}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <FaHeart className="text-pink-500" />
              {campaign.likes}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <FaComment className="text-purple-500" />
              {campaign.comments}
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-900">{campaign.type}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CampaignCard
