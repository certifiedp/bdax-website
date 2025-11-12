'use client';

import Image from 'next/image';
import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/button';
import bdaxGraphic from '@/app/bdax-graphic.png';
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
    <section className={`${designConfig.spacing.container} py-6 md:py-10 min-h-[calc(100vh-160px)] flex items-center`}>
      <div className={`grid md:grid-cols-2 ${designConfig.spacing.gap.lg} items-center w-full`}>
        {/* Left Graphic with Gradient Background */}
        <div className="flex justify-center items-center order-2 md:order-1 animate-fadeIn">
          <div className="relative w-full max-w-[520px] h-[420px] md:h-[480px] lg:h-[540px]">
            {/* Gradient background box */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1a1f35] via-[#0f1220] to-[#1e2640] opacity-80"></div>
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl" style={{
              background: 'radial-gradient(circle at 50% 40%, rgba(253, 181, 23, 0.15) 0%, transparent 60%)'
            }}></div>
            {/* BDAX Graphic */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src={bdaxGraphic}
                alt="BDAX Accelerator graphic"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 520px"
                priority
              />
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
              className={`${designConfig.colors.accent.primary} hover:opacity-90 hover:scale-105 gap-1 px-15 py-6 font-medium ${designConfig.colors.text.primary} transition-all shadow-lg`}
            >
              {heroContent.primaryCta.label} <span className="text-lg">→</span>
            </Button>
            <Button 
              variant="outline"
              className={`${designConfig.colors.background.white} ${designConfig.colors.text.black} hover:bg-gray-100 hover:scale-105 gap-1 px-15 py-6 font-medium border-0 transition-all`}
            >
              {heroContent.secondaryCta.label} <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

