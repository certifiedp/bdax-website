import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-6 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight">
            {heroContent.title}
          </h1>
          <p className="text-gray-600 text-base max-w-md leading-relaxed">
            {heroContent.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Button variant="outline" className="gap-2 rounded-full px-8 py-6 border-2 border-gray-300 text- bg-white hover:bg-gray-50 text-base">
              {heroContent.primaryCta.label} →
            </Button>
            <Button className="bg-black hover:bg-gray-900 gap-2 rounded-full px-8 py-6 text-base">
              {heroContent.secondaryCta.label} →
            </Button>
          </div>
        </div>

        {/* Right 3D Graphic */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-[500px]">
            {/* Floating square */}
            <div className="absolute top-8 left-1/2 translate-x-8 w-14 h-14 bg-white/70 rounded shadow-lg animate-float" />
            
            {/* Main 3D Stack */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Stacked blocks with wireframes */}
                <div className="relative w-64">
                  {/* Block 1 - Top with concentric squares */}
                  <div className="relative mb-0">
                    <div className="w-56 h-24 bg-black shadow-2xl mx-auto relative">
                      {/* Top face with concentric pattern */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-white/40 absolute" />
                        <div className="w-8 h-8 border-2 border-white/40 absolute" />
                        <div className="w-4 h-4 border-2 border-white/40 absolute" />
                      </div>
                    </div>
                    {/* Wireframe diamond for block 1 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-1 border-t-2 border-white/30 rotate-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-1 border-t-2 border-white/30 -rotate-0" style={{clipPath: 'polygon(0 0, 15% 0, 50% 100%, 85% 0, 100% 0, 50% 100%)'}} />
                  </div>
                  
                  {/* Block 2 */}
                  <div className="relative mb-0">
                    <div className="w-56 h-20 bg-black shadow-2xl mx-auto relative border-t-2 border-white/20">
                      <div className="absolute inset-3 border border-white/10" />
                    </div>
                    {/* Wireframe diamond for block 2 */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 pointer-events-none" viewBox="0 0 400 120">
                      <path d="M 0 60 L 120 20 L 280 20 L 400 60 L 280 100 L 120 100 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                    </svg>
                  </div>
                  
                  {/* Block 3 */}
                  <div className="relative mb-0">
                    <div className="w-56 h-20 bg-black shadow-2xl mx-auto relative border-t-2 border-white/20">
                      <div className="absolute inset-3 border border-white/10" />
                    </div>
                    {/* Wireframe diamond for block 3 */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 pointer-events-none" viewBox="0 0 400 120">
                      <path d="M 0 60 L 120 20 L 280 20 L 400 60 L 280 100 L 120 100 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                    </svg>
                  </div>
                  
                  {/* Block 4 - Bottom */}
                  <div className="relative">
                    <div className="w-56 h-24 bg-black shadow-2xl mx-auto relative border-t-2 border-white/20">
                      <div className="absolute inset-3 border border-white/10" />
                    </div>
                    {/* Wireframe diamond for block 4 */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 pointer-events-none" viewBox="0 0 400 120">
                      <path d="M 0 60 L 120 20 L 280 20 L 400 60 L 280 100 L 120 100 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

