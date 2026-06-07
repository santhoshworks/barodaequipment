import React from 'react';
import type { Capability } from '@/types';

interface CapabilityCardProps {
  capability: Capability;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="cap-item">
      <div className="cap-value">{capability.value}</div>
      <div className="cap-label">{capability.label}</div>
    </div>
  );
}
