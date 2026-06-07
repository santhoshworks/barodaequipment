'use client';

import { useState, type FormEvent } from 'react';

interface Props {
  designCodes: { value: string; label: string }[];
  materials: { value: string; label: string }[];
  productTitle: string;
}

export function EnquiryForm({ designCodes, materials, productTitle }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`[${productTitle}] Enquiry form submitted`);
    setSubmitted(true);
  }

  return (
    <form className="contact-form enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            className="form-control"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Company *</label>
          <input
            className="form-control"
            type="text"
            placeholder="Company name"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            className="form-control"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            type="tel"
            placeholder="+91 ..."
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Design Code</label>
          <select className="form-control" defaultValue="">
            <option value="" disabled>
              Select design code
            </option>
            {designCodes.map((dc) => (
              <option key={dc.value} value={dc.value}>
                {dc.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Shell Material</label>
          <select className="form-control" defaultValue="">
            <option value="" disabled>
              Select material
            </option>
            {materials.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Design Pressure (bar)</label>
          <input
            className="form-control"
            type="text"
            placeholder="e.g. 25 bar (g)"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Design Temperature (°C)</label>
          <input
            className="form-control"
            type="text"
            placeholder="e.g. -10 to 250°C"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Shell Diameter (mm)</label>
          <input
            className="form-control"
            type="text"
            placeholder="e.g. 1200 mm ID"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Quantity</label>
          <input
            className="form-control"
            type="number"
            placeholder="Number of units"
            min="1"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Additional Requirements / Notes</label>
        <textarea
          className="form-control"
          rows={4}
          placeholder="Describe your requirements, internals, TPI agency, delivery location, etc."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={submitted}
        style={{
          width: '100%',
          justifyContent: 'center',
          marginTop: '8px',
          ...(submitted
            ? { background: 'var(--teal)', color: 'var(--mint)' }
            : {}),
        }}
      >
        {submitted
          ? "✓ Enquiry Sent — We'll respond within 48 hours."
          : 'Submit Enquiry →'}
      </button>
    </form>
  );
}
