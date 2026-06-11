import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Team — Baroda Equipment & Vessels',
  description:
    'Meet the leadership and management team behind Baroda Equipment & Vessels — decades of combined experience in heavy engineering.',
};

export default async function TeamPage() {
  const members = await getTeam();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="team-hero">
        <div className="team-hero-overlay" />
        <div className="container-inner team-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <span className="bc-current">Team</span>
          </div>
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            Our People
          </span>
          <h1>Where Excellence Is a Way of Life</h1>
          <p>
            Meet the seasoned engineers, managers, and specialists who have
            driven Baroda Equipment &amp; Vessels forward for over four decades.
          </p>
        </div>
      </section>

      {/* ═══ TEAM GRID ═══ */}
      <section className="section">
        <div className="container-inner">
          <div className="section-header text-center">
            <span className="section-label">Leadership &amp; Management</span>
            <h2>The People Behind the Precision</h2>
            <p>
              A team combining engineering rigour, industry depth, and decades
              of hands-on manufacturing experience.
            </p>
          </div>

          <div className="team-grid">
            {members.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-photo-wrap">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="team-photo"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
