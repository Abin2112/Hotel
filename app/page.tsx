import { HeroSection } from '@/components/home/hero-section';
import { FeaturedSection } from '@/components/home/featured-section';
import { InfoSection } from '@/components/home/info-section';
import { HighlightsSection } from '@/components/home/highlights-section';
import { getFeaturedItems } from '@/lib/db';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const featuredItems = await getFeaturedItems();

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedSection items={featuredItems} />
      <HighlightsSection />
      <InfoSection />
    </div>
  );
}
