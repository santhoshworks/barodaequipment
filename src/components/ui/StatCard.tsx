import React from 'react';
import type { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="stat-item" data-count={stat.count}>
      <span className="count">0</span>
      {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}
