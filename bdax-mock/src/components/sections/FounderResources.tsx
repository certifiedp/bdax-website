import { founderResourcesContent } from '@/data/content';
import { designConfig } from '@/lib/config';

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
                    <div className="absolute inset-0 bg-[#0b0f12]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/30" />
                    <div className="absolute -top-8 -left-16 w-80 h-24 rotate-[-12deg] bg-gradient-to-r from-white/25 via-white/10 to-transparent blur-xl" />
                    <div className="absolute inset-6 rounded-2xl ring-1 ring-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[
                        { size: 'w-28 h-28', shadow: 'shadow-[0_0_30px_rgba(255,255,255,0.35)]' },
                        { size: 'w-20 h-20', shadow: 'shadow-[0_0_24px_rgba(255,255,255,0.3)]' },
                        { size: 'w-12 h-12', shadow: 'shadow-[0_0_18px_rgba(255,255,255,0.25)]' },
                      ].map(({ size, shadow }, i) => (
                        <div key={i} className="absolute inset-0 grid place-items-center">
                          <div className={`${size} rotate-45 border-2 border-white/80 ${shadow}`} />
                        </div>
                      ))}
                      <div className="absolute inset-0 grid place-items-center animate-pulse" style={{ animationDuration: '2.8s' }}>
                        <div className="w-2 h-2 rounded-full bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.6)]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-12 -left-10 w-24 h-24 animate-[float_4s_ease-in-out_infinite]" style={{ perspective: '800px' }}>
                    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(-25deg)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200" style={{ transform: 'translateZ(18px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400" style={{ transform: 'translateZ(-18px) rotateY(180deg)' }} />
                      <div className="absolute inset-0 bg-white/90" style={{ transform: 'rotateX(90deg) translateZ(18px)' }} />
                      <div className="absolute inset-0 bg-gray-400" style={{ transform: 'rotateX(-90deg) translateZ(18px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" style={{ transform: 'rotateY(-90deg) translateZ(18px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400" style={{ transform: 'rotateY(90deg) translateZ(18px)' }} />
                    </div>
                  </div>

                  <div className="absolute top-24 -right-14 w-28 h-28 animate-[float_3.5s_ease-in-out_infinite]" style={{ perspective: '900px', animationDelay: '0.5s' }}>
                    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-18deg) rotateY(22deg)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200" style={{ transform: 'translateZ(20px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400" style={{ transform: 'translateZ(-20px) rotateY(180deg)' }} />
                      <div className="absolute inset-0 bg-white/90" style={{ transform: 'rotateX(90deg) translateZ(20px)' }} />
                      <div className="absolute inset-0 bg-gray-400" style={{ transform: 'rotateX(-90deg) translateZ(20px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" style={{ transform: 'rotateY(-90deg) translateZ(20px)' }} />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400" style={{ transform: 'rotateY(90deg) translateZ(20px)' }} />
                    </div>
                  </div>

                  {[
                    { top: 'top-24', w: 'w-[120%]', border: 'border-white/80', shadow: 'shadow-[0_0_30px_rgba(255,255,255,0.25)]', delay: '0s', opacity: 'animate-[pulse_3s_ease-in-out_infinite]' },
                    { top: 'top-60', w: 'w-[124%]', border: 'border-white/70', shadow: 'shadow-[0_0_26px_rgba(255,255,255,0.2)]', delay: '0.3s', opacity: 'animate-[pulse_3.5s_ease-in-out_infinite]' },
                    { top: 'top-96', w: 'w-[128%]', border: 'border-white/60', shadow: 'shadow-[0_0_20px_rgba(255,255,255,0.15)]', delay: '0.6s', opacity: 'animate-[pulse_4s_ease-in-out_infinite]' },
                  ].map(({ top, w, border, shadow, delay, opacity }, i) => (
                    <div key={i} className={`absolute left-1/2 -translate-x-1/2 ${top} ${w} h-16 rounded-2xl border-[3px] ${border} ${shadow} ${opacity}`} style={{ animationDelay: delay }} />
                  ))}
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

