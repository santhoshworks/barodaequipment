import type { Metadata } from 'next';
import Image from 'next/image';
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
    <main className="org-page">
      <section className="section org-hero">
        <div className="container">
          <p className="section-label">Structure</p>
          <h1 className="org-heading">Organisational Chart</h1>
          <p className="org-subheading">
            A clear view of how Baroda Equipment & Vessels is structured across
            its leadership, operations, and support functions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container org-charts">
          {/* Latest chart displayed prominently */}
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

          {/* Older charts in a subdued row */}
          {older.length > 0 && (
            <>
              <h2 className="org-prev-heading">Previous Versions</h2>
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
      </section>
    </main>
  );
}
