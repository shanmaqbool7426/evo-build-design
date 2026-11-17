import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Cookie consent banner + Google consent signal.
 *
 * The GTM container is allowed to load, but the consent snippet in __root.tsx
 * sets every non-essential signal to "denied" before it runs. This component
 * only flips those signals to "granted" after the visitor accepts, and keeps
 * the choice in localStorage so the banner does not reappear.
 *
 * No analytics or marketing cookies are set while consent is denied.
 */

const STORAGE_KEY = "arz-cookie-consent";
const OPEN_EVENT = "arz:cookie-settings";

type Decision = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function () {
      // gtag.js expects the arguments object, not a spread array.
      // eslint-disable-next-line prefer-rest-params
      (window.dataLayer as unknown[]).push(arguments);
    };
  }
  window.gtag(...args);
}

function applyConsent(decision: Decision) {
  const state = decision === "granted" ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === "granted" || stored === "denied") {
      applyConsent(stored);
      setReady(true);
      return;
    }
    setReady(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const decide = (decision: Decision) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, decision);
    } catch {
      // Storage can be blocked — the choice still applies for this page view.
    }
    applyConsent(decision);
    setVisible(false);
  };

  if (!ready || !visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[120] border-t border-border bg-white/98 shadow-lift backdrop-blur-md xl:bottom-0"
    >
      {/* Compact on phones (it used to cover ~30% of the screen and hide the
          call/quote buttons); full wording from the sm breakpoint up. */}
      <div className="container-x flex flex-col gap-2.5 py-2.5 sm:gap-4 sm:py-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl text-[11px] leading-snug text-muted-foreground sm:text-xs sm:leading-relaxed">
          <span className="hidden font-bold text-navy sm:block">Cookies on this site</span>
          <span className="sm:hidden">
            We use essential cookies, plus analytics cookies only if you allow them.{" "}
          </span>
          <span className="hidden sm:inline">
            We use essential cookies to make the site work. With your permission we also use
            analytics cookies (Google Analytics, loaded through Google Tag Manager) to understand
            which pages are useful. Nothing non-essential loads until you choose.{" "}
          </span>
          <Link to="/privacy" className="font-semibold text-bright underline hover:text-navy">
            Cookie policy
          </Link>
          .
        </p>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-navy/25 bg-white px-3 py-2 text-[11px] font-semibold tracking-wide text-navy uppercase transition-colors hover:bg-blue-tint sm:flex-none sm:px-5 sm:py-2.5 sm:text-xs"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-navy px-3 py-2 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-royal sm:flex-none sm:px-5 sm:py-2.5 sm:text-xs"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
