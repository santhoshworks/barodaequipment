import React from 'react';
import type { Capability } from '@/types';

interface CapabilityCardProps {
  capability: Capability;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="cap-item">
      <span className="cap-icon" aria-hidden="true">{capability.icon}</span>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </div>
  );
}
