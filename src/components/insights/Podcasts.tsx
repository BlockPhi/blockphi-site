'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Episode {
  id: string;
  title: string;
  publishedAt: string;
}

interface ShowData {
  name: string;
  tagline: string;
  desc: string;
  cover: string;
  playlistId: string;
  playlistUrl: string;
  badges: string[];
  latestEpisode: Episode | null;
}

const LIVESTREAMS: Omit<ShowData, 'latestEpisode'>[] = [
  {
    name: 'Setup Saturday',
    tagline: 'Crypto & Macro Outlook',
    desc: 'Jack and Freek break down the week\u2019s biggest global macro data and crypto events, and how they impact Bitcoin price action.',
    cover: '/images/setup-saturday.jpg',
    playlistId: 'PLK1cGopRxJXy8QEe2Ns4LR2GrVRKCG8Pj',
    playlistUrl: 'https://youtube.com/playlist?list=PLK1cGopRxJXy8QEe2Ns4LR2GrVRKCG8Pj',
    badges: ['Saturdays · 2PM CET'],
  },
  {
    name: 'Bitcoin Under The Loupe',
    tagline: 'TA, Fundamentals & Macro',
    desc: 'Jack & George dive deep into Bitcoin valuation metrics, covering every part of both Technical and Fundamental Analyses.',
    cover: '/images/bitcoin-under-the-loupe.jpg',
    playlistId: 'PLK1cGopRxJXxy_s8vRvZzPyu6nmq-dKIb',
    playlistUrl: 'https://youtube.com/playlist?list=PLK1cGopRxJXxy_s8vRvZzPyu6nmq-dKIb',
    badges: ['Thursdays · 3PM CET'],
  },
];

function ShowCard({ show }: { show: ShowData }) {
  return (
    <div className="podcast-block">
      <a
        href={show.playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="podcast-card"
      >
        <div className="podcast-cover">
          <Image
            src={show.cover}
            alt={`${show.name} cover art`}
            width={480}
            height={480}
            sizes="(max-width: 640px) 100vw, 320px"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="podcast-info">
          <h3>{show.name}</h3>
          <p className="podcast-tagline">{show.tagline}</p>
          <p className="podcast-desc">{show.desc}</p>
          <div className="podcast-meta">
            {show.badges.map((b, j) => (
              <span key={j} className="podcast-badge">{b}</span>
            ))}
          </div>
        </div>
      </a>

      {show.latestEpisode && (
        <a
          href={`https://www.youtube.com/watch?v=${show.latestEpisode.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ep-latest"
        >
          <div className="ep-latest-icon">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <polygon points="8,5 20,12 8,19" fill="currentColor" />
            </svg>
          </div>
          <div className="ep-latest-info">
            <span className="ep-latest-label">Latest Episode</span>
            <p className="ep-latest-title">{show.latestEpisode.title}</p>
            <span className="ep-latest-date">
              {new Date(show.latestEpisode.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </a>
      )}

      <div className="ep-all-link">
        <a href={show.playlistUrl} target="_blank" rel="noopener noreferrer">
          All Episodes &rsaquo;
        </a>
      </div>
    </div>
  );
}

function useShowsWithEpisodes(shows: Omit<ShowData, 'latestEpisode'>[]) {
  const [data, setData] = useState<ShowData[]>(
    shows.map(s => ({ ...s, latestEpisode: null }))
  );

  useEffect(() => {
    shows.forEach((show, idx) => {
      const rss = `https://www.youtube.com/feeds/videos.xml?playlist_id=${show.playlistId}`;
      const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`;

      fetch(api)
        .then(res => res.json())
        .then(result => {
          if (result.status !== 'ok' || !result.items.length) return;
          const item = result.items[0];
          const videoId = item.link.match(/v=([^&]+)/)?.[1] || '';
          const episode: Episode = {
            id: videoId,
            title: item.title,
            publishedAt: item.pubDate,
          };
          setData(prev => {
            const next = [...prev];
            next[idx] = { ...next[idx], latestEpisode: episode };
            return next;
          });
        })
        .catch(() => {});
    });
  }, [shows]);

  return data;
}

export function Livestreams() {
  const shows = useShowsWithEpisodes(LIVESTREAMS);

  return (
    <div className="podcasts-widget">
      <div className="podcasts-grid podcasts-grid--2col">
        {/* Row 1: Show cards */}
        {shows.map((show, i) => (
          <a
            key={`card-${i}`}
            href={show.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="podcast-card"
          >
            <div className="podcast-cover">
              <Image
                src={show.cover}
                alt={`${show.name} cover art`}
                width={480}
                height={480}
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="podcast-info">
              <h3>{show.name}</h3>
              <p className="podcast-tagline">{show.tagline}</p>
              <p className="podcast-desc">{show.desc}</p>
              <div className="podcast-meta">
                {show.badges.map((b, j) => (
                  <span key={j} className="podcast-badge">{b}</span>
                ))}
              </div>
            </div>
          </a>
        ))}

        {/* Row 2: Latest episodes */}
        {shows.map((show, i) => (
          show.latestEpisode ? (
            <a
              key={`ep-${i}`}
              href={`https://www.youtube.com/watch?v=${show.latestEpisode.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ep-latest"
            >
              <div className="ep-latest-icon">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <polygon points="8,5 20,12 8,19" fill="currentColor" />
                </svg>
              </div>
              <div className="ep-latest-info">
                <span className="ep-latest-label">Latest Episode</span>
                <p className="ep-latest-title">{show.latestEpisode.title}</p>
                <span className="ep-latest-date">
                  {new Date(show.latestEpisode.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </a>
          ) : <div key={`ep-${i}`} />
        ))}

        {/* Row 3: Links */}
        {shows.map((show, i) => (
          <div key={`link-${i}`} className="ep-all-link">
            <a href={show.playlistUrl} target="_blank" rel="noopener noreferrer">
              All Episodes &rsaquo;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const PODCASTS: Omit<ShowData, 'latestEpisode'>[] = [
  {
    name: 'Pursuing Value Podcast',
    tagline: 'Bitcoin, Investing, Global Macro, Business, AI & Mindset',
    desc: 'Jack Green talks to some of the brightest minds about finding, creating, and protecting what\u2019s valuable in a changing world, from money and markets to freedom, ideas, and trust.',
    cover: '/images/PVP_Podcast_Logo.jpg',
    playlistId: 'PLK1cGopRxJXy85-f9MTaAua7dO5gmSVgQ',
    playlistUrl: 'https://youtube.com/playlist?list=PLK1cGopRxJXy85-f9MTaAua7dO5gmSVgQ',
    badges: ['Podcast'],
  },
];

export function PodcastsSection() {
  const shows = useShowsWithEpisodes(PODCASTS);

  return (
    <div className="podcasts-widget">
      <div className="podcasts-grid podcasts-grid--1col">
        {shows.map((show, i) => (
          <ShowCard key={i} show={show} />
        ))}
      </div>
    </div>
  );
}
