export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="4"
        fill="var(--slate-band)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />
      <path
        d="M8 29L24 12L40 29"
        stroke="var(--slate-band-ink)"
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M14 35L24 24.5L34 35"
        stroke="var(--accent)"
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line x1="24" y1="12" x2="24" y2="39" stroke="var(--copper)" strokeWidth="2" />
      <line x1="9" y1="39" x2="39" y2="39" stroke="var(--slate-band-ink)" strokeWidth="2.2" />
    </svg>
  );
}
