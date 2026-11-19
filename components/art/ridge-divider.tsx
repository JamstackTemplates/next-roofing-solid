export function RidgeDivider({ className = 'w-full h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 18H552L600 4L648 18H1200"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />
      <path
        d="M570 18L600 9L630 18"
        stroke="var(--accent)"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function BlueprintPageMotif({ className = 'h-24 w-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 96"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 78L110 18L208 78" stroke="var(--accent)" strokeWidth="3.5" />
      <path d="M36 78L110 34L184 78" stroke="var(--line-strong)" strokeWidth="1.5" />
      <line x1="110" y1="18" x2="110" y2="86" stroke="var(--copper)" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="8" y1="78" x2="212" y2="78" stroke="var(--line-strong)" strokeWidth="1.5" />
      <circle cx="110" cy="18" r="3.5" fill="var(--accent)" />
    </svg>
  );
}

export function MissingShingleArt({ className = 'w-full max-w-md h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      role="img"
      aria-labelledby="missing-shingle-title"
      className={className}
    >
      <title id="missing-shingle-title">Roof slate slope with one missing tile outlined in dashed terracotta</title>
      <rect
        x="4"
        y="4"
        width="412"
        height="212"
        rx="4"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />
      {/* Top slate row */}
      <rect x="26" y="34" width="84" height="44" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="118" y="34" width="84" height="44" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="210" y="34" width="84" height="44" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="302" y="34" width="92" height="44" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />

      {/* Middle row with ONE MISSING SLATE */}
      <rect x="26" y="88" width="128" height="44" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
      {/* Dashed missing slate slot */}
      <rect
        x="162"
        y="88"
        width="96"
        height="44"
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <text
        x="210"
        y="114"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="12"
        fontWeight="700"
        fill="var(--accent-ink)"
      >
        404 MISSING
      </text>
      <rect x="266" y="88" width="128" height="44" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />

      {/* Bottom slate row */}
      <rect x="26" y="142" width="84" height="44" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="118" y="142" width="84" height="44" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="210" y="142" width="84" height="44" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="302" y="142" width="92" height="44" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />

      {/* Copper nails */}
      <circle cx="176" cy="96" r="2.5" fill="var(--copper)" />
      <circle cx="244" cy="96" r="2.5" fill="var(--copper)" />
    </svg>
  );
}
