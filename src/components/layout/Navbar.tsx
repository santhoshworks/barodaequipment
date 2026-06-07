'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const closeOnResize = () => {
      setMobileOpen(false);
      setDropdownOpen(null);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <nav className="navbar" id="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Baroda Equipment home">
          <Image
            src="/logo.png"
            alt="Baroda Equipment & Vessels Pvt. Ltd."
            width={198}
            height={36}
            priority
          />
        </Link>

        <div className="navbar-nav" role="menubar">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <a href={link.href} role="menuitem" className="nav-dropdown-trigger">
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {dropdownOpen === link.label && (
                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <Link key={child.href + child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.href} href={link.href} role="menuitem">
                {link.label}
              </a>
            )
          )}
        </div>

        <a href="/login" className="navbar-login">
          Login
        </a>
        <a href="/#contact" className="navbar-cta">
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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="nav-mobile-group">
                <button
                  className="nav-mobile-trigger"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      transform: dropdownOpen === link.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {dropdownOpen === link.label && (
                  <div className="nav-mobile-submenu">
                    {link.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href="/login" className="nav-mobile-login" onClick={() => setMobileOpen(false)}>
            Login
          </a>
          <a href="/#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
