// Cookie-toestemming + tracking. Scripts laden alleen na "Accepteren".
import { site } from '@/data/site';

type Consent = 'granted' | 'denied';
const KEY = 'kp_consent';
const ids = site.tracking;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown; callMethod?: (...a: unknown[]) => void };
    _fbq?: unknown;
    ttq?: { track: (e: string, p?: object) => void; page: () => void; load: (id: string) => void; [k: string]: unknown };
    snaptr?: ((...args: unknown[]) => void) & { queue?: unknown[]; handleRequest?: (...a: unknown[]) => void };
  }
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try { localStorage.setItem(KEY, value); } catch { /* privé-modus */ }
  if (value === 'granted') loadTrackers();
}

function script(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let loaded = false;
export function loadTrackers() {
  if (loaded) return;
  loaded = true;

  if (ids.ga4) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer!.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ids.ga4, { anonymize_ip: true });
    script(`https://www.googletagmanager.com/gtag/js?id=${ids.ga4}`);
  }

  if (ids.metaPixel) {
    const fbq: any = function (...args: unknown[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.push = fbq;
    window.fbq = window._fbq = fbq;
    script('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq!('init', ids.metaPixel);
    window.fbq!('track', 'PageView');
  }

  if (ids.tiktokPixel) {
    const ttq: any = (window.ttq = (window.ttq || []) as any);
    ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
    ttq.setAndDefer = (t: any, e: string) => { t[e] = (...a: unknown[]) => t.push([e, ...a]); };
    ttq.methods.forEach((m: string) => ttq.setAndDefer(ttq, m));
    ttq.load = (id: string) => {
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      script(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}&lib=ttq`);
    };
    ttq.load(ids.tiktokPixel);
    ttq.page();
  }

  if (ids.snapPixel) {
    const snaptr: any = function (...args: unknown[]) {
      snaptr.handleRequest ? snaptr.handleRequest(...args) : snaptr.queue.push(args);
    };
    snaptr.queue = [];
    window.snaptr = snaptr;
    script('https://sc-static.net/scevent.min.js');
    window.snaptr!('init', ids.snapPixel);
    window.snaptr!('track', 'PAGE_VIEW');
  }
}

/** Meet een gebeurtenis in alle actieve trackers (doet niets zonder toestemming). */
export function track(event: 'lead' | 'quiz_start' | 'quiz_complete', params: Record<string, string> = {}) {
  if (import.meta.env.DEV) console.log('[track]', event, params);
  if (getConsent() !== 'granted') return;
  window.gtag?.('event', event === 'lead' ? 'generate_lead' : event, params);
  if (event === 'lead') {
    window.fbq?.('track', 'Lead', params);
    window.ttq?.track('SubmitForm', params);
    window.snaptr?.('track', 'SIGN_UP');
  } else {
    window.fbq?.('trackCustom', event, params);
  }
}

export function initTracking() {
  if (getConsent() === 'granted') loadTrackers();
}
