import Link from 'next/link';
import type { Metadata } from 'next';
import { getClients, SECTOR_LABELS } from '@/data/clients';
import type { ClientEntry } from '@/data/clients';

export const metadata: Metadata = {
  title: 'Clients — Baroda Equipment & Vessels Pvt. Ltd.',
  description:
    'Baroda Equipment supplies precision pressure vessels, heat exchangers, and storage tanks to leading PSUs, global majors, EPC contractors, and OEMs worldwide.',
};

export default async function ClientsPage() {
  const clients = await getClients();

  const sectors = (
    ['psu', 'global', 'epc', 'oem'] as ClientEntry['sector'][]
  ).map((key) => ({
    key,
    label: SECTOR_LABELS[key],
    clients: clients.filter((c) => c.sector === key),
  }));

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="clients-page-hero">
        <div className="container-inner clients-page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <span className="bc-current">Clients</span>
          </nav>
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            Trusted Globally
          </span>
          <h1>Our Clients</h1>
          <p>
            Supplying certified, code-compliant pressure equipment to the world&apos;s most
            demanding organisations across oil &amp; gas, chemicals, power, and process
            industries — since 2009.
          </p>
        </div>
      </section>

      {/* ═══ CLIENT GRID ═══ */}
      <section className="clients-page-section">
        <div className="container-inner">
          {sectors.map(({ key, label, clients: sectorClients }) => (
            <div key={key} className="clients-sector-block">
              <div className="clients-sector-label">
                <span>{label}</span>
              </div>
              <div className="clients-grid">
                {sectorClients.map((client) => (
                  <div key={client.name} className="client-card">
                    <p className="client-card-name">{client.name}</p>
                    <p className="client-card-country">{client.country}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REGISTRATION NOTE ═══ */}
      <section className="clients-registration">
        <div className="container-inner">
          <div className="clients-reg-inner">
            <div className="clients-reg-text">
              <span className="section-label">Registered Vendor</span>
              <h2>Approved by Leading Organisations</h2>
              <p>
                We are registered as an approved vendor with major owners, consultants,
                OEMs, and EPC contractors worldwide. Our registrations include quality
                audits, third-party inspections, and compliance to client-specific
                quality management requirements.
              </p>
            </div>
            <ul className="clients-reg-list">
              <li>NPCIL — Nuclear Power Corporation of India Ltd</li>
              <li>Linde Group — Global approved vendor</li>
              <li>BHEL — Bhopal &amp; Chennai divisions</li>
              <li>GNFC — Gujarat Narmada Valley Fertilizers</li>
              <li>HPCL — Vizag &amp; Mumbai refineries</li>
              <li>MECON Ltd — Engineering consultants</li>
              <li>Bureau Veritas — Quality framework</li>
              <li>Uhde / ThyssenKrupp Industrial Solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
