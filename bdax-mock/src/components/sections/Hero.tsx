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
    <section className={`${designConfig.spacing.container} py-8 md:py-12 min-h-screen flex items-center`}>
      <div className={`grid md:grid-cols-2 ${designConfig.spacing.gap.lg} items-center w-full`}>
        {/* Left 3D Graphic with Gradient Background */}
        <div className="flex justify-center items-center order-2 md:order-1 animate-fadeIn">
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Gradient background box */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a1f35] via-[#0f1220] to-[#1e2640] opacity-80"></div>
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl" style={{
              background: 'radial-gradient(circle at 50% 40%, rgba(253, 181, 23, 0.15) 0%, transparent 60%)'
            }}></div>
            {/* 3D Pillar */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden rotate-180 scale-y-[-1] hover:scale-y-[-1.02] transition-transform duration-700">
              <Pillar3D />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 md:space-y-8 order-1 md:order-2">
          {/* Tag */}
          <div className={`inline-flex items-center ${designConfig.colors.background.muted} ${designConfig.border.radius.full} px-6 py-2 animate-fadeInUp opacity-0 [animation-delay:0.2s]`}>
            <span className={`${designConfig.typography.body.sm} ${designConfig.colors.text.secondary} font-medium`}>
              {heroContent.tag}
            </span>
          </div>

          {/* Title */}
          <h1 className={`${designConfig.typography.heading.xl} ${designConfig.colors.text.primary} max-w-2xl animate-fadeInUp opacity-0 [animation-delay:0.4s]`}>
            {heroContent.title}
          </h1>

          {/* Description */}
          <p className={`${designConfig.colors.text.secondary} ${designConfig.typography.body.base} max-w-xl animate-fadeInUp opacity-0 [animation-delay:0.6s]`}>
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap ${designConfig.spacing.gap.sm} pt-4 animate-fadeInUp opacity-0 [animation-delay:0.8s]`}>
            <Button 
              className={`${designConfig.colors.accent.primary} hover:opacity-90 hover:scale-105 gap-1 rounded-[34px] px-7 py-5 text-[15px] font-medium ${designConfig.colors.text.primary} transition-all shadow-lg`}
            >
              {heroContent.primaryCta.label} <span className="text-lg">→</span>
            </Button>
            <Button 
              variant="outline"
              className={`${designConfig.colors.background.white} ${designConfig.colors.text.black} hover:bg-gray-100 hover:scale-105 gap-1 rounded-[34px] px-7 py-5 text-[15px] font-medium border-0 transition-all`}
            >
              {heroContent.secondaryCta.label} <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </div>
      
      <ScrollIndicator isVisible={isVisible} />
    </section>
  );
}

