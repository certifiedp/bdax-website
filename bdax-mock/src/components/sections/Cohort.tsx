import { cohortContent } from '@/data/content';

export function Cohort() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-normal leading-tight">
              {cohortContent.title}
              <br />
              {cohortContent.subtitle}
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              {cohortContent.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {cohortContent.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl lg:text-7xl font-normal mb-3">
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

