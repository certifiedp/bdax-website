import Link from 'next/link';
import Image from 'next/image';
import { portfolioContent } from '@/data/content';
import { Card } from '@/components/ui/card';
import { designConfig } from '@/lib/config';

export function Portfolio() {
  return (
    <section className={`${designConfig.colors.background.gray} ${designConfig.spacing.section.sm}`}>
      <div className={designConfig.spacing.container}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6">
          <h2 className={designConfig.typography.heading.lg}>
            {portfolioContent.title}
          </h2>
          <Link
            href={portfolioContent.visitLink.href}
            className={`${designConfig.typography.body.base} font-normal hover:opacity-70 transition-opacity flex items-center gap-2`}
          >
            {portfolioContent.visitLink.label} →
          </Link>
        </div>

        {/* Description */}
        <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.primary} mb-10`}>
          {portfolioContent.description}
        </p>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {portfolioContent.cards.map((card) => (
            <Card
              key={card.id}
              className={`aspect-[4/5] bg-gray-300 ${designConfig.border.radius.lg} border-0 shadow-sm overflow-hidden relative`}
            >
              {card.image ? (
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : null}
            </Card>
          ))}
        </div>

        {/* Company Logos - Animated Scrolling Rows */}
        <div className="space-y-5 overflow-hidden">
          {/* First Row - Scroll Left */}
          <div className="relative">
            <div className={`flex gap-5 ${designConfig.animation.scrollLeft}`}>
              {[...portfolioContent.companyLogos, ...portfolioContent.companyLogos, ...portfolioContent.companyLogos].map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className={`flex-shrink-0 px-6 py-3 bg-white/90 ${designConfig.border.radius.sm} ${designConfig.typography.body.sm} font-normal ${designConfig.colors.text.tertiary} shadow-sm`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right */}
          <div className="relative">
            <div className={`flex gap-5 ${designConfig.animation.scrollRight}`}>
              {[...portfolioContent.companyLogos, ...portfolioContent.companyLogos, ...portfolioContent.companyLogos].map((company, index) => (
                <div
                  key={`${company.id}-${index}-reverse`}
                  className={`flex-shrink-0 px-6 py-3 bg-white/90 ${designConfig.border.radius.sm} ${designConfig.typography.body.sm} font-normal ${designConfig.colors.text.tertiary} shadow-sm`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

