// src/app/(marketing)/page.tsx
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FragmentedVsUnifiedStory } from "@/components/marketing/FragmentedVsUnifiedStory";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { TestimonialStrip } from "@/components/marketing/TestimonialStrip";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <MarketingHeader />
      <main className="flex-grow">
        <HeroSection />
        <FragmentedVsUnifiedStory />
        <FeatureGrid />
        <TestimonialStrip />
        <FinalCTA />
      </main>
      <MarketingFooter />
    </div>
  );
}