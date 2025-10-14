'use client';

import { designConfig } from '@/lib/config';

interface ScrollIndicatorProps {
  isVisible: boolean;
  text?: string;
}

export function ScrollIndicator({ isVisible, text = 'Scroll' }: ScrollIndicatorProps) {
  return (
    <div className={`flex justify-center mt-6 md:mt-8 ${designConfig.animation.fadeIn} ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`flex flex-col items-center gap-2 ${designConfig.animation.bounce}`}>
        <div className={`${designConfig.typography.body.sm} ${designConfig.colors.text.secondary} font-normal`}>
          {text}
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={designConfig.colors.text.secondary}>
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

