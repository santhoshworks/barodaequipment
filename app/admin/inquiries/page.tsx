const inquiries = [
  { id: 1, name: 'Ahmed Al-Rashid',   company: 'Petronas',        product: 'Pressure Vessels', date: '2026-06-04', status: 'new' },
  { id: 2, name: 'James Mitchell',    company: 'BHP Billiton',    product: 'Heat Exchangers',  date: '2026-06-03', status: 'responded' },
  { id: 3, name: 'Priya Sharma',      company: 'IOCL',            product: 'Storage Tanks',    date: '2026-06-02', status: 'responded' },
  { id: 4, name: 'Liu Wei',           company: 'Sinopec',         product: 'Piping Systems',   date: '2026-06-01', status: 'pending' },
  { id: 5, name: 'Sarah Johnson',     company: 'Shell',           product: 'Offshore Equipment', date: '2026-05-30', status: 'new' },
  { id: 6, name: 'Rajesh Patel',      company: 'ONGC',            product: 'Boilers',          date: '2026-05-28', status: 'responded' },
  { id: 7, name: 'Michael Chen',      company: 'ExxonMobil',      product: 'Skid Mounted',     date: '2026-05-25', status: 'closed' },
];

export default function InquiriesPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Recent Inquiries</h1>
        <p>View and manage incoming customer inquiries.</p>
      </div>

      <div className="admin-form-card">
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Product Interest</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id}>
                  <td>{inq.name}</td>
                  <td>{inq.company}</td>
                  <td>{inq.product}</td>
                  <td>{inq.date}</td>
                  <td><span className={`status-badge ${inq.status}`}>{inq.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
