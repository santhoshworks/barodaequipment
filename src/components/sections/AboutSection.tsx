import SectionHeader from '@/components/ui/SectionHeader';

const highlights = [
  'ASME, PED, IBR and API certified manufacturing',
  'In-house NDT: UT, RT, MT, PT and PWHT',
  'Full material traceability and third-party inspection',
  'Delivered to 20+ countries across 4 continents',
  'Serving oil & gas, refinery, chemical, and power sectors',
];

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container-inner">
        <div className="about-grid">
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about.png"
              alt="Baroda Equipment workshop"
              className="about-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-content">
            <SectionHeader
              label="Who We Are"
              title="35+ Years of Heavy Metal Engineering"
              align="left"
            />
            <p className="about-desc">
              Founded in 1990, Baroda Equipment &amp; Vessels Pvt. Ltd. is a leading manufacturer of
              custom pressure equipment and process plant components. We combine rigorous quality
              standards with deep engineering expertise to deliver equipment that performs reliably
              in the most demanding industrial environments.
            </p>

            <ul className="about-list">
              {highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-secondary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
