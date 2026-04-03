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
      />
      <button type="submit" className="subscribe-btn" disabled={status === 'sending'}>
        {status === 'sending' ? '...' : status === 'done' ? 'Subscribed' : 'Subscribe'}
      </button>
    </form>
  );
}
