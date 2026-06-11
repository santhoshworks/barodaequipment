import Link from 'next/link';
import type { Metadata } from 'next';
import { getFootprintData } from '@/data/footprint';
import FootprintTable from '@/components/sections/FootprintTable';

export const metadata: Metadata = {
  title: 'Global Footprint — Baroda Equipment & Vessels Pvt. Ltd.',
  description:
    'Browse Baroda Equipment\'s complete project history: pressure vessels, heat exchangers, storage tanks and more delivered to clients across 40+ countries since 2009.',
};

export default async function FootprintPage() {
  const { projects, categories, years, groups } = await getFootprintData();

  const totalProjects = projects.length;
  const uniqueGroups = groups.length;
  const yearRange = years.length > 0 ? `${years[years.length - 1]}–${years[0]}` : '';
  const categories_count = categories.length;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="fp-hero">
        <div className="container-inner fp-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <span className="bc-current">Global Footprint</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            Track Record
          </span>
          <h1>Global Footprint</h1>
          <p>
            A searchable database of our project deliveries — from single pressure
            vessels to multi-equipment skid packages — spanning{' '}
            {categories_count} product categories across six continents.
          </p>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="fp-stats-bar">
        <div className="container-inner">
          <div className="fp-stats-grid">
            <div className="fp-stat">
              <span className="fp-stat-val">{totalProjects}+</span>
              <span className="fp-stat-lbl">Projects Delivered</span>
            </div>
            <div className="fp-stat">
              <span className="fp-stat-val">{uniqueGroups}+</span>
              <span className="fp-stat-lbl">Client Groups</span>
            </div>
            <div className="fp-stat">
              <span className="fp-stat-val">{categories_count}</span>
              <span className="fp-stat-lbl">Product Categories</span>
            </div>
            <div className="fp-stat">
              <span className="fp-stat-val">{yearRange}</span>
              <span className="fp-stat-lbl">Years Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ FILTERABLE TABLE ═══ */}
      <FootprintTable
        projects={projects}
        categories={categories}
        years={years}
        groups={groups}
      />
    </>
  );
}
