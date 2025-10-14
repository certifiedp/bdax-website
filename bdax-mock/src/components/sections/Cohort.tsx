import { cohortContent } from '@/data/content';
import { designConfig } from '@/lib/config';

export function Cohort() {
  return (
    <section className={`${designConfig.colors.background.white} ${designConfig.spacing.section.sm}`}>
      <div className={designConfig.spacing.container}>
        <div className={`grid md:grid-cols-2 ${designConfig.spacing.gap.md} items-start mb-12 md:mb-16`}>
          {/* Left - Title */}
          <div>
            <h2 className={designConfig.typography.heading.lg}>
              {cohortContent.title}
              <br />
              {cohortContent.subtitle}
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <p className={`${designConfig.colors.text.secondary} ${designConfig.typography.body.base}`}>
              {cohortContent.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${designConfig.spacing.gap.md}`}>
          {cohortContent.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className={`${designConfig.typography.stats} mb-2`}>
                {stat.value}
              </div>
              <div className={`${designConfig.typography.body.sm} ${designConfig.colors.text.secondary}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

