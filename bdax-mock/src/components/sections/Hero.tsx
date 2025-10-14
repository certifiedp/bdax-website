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
    <section className={`${designConfig.spacing.container} py-2 md:py-4`}>
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
          <div className="relative w-full max-w-lg h-[550px]">
            {/* Floating square with gradient */}
            <div className={`absolute top-4 left-1/2 translate-x-16 w-16 h-16 bg-gradient-to-br from-white/80 to-white/40 ${designConfig.border.radius.sm} shadow-xl ${designConfig.animation.float}`} />
            
            {/* Main 3D Stack */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative perspective-1000">
                {/* Stacked 3D blocks */}
                <div className="relative">
                  {/* Top Block with concentric squares */}
                  <div className="relative mb-0">
                    <div className="w-64 h-32 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto relative transform-gpu">
                      {/* 3D side face effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
                      
                      {/* Top face with concentric pattern */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 border-[3px] border-white/50 absolute" />
                        <div className="w-14 h-14 border-[3px] border-white/50 absolute" />
                        <div className="w-8 h-8 border-[3px] border-white/50 absolute" />
                      </div>
                      
                      {/* Inner border glow */}
                      <div className="absolute inset-4 border border-white/15" />
                    </div>
                    
                    {/* Wireframe diamond - cleaner SVG */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-40 pointer-events-none" viewBox="0 0 480 160" style={{ zIndex: -1 }}>
                      <path d="M 0 80 L 140 40 L 340 40 L 480 80 L 340 120 L 140 120 Z" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2" 
                            opacity="0.25" />
                    </svg>
                  </div>
                  
                  {/* Block 2 */}
                  <div className="relative mb-0">
                    <div className="w-64 h-28 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.4)] mx-auto relative border-t-[3px] border-white/30">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
                      <div className="absolute inset-4 border border-white/10" />
                    </div>
                    
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-36 pointer-events-none" viewBox="0 0 480 144" style={{ zIndex: -1 }}>
                      <path d="M 0 72 L 140 32 L 340 32 L 480 72 L 340 112 L 140 112 Z" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2" 
                            opacity="0.25" />
                    </svg>
                  </div>
                  
                  {/* Block 3 */}
                  <div className="relative mb-0">
                    <div className="w-64 h-28 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.4)] mx-auto relative border-t-[3px] border-white/30">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
                      <div className="absolute inset-4 border border-white/10" />
                    </div>
                    
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-36 pointer-events-none" viewBox="0 0 480 144" style={{ zIndex: -1 }}>
                      <path d="M 0 72 L 140 32 L 340 32 L 480 72 L 340 112 L 140 112 Z" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2" 
                            opacity="0.25" />
                    </svg>
                  </div>
                  
                  {/* Bottom Block */}
                  <div className="relative">
                    <div className="w-64 h-32 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.6)] mx-auto relative border-t-[3px] border-white/30">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
                      <div className="absolute inset-4 border border-white/10" />
                      
                      {/* Bottom shadow effect */}
                      <div className="absolute -bottom-2 left-4 right-4 h-2 bg-black/40 blur-sm" />
                    </div>
                    
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-40 pointer-events-none" viewBox="0 0 480 160" style={{ zIndex: -1 }}>
                      <path d="M 0 80 L 140 40 L 340 40 L 480 80 L 340 120 L 140 120 Z" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2" 
                            opacity="0.25" />
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

