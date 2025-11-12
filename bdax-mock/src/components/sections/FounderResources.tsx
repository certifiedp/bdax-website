'use client';

import { founderResourcesContent } from '@/data/content';
import { designConfig } from '@/lib/config';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function FounderResources() {
  const [activeTab, setActiveTab] = useState('talent');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const content = founderResourcesContent.content[activeTab as keyof typeof founderResourcesContent.content];

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section className={`${designConfig.colors.background.main} ${designConfig.spacing.section.lg} relative`}>
      <div className={`${designConfig.spacing.container} relative`}>
        {/* Tab Navigation */}
        <div className="flex w-full flex-wrap gap-0 -mb-px overflow-hidden border border-white/10">
          {founderResourcesContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 px-6 md:px-8 py-4 text-base md:text-lg font-normal transition-all duration-300 border-r last:border-r-0 border-white/10 text-center ${
                activeTab === tab.id
                  ? `${designConfig.colors.accent.primary} ${designConfig.colors.text.primary}`
                  : `bg-[rgba(255,255,255,0.06)] ${designConfig.colors.text.primary} text-white/80 hover:bg-[rgba(255,255,255,0.1)]`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Background Image */}
          <div className={`relative w-full h-[440px] md:h-[560px] ${designConfig.border.radius.lg} overflow-hidden rounded-b-2xl rounded-t-none border border-white/10`}>
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1533px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-black/25" />
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className={`${designConfig.typography.heading.lg} ${designConfig.colors.text.primary} mb-6 animate-fadeInUp`}>
                {content.title}
              </h3>
              <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.primary} mb-8 animate-fadeInUp [animation-delay:0.2s]`}>
                {content.description}
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/80 bg-transparent flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
              <ArrowUpRight size={32} className={designConfig.colors.text.primary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

