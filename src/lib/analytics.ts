/**
 * Conversion tracking helpers.
 *
 * Everything is pushed to the GTM dataLayer so the container stays the single
 * source of truth for tags. Event names used on the site:
 *   phone_click, whatsapp_click, email_click, quote_request_submitted
 *
 * No Analytics storage is written until the visitor has granted consent — see
 * components/CookieConsent.tsx.
 */

export type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/**
 * One delegated listener covers every phone, WhatsApp and email link on the
 * site, so components do not each need their own click handler.
 * Returns a cleanup function.
 */
export function initConversionTracking() {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: MouseEvent) => {
    const node = event.target as Element | null;
    const anchor = node?.closest?.("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const href = anchor.getAttribute("href") ?? "";
    const linkText = (anchor.textContent ?? "").trim().slice(0, 80);

    if (href.startsWith("tel:")) {
      trackEvent("phone_click", { link_url: href, link_text: linkText });
    } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
      trackEvent("whatsapp_click", { link_url: href, link_text: linkText });
    } else if (href.startsWith("mailto:")) {
      trackEvent("email_click", { link_url: href, link_text: linkText });
    }
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
