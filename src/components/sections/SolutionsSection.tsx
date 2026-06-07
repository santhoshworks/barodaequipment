'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

const tabs = [
  {
    label: 'Oil & Gas',
    image: '/prod-pressure-vessel.webp',
    imageAlt: 'Oil & Gas Equipment',
    heading: 'Equipment Built for Extreme Conditions',
    description:
      'Supplying ONGC, BPCL, HPCL, Shell and major EPC contractors with ASME-certified pressure vessels, heat exchangers and skid-mounted assemblies for upstream, midstream and downstream operations.',
    items: [
      'High-pressure separators & scrubbers',
      'Shell & tube heat exchangers (TEMA R)',
      'Wellhead skid assemblies',
      'Piping spools to ASME B31.3',
    ],
  },
  {
    label: 'Chemicals & Pharma',
    image: '/prod-storage-tanks.webp',
    imageAlt: 'Chemicals Equipment',
    heading: 'Precision for Process-Critical Applications',
    description:
      'Trusted by Aarti Industries, Reliance, FLSmidth and leading pharma companies for reactors, columns, storage vessels and portable tanks engineered to FDA, cGMP and ASME standards.',
    items: [
      'Agitated reactors & pressure columns',
      'SS 316L / Duplex / Hastelloy vessels',
      'UN-certified portable chemical tanks',
      'Hygienic storage & mixing vessels',
    ],
  },
  {
    label: 'Power Generation',
    image: '/prod-boilers.webp',
    imageAlt: 'Power Generation Equipment',
    heading: 'IBR-Approved Components for Power Plants',
    description:
      'Supplying NTPC, BHEL and independent power producers with IBR-stamped boiler pressure parts, heat recovery systems and structural steel for new build and retrofit projects.',
    items: [
      'Boiler drums, headers & superheaters',
      'Air preheaters & economisers',
      'Heat recovery steam generators',
      'Structural platforms & pipe racks',
    ],
  },
  {
    label: 'Marine & Offshore',
    image: '/prod-offshore.webp',
    imageAlt: 'Marine & Offshore Equipment',
    heading: 'DNV-Certified for Harsh Marine Environments',
    description:
      'Delivering to BHP Billiton, Petronas and Access Petrotec with DNV 2.7-1 certified offshore containers, process modules and subsea equipment engineered to withstand extreme marine conditions.',
    items: [
      'DNV 2.7-1 / EN 12079 offshore containers',
      'Process modules & equipment skids',
      'Corrosion-resistant alloy vessels',
      'Marine-grade structural fabrication',
    ],
  },
  {
    label: 'Infrastructure',
    image: '/prod-structures.webp',
    imageAlt: 'Infrastructure Equipment',
    heading: 'Structural Steel for Large-Scale Projects',
    description:
      'Partnering with L&T, Worley and major EPC firms on structural steel, pipe racks, platforms and pressure piping systems for refineries, petrochemical complexes and industrial facilities.',
    items: [
      'Pipe racks & equipment platforms',
      'Staircases, walkways & handrails',
      'Pressure piping spools (B31.3 / B31.1)',
      'Modular structural assemblies',
    ],
  },
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const panel = tabs[activeTab];

  return (
    <section className="solutions-section" id="solutions">
      <div className="container-inner">
        <SectionHeader
          label="Sectors We Serve"
          title="The Right Solution for Every Industry"
          subtitle="Decades of experience across the most demanding industrial sectors — from upstream oil &amp; gas to food-grade processing."
        />
        <div className="sol-tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              className={`sol-tab${i === activeTab ? ' active' : ''}`}
              role="tab"
              aria-selected={i === activeTab}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="sol-panels">
          <div className="sol-panel active">
            <div className="sol-panel-img">
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                width={600}
                height={400}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <div className="sol-blob" />
            </div>
            <div className="sol-panel-content">
              <span className="section-label">{panel.label}</span>
              <h3>{panel.heading}</h3>
              <p>{panel.description}</p>
              <ul className="sol-list">
                {panel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
