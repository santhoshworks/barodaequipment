import SectionHeader from '@/components/ui/SectionHeader';
import CapabilityCard from '@/components/ui/CapabilityCard';
import { capabilities } from '@/data/capabilities';

export default function CapabilitiesSection() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container-inner">
        <SectionHeader
          label="What We Do"
          title="End-to-End Manufacturing Capabilities"
          subtitle="From design to delivery — every step handled in-house to the highest standards."
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
