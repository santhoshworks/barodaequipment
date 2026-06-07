import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { productPages, productSlugs } from '@/data/product-pages';
import { EnquiryForm } from './EnquiryForm';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productPages[slug];
  if (!product) return {};
  return {
    title: `${product.title} — Baroda Equipment & Vessels Pvt. Ltd.`,
    description: product.heroDescription,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productPages[slug];
  if (!product) notFound();

  return (
    <>
      {/* ═══ PRODUCT HERO ═══ */}
      <section className="product-hero">
        <div className="product-hero-bg">
          <Image
            src={product.heroImage}
            alt={product.title}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="product-hero-overlay" />
        </div>
        <div className="container-inner product-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/#products">Products</Link>
            <span>→</span>
            <span className="bc-current">{product.title}</span>
          </div>
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            {product.heroLabel}
          </span>
          <h1>{product.title}</h1>
          <p>{product.heroDescription}</p>
          <div className="hero-actions">
            <a href="#enquiry" className="btn btn-primary">
              Request a Quote
            </a>
            <a href="#specs" className="btn btn-outline">
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* ═══ QUICK STATS ═══ */}
      <section className="product-stats-bar">
        <div className="container-inner">
          <div className="ps-grid">
            {product.stats.map((stat) => (
              <div key={stat.label} className="ps-item">
                <span className="ps-val">{stat.value}</span>
                <span className="ps-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section className="prod-overview">
        <div className="container-inner">
          <div className="overview-grid">
            <div className="overview-text">
              <span className="section-label">{product.overviewLabel}</span>
              <h2>{product.overviewTitle}</h2>
              <p className="overview-lead">{product.overviewLead}</p>
              <p>{product.overviewText}</p>
              <div className="overview-tags">
                {product.overviewTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="overview-img-stack">
              <Image
                className="stack-main"
                src={product.overviewMainImage}
                alt={product.title}
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <Image
                className="stack-thumb"
                src={product.overviewThumbImage}
                alt={`${product.title} detail`}
                width={270}
                height={180}
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="prod-gallery">
        <div className="container-inner">
          <div className="section-header">
            <span className="section-label">Gallery</span>
            <h2>From Our Workshop</h2>
          </div>
          <div className="gallery-grid">
            {product.gallery.map((item) => (
              <div
                key={item.src + item.caption}
                className={`gallery-item${item.large ? ' large' : ''}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    item.large
                      ? '(max-width: 768px) 100vw, 50vw'
                      : '(max-width: 768px) 50vw, 25vw'
                  }
                  style={{ objectFit: 'cover' }}
                />
                <div className="gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL SPECS ═══ */}
      <section className="prod-specs" id="specs">
        <div className="container-inner">
          <div className="section-header">
            <span className="section-label">Technical Data</span>
            <h2>Specifications</h2>
            <p className="section-sub">
              Standard design ranges — all parameters can be extended for
              specific project requirements. Contact us with your exact
              specifications.
            </p>
          </div>
          <div className="specs-layout">
            <div className="specs-table-wrap">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((row) => (
                    <tr key={row.parameter}>
                      <td>{row.parameter}</td>
                      <td>{row.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="specs-aside">
              {product.highlights.map((card) => (
                <div
                  key={card.title}
                  className={`specs-highlight${card.accent ? ' accent' : ''}`}
                >
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECT REFERENCES ═══ */}
      <section className="prod-projects">
        <div className="container-inner">
          <div className="section-header">
            <span className="section-label">Track Record</span>
            <h2>Selected Project References</h2>
            <p className="section-sub">
              A sample of our {product.title.toLowerCase()} deliveries. Full
              project list available on request.
            </p>
          </div>
          <div className="projects-table-wrap">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Client / EPC Contractor</th>
                  <th>End User</th>
                  <th>Equipment</th>
                  <th>Qty</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {product.projectRefs.map((ref) => (
                  <tr key={`${ref.client}-${ref.year}`}>
                    <td>{ref.client}</td>
                    <td>{ref.endUser}</td>
                    <td>{ref.equipment}</td>
                    <td>{ref.qty}</td>
                    <td>{ref.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <p className="table-note" style={{ margin: 0 }}>
              * Table shows representative projects. Full list with detailed scope
              available upon NDA request.
            </p>
            {product.projectList.length > 0 && (
              <Link
                href={`/products/${product.slug}/projects`}
                className="btn btn-secondary"
              >
                View Full Project List →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══ ENQUIRY FORM ═══ */}
      <section className="prod-enquiry" id="enquiry">
        <div className="container-inner">
          <div className="enquiry-grid">
            <div className="enquiry-info">
              <span className="section-label">Request a Quote</span>
              <h2>{product.enquiryTitle}</h2>
              <p>{product.enquiryDescription}</p>
              <div className="enquiry-checklist">
                <h4>Include in your enquiry:</h4>
                <ul>
                  {product.enquiryChecklist.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              <div className="enquiry-contact">
                <a href="mailto:info@barodaequip.com">
                  ✉ info@barodaequip.com
                </a>
                <Link href="/#contact">📍 Vadodara, Gujarat, India</Link>
              </div>
            </div>
            <EnquiryForm
              designCodes={product.designCodes}
              materials={product.materials}
              productTitle={product.title}
            />
          </div>
        </div>
      </section>

      {/* ═══ RELATED PRODUCTS ═══ */}
      <section className="related-products">
        <div className="container-inner">
          <div className="section-header">
            <span className="section-label">You May Also Need</span>
            <h2>Related Products</h2>
          </div>
          <div className="related-grid">
            {product.relatedProducts.map((rp) => (
              <Link
                key={rp.title}
                href={
                  rp.slug
                    ? `/products/${rp.slug}`
                    : '/#contact'
                }
                className="product-card"
              >
                <div className="product-card-img">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    width={400}
                    height={200}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="product-card-body">
                  <h3>{rp.title}</h3>
                  <p>{rp.description}</p>
                  <span className="card-link">
                    {rp.slug ? 'View specs →' : 'Enquire →'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
