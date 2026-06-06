'use client';

import { useEffect } from 'react';
// GSAP is loaded via CDN in layout.tsx; these provide type definitions only
import type { gsap as GsapType } from 'gsap';
import type { ScrollTrigger as STType } from 'gsap/ScrollTrigger';

declare const gsap: typeof GsapType;
declare const ScrollTrigger: typeof STType;

declare global {
  interface Window {
    Lenis: any;
  }
}

export function usePageAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Lenis smooth scroll
    let lenis: any;
    if (typeof window !== 'undefined' && window.Lenis) {
      lenis = new window.Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // Drive Lenis via GSAP ticker only (no separate requestAnimationFrame)
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Keep ScrollTrigger in sync with Lenis scroll position
      lenis.on('scroll', () => ScrollTrigger.update());

      // Smooth anchor navigation
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const target = document.querySelector(a.getAttribute('href') || '');
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -72, duration: 1.4 });
          }
        });
      });

    }

    // Navbar shrink
    const navbar = document.getElementById('navbar');
    if (navbar) {
      ScrollTrigger.create({
        start: 'top -80',
        onEnter: () => navbar.classList.add('scrolled'),
        onLeaveBack: () => navbar.classList.remove('scrolled'),
      });
    }

    // Hero entrance on load
    const onLoad = () => {
      const hero = document.querySelector<HTMLElement>('.hero');
      if (!hero) return;
      hero.classList.add('loaded');

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.hero-label',       { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
        .fromTo('.hero-headline',    { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 0.5)
        .fromTo('.hero-sub',         { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .fromTo('.hero-actions',     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
        .fromTo('.hero-scroll-hint', { opacity: 0 },        { opacity: 1, duration: 0.6 },        1.4);
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);

    // Hero parallax
    gsap.to('.hero-img', {
      yPercent: 20, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Section headers
    gsap.utils.toArray<HTMLElement>('.section-header').forEach((el) => {
      gsap.from(el, { opacity: 0, y: 48, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' } });
    });

    // Trust bar
    gsap.from('.trust-logos img', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.trust-bar', start: 'top 90%' } });

    // Stats count-up
    gsap.from('.stat-item', { opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.stats-section', start: 'top 75%', onEnter: animateCounters } });

    // Product cards
    gsap.from('.product-card', { opacity: 0, y: 60, duration: 0.7, stagger: { each: 0.1, from: 'start' }, ease: 'power3.out',
      scrollTrigger: { trigger: '.products-grid', start: 'top 80%' } });

    // About split
    gsap.from('.about-image', { opacity: 0, x: -60, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-grid', start: 'top 75%' } });
    gsap.from('.about-content', { opacity: 0, x: 60, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-grid', start: 'top 75%' } });
    gsap.from('.about-list li', { opacity: 0, x: 24, duration: 0.5, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.about-list', start: 'top 80%' } });

    // Capability cards
    gsap.from('.cap-item', { opacity: 0, y: 32, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.caps-grid', start: 'top 80%' } });

    // CTA band
    gsap.from('.cta-band-inner', { opacity: 0, scale: 0.97, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-band', start: 'top 80%' } });

    // Location
    gsap.from('.location-info', { opacity: 0, x: -50, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.location-section', start: 'top 80%' } });
    gsap.from('.location-map', { opacity: 0, scale: 0.98, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.location-section', start: 'top 80%' } });

    // Contact
    gsap.from('.contact-info', { opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-grid', start: 'top 75%' } });
    gsap.from('.contact-form', { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-grid', start: 'top 75%' } });

    // Recalculate all trigger positions after DOM is fully settled
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('load', onLoad);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis?.destroy();
    };
  }, []);
}

function animateCounters() {
  document.querySelectorAll<HTMLElement>('.stat-item').forEach((item) => {
    const target = +(item.dataset.count || 0);
    const el = item.querySelector('.count');
    if (!el) return;
    gsap.to({ val: 0 }, {
      val: target, duration: 2, ease: 'power2.out',
      onUpdate(this: gsap.core.Tween) {
        el.textContent = Math.round((this.targets()[0] as any).val).toLocaleString();
      },
    });
  });
}
