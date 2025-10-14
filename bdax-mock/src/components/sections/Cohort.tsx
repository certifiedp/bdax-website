import { cohortContent } from '@/data/content';

export function Cohort() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              {cohortContent.title}
              <br />
              {cohortContent.subtitle}
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-gray-600 text-base leading-relaxed">
              {cohortContent.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cohortContent.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

