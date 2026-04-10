type IconProps = { className?: string };

const baseProps = {
  viewBox: '0 0 100 100',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/**
 * 01 — No tienes ojos ni manos en México
 * Map pin with a person silhouette inside (head + shoulders).
 */
export function NoLocalPresenceIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      {/* Map pin teardrop */}
      <path d="M50 90 C50 90, 78 62, 78 42 C78 26, 65 14, 50 14 C35 14, 22 26, 22 42 C22 62, 50 90, 50 90 Z" />
      {/* Person head */}
      <circle cx="50" cy="34" r="6" />
      {/* Person shoulders */}
      <path d="M38 52 C38 44, 43 41, 50 41 C57 41, 62 44, 62 52" />
    </svg>
  );
}

/**
 * 02 — Las aduanas y NOMs te frenan
 * Document with text lines + alert triangle to the right.
 */
export function CustomsAlertIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      {/* Document body with folded corner */}
      <path d="M16 20 L50 20 L64 34 L64 86 L16 86 Z" />
      <path d="M50 20 L50 34 L64 34" />
      {/* Document text lines */}
      <line x1="24" y1="46" x2="56" y2="46" />
      <line x1="24" y1="56" x2="56" y2="56" />
      <line x1="24" y1="66" x2="48" y2="66" />
      <line x1="24" y1="76" x2="56" y2="76" />
      {/* Alert triangle (top right) */}
      <path d="M82 14 L96 40 L68 40 Z" />
      {/* Exclamation mark */}
      <line x1="82" y1="22" x2="82" y2="30" />
      <circle cx="82" cy="35" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 03 — Vendes en 6 canales y cada uno es un mundo
 * Central hub (filled) connected to 4 satellite nodes (outline).
 */
export function MultiChannelHubIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      {/* Connecting lines (drawn first so circles overlap them cleanly) */}
      <line x1="50" y1="40" x2="50" y2="26" />
      <line x1="60" y1="50" x2="74" y2="50" />
      <line x1="50" y1="60" x2="50" y2="74" />
      <line x1="40" y1="50" x2="26" y2="50" />
      {/* Central hub - filled */}
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      {/* 4 satellites - outline only */}
      <circle cx="50" cy="18" r="7" />
      <circle cx="82" cy="50" r="7" />
      <circle cx="50" cy="82" r="7" />
      <circle cx="18" cy="50" r="7" />
    </svg>
  );
}

/**
 * 04 — La última milla en México es un caos
 * Side-view delivery truck with cargo box, cab, wheels and dashed road.
 */
export function LastMileTruckIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      {/* Cargo box */}
      <rect x="12" y="32" width="46" height="38" rx="2" />
      {/* Cab */}
      <path d="M58 44 L72 44 L84 56 L84 70 L58 70 Z" />
      {/* Cab window */}
      <line x1="64" y1="50" x2="80" y2="50" />
      {/* Wheels */}
      <circle cx="26" cy="76" r="6" />
      <circle cx="72" cy="76" r="6" />
      {/* Wheel hubs */}
      <circle cx="26" cy="76" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="72" cy="76" r="1.5" fill="currentColor" stroke="none" />
      {/* Road - dashed segments */}
      <line x1="6" y1="90" x2="18" y2="90" strokeDasharray="3 3" />
      <line x1="40" y1="90" x2="58" y2="90" strokeDasharray="3 3" />
      <line x1="82" y1="90" x2="94" y2="90" strokeDasharray="3 3" />
    </svg>
  );
}
