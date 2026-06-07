import SectionHeader from '@/components/ui/SectionHeader';

const clients = [
  'ONGC', 'Reliance Industries', 'IOCL', 'BPCL', 'HPCL', 'GAIL',
  'L&T', 'BHEL', 'NTPC', 'Adani Group', 'Thermax', 'Shell',
  'Fluor', 'Samsung E&C', 'Petronas', 'Air Liquide', 'Air Products',
  'ABB', 'FLSmidth', 'Albemarle', 'Siemens', 'Technip', 'Worley',
  'BHP Billiton', 'Aarti Industries', 'Balmer Lawrie',
];

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="clients-section" id="clients">
      <div className="container-inner">
        <SectionHeader
          label="Trusted By Industry Leaders"
          title="Our Clients"
          subtitle="Supplying precision equipment to the world's most demanding organisations across oil &amp; gas, chemicals, power and more."
        />
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div key={i} className="marquee-item">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
