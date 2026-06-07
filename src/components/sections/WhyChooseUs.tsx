'use client';

import { useState } from 'react';
import Image from 'next/image';

const items = [
  {
    number: '01',
    title: 'ASME & International Certifications',
    body: 'We hold ASME U, U2, S & R stamps alongside IBR, PESO, DNV and CE approvals — giving your procurement team confidence in compliance across every global jurisdiction.',
    image: '/gallery-he-1.jpg',
  },
  {
    number: '02',
    title: 'In-House NDT & Testing',
    body: 'Every piece of equipment undergoes full radiographic (RT), ultrasonic (UT), magnetic particle (MT), dye penetrant (PT) testing and hydrostatic pressure testing before dispatch — no outsourcing.',
    image: '/gallery-he-2.jpg',
  },
  {
    number: '03',
    title: '35+ Years Engineering Expertise',
    body: 'Our team of experienced engineers has tackled over 2,000 projects across 15 countries — from single vessels to complete modular process plants. That depth of experience is what our clients count on.',
    image: '/gallery-he-3.jpg',
  },
  {
    number: '04',
    title: 'On-Time Delivery, Every Time',
    body: 'We understand that project delays are costly. Our dedicated project management team tracks every milestone from PO to dispatch — ensuring your equipment arrives when your schedule demands it.',
    image: '/gallery-pv-1.jpg',
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="why-section">
      <div className="container-inner">
        <div className="why-grid">
          <div className="why-accordion">
            <span className="section-label">Why Choose Us</span>
            <h2>Engineering You Can Rely On</h2>
            <div className="acc-items">
              {items.map((item, i) => (
                <div
                  key={item.number}
                  className={`acc-item${i === activeIndex ? ' active' : ''}`}
                >
                  <button
                    className="acc-btn"
                    onClick={() => setActiveIndex(i)}
                    aria-expanded={i === activeIndex}
                  >
                    <span className="acc-icon">{item.number}</span>
                    <span>{item.title}</span>
                    <span className="acc-arrow">&darr;</span>
                  </button>
                  <div className="acc-body">
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image-panel">
            <div className="why-img-wrap">
              <Image
                src={items[activeIndex].image}
                alt="Quality manufacturing"
                width={600}
                height={450}
                sizes="(max-width: 860px) 0vw, 50vw"
              />
              <div className="why-img-blob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
