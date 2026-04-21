"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "blockphi:cookie-consent";
const OPEN_EVENT = "blockphi:open-cookie-settings";
const CONSENT_EVENT = "blockphi:cookie-consent";

type Consent = "accepted" | "rejected";

// useSyncExternalStore subscription. Re-renders the component when either
// the cross-tab `storage` event fires, or our in-tab CONSENT_EVENT does
// (localStorage doesn't fire `storage` in the same tab that wrote it).
function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getConsentSnapshot(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

function getConsentServerSnapshot(): string | null {
  // Server can't read client localStorage; assume no prior consent so the
  // SSR output matches the most common first-visit client render.
  return null;
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  const [manuallyOpened, setManuallyOpened] = useState(false);

  useEffect(() => {
    const onReopen = () => setManuallyOpened(true);
    window.addEventListener(OPEN_EVENT, onReopen);
    return () => window.removeEventListener(OPEN_EVENT, onReopen);
  }, []);

  const setConsent = useCallback((value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    // CustomEvent is what useSyncExternalStore subscribes to — localStorage
    // doesn't fire `storage` in the same tab that writes it.
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setManuallyOpened(false);
  }, []);

  const visible = manuallyOpened || consent === null;
  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
    >
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          We use only strictly necessary cookies to run this site. Embedded
          content (YouTube, Medium) may set additional cookies. See our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn--ghost"
            onClick={() => setConsent("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn--primary"
            onClick={() => setConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
