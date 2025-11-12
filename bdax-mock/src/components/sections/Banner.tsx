'use client';

import { bannerContent } from '@/data/content';
import { designConfig } from '@/lib/config';
import { X } from 'lucide-react';
import { useState } from 'react';

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`flex justify-center items-center pb-3 ${isVisible ? 'pt-20' : 'pt-12'}`}>
      {isVisible && (
        <div className={`${designConfig.colors.accent.bannerBg} py-4 px-20 md:px-12 relative w-full flex items-center justify-center`}>
          <p className={`text-[15px] ${designConfig.colors.text.accent} font-medium tracking-wide uppercase`}>
            {bannerContent.text}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 md:right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

