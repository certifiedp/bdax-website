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
        <div className="flex flex-wrap gap-2 mb-12">
          {founderResourcesContent.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 md:px-8 py-3 rounded-t-2xl text-base md:text-lg font-normal transition-all duration-300 hover:scale-105 ${
                activeTab === tab.id
                  ? `${designConfig.colors.accent.primary} ${designConfig.colors.text.primary}`
                  : `${designConfig.colors.background.muted} ${designConfig.colors.text.secondary} hover:bg-[rgba(253,181,23,0.1)]`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`relative transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Background Image */}
          <div className={`relative w-full h-[500px] md:h-[625px] ${designConfig.border.radius.lg} overflow-hidden rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl`}>
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1533px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className={`${designConfig.typography.heading.md} ${designConfig.colors.text.primary} mb-6 animate-fadeInUp`}>
                {content.title}
              </h3>
              <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.primary} mb-8 animate-fadeInUp [animation-delay:0.2s]`}>
                {content.description}
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all cursor-pointer">
              <ArrowUpRight size={32} className={designConfig.colors.text.primary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

