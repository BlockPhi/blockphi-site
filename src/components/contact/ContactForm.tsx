'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/contact@blockphi.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="New message from blockphi.com" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Your name"
            disabled={status === 'sending'}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="Your email"
            disabled={status === 'sending'}
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          required
          placeholder="Subject"
          disabled={status === 'sending'}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Your message"
          disabled={status === 'sending'}
        />
      </div>

      <button
        type="submit"
        className="btn-primary contact-submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="contact-success">Message sent. We&apos;ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="contact-error">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  );
}
