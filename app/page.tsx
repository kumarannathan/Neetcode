import { CourseGrid } from '@/components/landing/CourseGrid';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { LogoBand } from '@/components/landing/LogoBand';
import { NavBar } from '@/components/landing/NavBar';
import { PracticeCta } from '@/components/landing/PracticeCta';
import { RoadmapStackSection } from '@/components/landing/RoadmapStackSection';
import { SocialProof } from '@/components/landing/SocialProof';

export default function HomePage() {
  return (
    <main className="page-shell overflow-x-clip pb-10">
      <div className="relative bg-black">
        <Hero />
        <NavBar />
      </div>
      <SocialProof />
      <LogoBand />
      {/* <FeatureHighlights /> */}
      <CourseGrid />
      <RoadmapStackSection />
      <PracticeCta />
      <Footer />
    </main>
  );
}
