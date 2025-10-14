import Link from 'next/link';
import Image from 'next/image';
import { portfolioContent } from '@/data/content';
import { Card } from '@/components/ui/card';

export function Portfolio() {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal">
            {portfolioContent.title}
          </h2>
          <Link
            href={portfolioContent.visitLink.href}
            className="text-base font-normal hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            {portfolioContent.visitLink.label} →
          </Link>
        </div>

        {/* Description */}
        <p className="text-base text-black mb-10">
          {portfolioContent.description}
        </p>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {portfolioContent.cards.map((card) => (
            <Card
              key={card.id}
              className="aspect-[4/5] bg-gray-300 rounded-2xl border-0 shadow-sm overflow-hidden relative"
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
            <div className="flex gap-5 animate-scroll-left">
              {[...portfolioContent.companyLogos, ...portfolioContent.companyLogos, ...portfolioContent.companyLogos].map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-white/90 rounded-lg text-sm font-normal text-gray-700 shadow-sm"
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right */}
          <div className="relative">
            <div className="flex gap-5 animate-scroll-right">
              {[...portfolioContent.companyLogos, ...portfolioContent.companyLogos, ...portfolioContent.companyLogos].map((company, index) => (
                <div
                  key={`${company.id}-${index}-reverse`}
                  className="flex-shrink-0 px-6 py-3 bg-white/90 rounded-lg text-sm font-normal text-gray-700 shadow-sm"
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

