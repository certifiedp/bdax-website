import { founderResourcesContent } from '@/data/content';

export function FounderResources() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-normal text-center mb-24">
          {founderResourcesContent.title}
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-center">
          {/* Left Text */}
          <div className="text-center md:text-right">
            <p className="text-base text-gray-700 leading-relaxed">
              {founderResourcesContent.sections[0].text}
            </p>
          </div>

          {/* Center 3D Graphic */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs aspect-square">
              {/* Placeholder for 3D graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Stack of shapes */}
                  <div className="w-40 h-56 bg-gray-900 rounded-lg shadow-2xl">
                    <div className="absolute inset-4 border border-white/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 border-2 border-white/40 rotate-45" />
                    </div>
                  </div>
                  {/* Floating geometric shapes */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gray-300 rounded transform rotate-12 shadow-lg" />
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gray-400 rounded-lg transform -rotate-12 shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left">
            <p className="text-base text-gray-700 leading-relaxed">
              {founderResourcesContent.sections[1].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

