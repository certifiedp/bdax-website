import { founderResourcesContent } from '@/data/content';
import { designConfig } from '@/lib/config';
import { Pillar3D } from '../ui/pillar-3d';
import { FloatingCube } from '@/components/ui/floating-cube';

export function FounderResources() {
  return (
    <section className={`${designConfig.colors.background.white} ${designConfig.spacing.section.sm}`}>
      <div className={designConfig.spacing.container}>
        <h2 className={`${designConfig.typography.heading.lg} text-center mb-16`}>
          {founderResourcesContent.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-center">
          <div className="text-center md:text-right">
            <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.secondary}`}>
              {founderResourcesContent.sections[0].text}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-96">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                      <Pillar3D></Pillar3D>
                    </div>
                  </div>

                  <FloatingCube className="absolute -top-10 -left-10 w-14 h-14 animate-[float_4s_ease-in-out_infinite]" perspective={700} rotation="rotateX(-18deg) rotateY(-22deg)" depth={12} />

                  <FloatingCube className="absolute top-20 -right-12 w-16 h-16 animate-[float_3.5s_ease-in-out_infinite]" perspective={750} rotation="rotateX(-16deg) rotateY(18deg)" depth={14} animationDelay="0.4s" />

                  {/* removed phased white lines */}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className={`${designConfig.typography.body.base} ${designConfig.colors.text.secondary}`}>
              {founderResourcesContent.sections[1].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

