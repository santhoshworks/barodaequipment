'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="video-section" id="video">
      <div className="container-inner">
        <div className="section-header light">
          <span className="section-label" style={{ color: 'var(--mint)' }}>
            See It In Action
          </span>
          <h2 style={{ color: '#fff' }}>Engineering at Scale</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A closer look at our facility, our people, and the precision behind every piece of equipment we manufacture.
          </p>
        </div>
      </div>
      <div className="video-wrapper">
        {!playing ? (
          <div
            className="video-thumbnail"
            onClick={() => setPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
          >
            <Image
              src="/video-thumb.jpg"
              alt="BEV facility video"
              width={1000}
              height={562}
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority={false}
            />
            <div className="video-overlay" />
            <button className="play-btn" aria-label="Play video">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="39" stroke="rgba(255,140,58,0.6)" strokeWidth="2" />
                <circle cx="40" cy="40" r="40" fill="rgba(255,140,58,0.12)" />
                <polygon points="32,24 58,40 32,56" fill="#FF8C3A" />
              </svg>
              <span>Watch Our Story</span>
            </button>
            <div className="video-caption">
              <span>&#9654; Baroda Equipment &amp; Vessels Pvt. Ltd. — Manufacturing Excellence</span>
            </div>
          </div>
        ) : (
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/1jNW-O-QYhg?start=4&autoplay=1&rel=0&modestbranding=1"
              title="Baroda Equipment & Vessels — Company Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}
