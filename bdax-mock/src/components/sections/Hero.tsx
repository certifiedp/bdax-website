'use client';

import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { Pillar3D } from '@/components/ui/pillar-3d';
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
          <div className="relative w-full h-[550px]">
            <Pillar3D />
          </div>
        </div>
      </div>
      
      <ScrollIndicator isVisible={isVisible} />
    </section>
  );
}

