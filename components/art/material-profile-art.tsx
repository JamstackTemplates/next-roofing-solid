import type { MaterialProfile } from '../../content/services';

export function MaterialProfileArt({
  profile,
  className = 'w-full h-24',
}: {
  profile: MaterialProfile;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 96"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="320" height="96" fill="var(--surface-raised)" />
      {/* Subtle architectural baseline */}
      <line x1="0" y1="80" x2="320" y2="80" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 4" />

      {profile === 'shingle' && (
        <g>
          {/* Overlapping architectural dimensional shingle courses */}
          <path d="M16 74L304 74V60H16Z" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
          <path d="M28 60L304 60V46H28Z" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
          <path d="M40 46L304 46V32H40Z" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
          <rect x="64" y="46" width="52" height="14" fill="var(--accent)" opacity="0.88" />
          <rect x="176" y="32" width="60" height="14" fill="var(--accent)" opacity="0.88" />
          <rect x="128" y="60" width="48" height="14" fill="var(--copper)" opacity="0.7" />
          <text x="16" y="20" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            6-NAIL STORM LAMINATE PROFILE
          </text>
        </g>
      )}

      {profile === 'standing-seam' && (
        <g>
          {/* Standing-seam mechanical rib cross-section */}
          <path
            d="M16 72H64V28H72V72H144V28H152V72H224V28H232V72H304"
            stroke="var(--text)"
            strokeWidth="2.4"
            fill="none"
          />
          <rect x="62" y="24" width="12" height="10" fill="var(--accent)" />
          <rect x="142" y="24" width="12" height="10" fill="var(--accent)" />
          <rect x="222" y="24" width="12" height="10" fill="var(--accent)" />
          <line x1="72" y1="48" x2="144" y2="48" stroke="var(--copper)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="90" y="43" fontFamily="var(--font-mono)" fontSize="8.5" fill="var(--copper)">16&quot; PAN</text>
          <text x="16" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            24-GA CONCEALED-CLIP LOCK SEAM
          </text>
        </g>
      )}

      {profile === 'slate' && (
        <g>
          {/* Hand-dressed quarry slate courses with copper nails */}
          <polygon points="18,74 106,74 102,48 22,48" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
          <polygon points="112,74 202,74 198,48 116,48" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
          <polygon points="208,74 302,74 298,48 212,48" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
          <polygon points="64,54 156,54 152,30 68,30" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.5" />
          <polygon points="164,54 256,54 252,30 168,30" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.5" />
          <circle cx="88" cy="40" r="3" fill="var(--copper)" />
          <circle cx="132" cy="40" r="3" fill="var(--copper)" />
          <circle cx="188" cy="40" r="3" fill="var(--copper)" />
          <circle cx="232" cy="40" r="3" fill="var(--copper)" />
          <text x="16" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            GRADE S1 QUARRY SLATE · COPPER NAILED
          </text>
        </g>
      )}

      {profile === 'tpo' && (
        <g>
          {/* Tapered polyiso insulation + heat-welded 60-mil TPO membrane */}
          <polygon points="20,76 300,76 300,56 20,40" fill="var(--bg-band)" stroke="var(--line-strong)" strokeWidth="1.4" />
          <path d="M20 40L300 56" stroke="var(--accent)" strokeWidth="4.5" />
          <path d="M20 34V76H30" fill="var(--slate-band)" />
          <path d="M290 50V76H300" fill="var(--slate-band)" />
          <path d="M120 40L210 45" stroke="var(--copper)" strokeWidth="1.6" markerEnd="url(#arrow)" />
          <text x="16" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            60-MIL HEAT-WELDED TPO · TAPERED DRAIN
          </text>
        </g>
      )}

      {profile === 'flashing' && (
        <g>
          {/* Open W-valley & chimney counter-flashing detail */}
          <path
            d="M24 68H106L146 34L160 52L174 34L214 68H296"
            stroke="var(--copper)"
            strokeWidth="3.2"
            fill="none"
          />
          <path d="M24 74H110M210 74H296" stroke="var(--text)" strokeWidth="2" />
          <circle cx="160" cy="52" r="4.5" fill="var(--accent)" />
          <text x="16" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            24-GA W-PROFILE VALLEY &amp; STEP FLASHING
          </text>
        </g>
      )}

      {profile === 'gutter' && (
        <g>
          {/* Half-round copper gutter & fascia bracket */}
          <rect x="28" y="28" width="96" height="46" fill="var(--bg-band)" stroke="var(--text)" strokeWidth="1.5" />
          <path d="M124 36H144C144 68 188 68 188 36H204" stroke="var(--copper)" strokeWidth="4" fill="none" />
          <path d="M124 44H198" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="166" cy="52" r="3" fill="var(--accent)" />
          <text x="216" y="54" fontFamily="var(--font-mono)" fontSize="9" fill="var(--text)">6&quot; HALF-ROUND</text>
          <text x="16" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
            SOLDERED COPPER &amp; ZINC DRAINAGE
          </text>
        </g>
      )}
    </svg>
  );
}
