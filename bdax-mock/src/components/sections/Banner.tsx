import { bannerContent } from '@/data/content';
import { designConfig } from '@/lib/config';

export function Banner() {
  return (
    <div className="flex justify-center items-center pt-28 pb-6 px-4">
      <div className={`${designConfig.colors.background.white} ${designConfig.border.radius.full} py-3 px-8 shadow-sm`}>
        <p className={`${designConfig.typography.body.sm} font-medium tracking-wide`}>
          {bannerContent.text}
        </p>
      </div>
    </div>
  );
}

