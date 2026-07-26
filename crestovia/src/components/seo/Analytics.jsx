import { useEffect } from 'react';

/**
 * Analytics & tracking placeholders.
 *
 * Configure via Vite env (never commit real secrets to public repos if restricted):
 *   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXX
 *   VITE_GTM_ID=GTM-XXXXXXX
 *   VITE_CLARITY_ID=xxxxxxxxxx
 *   VITE_META_PIXEL_ID=xxxxxxxxxx
 *   VITE_GSC_VERIFICATION=xxxxxxxxxx
 *
 * Google Search Console: add DNS/HTML meta verification using VITE_GSC_VERIFICATION.
 */
export default function Analytics() {
  const ga4 = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  const gtm = import.meta.env.VITE_GTM_ID;
  const clarity = import.meta.env.VITE_CLARITY_ID;
  const metaPixel = import.meta.env.VITE_META_PIXEL_ID;

  useEffect(() => {
    // --- Google Tag Manager ---
    if (gtm && !window.__crestoviaGtmLoaded) {
      window.__crestoviaGtmLoaded = true;
      // eslint-disable-next-line no-none
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l !== 'dataLayer' ? `&l=${l}` : '';
        j.async = true;
        j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', gtm);
    }

    // --- Google Analytics 4 (direct, if GTM not used) ---
    if (ga4 && !gtm && !window.__crestoviaGa4Loaded) {
      window.__crestoviaGa4Loaded = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', ga4);
    }

    // --- Microsoft Clarity ---
    if (clarity && !window.__crestoviaClarityLoaded) {
      window.__crestoviaClarityLoaded = true;
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = `https://www.clarity.ms/tag/${i}`;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', clarity);
    }

    // --- Meta Pixel ---
    if (metaPixel && !window.__crestoviaMetaLoaded) {
      window.__crestoviaMetaLoaded = true;
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', metaPixel);
      window.fbq('track', 'PageView');
    }
  }, [ga4, gtm, clarity, metaPixel]);

  return null;
}
