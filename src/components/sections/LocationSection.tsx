import SectionHeader from '@/components/ui/SectionHeader';

export default function LocationSection() {
  return (
    <section className="section location-section" id="location">
      <div className="container-inner">
        <SectionHeader label="Find Us" title="Our Manufacturing Facility" />

        <div className="location-grid">
          <div className="location-info">
            <h3>Baroda Equipment &amp; Vessels Pvt. Ltd.</h3>
            <address>
              <p>Plot No. XX, GIDC Industrial Estate</p>
              <p>Vadodara, Gujarat — 390 010</p>
              <p>India</p>
            </address>
            <div className="location-contact">
              <p><strong>Phone:</strong> <a href="tel:+912652123456">+91 265 212 3456</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@barodaequip.com">info@barodaequip.com</a></p>
              <p><strong>Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118261.49196752063!2d73.07432!3d22.30730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf0b5b5bfa89%3A0x5ce79ae6f4d36cba!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="360"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baroda Equipment location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
