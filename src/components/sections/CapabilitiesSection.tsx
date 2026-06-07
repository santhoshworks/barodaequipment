import SectionHeader from '@/components/ui/SectionHeader';
import CapabilityCard from '@/components/ui/CapabilityCard';
import { capabilities } from '@/data/capabilities';

export default function CapabilitiesSection() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container-inner">
        <SectionHeader
          label="Facility & Capabilities"
          title="Built for Scale"
          subtitle="Our Vadodara facility is equipped to handle projects of any size — from single-unit production runs to large multi-equipment orders."
        />
        <div className="caps-grid">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
