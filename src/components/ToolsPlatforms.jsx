import { portfolioData } from '../data/portfolioData'
import { ToolIcon } from './ToolIcons'
import metaIcon from '../assets/platforms/meta.png'
import googleAdsIcon from '../assets/platforms/google-ads.png'
import claudeIcon from '../assets/platforms/claude.png'
import canvaIcon from '../assets/platforms/canva.png'
import chatgptIcon from '../assets/platforms/chatgpt.png'
import sheetsIcon from '../assets/platforms/google-sheets.png'
import instagramIcon from '../assets/platforms/instagram.png'
import facebookIcon from '../assets/platforms/facebook.png'
import excelIcon from '../assets/platforms/excel.png'
import wordpressIcon from '../assets/platforms/wordpress.png'

const toolImages = {
  meta: metaIcon,
  gads: googleAdsIcon,
  claude: claudeIcon,
  canva: canvaIcon,
  chatgpt: chatgptIcon,
  sheets: sheetsIcon,
  instagram: instagramIcon,
  facebook: facebookIcon,
  excel: excelIcon,
  wordpress: wordpressIcon,
}

export default function ToolsPlatforms() {
  return (
    <section id="tools" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="organic-frame bg-[#f4f2ee] px-5 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
            tools & platforms<span className="text-orange">.</span>
          </h2>
          <p className="max-w-sm border-t-2 border-orange pt-3 text-sm text-navy/65">
            Tools used to plan, execute, optimize, and measure digital marketing campaigns.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {portfolioData.tools.map((tool) => (
            <li
              key={tool.id}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white/70 px-3 py-5 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              {toolImages[tool.id] ? (
                <img
                  src={toolImages[tool.id]}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-contain"
                />
              ) : (
                <ToolIcon id={tool.id} className="h-12 w-12" />
              )}
              <span className="text-xs font-medium text-navy/80">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
