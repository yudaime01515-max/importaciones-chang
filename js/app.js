/* =========================================================
   CHANG CORPORATION — Lógica del sitio
   (normalmente no necesitas editar este archivo; los datos
   están en js/data.js)
   ========================================================= */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const PAGE = document.body.dataset.page || "inicio";
  const money = n => "S/ " + Number(n).toLocaleString("en-US");
  const wa = (msg = "Hola Chang Corporation, quisiera más información.") =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------------- ICONS ---------------- */
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
    headphones: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2.5" y="14" width="5" height="7" rx="1.5"/><rect x="16.5" y="14" width="5" height="7" rx="1.5"/>',
    tv: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    truck: '<path d="M1 5h13v11H1z"/><path d="M14 9h4l4 4v3h-8"/><circle cx="5.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
    shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v2a2 2 0 0 1-2 2h-2v-6h4M3 14v2a2 2 0 0 0 2 2h2v-6H3"/><path d="M19 18a4 4 0 0 1-4 3h-3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5.5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    down: '<path d="m6 9 6 6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>', left: '<path d="m15 18-6-6 6-6"/>', up: '<path d="m18 15-6-6-6 6"/>',
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    signal: '<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/>',
    antenna: '<path d="M4.9 16.1a10 10 0 0 1 0-14.2M19.1 1.9a10 10 0 0 1 0 14.2M7.8 13.2a6 6 0 0 1 0-8.4M16.2 4.8a6 6 0 0 1 0 8.4"/><circle cx="12" cy="9" r="2"/><path d="m9 22 3-11 3 11M10 18h4"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
    news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    package: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3.3 7.6 12 12.6l8.7-5M12 22V12.6M7.5 5.3l9 5.2"/>',
    call: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0M12 20h.01"/>',
    sim: '<path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><rect x="8" y="11" width="8" height="7" rx="1"/><path d="M12 11v7M8 14.5h8"/>',
    swap: '<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.3 7 22l5-3 5 3-1.2-8.7"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M2 9h20M12 22 8 9l3-6M12 22l4-13-3-6"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/><path d="M15 8h5v5"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    upload: '<path d="M12 15V3M7 8l5-5 5 5"/><path d="M20 15v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
    filter: '<path d="M3 4h18l-7 8v6l-4 2v-8Z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.2.4 1.2 1.5 2.7 2.5 2.7Z"/>',
    laptop: '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    tablet: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 18h.01"/>',
    game: '<rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6 12h4M8 10v4M15 12h.01M18 10h.01"/>',
    watch: '<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6l1-4h4l1 4M9 18l1 4h4l1-4"/>',
    speaker: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/>',
    router: '<rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 17.5h.01M10 17.5h.01M8 14V8M16 14V8"/>',
    battery: '<rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0Z"/><path d="M12 18v4"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
    store: '<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9M10 21v-5h4v5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    fridge: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14M8 6v1M8 13v3"/>',
    washer: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h.01M11 6h.01"/>',
    pot: '<path d="M4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"/><path d="M2 10h20M9 6h6M12 6V4"/>',
    wind: '<path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
    microwave: '<rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="10" height="8" rx="1"/><path d="M18 9v.01M18 12v.01M18 15v.01"/>',
    flameStove: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="2"/><circle cx="15.5" cy="8.5" r="2"/><path d="M3 13h18M8 17h8"/>',
    box: '<path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    thumbs: '<path d="M7 10v12M15 5.9 14 10h5.8a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.4 22H7V10l4-8a3.1 3.1 0 0 1 4 3.9Z"/><path d="M2 10h5v12H2z"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    sparkle: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4Z"/><path d="M19 17v4M17 19h4"/>',
    recycle: '<path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.2 9.5M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1M14 16l-3 3 3 3M8.3 13.6 7.2 9.5 3.1 10.6M9.3 5.6l1.1-1.9a1.8 1.8 0 0 1 3.2 0l3.9 6.8M13.4 9.5l3.9 1.1 1.1-4.1"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    hand: '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L14.4 13"/><path d="m2 15 6 6"/>',
    fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z"/>',
    ig: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    yt: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/>'
  };
  const FILLED = {
    wa: '<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z"/>',
    tt: '<path fill="currentColor" d="M16.6 2c.4 2.6 2 4.3 4.6 4.6v3.4c-1.7 0-3.2-.5-4.6-1.4v6.6a6.2 6.2 0 1 1-6.2-6.2c.3 0 .6 0 .9.1v3.5a2.8 2.8 0 1 0 1.9 2.6V2Z"/>'
  };
  const ic = (n, cls = "") => FILLED[n]
    ? `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${FILLED[n]}</svg>`
    : `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.box}</svg>`;
  window.ic = ic;

  /* ---------------- PRODUCT ILLUSTRATIONS ---------------- */
  let U = 0;
  function art(tipo, color = "#7c8cff", extra = "") {
    const u = "a" + (++U);
    const metal = `<linearGradient id="m${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9edf2"/><stop offset=".5" stop-color="#b9c0ca"/><stop offset="1" stop-color="#8d96a3"/></linearGradient>`;
    const dark = `<linearGradient id="d${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a414b"/><stop offset="1" stop-color="#101318"/></linearGradient>`;
    const scr = `<linearGradient id="s${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset=".55" stop-color="#28306e"/><stop offset="1" stop-color="#0b0f2a"/></linearGradient>`;
    const land = `<linearGradient id="l${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ec8ff"/><stop offset=".55" stop-color="#2f6fb5"/><stop offset="1" stop-color="#1b3b2b"/></linearGradient>`;
    const sh = `<radialGradient id="h${u}"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>`;
    const defs = `<defs>${metal}${dark}${scr}${land}${sh}</defs>`;
    const shadow = `<ellipse cx="100" cy="186" rx="62" ry="8" fill="url(#h${u})"/>`;
    const isLight = c => { const h = c.replace("#", ""); if (h.length < 6) return false; const r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16); return (r * 299 + g * 587 + b * 114) / 1000 > 170; };
    const body = isLight(color) ? "#f4f6f8" : color;
    let g = "";
    switch (tipo) {
      case "phone":
        g = `<g transform="rotate(-11 46 104)"><rect x="24" y="42" width="56" height="116" rx="15" fill="${color}"/><rect x="24" y="42" width="56" height="116" rx="15" fill="#000" opacity=".12"/><rect x="24" y="42" width="56" height="116" rx="15" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="1.5"/><rect x="33" y="50" width="24" height="32" rx="8" fill="#14171c"/><circle cx="45" cy="60" r="5.6" fill="#20242b" stroke="#6b7580" stroke-width="1.8"/><circle cx="45" cy="60" r="2.3" fill="#0a0c10"/><circle cx="45" cy="74" r="5.6" fill="#20242b" stroke="#6b7580" stroke-width="1.8"/><circle cx="45" cy="74" r="2.3" fill="#0a0c10"/><circle cx="62" cy="52" r="2.6" fill="#ffd36b" opacity=".85"/></g>
        <g transform="translate(2 0)"><rect x="66" y="18" width="84" height="166" rx="22" fill="#0b0d11"/><rect x="66" y="18" width="84" height="166" rx="22" fill="none" stroke="url(#m${u})" stroke-width="2.2"/><rect x="72" y="24" width="72" height="154" rx="17" fill="url(#s${u})"/><ellipse cx="108" cy="46" rx="34" ry="18" fill="#fff" opacity=".12"/><path d="M72 112c24-20 48 10 72-22v66a14 14 0 0 1-14 14H86a14 14 0 0 1-14-14Z" fill="#fff" opacity=".15"/><path d="M72 134c28-14 46 12 72-14v40a14 14 0 0 1-14 14H86a14 14 0 0 1-14-14Z" fill="#fff" opacity=".10"/><circle cx="108" cy="33" r="3.3" fill="#05070a"/><rect x="148" y="66" width="3" height="30" rx="1.5" fill="#2a2f36"/><rect x="148" y="104" width="3" height="18" rx="1.5" fill="#2a2f36"/></g>`;
        break;
      case "earbuds":
        g = `<rect x="48" y="74" width="104" height="88" rx="36" fill="${body}" stroke="#b3bcc6" stroke-width="2"/><path d="M50 108h100" stroke="#cfd5dc" stroke-width="2"/><circle cx="100" cy="128" r="3" fill="#9aa3ad"/>
        <g transform="rotate(-18 70 54)"><rect x="56" y="30" width="26" height="34" rx="13" fill="${body}" stroke="#b3bcc6" stroke-width="2"/><rect x="64" y="58" width="10" height="34" rx="5" fill="${body}" stroke="#b3bcc6" stroke-width="2"/></g>
        <g transform="rotate(18 130 54)"><rect x="118" y="30" width="26" height="34" rx="13" fill="${body}" stroke="#b3bcc6" stroke-width="2"/><rect x="126" y="58" width="10" height="34" rx="5" fill="${body}" stroke="#b3bcc6" stroke-width="2"/></g>`;
        break;
      case "headphones":
        g = `<path d="M44 112V96a56 56 0 0 1 112 0v16" fill="none" stroke="url(#d${u})" stroke-width="14" stroke-linecap="round"/><rect x="30" y="100" width="40" height="66" rx="18" fill="url(#d${u})"/><rect x="130" y="100" width="40" height="66" rx="18" fill="url(#d${u})"/><rect x="36" y="108" width="12" height="50" rx="6" fill="#4b535e"/><rect x="152" y="108" width="12" height="50" rx="6" fill="#4b535e"/>`;
        break;
      case "tv":
        g = `<rect x="10" y="36" width="180" height="112" rx="6" fill="#111418"/><rect x="15" y="41" width="170" height="102" rx="3" fill="url(#l${u})"/><path d="M15 112l38-40 26 24 30-38 44 46 32-20v59H15Z" fill="#e8f1fb" opacity=".9"/><path d="M15 122l40-30 28 22 34-30 40 36 28-14v57H15Z" fill="#1f5135"/><path d="M15 136h170v7H15Z" fill="${color}" opacity=".5"/><rect x="88" y="148" width="24" height="14" fill="#2a2f36"/><rect x="62" y="160" width="76" height="6" rx="3" fill="#2a2f36"/>`;
        break;
      case "fridge":
        g = `<rect x="56" y="14" width="88" height="170" rx="10" fill="url(#m${u})"/><path d="M56 78h88" stroke="#7f8893" stroke-width="2"/><rect x="66" y="34" width="4" height="30" rx="2" fill="#5b636e"/><rect x="66" y="92" width="4" height="40" rx="2" fill="#5b636e"/><rect x="110" y="94" width="24" height="16" rx="3" fill="#20262d"/><rect x="113" y="98" width="10" height="3" rx="1.5" fill="${'#2bff9a'}"/>`;
        break;
      case "washer":
        g = `<rect x="44" y="20" width="112" height="162" rx="12" fill="url(#m${u})"/><rect x="44" y="20" width="112" height="34" rx="12" fill="#cfd5dc"/><circle cx="64" cy="37" r="7" fill="#5b636e"/><rect x="88" y="31" width="40" height="12" rx="4" fill="#1d232a"/><circle cx="100" cy="115" r="44" fill="#2a3038"/><circle cx="100" cy="115" r="34" fill="#465566"/><circle cx="100" cy="115" r="34" fill="none" stroke="#9fb6cf" stroke-opacity=".5" stroke-width="2"/><path d="M80 105a24 24 0 0 1 22-14" stroke="#fff" stroke-opacity=".5" stroke-width="5" stroke-linecap="round" fill="none"/>`;
        break;
      case "pot":
        g = `<rect x="40" y="86" width="120" height="84" rx="34" fill="url(#m${u})"/><path d="M42 98h116" stroke="#8d96a3" stroke-width="3"/><ellipse cx="100" cy="88" rx="62" ry="22" fill="#d9dee4"/><ellipse cx="100" cy="82" rx="54" ry="18" fill="#eef1f4"/><rect x="88" y="58" width="24" height="12" rx="6" fill="#20262d"/><rect x="82" y="126" width="36" height="18" rx="5" fill="#1d232a"/><circle cx="92" cy="135" r="3" fill="#ff5a3c"/><circle cx="108" cy="135" r="3" fill="#2bff9a"/>`;
        break;
      case "blender":
        g = `<path d="M70 24h60l-8 100H78Z" fill="#cfe6f5" opacity=".55" stroke="#9fb3c3" stroke-width="2"/><rect x="64" y="16" width="72" height="12" rx="5" fill="#1d232a"/><path d="M80 90h40l-3 30H83Z" fill="#7cd47f" opacity=".7"/><path d="M66 124h68l8 56H58Z" fill="url(#d${u})"/><circle cx="100" cy="152" r="10" fill="#4b535e"/><circle cx="100" cy="152" r="4" fill="#cfd5dc"/>`;
        break;
      case "microwave":
        g = `<rect x="16" y="50" width="168" height="106" rx="10" fill="url(#d${u})"/><rect x="28" y="62" width="112" height="82" rx="6" fill="#0b0d10"/><rect x="34" y="68" width="100" height="70" rx="4" fill="#1b2a36" opacity=".9"/><path d="M40 74l30 0" stroke="#fff" stroke-opacity=".25" stroke-width="4" stroke-linecap="round"/><rect x="148" y="66" width="26" height="14" rx="3" fill="#0f1a12"/><text x="161" y="77" font-size="9" fill="#2bff9a" text-anchor="middle" font-family="monospace">12:00</text><circle cx="155" cy="96" r="4" fill="#59626d"/><circle cx="167" cy="96" r="4" fill="#59626d"/><circle cx="155" cy="110" r="4" fill="#59626d"/><circle cx="167" cy="110" r="4" fill="#59626d"/>`;
        break;
      case "stove":
        g = `<rect x="40" y="40" width="120" height="142" rx="8" fill="url(#m${u})"/><rect x="40" y="40" width="120" height="30" rx="6" fill="#20262d"/><g fill="#5b636e"><circle cx="70" cy="55" r="9"/><circle cx="130" cy="55" r="9"/></g><g fill="#a9b1bb"><circle cx="58" cy="82" r="5"/><circle cx="78" cy="82" r="5"/><circle cx="98" cy="82" r="5"/><circle cx="118" cy="82" r="5"/></g><rect x="52" y="98" width="96" height="70" rx="6" fill="#1a1f25"/><rect x="60" y="106" width="80" height="44" rx="4" fill="#2b2016"/><rect x="62" y="108" width="76" height="6" fill="#ffb347" opacity=".35"/><rect x="62" y="94" width="76" height="4" rx="2" fill="#7f8893"/>`;
        break;
      case "fan":
        g = `<circle cx="100" cy="70" r="52" fill="none" stroke="#2a2f36" stroke-width="4"/><g fill="#2a2f36" opacity=".9"><path d="M100 70c-6-30 10-44 24-38s6 30-24 38Z"/><path d="M100 70c28 10 30 32 18 40s-30-8-18-40Z"/><path d="M100 70c-24 20-44 12-44-4s22-22 44 4Z"/></g><circle cx="100" cy="70" r="10" fill="#4b535e"/><rect x="96" y="120" width="8" height="52" fill="#2a2f36"/><ellipse cx="100" cy="176" rx="36" ry="8" fill="#2a2f36"/>`;
        break;
      case "airfryer":
        g = `<path d="M54 40h92a10 10 0 0 1 10 11l-8 120a10 10 0 0 1-10 9H62a10 10 0 0 1-10-9L44 51a10 10 0 0 1 10-11Z" fill="url(#d${u})"/><rect x="74" y="54" width="52" height="30" rx="6" fill="#0b0d10"/><text x="100" y="74" font-size="13" fill="#ffb347" text-anchor="middle" font-family="monospace">200°</text><rect x="56" y="104" width="88" height="66" rx="8" fill="#22272e"/><rect x="88" y="128" width="24" height="10" rx="5" fill="#59626d"/>`;
        break;
      case "charger":
        g = `<rect x="60" y="56" width="80" height="94" rx="16" fill="${body}" stroke="#b3bcc6" stroke-width="2"/><rect x="78" y="34" width="8" height="26" rx="3" fill="#9aa3ad"/><rect x="114" y="34" width="8" height="26" rx="3" fill="#9aa3ad"/><rect x="88" y="124" width="24" height="9" rx="4.5" fill="#20262d"/><path d="M100 150v18c0 10 20 10 30 18" fill="none" stroke="#20262d" stroke-width="5" stroke-linecap="round"/><path d="M96 86l-6 14h10l-4 14 12-18h-10l4-10Z" fill="#1fb26b"/>`;
        break;
      case "cable":
        g = `<path d="M60 40c0 60 80 30 80 90" fill="none" stroke="url(#d${u})" stroke-width="9" stroke-linecap="round"/><path d="M80 40c0 50 70 30 70 100" fill="none" stroke="#3a414b" stroke-width="9" stroke-linecap="round"/><rect x="50" y="18" width="20" height="32" rx="5" fill="#2a2f36"/><rect x="55" y="8" width="10" height="12" rx="2" fill="#b9c0ca"/><rect x="70" y="18" width="20" height="32" rx="5" fill="#2a2f36"/><rect x="75" y="8" width="10" height="12" rx="2" fill="#b9c0ca"/><rect x="130" y="128" width="20" height="32" rx="5" fill="#2a2f36"/><rect x="140" y="138" width="20" height="32" rx="5" fill="#2a2f36"/>`;
        break;
      case "case":
        g = `<rect x="58" y="16" width="84" height="170" rx="20" fill="${color}"/><rect x="64" y="22" width="72" height="158" rx="16" fill="#000" opacity=".25"/><rect x="66" y="28" width="38" height="50" rx="12" fill="#0b0d10"/><circle cx="78" cy="42" r="7" fill="#22262d" stroke="#59626d" stroke-width="2"/><circle cx="92" cy="58" r="7" fill="#22262d" stroke="#59626d" stroke-width="2"/><circle cx="78" cy="66" r="7" fill="#22262d" stroke="#59626d" stroke-width="2"/>`;
        break;
      case "glass":
        g = `<g transform="rotate(-8 100 100)"><rect x="58" y="20" width="84" height="164" rx="18" fill="#0d0f13"/><rect x="62" y="24" width="76" height="156" rx="15" fill="url(#s${u})"/></g><g transform="rotate(6 108 96)"><rect x="70" y="16" width="84" height="164" rx="18" fill="#dff1ff" opacity=".55" stroke="#fff" stroke-width="2"/><path d="M84 30l20 0M84 38l10 0" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;
        break;
      case "microsd":
        g = `<path d="M54 30h70l22 22v118a8 8 0 0 1-8 8H54a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8Z" fill="#2a2f36"/><path d="M54 80h92v52H46V88a8 8 0 0 1 8-8Z" fill="${color}"/><text x="96" y="104" fill="#fff" font-size="15" font-weight="800" text-anchor="middle" font-family="Arial">SanDisk</text><text x="96" y="124" fill="#fff" font-size="13" font-weight="700" text-anchor="middle" font-family="Arial">128GB</text><g fill="#c9a24a"><rect x="58" y="40" width="8" height="18" rx="2"/><rect x="72" y="40" width="8" height="18" rx="2"/><rect x="86" y="40" width="8" height="18" rx="2"/><rect x="100" y="40" width="8" height="18" rx="2"/></g>`;
        break;
      case "holder":
        g = `<rect x="64" y="20" width="72" height="66" rx="14" fill="url(#d${u})"/><rect x="56" y="34" width="12" height="38" rx="5" fill="#3a414b"/><rect x="132" y="34" width="12" height="38" rx="5" fill="#3a414b"/><rect x="94" y="84" width="12" height="44" fill="#2a2f36"/><circle cx="100" cy="132" r="12" fill="#3a414b"/><ellipse cx="100" cy="168" rx="38" ry="12" fill="#2a2f36"/><path d="M78 150h44l6 16H72Z" fill="#3a414b"/>`;
        break;
      case "speaker":
        g = `<rect x="22" y="70" width="156" height="72" rx="36" fill="url(#d${u})"/><rect x="22" y="70" width="156" height="72" rx="36" fill="none" stroke="#4b535e" stroke-width="2"/><g fill="#4b535e" opacity=".6">${Array.from({ length: 30 }, (_, i) => `<circle cx="${46 + (i % 10) * 12}" cy="${88 + Math.floor(i / 10) * 18}" r="2.4"/>`).join("")}</g><rect x="76" y="98" width="48" height="16" rx="4" fill="#ff6a13"/><text x="100" y="110.5" font-size="11" font-weight="900" fill="#fff" text-anchor="middle" font-family="Arial">JBL</text><ellipse cx="22" cy="106" rx="8" ry="30" fill="#3a414b"/><ellipse cx="178" cy="106" rx="8" ry="30" fill="#3a414b"/>`;
        break;
      case "watch":
        g = `<rect x="74" y="8" width="52" height="56" rx="10" fill="#2a2f36"/><rect x="74" y="136" width="52" height="56" rx="10" fill="#2a2f36"/><rect x="56" y="50" width="88" height="100" rx="24" fill="url(#d${u})"/><rect x="63" y="57" width="74" height="86" rx="18" fill="#05070a"/><text x="100" y="98" font-size="26" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">09:41</text><path d="M78 116a24 24 0 0 0 44 0" stroke="#2bff9a" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="144" y="86" width="6" height="22" rx="3" fill="#59626d"/>`;
        break;
      case "simclaro":
      case "simbitel": {
        const isC = tipo === "simclaro";
        const bg = isC ? "#da291c" : "#ffd100", tx = isC ? "#fff" : "#0b2d6b";
        g = `<g transform="rotate(-8 100 100)"><rect x="34" y="30" width="132" height="150" rx="14" fill="${bg}"/><rect x="34" y="30" width="132" height="150" rx="14" fill="#000" opacity=".06"/><text x="100" y="86" font-size="34" font-weight="900" fill="${tx}" text-anchor="middle" font-family="Arial">${isC ? "Claro" : "bitel"}</text><rect x="70" y="106" width="60" height="50" rx="8" fill="#e2c26b"/><path d="M70 122h60M70 140h60M100 106v50" stroke="#b9963e" stroke-width="2"/></g>`;
        break;
      }
      case "router":
        g = `<rect x="30" y="100" width="140" height="56" rx="14" fill="#f4f6f8" stroke="#b3bcc6" stroke-width="2"/><rect x="58" y="40" width="10" height="64" rx="5" fill="#e6eaee" stroke="#d6dbe1"/><rect x="132" y="40" width="10" height="64" rx="5" fill="#e6eaee" stroke="#d6dbe1"/><g fill="${color}"><circle cx="64" cy="128" r="4"/><circle cx="80" cy="128" r="4"/><circle cx="96" cy="128" r="4"/></g><text x="140" y="133" font-size="13" font-weight="900" fill="${color}" text-anchor="middle" font-family="Arial">${extra}</text>`;
        break;
      default:
        g = `<rect x="50" y="40" width="100" height="120" rx="16" fill="url(#m${u})"/>`;
    }
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img">${defs}${shadow}${g}</svg>`;
  }
  window.art = art;

  const prodMedia = p => p.img ? `<img src="${p.img}" alt="${p.nombre}" loading="lazy" style="mix-blend-mode:multiply">` : art(p.tipo, p.color);

  /* ---------------- HEADER ---------------- */
  const NAV = [
    { id: "inicio", label: "Inicio", icon: "home", href: "index.html" },
    { id: "tienda", label: "Tienda", icon: "cart", wide: true, items: [
      { label: "Celulares", sub: "Smartphones de las mejores marcas", icon: "phone", href: "celulares.html", pid: "celulares" },
      { label: "Accesorios", sub: "Audífonos, cargadores, cases y más", icon: "headphones", href: "accesorios.html", pid: "accesorios" },
      { label: "Hogar", sub: "Electrodomésticos, TVs, cocina y más", icon: "tv", href: "hogar.html", pid: "hogar" },
      { label: "Outlet", sub: "Productos en oferta", icon: "tag", href: "promociones.html" }
    ]},
    { id: "operadores", label: "Operadores", icon: "signal", items: [
      { label: "Claro", sub: "Distribuidor autorizado", icon: "antenna", href: "claro.html", cls: "ic-claro", pid: "claro" },
      { label: "Bitel", sub: "Distribuidor autorizado", icon: "signal", href: "bitel.html", cls: "ic-bitel", pid: "bitel" }
    ]},
    { id: "servicio", label: "Servicio técnico", icon: "wrench", href: "servicio-tecnico.html" },
    { id: "promociones", label: "Promociones", icon: "tag", href: "promociones.html" },
    { id: "empresa", label: "Empresa", icon: "building", items: [
      { label: "Nosotros", sub: "Conoce nuestra historia", icon: "users", href: "nosotros.html", pid: "nosotros" },
      { label: "Marcas y aliados", sub: "Las mejores marcas", icon: "star", href: "nosotros.html#marcas" },
      { label: "Trabaja con nosotros", sub: "Únete a nuestro equipo", icon: "briefcase", href: "trabaja-con-nosotros.html", pid: "trabaja" },
      { label: "Responsabilidad social", sub: "Nuestro compromiso", icon: "leaf", href: "nosotros.html#compromiso" },
      { label: "Noticias y novedades", sub: "Actualidad y lanzamientos", icon: "news", href: "index.html#novedades" }
    ]},
    { id: "ayuda", label: "Ayuda", icon: "help", items: [
      { label: "Centro de ayuda", sub: "Preguntas frecuentes", icon: "headset", href: "contacto.html#faq" },
      { label: "Garantías", sub: "Políticas y cobertura", icon: "shield", href: "contacto.html#faq" },
      { label: "Cambios y devoluciones", sub: "Proceso y requisitos", icon: "refresh", href: "contacto.html#faq" },
      { label: "Estado de pedido", sub: "Consulta tu compra", icon: "truck", href: wa("Hola, quiero consultar el estado de mi pedido."), ext: true }
    ]},
    { id: "contacto", label: "Contacto", icon: "mail", href: "contacto.html" }
  ];
  const groupOf = { celulares: "tienda", accesorios: "tienda", hogar: "tienda", claro: "operadores", bitel: "operadores", nosotros: "empresa", trabaja: "empresa" };
  const isActive = id => id === PAGE || groupOf[PAGE] === id;
  const soc = () => {
    const r = CONFIG.redes, m = { facebook: "fb", instagram: "ig", tiktok: "tt", youtube: "yt" };
    return Object.keys(m).filter(k => r[k]).map(k => `<a href="${r[k]}" target="_blank" rel="noopener" aria-label="${k}">${ic(m[k])}</a>`).join("");
  };

  function header() {
    const megaItems = it => it.map(i => `<a class="mi" href="${i.href}" ${i.ext ? 'target="_blank" rel="noopener"' : ""}><span class="mi-ic ${i.cls || ""}">${ic(i.icon)}</span><span><b>${i.label}</b><small>${i.sub}</small></span>${ic("right", "chev-r")}</a>`).join("");
    const navHTML = NAV.map(n => n.items
      ? `<li class="nav-item"><a class="nav-link ${isActive(n.id) ? "active" : ""}" href="${n.items[0].href}" aria-haspopup="true">${ic(n.icon)}${n.label}${ic("down", "chev")}</a>
         <div class="mega ${n.wide ? "wide" : ""}"><div>${megaItems(n.items)}</div>${n.wide ? `<div class="mega-promo"><div class="mp-art ph"><img src="img/fotos/cat-celulares.jpg" alt=""></div><small>NUEVO</small><h4>Samsung Galaxy A57 5G</h4><a class="btn btn-g btn-sm" href="celulares.html">Ver celulares ${ic("arrow")}</a></div>` : ""}</div></li>`
      : `<li class="nav-item"><a class="nav-link ${isActive(n.id) ? "active" : ""}" href="${n.href}">${ic(n.icon)}${n.label}</a></li>`).join("");

    const mHTML = NAV.map(n => n.items
      ? `<details ${isActive(n.id) ? "open" : ""}><summary><span class="m-ic">${ic(n.icon)}</span>${n.label}${ic("down", "chev")}</summary><div class="m-sub">${n.items.map(i => `<a href="${i.href}" ${i.ext ? 'target="_blank" rel="noopener"' : ""}>${i.label}</a>`).join("")}</div></details>`
      : `<a class="m-link" href="${n.href}"><span class="m-ic">${ic(n.icon)}</span>${n.label}</a>`).join("");

    const html = `
    <div class="topbar"><div class="wrap">
      <div class="tb-items"><span>${ic("truck")}Envíos a todo Pucallpa y Ucayali</span><span>${ic("shield")}Productos 100% originales</span><span>${ic("headset")}Soporte y asesoría personalizada</span></div>
      <div class="tb-right"><div class="soc">${soc()}</div><span class="loc">${ic("pin")}${CONFIG.ciudad}</span></div>
    </div></div>
    <header class="header" id="hdr">
      <div class="hd-main"><div class="wrap">
        <button class="burger" id="burger" aria-label="Abrir menú">${ic("menu")}</button>
        <a class="brand" href="index.html" aria-label="Chang Corporation - Inicio"><img class="b-ico" src="img/icono-a.png" alt=""><img class="b-txt" src="img/logo-negro.png" alt="Chang Corporation"></a>
        <div class="search"><form action="buscar.html" id="sForm" role="search"><input name="q" id="sInput" type="search" placeholder="Buscar productos, marcas o categorías…" autocomplete="off" aria-label="Buscar"><button aria-label="Buscar">${ic("search")}</button></form><div class="sugg" id="sugg"></div></div>
        <div class="hd-actions">
          <a class="hd-wa" href="${wa()}" target="_blank" rel="noopener"><span class="wa-c">${ic("wa")}</span><span><small>WhatsApp</small><b>${CONFIG.telefonoVisible}</b></span></a>
          <a class="hd-btn" href="buscar.html?fav=1" aria-label="Favoritos">${ic("heart")}<span>Favoritos</span><span class="count" data-favcount style="display:none">0</span></a>
          <button class="hd-btn" data-opencart aria-label="Carrito">${ic("cart")}<span>Carrito</span><span class="count" data-cartcount>0</span></button>
        </div>
      </div></div>
      <nav class="nav" aria-label="Principal"><div class="wrap"><ul class="nav-list">${navHTML}</ul>
        <div class="nav-cta"><a href="trabaja-con-nosotros.html">${ic("briefcase")}Trabaja con nosotros</a></div></div></nav>
    </header>
    <div class="drawer-bg" id="dBg"></div>
    <aside class="mnav" id="mnav" aria-label="Menú móvil"><div class="mnav-hd"><img src="img/logo-negro.png" alt="Chang Corporation"><button class="x-btn" data-close>${ic("x")}</button></div>
      <div class="mnav-body">${mHTML}<a class="m-link" href="trabaja-con-nosotros.html"><span class="m-ic">${ic("briefcase")}</span>Trabaja con nosotros</a></div>
      <div class="mnav-ft"><a class="btn btn-wa btn-block" href="${wa()}" target="_blank" rel="noopener">${ic("wa")}Escríbenos por WhatsApp</a></div></aside>
    <aside class="cart" id="cart" aria-label="Carrito"><div class="cart-hd"><h3>${ic("cart")}Tu pedido</h3><button class="x-btn" data-close>${ic("x")}</button></div>
      <div class="cart-body" id="cartBody"></div>
      <div class="cart-ft"><div class="cart-tot"><span>Total referencial</span><b id="cartTot">S/ 0</b></div><p>Te confirmamos stock, precio final y entrega por WhatsApp. Puedes pagar al contado, con tarjeta o con crédito PayJoy.</p>
      <a class="btn btn-wa btn-block" id="cartSend" href="#" target="_blank" rel="noopener">${ic("wa")}Enviar pedido por WhatsApp</a></div></aside>`;
    $("#site-header").outerHTML = html;
  }

  /* ---------------- FOOTER ---------------- */
  function footer() {
    const h = CONFIG.horario.map(x => `<li>${ic("clock")}<span><b style="color:#fff;font-weight:600">${x.dias}</b><br>${x.horas}</span></li>`).join("");
    const html = `
    <section class="wrap" style="margin-top:70px"><div class="cta rv">
      <div><h3>¿Necesitas asesoría?</h3><p>Contáctanos por <b style="color:#fff">WhatsApp</b> y recibe atención personalizada.</p></div>
      <div class="c-items">
        <a class="c-it" href="${wa()}" target="_blank" rel="noopener" style="color:#25d366">${ic("wa")}<span><small>WhatsApp</small><b style="color:#fff">${CONFIG.telefonoVisible}</b></span></a>
        <a class="c-it" href="contacto.html#mapa">${ic("pin", "")}<span><small>Visítanos en tienda</small><b style="color:#fff;font-size:1.05rem">${CONFIG.ciudad}</b></span></a>
        <a class="btn btn-g" href="${wa()}" target="_blank" rel="noopener">Escríbenos ahora ${ic("arrow")}</a>
      </div></div></section>
    <footer class="footer"><div class="wrap">
      <div class="ft-top">
        <div class="ft-brand"><img src="img/logo-blanco.png" alt="Chang Corporation"><p>Tecnología, conectividad y soluciones para tu hogar. Celulares, accesorios, línea blanca, planes Claro y Bitel y servicio técnico en un solo lugar.</p><div class="ft-soc">${soc()}<a href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ic("wa")}</a></div></div>
        <div><h4>Tienda</h4><ul><li><a href="celulares.html">Celulares</a></li><li><a href="accesorios.html">Accesorios</a></li><li><a href="hogar.html">Hogar</a></li><li><a href="promociones.html">Promociones</a></li><li><a href="claro.html">Claro</a></li><li><a href="bitel.html">Bitel</a></li></ul></div>
        <div><h4>Empresa</h4><ul><li><a href="nosotros.html">Nosotros</a></li><li><a href="servicio-tecnico.html">Servicio técnico</a></li><li><a href="nosotros.html#compromiso">Responsabilidad social</a></li><li><a href="trabaja-con-nosotros.html">Trabaja con nosotros</a></li><li><a href="contacto.html">Contacto</a></li></ul></div>
        <div><h4>Horario</h4><ul class="ft-ct">${h}</ul></div>
        <div><h4>Contáctanos</h4><ul class="ft-ct">
          <li>${ic("wa")}<a href="${wa()}" target="_blank" rel="noopener">${CONFIG.telefonoVisible}</a></li>
          <li>${ic("mail")}<a href="mailto:${CONFIG.correo}">${CONFIG.correo}</a></li>
          <li>${ic("pin")}<span>${CONFIG.direccion}<br>${CONFIG.ciudad}</span></li></ul>
          <div class="ft-pay"><span>Efectivo</span><span>Tarjetas</span><span>Crédito PayJoy</span></div></div>
      </div>
      <div class="ft-bot"><span>© ${new Date().getFullYear()} ${CONFIG.empresa} Todos los derechos reservados.</span><span>Pucallpa – Ucayali, Perú</span></div>
    </div></footer>
    <a class="fab-wa" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ic("wa")}<span class="tip">¿Te ayudamos? Escríbenos</span></a>
    <button class="to-top" id="toTop" aria-label="Subir"><img src="img/icono-a.png" alt=""></button>
    <nav class="tabbar" aria-label="Accesos rápidos">
      <a href="index.html" class="${PAGE === "inicio" ? "on" : ""}">${ic("home")}Inicio</a>
      <button id="tabCats">${ic("grid")}Categorías</button>
      <button data-opencart>${ic("cart")}Carrito<span class="count" data-cartcount>0</span></button>
      <a href="contacto.html" class="${PAGE === "contacto" ? "on" : ""}">${ic("mail")}Contacto</a>
    </nav>
    <div class="toast" id="toast"><span class="t-ic">${ic("check")}</span><span id="toastTxt"></span></div>`;
    $("#site-footer").outerHTML = html;
  }

  /* ---------------- CART ---------------- */
  let cart = store.get("chang_cart", []);
  let favs = store.get("chang_favs", []);
  const findP = id => PRODUCTOS.find(p => p.id === id);
  function saveCart() { store.set("chang_cart", cart); renderCart(); }
  function addToCart(id) {
    const it = cart.find(c => c.id === id);
    it ? it.q++ : cart.push({ id, q: 1 });
    saveCart();
    $$("[data-cartcount]").forEach(c => { c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); });
    const p = findP(id);
    toast(`<b>${p.nombre}</b> agregado <a href="#" data-opencart>Ver pedido</a>`);
  }
  function renderCart() {
    const n = cart.reduce((a, c) => a + c.q, 0);
    $$("[data-cartcount]").forEach(c => c.textContent = n);
    const body = $("#cartBody"); if (!body) return;
    if (!cart.length) {
      body.innerHTML = `<div class="cart-empty">${ic("cart")}<p><b>Tu pedido está vacío</b></p><p style="font-size:.9rem;margin-top:4px">Agrega productos y envíanos tu pedido por WhatsApp.</p><a class="btn btn-ol btn-sm" style="margin-top:16px" href="celulares.html">Ver productos</a></div>`;
    } else {
      body.innerHTML = cart.map(c => { const p = findP(c.id); if (!p) return ""; return `
        <div class="ci"><div class="ci-art">${prodMedia(p)}</div><div class="ci-info"><b>${p.nombre}</b><span class="pr">${money(p.price)}</span><br>
        <div class="qty"><button data-q="-1" data-id="${p.id}" aria-label="Menos">${ic("minus")}</button><span>${c.q}</span><button data-q="1" data-id="${p.id}" aria-label="Más">${ic("plus")}</button></div></div>
        <button class="ci-del" data-del="${p.id}" aria-label="Quitar">${ic("trash")}</button></div>`; }).join("");
    }
    const tot = cart.reduce((a, c) => a + (findP(c.id)?.price || 0) * c.q, 0);
    $("#cartTot").textContent = money(tot);
    const lines = cart.map(c => { const p = findP(c.id); return p ? `• ${c.q} x ${p.nombre} — ${money(p.price * c.q)}` : ""; }).join("\n");
    $("#cartSend").href = wa(`Hola Chang Corporation 👋, quiero hacer este pedido:\n\n${lines}\n\nTotal referencial: ${money(tot)}\n\n¿Me confirman stock y forma de entrega? Gracias.`);
    $("#cartSend").style.pointerEvents = cart.length ? "" : "none";
    $("#cartSend").style.opacity = cart.length ? "" : ".5";
  }
  function renderFavs() {
    $$("[data-favcount]").forEach(c => { c.textContent = favs.length; c.style.display = favs.length ? "" : "none"; });
    $$(".fav").forEach(b => b.classList.toggle("on", favs.includes(b.dataset.fav)));
  }

  /* ---------------- PRODUCT CARD ---------------- */
  function card(p, opts = {}) {
    const pct = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const cta = opts.ver
      ? `<a class="btn btn-ol btn-sm btn-block" href="${wa("Hola, quiero información sobre: " + p.nombre)}" target="_blank" rel="noopener">Ver equipo ${ic("arrow")}</a>`
      : `<button class="btn btn-g btn-block btn-sm" data-add="${p.id}">${ic("cart")}Agregar al carrito</button>`;
    return `<article class="pc">
      ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ""}
      <button class="fav" data-fav="${p.id}" aria-label="Favorito">${ic("heart")}</button>
      <div class="pc-art">${prodMedia(p)}</div>
      <span class="pc-brand">${p.marca}</span>
      <h3>${p.nombre}</h3><span class="sub">${p.sub || ""}</span>
      ${opts.compact ? "" : `<ul>${p.specs.map(s => `<li>${ic("checkc")}${s}</li>`).join("")}</ul>`}
      <div class="pc-price"><b class="${p.old ? "off" : ""}">${money(p.price)}</b>${p.old ? `<s>${money(p.old)}</s><span class="pct">-${pct}%</span>` : ""}</div>
      ${p.cat === "celulares" ? `<span class="pay">${ic("card")}Al contado o con crédito PayJoy</span>` : ""}
      ${cta}</article>`;
  }
  window.card = card;

  /* ---------------- CATALOG ---------------- */
  function catalog(root) {
    const cat = root.dataset.cat;           // celulares | accesorios | hogar | promo | buscar
    const params = new URLSearchParams(location.search);
    const q = (params.get("q") || "").trim().toLowerCase();
    const onlyFav = params.get("fav") === "1";
    let base = PRODUCTOS.filter(p =>
      cat === "promo" ? p.old > 0 :
      cat === "buscar" ? true : p.cat === cat);
    const st = { marcas: new Set(), tipos: new Set(), min: "", max: "", sort: "dest", sub: params.get("sub") || "", q, onlyFav };
    const tipoKey = p => p.sub2 || (p.cat === "celulares" ? p.ram : p.cat);

    const marcas = [...new Set(base.map(p => p.marca))];
    const tipos = [...new Set(base.map(tipoKey))].filter(Boolean);
    const mBox = $("[data-f=marcas]", root), tBox = $("[data-f=tipos]", root);
    const cnt = (fn) => base.filter(fn).length;
    if (mBox) mBox.innerHTML = marcas.map(m => `<label class="chk"><input type="checkbox" value="${m}">${m}<span class="n">${cnt(p => p.marca === m)}</span></label>`).join("");
    if (tBox) tBox.innerHTML = tipos.map(t => `<label class="chk"><input type="checkbox" value="${t}">${t}<span class="n">${cnt(p => tipoKey(p) === t)}</span></label>`).join("");

    function apply() {
      let list = base.filter(p => {
        if (st.onlyFav && !favs.includes(p.id)) return false;
        if (st.q && !(p.nombre + " " + p.marca + " " + p.cat + " " + (p.sub2 || "")).toLowerCase().includes(st.q)) return false;
        if (st.marcas.size && !st.marcas.has(p.marca)) return false;
        if (st.tipos.size && !st.tipos.has(tipoKey(p))) return false;
        if (st.sub && st.sub !== "all" && (p.sub2 || p.cat) !== st.sub && p.cat !== st.sub) return false;
        if (st.min !== "" && p.price < +st.min) return false;
        if (st.max !== "" && p.price > +st.max) return false;
        return true;
      });
      if (st.sort === "low") list.sort((a, b) => a.price - b.price);
      if (st.sort === "high") list.sort((a, b) => b.price - a.price);
      if (st.sort === "off") list.sort((a, b) => (b.old ? 1 - b.price / b.old : 0) - (a.old ? 1 - a.price / a.old : 0));
      if (st.sort === "new") list.sort((a, b) => (b.badge === "Nuevo") - (a.badge === "Nuevo"));
      if (st.sort === "top") list.sort((a, b) => (/vendido|Popular/.test(b.badge)) - (/vendido|Popular/.test(a.badge)));
      $("[data-grid]", root).innerHTML = list.length ? list.map(p => card(p)).join("")
        : `<div class="no-res">${ic("search")}<p style="margin-top:10px"><b>No encontramos productos con esos filtros.</b></p><p>Escríbenos por WhatsApp y te ayudamos a encontrarlo.</p><a class="btn btn-wa btn-sm" style="margin-top:14px" target="_blank" rel="noopener" href="${wa("Hola, estoy buscando: " + (st.q || "un producto"))}">${ic("wa")}Consultar</a></div>`;
      const c = $("[data-count]", root); if (c) c.textContent = `Mostrando ${list.length} de ${base.length} productos`;
      renderFavs();
    }
    root.addEventListener("change", e => {
      const t = e.target;
      if (t.closest("[data-f=marcas]")) t.checked ? st.marcas.add(t.value) : st.marcas.delete(t.value);
      if (t.closest("[data-f=tipos]")) t.checked ? st.tipos.add(t.value) : st.tipos.delete(t.value);
      apply();
    });
    root.addEventListener("input", e => { if (e.target.name === "min") st.min = e.target.value; if (e.target.name === "max") st.max = e.target.value; if (e.target.name === "min" || e.target.name === "max") apply(); });
    root.addEventListener("click", e => {
      const s = e.target.closest("[data-sort]");
      if (s) { $$("[data-sort]", root).forEach(x => x.classList.remove("on")); s.classList.add("on"); st.sort = s.dataset.sort; apply(); }
      const sb = e.target.closest("[data-sub]");
      if (sb) { $$("[data-sub]").forEach(x => x.classList.toggle("on", x.dataset.sub === sb.dataset.sub)); st.sub = sb.dataset.sub; apply(); $("[data-grid]", root).scrollIntoView({ behavior: "smooth", block: "start" }); }
      if (e.target.closest("[data-openfilters]")) { $(".side", root).classList.add("on"); $("#dBg").classList.add("on"); }
      if (e.target.closest("[data-mbrand]")) { const m = e.target.closest("[data-mbrand]").dataset.mbrand; st.marcas = new Set(m === "all" ? [] : [m]); $$("[data-f=marcas] input", root).forEach(i => i.checked = st.marcas.has(i.value)); $$("[data-mbrand]", root).forEach(x => x.classList.toggle("on", x.dataset.mbrand === m)); apply(); }
    });
    // líneas / subcategorías que están FUERA del listado (franja de íconos de arriba)
    document.addEventListener("click", e => {
      const sb = e.target.closest("[data-sub]");
      if (!sb || root.contains(sb)) return;
      e.preventDefault();
      $$("[data-sub]").forEach(x => x.classList.toggle("on", x.dataset.sub === sb.dataset.sub));
      st.sub = sb.dataset.sub; apply();
      const g = $("[data-grid]", root); if (g) g.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    // brand clicks outside root (e.g. "compra por marca" strip)
    $$("[data-brandpick]").forEach(b => b.addEventListener("click", () => { const m = b.dataset.brandpick; st.q = ""; st.marcas = new Set([m]); $$("[data-f=marcas] input", root).forEach(i => i.checked = i.value === m); apply(); root.scrollIntoView({ behavior: "smooth" }); }));
    const ttl = $("[data-qtitle]"); if (ttl) ttl.textContent = onlyFav ? "Mis favoritos" : q ? `Resultados para “${params.get("q")}”` : "Todos los productos";
    apply();
  }

  /* ---------------- SEARCH SUGGESTIONS ---------------- */
  function search() {
    const inp = $("#sInput"), box = $("#sugg"); if (!inp) return;
    const pageFor = p => ({ celulares: "celulares.html", accesorios: "accesorios.html", hogar: "hogar.html", operadores: p.marca === "Claro" ? "claro.html" : "bitel.html" })[p.cat];
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 2) { box.classList.remove("on"); return; }
      const r = PRODUCTOS.filter(p => (p.nombre + " " + p.marca + " " + p.cat).toLowerCase().includes(q)).slice(0, 6);
      box.innerHTML = r.length ? r.map(p => `<a href="${pageFor(p)}?q=${encodeURIComponent(p.marca)}"><span class="s-art">${prodMedia(p)}</span><span><b>${p.nombre}</b><small>${money(p.price)}</small></span></a>`).join("") + `<a href="buscar.html?q=${encodeURIComponent(inp.value)}" style="justify-content:center;color:var(--g3);font-weight:700;font-size:.88rem">Ver todos los resultados ${ic("arrow")}</a>`
        : `<div class="s-empty">Sin resultados para “${inp.value}”. <a style="display:inline;color:var(--g3);font-weight:700;padding:0" target="_blank" rel="noopener" href="${wa("Hola, estoy buscando: " + inp.value)}">Pregúntanos por WhatsApp</a></div>`;
      box.classList.add("on");
    });
    document.addEventListener("click", e => { if (!e.target.closest(".search")) box.classList.remove("on"); });
  }

  /* ---------------- HERO SLIDER ---------------- */
  function slider() {
    const sl = $(".slides"); if (!sl) return;
    const s = $$(".slide", sl), dots = $(".dots");
    let i = 0, t;
    dots.innerHTML = s.map((_, k) => `<button aria-label="Diapositiva ${k + 1}" class="${k ? "" : "on"}"></button>`).join("");
    const go = n => { s[i].classList.remove("on"); dots.children[i].classList.remove("on"); i = (n + s.length) % s.length; s[i].classList.add("on"); dots.children[i].classList.add("on"); };
    const auto = () => { clearInterval(t); t = setInterval(() => go(i + 1), 6500); };
    $(".h-next").onclick = () => { go(i + 1); auto(); };
    $(".h-prev").onclick = () => { go(i - 1); auto(); };
    [...dots.children].forEach((d, k) => d.onclick = () => { go(k); auto(); });
    let x0 = null;
    sl.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
    sl.addEventListener("touchend", e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) { go(i + (dx < 0 ? 1 : -1)); auto(); } x0 = null; });
    auto();
  }

  /* ---------------- UI HELPERS ---------------- */
  let tt;
  function toast(h) { const t = $("#toast"); $("#toastTxt").innerHTML = h; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 3200); }
  const closeAll = () => { ["#mnav", "#cart", "#dBg", ".side"].forEach(s => $(s)?.classList.remove("on")); document.body.style.overflow = ""; };
  const open = sel => { closeAll(); $(sel).classList.add("on"); $("#dBg").classList.add("on"); document.body.style.overflow = "hidden"; };

  function reveal() {
    const els = $$(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(e => io.observe(e));
  }
  function counters() {
    $$("[data-count-to]").forEach(el => {
      const end = +el.dataset.countTo, pre = el.dataset.pre || "", suf = el.dataset.suf || "";
      const io = new IntersectionObserver(es => { if (!es[0].isIntersecting) return; io.disconnect(); let s = null;
        const step = ts => { s = s || ts; const k = Math.min((ts - s) / 1400, 1); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString("es-PE") + suf; if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step); });
      io.observe(el);
    });
  }

  /* ---------------- AUTO-FILL BLOCKS ---------------- */
  function fills() {
    $$("[data-products]").forEach(el => {
      const [kind, n] = el.dataset.products.split(":");
      let list = kind === "promo" ? PRODUCTOS.filter(p => p.old) : kind === "home" ? ["a5", "a57", "buds6", "imaco", "tv55", "x5c", "flip6", "rn14"].map(findP) : PRODUCTOS.filter(p => p.cat === kind || p.marca === kind);
      if (n) list = list.slice(0, +n);
      el.innerHTML = list.map(p => card(p, { ver: el.dataset.ver === "1", compact: el.dataset.compact === "1" })).join("");
    });
    $$("[data-brands]").forEach(el => {
      const chips = MARCAS.map(m => `<span class="brand-chip">${m}</span>`).join("");
      el.innerHTML = `<div class="brands-track">${chips}${chips}</div>`;
    });
    $$("[data-art]").forEach(el => { const [t, c, x] = el.dataset.art.split("|"); el.innerHTML = art(t, c, x); });
    $$("[data-wa]").forEach(el => { el.href = wa(el.dataset.wa || undefined); el.target = "_blank"; el.rel = "noopener"; });
    $$("[data-ic]").forEach(el => el.insertAdjacentHTML("afterbegin", ic(el.dataset.ic)));
    $$("[data-cfg]").forEach(el => el.textContent = el.dataset.cfg.split(".").reduce((o, k) => o?.[k], CONFIG));
    $$("[data-plans]").forEach(el => {
      const op = el.dataset.plans, red = op === "claro", cls = red ? "red" : "yel";
      const apps = `<div class="apps"><span style="background:#25d366">${ic("wa")}</span><span style="background:#1877f2">${ic("fb")}</span><span style="background:linear-gradient(45deg,#f9a13a,#e1306c,#8a3ab9)">${ic("ig")}</span><span style="background:#000">${ic("tt")}</span><span style="background:#ff0000">${ic("yt")}</span></div>`;
      el.innerHTML = PLANES[op].map(p => `<div class="plan ${cls} ${p.top ? "top" : ""} rv">${p.top ? `<span class="pop">Más popular</span>` : ""}<h4>${p.nombre}</h4><div class="gb">${p.gb}</div><small>Apps ilimitadas</small>${apps}<div class="calls">${ic("call")}Llamadas ilimitadas a todo operador</div><div class="pr">S/ ${p.precio} <small>al mes</small></div>
        <a class="btn ${red ? "btn-red" : "btn-y"} btn-block btn-sm" target="_blank" rel="noopener" href="${wa(`Hola, me interesa el ${p.nombre} de ${red ? "Claro" : "Bitel"} (${p.gb}).`)}">Lo quiero</a></div>`).join("");
    });
    $$("[data-services]").forEach(el => {
      el.innerHTML = SERVICIOS.map(s => `<article class="svc rv">${s.tag ? `<span class="badge">${s.tag}</span>` : ""}<div class="svc-art">${ic(s.icon)}</div><div class="svc-b"><h3>${s.nombre}</h3><ul>${s.items.map(i => `<li>${ic("checkc")}${i}</li>`).join("")}</ul><div class="from">Desde<b>S/ ${s.desde}</b></div>
        <a class="btn btn-g btn-sm btn-block" style="margin-top:12px" target="_blank" rel="noopener" href="${wa(`Hola, quiero consultar por: ${s.nombre}. Mi equipo es: `)}">Consultar ${ic("arrow")}</a></div></article>`).join("");
    });
    $$("[data-vacantes]").forEach(el => {
      el.innerHTML = VACANTES.map(v => `<article class="vac rv"><div class="vac-hd"><span class="vac-ic">${ic(v.icon)}</span><div><span class="area">${v.area}</span><h3>${v.puesto}</h3></div></div>
        <div class="meta">${ic("pin")}${CONFIG.ciudad}</div><div class="meta">${ic("calendar")}Experiencia: ${v.exp}</div><div class="meta">${ic("clock")}Horario: ${v.horario}</div><p>${v.desc}</p>
        <a class="btn btn-g btn-sm btn-block" href="#postula" data-puesto="${v.puesto}">Postular ahora ${ic("arrow")}</a></article>`).join("");
      const sel = $("#puesto"); if (sel) sel.innerHTML = `<option value="">Selecciona una opción</option>` + VACANTES.map(v => `<option>${v.puesto}</option>`).join("") + `<option>Otro / Enviar CV para futuras vacantes</option>`;
    });
    $$("[data-hours]").forEach(el => el.innerHTML = CONFIG.horario.map(h => `<li>${ic("clock")}<span><b>${h.dias}</b>${h.horas}</span></li>`).join(""));
    $$("[data-map]").forEach(el => el.src = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapaBusqueda)}&output=embed`);
    $$("[data-maplink]").forEach(el => { el.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapaBusqueda)}`; el.target = "_blank"; el.rel = "noopener"; });
    $$("[data-social]").forEach(el => { const s = soc(); el.innerHTML = s ? s.replace(/<a /g, '<a class="soc-big" ') : `<p style="color:var(--mut);font-size:.9rem">Muy pronto en Facebook, Instagram y TikTok.</p>`; });
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    header(); footer(); fills();
    $$("[data-catalog]").forEach(catalog);
    renderCart(); renderFavs(); search(); slider(); reveal(); counters();

    document.addEventListener("click", e => {
      const add = e.target.closest("[data-add]"); if (add) { e.preventDefault(); addToCart(add.dataset.add); }
      if (e.target.closest("[data-opencart]")) { e.preventDefault(); open("#cart"); }
      if (e.target.closest("[data-close]") || e.target.id === "dBg") closeAll();
      const q = e.target.closest("[data-q]"); if (q) { const it = cart.find(c => c.id === q.dataset.id); it.q += +q.dataset.q; if (it.q < 1) cart = cart.filter(c => c !== it); saveCart(); }
      const d = e.target.closest("[data-del]"); if (d) { cart = cart.filter(c => c.id !== d.dataset.del); saveCart(); }
      const f = e.target.closest(".fav"); if (f) { const id = f.dataset.fav; favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]; store.set("chang_favs", favs); renderFavs(); if (favs.includes(id)) toast("Guardado en favoritos"); }
      const pp = e.target.closest("[data-puesto]"); if (pp && $("#puesto")) { $("#puesto").value = pp.dataset.puesto; }
    });
    $("#burger").onclick = () => open("#mnav");
    $("#tabCats").onclick = () => open("#mnav");
    $("#toTop").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
    addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });
    const hdr = $("#hdr"), top = $("#toTop");
    const onS = () => { hdr.classList.toggle("scrolled", scrollY > 40); top.classList.toggle("on", scrollY > 600); };
    addEventListener("scroll", onS, { passive: true }); onS();
    $$("input[type=file]").forEach(i => i.addEventListener("change", () => { const l = i.closest(".file"); if (l && i.files[0]) $("b", l).textContent = i.files[0].name; }));
    const ld = $(".loader"); if (ld) setTimeout(() => ld.classList.add("off"), 250);
  });
})();
