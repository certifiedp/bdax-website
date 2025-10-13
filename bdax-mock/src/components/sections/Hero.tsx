import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight">
            {heroContent.title}
          </h1>
          <p className="text-gray-700 text-lg max-w-md leading-relaxed">
            {heroContent.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="outline" className="gap-2 rounded-full px-6 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
              {heroContent.primaryCta.label} →
            </Button>
            <Button className="bg-gray-900 hover:bg-black gap-2 rounded-full px-6">
              {heroContent.secondaryCta.label} →
            </Button>
          </div>
        </div>

        {/* Right 3D Graphic */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-10 w-12 h-12 bg-white/80 rounded-md shadow-lg animate-float" />
            <div className="absolute top-32 right-32 w-16 h-16 bg-white/60 rounded-md shadow-lg animate-float-delay" />
            
            {/* Main 3D Stack */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Wireframe lines */}
                <div className="absolute -left-20 top-1/2 w-40 h-px bg-gray-400/50" />
                <div className="absolute -right-20 top-1/2 w-40 h-px bg-gray-400/50" />
                <div className="absolute left-1/2 -top-20 w-px h-40 bg-gray-400/50" />
                <div className="absolute left-1/2 -bottom-20 w-px h-40 bg-gray-400/50" />
                
                {/* Stacked blocks */}
                <div className="relative w-56 h-72">
                  {/* Top block */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-gray-900 shadow-2xl">
                    <div className="absolute inset-3 border border-white/20" />
                  </div>
                  
                  {/* Middle block */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-24 bg-gray-900 shadow-2xl">
                    <div className="absolute inset-3 border border-white/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/40 rotate-45" />
                  </div>
                  
                  {/* Bottom block */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-28 bg-gray-900 shadow-2xl">
                    <div className="absolute inset-3 border border-white/20" />
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

