'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

interface Testimonial {
  videoId: string;
  quote: string;
  name: string;
  location: string;
  role: string;
}

// YouTube video IDs are exactly 11 chars of [A-Za-z0-9_-]. Guard against placeholders.
function isRealVideo(id: string): boolean {
  return /^[A-Za-z0-9_-]{11}$/.test(id);
}

// Placeholder testimonials — replace videoIds and quotes with real ones
const testimonials: Testimonial[] = [
  {
    videoId: 'PLACEHOLDER_1',
    quote: 'I was managing a high six figure crypto portfolio and felt lost in the noise. BlockPhi gave me the structure and timely insights to move with confidence.',
    name: 'Private Member',
    location: 'Amsterdam, NL',
    role: 'Portfolio above $250k',
  },
  {
    videoId: 'PLACEHOLDER_2',
    quote: 'I finally stopped overtrading. The frameworks helped me sit on my hands when the data said wait.',
    name: 'Private Member',
    location: 'London, UK',
    role: 'Joined 2023',
  },
  {
    videoId: 'PLACEHOLDER_3',
    quote: 'The macro analysis alone is worth the membership. I now understand why crypto moves before it moves.',
    name: 'Private Member',
    location: 'Dubai, UAE',
    role: 'Joined 2024',
  },
  {
    videoId: 'PLACEHOLDER_4',
    quote: 'BlockPhi changed how I allocate. I went from 100% crypto to a diversified portfolio that actually lets me sleep.',
    name: 'Private Member',
    location: 'New York, US',
    role: 'Portfolio above $500k',
  },
  {
    videoId: 'PLACEHOLDER_5',
    quote: "The community alone is worth every dollar. Nothing else I've subscribed to comes close.",
    name: 'Private Member',
    location: 'Inner Circle',
    role: 'Joined 2024',
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getVisible = useCallback(() => {
    if (typeof window === 'undefined') return 2;
    const w = window.innerWidth;
    return w <= 640 ? 1 : w <= 1024 ? 2 : 3;
  }, []);

  const updatePages = useCallback(() => {
    const visible = getVisible();
    const tp = Math.ceil(testimonials.length / visible);
    setTotalPages(tp);
    setPage(p => Math.min(p, Math.max(0, tp - 1)));
  }, [getVisible]);

  useEffect(() => {
    // Initial sync happens in the resize handler on first mount via a queued frame,
    // which lets React finish its initial render before we sync external (window) state.
    const frame = requestAnimationFrame(updatePages);
    window.addEventListener('resize', updatePages);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', updatePages);
    };
  }, [updatePages]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const visible = getVisible();
    const card = track.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    const offset = page * visible * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [page, getVisible]);

  return (
    <section className="section bg-card" id="testimonials">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">From Our Private Members</span>
        </ScrollReveal>

        <ScrollReveal>
          <div className="tm-widget">
            <div className="tm-clip">
              <div className="tm-track" ref={trackRef}>
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="tm-card"
                    style={{ '--index': i } as React.CSSProperties}
                  >
                    <div className="tm-video">
                      {playingId === t.videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0`}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={`Testimonial from ${t.name}, ${t.location}`}
                          className="tm-iframe"
                        />
                      ) : (
                        <button
                          type="button"
                          className="tm-thumb"
                          onClick={() => isRealVideo(t.videoId) && setPlayingId(t.videoId)}
                          disabled={!isRealVideo(t.videoId)}
                          aria-label={`Play testimonial from ${t.name}, ${t.location}`}
                        >
                          {isRealVideo(t.videoId) ? (
                            <Image
                              src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                              alt=""
                              width={480}
                              height={360}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="tm-thumb-placeholder" aria-hidden="true" />
                          )}
                          <span className="tm-play" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="28" height="28">
                              <polygon points="8,5 20,12 8,19" fill="currentColor" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                    <div className="tm-content">
                      <span className="tm-location">{t.location}</span>
                      <p className="tm-quote">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="tm-author">
                        <span className="tm-name">{t.name}</span>
                        <span className="tm-role">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tm-controls">
              <div className="tm-nav">
                <button
                  className="tm-arrow"
                  disabled={page === 0}
                  onClick={() => { setPage(p => p - 1); setPlayingId(null); }}
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
                  </svg>
                </button>
                <button
                  className="tm-arrow"
                  disabled={page >= totalPages - 1}
                  onClick={() => { setPage(p => p + 1); setPlayingId(null); }}
                  aria-label="Next"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
                  </svg>
                </button>
                {totalPages > 1 && (
                  <div className="tm-dots">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        className={`tm-dot${i === page ? ' active' : ''}`}
                        onClick={() => { setPage(i); setPlayingId(null); }}
                        aria-label={`Page ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
