import React from 'react';
import type { SectionHeaderProps } from '@/types';

export default function SectionHeader({ label, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : 'text-center'}`}>
      {label && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
