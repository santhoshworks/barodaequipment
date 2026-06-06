export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt="Industrial equipment manufacturing"
          className="hero-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container-inner">
        <span className="hero-label">Trusted Heavy Metal Engineers Since 1990</span>

        <h1 className="hero-headline">
          Precision Engineering.
          <br />
          <strong>Built to Last.</strong>
        </h1>

        <p className="hero-sub">
          Custom pressure vessels, heat exchangers, storage tanks, and process equipment — designed to international standards and delivered on time.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn btn-primary">
            Explore Products
          </a>
          <a href="#contact" className="btn btn-outline">
            Get a Quote
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
