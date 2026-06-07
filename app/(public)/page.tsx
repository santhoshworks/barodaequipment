import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import StatsSection from '@/components/sections/StatsSection';
import ProductGrid from '@/components/sections/ProductGrid';
import AboutSection from '@/components/sections/AboutSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import CTABand from '@/components/sections/CTABand';
import LocationSection from '@/components/sections/LocationSection';
import ContactSection from '@/components/sections/ContactSection';
import HomeAnimations from '@/components/HomeAnimations';

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <main>
        <HeroSection />
        <TrustBar />
        <StatsSection />
        <ProductGrid />
        <AboutSection />
        <CapabilitiesSection />
        <CTABand />
        <LocationSection />
        <ContactSection />
      </main>
    </>
  );
}
