import Link from 'next/link';

const stats = [
  { value: '142', label: 'Clients' },
  { value: '8',   label: 'Certifications' },
  { value: '23',  label: 'Inquiries' },
  { value: '6',   label: 'Vacancies' },
];

const quickLinks = [
  { label: 'Add Client',         href: '/admin/clients' },
  { label: 'Manage Certs',       href: '/admin/certifications' },
  { label: 'View Inquiries',     href: '/admin/inquiries' },
  { label: 'Upload Images',      href: '/admin/gallery' },
  { label: 'Post Vacancy',       href: '/admin/vacancies' },
  { label: 'Manage Downloads',   href: '/admin/downloads' },
];

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Welcome to the Baroda Equipment admin panel.</p>
      </div>

      <div className="admin-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-stat-card">
            <div className="admin-stat-value">{stat.value}</div>
            <div className="admin-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="admin-form-card">
        <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-secondary" style={{ textAlign: 'center' }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
