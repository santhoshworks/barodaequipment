const footerLinks = {
  products: [
    { label: 'Pressure Vessels',     href: '/products/pressure-vessels' },
    { label: 'Heat Exchangers',      href: '/products/heat-exchangers' },
    { label: 'Storage Tanks',        href: '/products/storage-tanks' },
    { label: 'Structural Fabrication', href: '/products/structural-fabrication' },
  ],
  company: [
    { label: 'About Us',        href: '#about' },
    { label: 'Certifications',  href: '#certifications' },
    { label: 'Location',        href: '#location' },
    { label: 'Contact',         href: '#contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-inner">
        <div className="footer-grid">
          <div className="footer-section footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Baroda Equipment & Vessels" width={198} height={36} />
            <p>Heavy metal engineering and precision equipment manufacturing since 1990.</p>
          </div>

          <div className="footer-section">
            <h5>Products</h5>
            <ul>
              {footerLinks.products.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5>Company</h5>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@barodaequip.com">info@barodaequip.com</a></li>
              <li><a href="tel:+912652123456">+91 265 212 3456</a></li>
              <li>Baroda (Vadodara), Gujarat, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Baroda Equipment & Vessels Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
