import type { RoofShape } from '../../content/projects';

export function ProjectRoofSilhouette({
  shape,
  pitch,
  className = 'w-full h-32',
}: {
  shape: RoofShape;
  pitch: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 128"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="320" height="128" fill="var(--slate-band)" />
      {/* Subtle architectural elevation grid */}
      <line x1="16" y1="108" x2="304" y2="108" stroke="var(--slate-band-line)" strokeWidth="1.2" />
      <text x="18" y="24" fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--slate-band-muted)">
        PITCH {pitch}
      </text>

      {shape === 'gable' && (
        <g>
          <polygon points="56,78 160,26 264,78" fill="var(--slate-band-surface)" stroke="var(--slate-band-ink)" strokeWidth="2" />
          <path d="M50 80L160 23L270 80" stroke="var(--accent)" strokeWidth="4" />
          <rect x="76" y="78" width="168" height="30" fill="none" stroke="var(--slate-band-line)" strokeWidth="1.5" />
          <rect x="206" y="28" width="18" height="28" fill="var(--copper)" stroke="var(--slate-band-ink)" strokeWidth="1.2" />
          <line x1="112" y1="52" x2="112" y2="78" stroke="var(--slate-band-line)" strokeWidth="1" />
          <line x1="160" y1="26" x2="160" y2="78" stroke="var(--slate-band-line)" strokeWidth="1" />
          <line x1="208" y1="52" x2="208" y2="78" stroke="var(--slate-band-line)" strokeWidth="1" />
        </g>
      )}

      {shape === 'hip' && (
        <g>
          <polygon points="48,78 104,34 216,34 272,78" fill="var(--slate-band-surface)" stroke="var(--slate-band-ink)" strokeWidth="2" />
          <line x1="104" y1="34" x2="216" y2="34" stroke="var(--accent)" strokeWidth="4.5" />
          <line x1="104" y1="34" x2="86" y2="78" stroke="var(--copper)" strokeWidth="2" />
          <line x1="216" y1="34" x2="234" y2="78" stroke="var(--copper)" strokeWidth="2" />
          <rect x="68" y="78" width="184" height="30" fill="none" stroke="var(--slate-band-line)" strokeWidth="1.5" />
        </g>
      )}

      {shape === 'shed-modern' && (
        <g>
          <polygon points="52,78 268,36 268,78" fill="var(--slate-band-surface)" stroke="var(--slate-band-ink)" strokeWidth="2" />
          <line x1="46" y1="79" x2="274" y2="34" stroke="var(--accent)" strokeWidth="4.5" />
          <rect x="64" y="78" width="196" height="30" fill="none" stroke="var(--slate-band-line)" strokeWidth="1.5" />
          <line x1="110" y1="68" x2="110" y2="78" stroke="var(--copper)" strokeWidth="1.5" />
          <line x1="164" y1="58" x2="164" y2="78" stroke="var(--copper)" strokeWidth="1.5" />
          <line x1="218" y1="47" x2="218" y2="78" stroke="var(--copper)" strokeWidth="1.5" />
        </g>
      )}

      {shape === 'flat-parapet' && (
        <g>
          <rect x="52" y="48" width="216" height="60" fill="var(--slate-band-surface)" stroke="var(--slate-band-ink)" strokeWidth="2" />
          <path d="M52 56H268" stroke="var(--accent)" strokeWidth="3.5" />
          <rect x="48" y="42" width="12" height="16" fill="var(--copper)" />
          <rect x="260" y="42" width="12" height="16" fill="var(--copper)" />
          <rect x="136" y="34" width="44" height="20" fill="var(--slate-band)" stroke="var(--slate-band-ink)" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}
