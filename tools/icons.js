// Icônes dessinées à la main, en SVG, style trait (stroke) — aucune dépendance externe.
const ICONS = {
  calc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="2.5" width="16" height="19" rx="2"/>
    <line x1="7" y1="6.5" x2="17" y2="6.5"/>
    <line x1="7" y1="11" x2="7" y2="11.01"/>
    <line x1="12" y1="11" x2="12" y2="11.01"/>
    <line x1="17" y1="11" x2="17" y2="11.01"/>
    <line x1="7" y1="15" x2="7" y2="15.01"/>
    <line x1="12" y1="15" x2="12" y2="15.01"/>
    <line x1="17" y1="15" x2="17" y2="18.5"/>
    <line x1="7" y1="18.5" x2="7" y2="18.5"/>
    <line x1="12" y1="18.5" x2="12" y2="18.5"/>
  </svg>`,
  text: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="5 6 5 4 19 4 19 6"/>
    <line x1="12" y1="4" x2="12" y2="20"/>
    <line x1="9" y1="20" x2="15" y2="20"/>
  </svg>`,
  dice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="8" r="1" fill="currentColor" stroke="none"/>
    <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>`,
  files: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
    <polyline points="13 3 13 8 18 8"/>
  </svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.1-1.8-.3-.5-.1-1.2.5-1.4 3.2-1.2 5.4-4 5.4-7.3C19 5.9 15.9 3 12 3z"/>
    <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none"/>
    <circle cx="11" cy="7" r="1.1" fill="currentColor" stroke="none"/>
    <circle cx="15.2" cy="8.5" r="1.1" fill="currentColor" stroke="none"/>
  </svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="8 8 3 12.5 8 17"/>
    <polyline points="16 8 21 12.5 16 17"/>
    <line x1="13.5" y1="5" x2="10.5" y2="20"/>
  </svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <ellipse cx="12" cy="12" rx="4" ry="9"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
  </svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>
    <polyline points="9 12 11.2 14.2 15.5 9.5"/>
  </svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15.5 14"/>
  </svg>`,
  fun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 11a5 5 0 0 1 10 0c0 3-2 4-2 6H9c0-2-2-3-2-6z"/>
    <line x1="10" y1="20" x2="14" y2="20"/>
    <line x1="12" y1="2" x2="12" y2="4"/>
  </svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5"/>
    <line x1="15.5" y1="15.5" x2="21" y2="21"/>
  </svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4.2"/>
    <line x1="12" y1="1.5" x2="12" y2="3.8"/>
    <line x1="12" y1="20.2" x2="12" y2="22.5"/>
    <line x1="1.5" y1="12" x2="3.8" y2="12"/>
    <line x1="20.2" y1="12" x2="22.5" y2="12"/>
    <line x1="4.5" y1="4.5" x2="6.1" y2="6.1"/>
    <line x1="17.9" y1="17.9" x2="19.5" y2="19.5"/>
    <line x1="19.5" y1="4.5" x2="17.9" y2="6.1"/>
    <line x1="6.1" y1="17.9" x2="4.5" y2="19.5"/>
  </svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>
  </svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="11 6 5 12 11 18"/>
  </svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11.5L12 4l8 7.5"/>
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/>
  </svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="11" height="11" rx="1.5"/>
    <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"/>
  </svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="7 3 7 17"/>
    <polyline points="3 13 7 17 11 13"/>
    <polyline points="17 21 17 7"/>
    <polyline points="21 11 17 7 13 11"/>
  </svg>`
};

function icon(name, cls) {
  return `<span class="icon${cls ? " " + cls : ""}">${ICONS[name] || ""}</span>`;
}
