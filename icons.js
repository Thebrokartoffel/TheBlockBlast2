/* ===========================================================================
   icons.js — eigenes Symbol-Set

   Alle Symbole sind selbst gezeichnete Inline-SVGs mit einheitlichem
   Linienstil: viewBox 24, Strichstärke 1.9, runde Enden und Ecken.
   Keine Emojis, keine Icon-Fonts.

   Verwendung im HTML:  <span data-icon="hammer"></span>
   ========================================================================= */
(function () {
  const BS = (window.BS = window.BS || {});

  /* Jedes Symbol liefert nur den Inhalt der viewBox="0 0 24 24" */
  const P = {
    /* --- Kopfzeile --- */
    crown: '<path d="M3.5 17.5h17M4 8.5l3.2 3L12 5.5l4.8 6 3.2-3-1.4 9H5.4z"/>',
    pause: '<path d="M9 5.5v13M15 5.5v13"/>',
    play: '<path d="M8 5.6v12.8l10-6.4z"/>',

    /* --- Menü --- */
    help: '<circle cx="12" cy="12" r="8.6"/><path d="M9.8 9.7a2.3 2.3 0 1 1 3.2 2.1c-.7.3-1 .9-1 1.5M12 16.3h.01"/>',
    chart: '<path d="M5 19.5V11M12 19.5V4.5M19 19.5v-6"/>',
    sliders: '<path d="M4 7.5h8M17 7.5h3M4 16.5h3M12 16.5h8"/><circle cx="14.5" cy="7.5" r="2.3"/><circle cx="9.5" cy="16.5" r="2.3"/>',
    close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    back: '<path d="M14.5 5.5L8 12l6.5 6.5"/>',

    /* --- Werkzeuge --- */
    hammer: '<path d="M13.6 4.6l5.8 5.8-2.4 2.4-5.8-5.8z"/><path d="M11.5 8.6l-6.2 6.2a1.7 1.7 0 0 0 0 2.4l1.5 1.5a1.7 1.7 0 0 0 2.4 0l6.2-6.2"/>',
    swap: '<path d="M4.5 9h11.8M13 5.6L16.4 9 13 12.4"/><path d="M19.5 15H7.7M11 18.4L7.6 15 11 11.6"/>',

    /* --- Spielmodi --- */
    mNormal: '<rect x="5" y="5" width="14" height="14" rx="3.4"/><path d="M5 12h14"/>',
    mExtreme: '<rect x="4" y="4" width="16" height="16" rx="3.6"/><rect x="8.4" y="8.4" width="7.2" height="7.2" rx="2"/>',
    mChaos: '<path d="M12 4.2v15.6M5.2 8.1l13.6 7.8M18.8 8.1L5.2 15.9"/>',

    /* --- Zustände --- */
    trophy: '<path d="M8 4.5h8v4.2a4 4 0 0 1-8 0z"/><path d="M8 6H5.6v1.4A2.6 2.6 0 0 0 8.2 10M16 6h2.4v1.4A2.6 2.6 0 0 1 15.8 10"/><path d="M12 12.7v3.1M9 19.5h6"/>',
    spark: '<path d="M12 4.6c.6 3.4 2.4 5.2 5.8 5.8-3.4.6-5.2 2.4-5.8 5.8-.6-3.4-2.4-5.2-5.8-5.8 3.4-.6 5.2-2.4 5.8-5.8z"/><path d="M18 16.4c.25 1.4 1 2.1 2.4 2.4-1.4.25-2.15 1-2.4 2.4-.25-1.4-1-2.15-2.4-2.4 1.4-.3 2.15-1 2.4-2.4z"/>',
    grid: '<rect x="4.5" y="4.5" width="15" height="15" rx="3"/><path d="M9.5 4.5v15M14.5 4.5v15M4.5 9.5h15M4.5 14.5h15"/>',
    layers: '<path d="M12 4.2l7.6 3.9-7.6 3.9-7.6-3.9z"/><path d="M4.4 12.1l7.6 3.9 7.6-3.9M4.4 16.1l7.6 3.9 7.6-3.9"/>',
    line: '<path d="M4.5 12h15"/><circle cx="4.5" cy="12" r="1.6"/><circle cx="19.5" cy="12" r="1.6"/>',
    repeat: '<path d="M5 11.2A7 7 0 0 1 17.6 7.4M19 12.8A7 7 0 0 1 6.4 16.6"/><path d="M17.8 4.2v3.4h-3.4M6.2 19.8v-3.4h3.4"/>'
  };

  BS.Icons = {
    paths: P,

    /* SVG-Markup für ein Symbol erzeugen */
    svg(name, size) {
      const d = P[name];
      if (!d) return "";
      const s = size || 24;
      return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s +
        '" fill="none" stroke="currentColor" stroke-width="1.9" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
    },

    /* Alle Platzhalter im Dokument füllen */
    mount(root) {
      (root || document).querySelectorAll("[data-icon]").forEach(el => {
        if (el.dataset.mounted === "1") return;
        const html = this.svg(el.dataset.icon, el.dataset.size ? +el.dataset.size : 24);
        if (!html) return;
        el.innerHTML = html;
        el.dataset.mounted = "1";
      });
    }
  };
})();
