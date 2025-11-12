'use client';

import Image from 'next/image';
import { portfolioContent } from '@/data/content';
import { Card } from '@/components/ui/card';
import { designConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';

export function Portfolio() {
  // Triple the cards for seamless infinite loop
  const infiniteCards = [...portfolioContent.cards, ...portfolioContent.cards, ...portfolioContent.cards];

  return (
    <section className={`${designConfig.colors.background.main} ${designConfig.spacing.section.lg} shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative overflow-hidden`}>
      <div className={`${designConfig.spacing.container} relative z-10`}>
        <AnimatedSection>
          {/* Visit Button */}
          <div className="flex justify-center mb-8">
            <Button 
              className={`rounded-full px-8 md:px-10 py-3 md:py-4 bg-white text-[#0b1b3f] hover:bg-white/95 hover:scale-105 text-[16px] md:text-[17px] font-medium transition-all shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/20`}
            >
              {portfolioContent.visitLink.label} <span className="ml-1">→</span>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className={`${designConfig.typography.heading.xl} ${designConfig.colors.text.primary} mb-4`}>
              {portfolioContent.title}
            </h2>
            <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.secondary}`}>
              {portfolioContent.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Infinite Carousel */}
        <AnimatedSection delay={200}>
          <div className="relative -mx-6 lg:-mx-16 mt-12 overflow-hidden">
            <div className="flex gap-5 animate-infinite-scroll hover:pause-animation">
              {infiniteCards.map((card, index) => (
                <Card
                  key={`${card.id}-${index}`}
                  className={`flex-none w-[280px] md:w-[350px] lg:w-[400px] aspect-[3/4] bg-[#111a34] ${designConfig.border.radius.lg} border-0 overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-300`}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

