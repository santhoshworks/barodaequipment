import StatCard from '@/components/ui/StatCard';
import { stats } from '@/data/stats';

export default function StatsSection() {
  return (
    <section className="section stats-section" id="stats" aria-label="Company statistics">
      <div className="container-inner">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
