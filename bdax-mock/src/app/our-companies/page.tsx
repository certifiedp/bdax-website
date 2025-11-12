import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { designConfig } from '@/lib/config';
import company1 from '@/app/company-pictures/company-1.png';
import company2 from '@/app/company-pictures/company-2.png';
import company3 from '@/app/company-pictures/company-3.png';
import company4 from '@/app/company-pictures/company-4.png';
import company5 from '@/app/company-pictures/company-5.png';
import company6 from '@/app/company-pictures/company-6.png';

type Company = {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

const companies: Company[] = [
  {
    id: 1,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company1,
    href: '#',
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company2,
    href: '#',
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company3,
    href: '#',
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company4,
    href: '#',
  },
  {
    id: 5,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company5,
    href: '#',
  },
  {
    id: 6,
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: company6,
    href: '#',
  },
];

export default function OurCompaniesPage() {
  return (
    <div className={`${designConfig.colors.background.main} min-h-screen`}>
      <Header />

      <main className="pt-0 pb-0">
        {/* Hero banner */}
        <section className="relative h-screen min-h-screen">
          {/* Rich background wash */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_15%_0%,rgba(247,181,72,0.18)_0%,transparent_60%),radial-gradient(900px_700px_at_90%_100%,rgba(243,154,38,0.16)_0%,transparent_70%),linear-gradient(180deg,#0b1637_0%,#0a1230_55%,#050a1c_100%)]" />
          {/* Foreground content */}
          <div className={`${designConfig.spacing.container} relative h-full`}>
            <div className="absolute bottom-10 left-0 right-0">
              <div className="flex items-end justify-between gap-8">
                <h1 className={`${designConfig.typography.heading.xl} ${designConfig.colors.text.primary}`}>
                  Our Companies
                </h1>
                <p className={`${designConfig.colors.text.secondary} max-w-md hidden md:block`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {/* Seamless fade into page background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 md:h-16 bg-gradient-to-b from-transparent via-[#0a1230]/50 to-[#050a1c]" />
        </section>

        {/* Grid */}
        <section className={`${designConfig.spacing.container} pt-12`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company) => (
              <Card
                key={company.id}
                className="relative overflow-hidden border-0 bg-transparent"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Text + CTA */}
                  <div className="absolute left-5 right-5 bottom-5">
                    <h3 className="text-white text-xl md:text-2xl font-medium mb-2 drop-shadow">
                      {company.name}
                    </h3>
                    <p className="text-white/80 text-sm md:text-[13px] leading-relaxed max-w-[85%] mb-3">
                      {company.description}
                    </p>

                    <div className="flex justify-end">
                      <Link href={company.href}>
                        <Button className="px-6 py-2 rounded-full bg-white/90 text-[#0b1b3f] hover:bg-white">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


