import { Header } from '@/components/layout/Header';
import { Banner } from '@/components/sections/Banner';
import { Hero } from '@/components/sections/Hero';
import { Cohort } from '@/components/sections/Cohort';
import { Portfolio } from '@/components/sections/Portfolio';
import { FounderResources } from '@/components/sections/FounderResources';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#d4d4d8]">
      <Header />
      <Banner />
      <Hero />
      <Cohort />
      <Portfolio />
      <FounderResources />
    </div>
  );
}
