'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => setMobileOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <nav className="navbar" id="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Baroda Equipment home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Baroda Equipment & Vessels Pvt. Ltd."
            width={198}
            height={36}
          />
        </Link>

        <div className="navbar-nav" role="menubar">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} role="menuitem">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar-cta">
          Get a Quote
        </a>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile open" role="menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
