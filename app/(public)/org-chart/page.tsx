import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getOrgChartImages } from '@/data/team';

export const metadata: Metadata = {
  title: 'Org Chart — Baroda Equipment & Vessels',
  description:
    'Organisational structure of Baroda Equipment & Vessels Pvt. Ltd.',
};

export default async function OrgChartPage() {
  const charts = await getOrgChartImages();

  // Show the latest chart first.
  const [latest, ...older] = [...charts].reverse();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="team-hero">
        <div className="team-hero-overlay" />
        <div className="container-inner team-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <span className="bc-current">Org Chart</span>
          </div>
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            Structure
          </span>
          <h1>Organisational Chart</h1>
          <p>
            A clear view of how Baroda Equipment &amp; Vessels is structured
            across its leadership, operations, and support functions.
          </p>
        </div>
      </section>

      {/* ═══ CHARTS ═══ */}
      <section className="section">
        <div className="container-inner">
          <div className="section-header text-center">
            <span className="section-label">Organisation</span>
            <h2>Reporting Structure</h2>
            <p>
              Updated October 2024 — reflects current leadership and
              departmental hierarchy.
            </p>
          </div>

          <div className="org-charts">
            <figure className="org-chart-figure org-chart-figure--primary">
              <div className="org-chart-img-wrap">
                <Image
                  src={latest.src}
                  alt={latest.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="org-chart-img"
                  priority
                />
              </div>
              <figcaption className="org-chart-caption">{latest.label}</figcaption>
            </figure>

            {older.length > 0 && (
              <>
                <h3 className="org-prev-heading">Previous Versions</h3>
                <div className="org-prev-grid">
                  {older.map((chart) => (
                    <figure key={chart.src} className="org-chart-figure">
                      <div className="org-chart-img-wrap org-chart-img-wrap--sm">
                        <Image
                          src={chart.src}
                          alt={chart.label}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="org-chart-img"
                        />
                      </div>
                      <figcaption className="org-chart-caption">{chart.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
