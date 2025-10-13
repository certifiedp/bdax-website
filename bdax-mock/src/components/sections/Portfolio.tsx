import Link from 'next/link';
import { portfolioContent } from '@/data/content';
import { Card } from '@/components/ui/card';

export function Portfolio() {
  return (
    <section className="bg-gray-100 py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <h2 className="text-5xl md:text-6xl font-normal">
            {portfolioContent.title}
          </h2>
          <Link
            href={portfolioContent.visitLink.href}
            className="text-base font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            {portfolioContent.visitLink.label} →
          </Link>
        </div>

        {/* Description */}
        <p className="text-base text-gray-700 mb-16">
          {portfolioContent.description}
        </p>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {portfolioContent.cards.map((card) => (
            <Card
              key={card.id}
              className="aspect-[4/5] bg-gray-300 rounded-2xl border-0 shadow-sm"
            />
          ))}
        </div>

        {/* Company Logos - Two Rows */}
        <div className="space-y-6">
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8"
            >
              {portfolioContent.companyLogos
                .slice(rowIndex * 4, (rowIndex + 1) * 4)
                .map((company) => (
                  <div
                    key={company.id}
                    className="px-8 py-4 bg-white/80 rounded-lg text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {company.name}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

