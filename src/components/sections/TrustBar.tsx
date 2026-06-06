import { certifications } from '@/data/certifications';

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Certifications and approvals">
      <div className="container-inner">
        <p className="section-label" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Certified &amp; Approved By
        </p>
        <div className="trust-logos">
          {certifications.map((cert) => (
            <div key={cert.id} className="trust-logo-item" title={cert.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.image}
                alt={cert.name}
                width={cert.width}
                height={cert.height}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
