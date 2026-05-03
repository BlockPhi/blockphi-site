'use client';

import { useState, FormEvent } from 'react';

export default function SubstackSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === 'sending') return;

    setStatus('sending');

    try {
      const res = await fetch('https://jackgreencrypto.substack.com/api/v1/free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_url: 'https://jackgreencrypto.substack.com/',
          source: 'subscribe_widget',
          referring_pub_id: '',
          additional_referring_pub_ids: '',
        }),
      });

      if (res.ok) {
        setStatus('done');
        setEmail('');
      } else {
        throw new Error('Subscribe failed');
      }
    } catch {
      // Fallback: open Substack subscribe page directly
      window.open(
        `https://jackgreencrypto.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        '_blank',
        'noopener,noreferrer'
      );
      setStatus('done');
      setEmail('');
    }
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'sending'}
        className="subscribe-input"
        aria-label="Email address"
        autoComplete="email"
      />
      <button
        type="submit"
        className="subscribe-btn"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? (
          '…'
        ) : status === 'done' ? (
          'Subscribed'
        ) : (
          <>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            <span>Subscribe</span>
          </>
        )}
      </button>
    </form>
  );
}
