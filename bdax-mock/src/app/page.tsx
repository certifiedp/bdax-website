import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Banner } from '@/components/sections/Banner';
import { Hero } from '@/components/sections/Hero';
import { Cohort } from '@/components/sections/Cohort';
import { Portfolio } from '@/components/sections/Portfolio';
import { FounderResources } from '@/components/sections/FounderResources';
import { designConfig } from '@/lib/config';

export default function Home() {
  return (
    <div className={`min-h-screen ${designConfig.colors.background.main}`}>
      <Header />
      <Banner />
      <Hero />
      <Cohort />
      <Portfolio />
      <FounderResources />
      <Footer />
    </div>
  );
}
