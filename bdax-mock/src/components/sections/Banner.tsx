import { bannerContent } from '@/data/content';

export function Banner() {
  return (
    <div className="flex justify-center items-center pt-28 pb-6 px-4">
      <div className="bg-white rounded-full py-3 px-8 shadow-sm">
        <p className="text-sm font-medium tracking-wide">
          {bannerContent.text}
        </p>
      </div>
    </div>
  );
}

