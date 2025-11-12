'use client';

import { cohortContent } from '@/data/content';
import { designConfig } from '@/lib/config';
import { AnimatedSection } from '@/components/ui/animated-section';

export function Cohort() {
  return (
    <section className={`${designConfig.colors.background.darker} ${designConfig.spacing.section.md} shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)]`}>
      <div className={designConfig.spacing.container}>
        <AnimatedSection>
          <div className={`grid md:grid-cols-2 ${designConfig.spacing.gap.md} items-start mb-16 md:mb-20`}>
            {/* Left - Title */}
            <div>
              <h2 className={`${designConfig.typography.heading.lg} ${designConfig.colors.text.primary}`}>
                {cohortContent.title}
                <br />
                {cohortContent.subtitle}
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex items-center md:justify-end">
              <p className={`${designConfig.colors.text.secondary} ${designConfig.typography.body.sm} max-w-md text-right`}>
                {cohortContent.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className={`grid grid-cols-1 md:grid-cols-3 ${designConfig.spacing.gap.md} opacity-100`}>
            {cohortContent.stats.map((stat, index) => (
              <div key={index} className="text-center hover:opacity-100 transition-opacity duration-300">
                <div className={`${designConfig.typography.stats} gradient-text mb-5`}>
                  {stat.value}
                </div>
                <div className={`${designConfig.typography.body.base} ${designConfig.colors.text.tertiary}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

