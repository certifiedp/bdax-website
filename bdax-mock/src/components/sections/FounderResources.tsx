import { founderResourcesContent } from '@/data/content';
import { designConfig } from '@/lib/config';

export function FounderResources() {
  return (
    <section className={`${designConfig.colors.background.white} ${designConfig.spacing.section.sm}`}>
      <div className={designConfig.spacing.container}>
        {/* Title */}
        <h2 className={`${designConfig.typography.heading.lg} text-center mb-16`}>
          {founderResourcesContent.title}
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-center">
          {/* Left Text */}
          <div className="text-center md:text-right">
            <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.secondary}`}>
              {founderResourcesContent.sections[0].text}
            </p>
          </div>

          {/* Center 3D Graphic */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              {/* Main dark card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-96">
                  {/* Dark phone/card shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl shadow-2xl">
                    {/* Inner border */}
                    <div className="absolute inset-6 border border-gray-700/50 rounded-2xl" />
                    
                    {/* Centered diamond */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-gray-600/60 rotate-45" />
                    </div>
                  </div>
                  
                  {/* Top-left floating square */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 rounded-2xl shadow-xl transform -rotate-12 opacity-90" />
                  
                  {/* Bottom-right floating square */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-500 rounded-2xl shadow-2xl transform rotate-6 opacity-85" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left">
            <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.secondary}`}>
              {founderResourcesContent.sections[1].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

