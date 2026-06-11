import type { Metadata } from 'next';
import Image from 'next/image';
import { getTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Team — Baroda Equipment & Vessels',
  description:
    'Meet the leadership and management team behind Baroda Equipment & Vessels — decades of combined experience in heavy engineering.',
};

export default async function TeamPage() {
  const members = await getTeam();

  return (
    <main className="team-page">
      <section className="section team-hero">
        <div className="container">
          <p className="section-label">Our People</p>
          <h1 className="team-heading">Where Excellence Is a Way of Life</h1>
          <p className="team-subheading">
            Meet the seasoned engineers, managers, and specialists who drive
            Baroda Equipment & Vessels forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {members.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-photo-wrap">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="team-photo"
                  />
                </div>
                <div className="team-info">
                  <h2 className="team-name">{member.name}</h2>
                  <p className="team-title">{member.title}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
