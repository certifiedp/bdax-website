'use client';

import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { designConfig, scrollConfig } from '@/lib/config';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled < scrollConfig.arrowFadeThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`${designConfig.spacing.container} py-6 md:py-12`}>
      <div className={`grid md:grid-cols-2 ${designConfig.spacing.gap.lg} items-center`}>
        {/* Left Content */}
        <div className="space-y-5">
          <h1 className={designConfig.typography.heading.xl}>
            {heroContent.title}
          </h1>
          <p className={`${designConfig.colors.text.secondary} ${designConfig.typography.body.base} max-w-md`}>
            {heroContent.description}
          </p>
          <div className={`flex flex-wrap ${designConfig.spacing.gap.sm} pt-1`}>
            <Button 
              variant="outline" 
              className={`gap-2 ${designConfig.border.radius.full} px-8 py-6 border-2 border-gray-300 ${designConfig.colors.text.tertiary} ${designConfig.colors.background.white} hover:bg-gray-50 ${designConfig.typography.body.base}`}
            >
              {heroContent.primaryCta.label} →
            </Button>
            <Button 
              className={`${designConfig.colors.background.black} hover:bg-gray-900 gap-2 ${designConfig.border.radius.full} px-8 py-6 ${designConfig.typography.body.base}`}
            >
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
      
      <ScrollIndicator isVisible={isVisible} />
    </section>
  );
}

