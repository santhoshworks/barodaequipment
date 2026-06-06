export default function CTABand() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container-inner">
        <div className="cta-band-inner">
          <h2 id="cta-heading">Ready to Start Your Project?</h2>
          <p>Tell us your requirements and our engineering team will get back to you within 24 hours.</p>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="tel:+912652123456" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
