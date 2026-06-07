import Image from 'next/image';

const certifications = [
  { src: '/cert-iso9001.jpg',  label: 'ISO 9001:2015' },
  { src: '/cert-iso14001.jpg', label: 'ISO 14001:2015' },
  { src: '/cert-iso45001.png', label: 'ISO 45001:2018' },
  { src: '/cert-nb.jpg',       label: 'NB (National Board)' },
  { src: '/cert-ibr.jpg',      label: 'IBR Approved' },
  { src: '/cert-peso.jpg',     label: 'PESO Approved' },
  { src: '/cert-ce.jpg',       label: 'CE Marked' },
];

export default function CertificationsSection() {
  return (
    <section className="certs-section" id="certifications">
      <div className="container-inner">
        <div className="section-header light">
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            Quality You Can Trust
          </span>
          <h2 style={{ color: '#fff' }}>Certified by Leading Industry Standards</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Our certifications represent decades of commitment to quality, safety and international compliance.
          </p>
        </div>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.label} className="cert-card">
              <Image
                src={cert.src}
                alt={cert.label}
                width={140}
                height={72}
                style={{ objectFit: 'contain' }}
              />
              <span>{cert.label}</span>
            </div>
          ))}
          <div className="cert-card cert-asme">
            <div className="asme-badge">ASME</div>
            <span>U, U2, S &amp; R Stamp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
