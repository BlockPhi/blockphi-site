'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

// Playlist RSS feed via rss2json — user-curated selection
const PLAYLIST_ID = 'PLK1cGopRxJXzvyPcWczdxB3L0SFbcb_uj';

export default function YouTubeVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const getVisible = useCallback(() => {
    const w = window.innerWidth;
    return w <= 640 ? 2 : w <= 960 ? 3 : 5;
  }, []);

  const updatePages = useCallback(() => {
    const visible = getVisible();
    const tp = Math.ceil(videos.length / visible);
    setTotalPages(tp);
    setPage(p => Math.min(p, Math.max(0, tp - 1)));
  }, [videos.length, getVisible]);

  useEffect(() => {
    const rss = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`;

    fetch(api)
      .then(res => res.json())
      .then(data => {
        if (data.status !== 'ok') throw new Error('Feed error');
        const items: Video[] = data.items.map((item: { link: string; title: string; thumbnail: string; pubDate: string }) => {
          const videoId = item.link.match(/v=([^&]+)/)?.[1] || '';
          return {
            id: videoId,
            title: item.title,
            thumbnail: item.thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            publishedAt: item.pubDate,
          };
        });
        setVideos(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    updatePages();
    window.addEventListener('resize', updatePages);
    return () => window.removeEventListener('resize', updatePages);
  }, [updatePages]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const visible = getVisible();
    const card = track.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    const offset = page * visible * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [page, getVisible, videos]);

  if (loading) {
    return <div className="yt-loading">Loading videos...</div>;
  }

  if (videos.length === 0) return null;

  return (
    <div className="yt-widget">
      <div className="yt-clip">
        <div className="yt-track" ref={trackRef}>
          {videos.map((video, i) => (
            <a
              key={video.id || i}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-card"
              style={{ '--index': i } as React.CSSProperties}
            >
              <div className="yt-thumb">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                />
                <div className="yt-play">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <polygon points="8,5 20,12 8,19" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="yt-info">
                <h3>{video.title}</h3>
                <span className="yt-date">
                  {new Date(video.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="yt-controls">
        <div className="yt-nav">
          <button
            className="yt-arrow"
            disabled={page === 0}
            onClick={() => setPage(p => p - 1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
            </svg>
          </button>
          <button
            className="yt-arrow"
            disabled={page >= totalPages - 1}
            onClick={() => setPage(p => p + 1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
            </svg>
          </button>
          <div className="yt-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`yt-dot${i === page ? ' active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <a
          href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-view-all-link"
        >
          View All Videos &rsaquo;
        </a>
      </div>
    </div>
  );
}
