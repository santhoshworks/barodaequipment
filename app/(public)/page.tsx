import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import StatsSection from '@/components/sections/StatsSection';
import ClientsMarquee from '@/components/sections/ClientsMarquee';
import ProductGrid from '@/components/sections/ProductGrid';
import SolutionsSection from '@/components/sections/SolutionsSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import VideoSection from '@/components/sections/VideoSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import LocationSection from '@/components/sections/LocationSection';
import HomeAnimations from '@/components/HomeAnimations';

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <main>
        <HeroSection />
        <TrustBar />
        <StatsSection />
        <ClientsMarquee />
        <ProductGrid />
        <SolutionsSection />
        <AboutSection />
        <WhyChooseUs />
        <VideoSection />
        <CapabilitiesSection />
        <CertificationsSection />
        <LocationSection />
      </main>
    </>
  );
}
