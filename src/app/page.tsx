import { Hero } from "@/components/sections/Hero";
// import { WorkPreview } from "@/components/sections/WorkPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Stats } from "@/components/sections/Stats";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { createHomeMetadata } from "@/lib/create-page-metadata";

export const metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TechMarquee />
      {/* <WorkPreview /> — re-enable when case studies are ready */}
      <ServicesSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
