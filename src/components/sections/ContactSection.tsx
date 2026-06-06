'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SectionHeader from '@/components/ui/SectionHeader';

const contactSchema = z.object({
  name:    z.string().min(2,  'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const productOptions = [
  'Pressure Vessels', 'Heat Exchangers', 'Storage Tanks',
  'Piping Systems', 'Boilers', 'Skid Mounted Units',
  'Offshore Equipment', 'Structural Fabrication', 'Other',
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Form submitted:', data);
    reset();
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container-inner">
        <SectionHeader
          label="Get in Touch"
          title="Request a Quote"
          subtitle="Fill in your requirements and our team will respond within 24 hours."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Talk to Our Engineers</h3>
            <p>We handle enquiries from single-item custom equipment to full plant supply packages.</p>
            <ul className="contact-details">
              <li>
                <strong>Phone</strong>
                <a href="tel:+912652123456">+91 265 212 3456</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href="mailto:info@barodaequip.com">info@barodaequip.com</a>
              </li>
              <li>
                <strong>Address</strong>
                <span>Vadodara, Gujarat, India</span>
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Contact form"
          >
            {isSubmitSuccessful && (
              <div className="form-success" role="alert">
                Thank you! We&rsquo;ll be in touch within 24 hours.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  id="name"
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Your full name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                />
                {errors.name && (
                  <span id="name-error" className="form-error" role="alert">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  id="email"
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="you@company.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email')}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  placeholder="+91 98765 43210"
                  {...register('phone')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company</label>
                <input
                  id="company"
                  type="text"
                  className="form-control"
                  placeholder="Your company name"
                  {...register('company')}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="product" className="form-label">Product of Interest</label>
              <select id="product" className="form-control" {...register('product')}>
                <option value="">Select a product...</option>
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                rows={5}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                placeholder="Describe your requirements..."
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
              />
              {errors.message && (
                <span id="message-error" className="form-error" role="alert">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
