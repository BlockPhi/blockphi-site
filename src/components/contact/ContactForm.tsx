'use client';

import { useRef, useState, type FormEvent, type RefObject } from 'react';
import { CONTACT_EMAIL } from '@/lib/links';

type FieldName = 'name' | 'email' | 'subject' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_ORDER: FieldName[] = ['name', 'email', 'subject', 'message'];

function validate(data: FormData): FieldErrors {
  const errs: FieldErrors = {};
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const subject = String(data.get('subject') || '').trim();
  const message = String(data.get('message') || '').trim();

  if (!name) errs.name = 'Please enter your name.';
  if (!email) errs.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email)) errs.email = 'That email address looks incomplete.';
  if (!subject) errs.subject = 'Please add a subject.';
  if (!message) errs.message = 'Please write a short message.';

  return errs;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const refs: Record<FieldName, RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
    name: nameRef,
    email: emailRef,
    subject: subjectRef,
    message: messageRef,
  };

  // Clearing the error as the user types makes the form feel responsive
  // rather than accusatory — they get immediate confirmation that their
  // correction is being registered.
  function clearError(field: FieldName) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots usually fill every field. Humans won't see this one.
    if ((data.get('_honey') as string || '').trim() !== '') {
      setStatus('sent');
      form.reset();
      setFieldErrors({});
      return;
    }

    const errs = validate(data);
    setFieldErrors(errs);

    const firstInvalid = FIELD_ORDER.find((f) => errs[f]);
    if (firstInvalid) {
      // Auto-focus the first field that failed so the user lands on the
      // exact spot they need to fix.
      refs[firstInvalid].current?.focus();
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
        setFieldErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const sending = status === 'sending';

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="New message from blockphi.com" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {/* Honeypot (visually hidden, not focusable) */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-honey">Leave this field empty</label>
        <input
          type="text"
          id="contact-honey"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form-row">
        <div className={`contact-field${fieldErrors.name ? ' contact-field--error' : ''}`}>
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={sending}
            ref={nameRef}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
            onInput={() => clearError('name')}
          />
          {fieldErrors.name && (
            <p className="contact-field-error" id="contact-name-error" role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className={`contact-field${fieldErrors.email ? ' contact-field--error' : ''}`}>
          <label htmlFor="contact-email">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            placeholder="Your email"
            disabled={sending}
            ref={emailRef}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
            onInput={() => clearError('email')}
          />
          {fieldErrors.email && (
            <p className="contact-field-error" id="contact-email-error" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className={`contact-field${fieldErrors.subject ? ' contact-field--error' : ''}`}>
        <label htmlFor="contact-subject">Subject</label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          required
          placeholder="Subject"
          disabled={sending}
          ref={subjectRef}
          aria-invalid={!!fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
          onInput={() => clearError('subject')}
        />
        {fieldErrors.subject && (
          <p className="contact-field-error" id="contact-subject-error" role="alert">
            {fieldErrors.subject}
          </p>
        )}
      </div>

      <div className={`contact-field${fieldErrors.message ? ' contact-field--error' : ''}`}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Your message"
          disabled={sending}
          ref={messageRef}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
          onInput={() => clearError('message')}
        />
        {fieldErrors.message && (
          <p className="contact-field-error" id="contact-message-error" role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn-primary contact-submit"
        disabled={sending}
        aria-busy={sending}
      >
        {sending ? 'Sending...' : 'Send Message'}
      </button>

      <div className="contact-status" aria-live="polite" role="status">
        {status === 'sent' && (
          <p className="contact-success">Message sent. We&apos;ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="contact-error">
            Something went wrong. Please try again or email us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
