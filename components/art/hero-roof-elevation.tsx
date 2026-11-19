/**
 * Front elevation of a Portland Craftsman: a hipped quarry-slate main roof with a
 * standing-seam shed dormer and porch, a fish-scale front gable, brick chimney,
 * copper gutters, Douglas firs, Mt Hood beyond and a storm cell rolling in.
 * Every colour is a theme token so it follows light and dark mode.
 */

const GROUND = 398;

function fir(x: number, height: number, width: number) {
  const tiers = [0, 1, 2].map(i => {
    const top = GROUND - height + i * 0.24 * height;
    const bottom = top + 0.42 * height;
    const half = width * (0.3 + i * 0.12);
    return `M${x} ${top}L${x + half} ${bottom}H${x - half}Z`;
  });
  return tiers.join('');
}

function Fir({ x, height, width }: { x: number; height: number; width: number }) {
  return (
    <g>
      <rect x={x - 3} y={GROUND - height * 0.12} width="6" height={height * 0.12} fill="var(--line-strong)" />
      <path d={fir(x, height, width)} fill="var(--copper-soft)" stroke="var(--copper)" strokeWidth="1.5" strokeLinejoin="round" />
    </g>
  );
}

function Window({ x, y, w, h, cols = 1 }: { x: number; y: number; w: number; h: number; cols?: number }) {
  const step = w / cols;
  return (
    <g stroke="var(--text)" strokeWidth="1.6">
      <rect x={x} y={y} width={w} height={h} fill="var(--surface)" />
      <rect x={x + 3} y={y + 3} width={w - 6} height={h * 0.3} fill="var(--copper-soft)" strokeWidth="1" />
      {Array.from({ length: cols - 1 }, (_, i) => (
        <line key={i} x1={x + step * (i + 1)} y1={y} x2={x + step * (i + 1)} y2={y + h} />
      ))}
      {cols === 1 ? <line x1={x + w / 2} y1={y + h * 0.3 + 3} x2={x + w / 2} y2={y + h} /> : null}
      <rect x={x - 4} y={y + h} width={w + 8} height="5" fill="var(--surface-raised)" />
    </g>
  );
}

export function HeroRoofElevation({ className = 'w-full h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      fill="none"
      role="img"
      aria-labelledby="hero-roof-title hero-roof-desc"
      className={className}
    >
      <title id="hero-roof-title">Architectural elevation of a slate and standing-seam Craftsman roof</title>
      <desc id="hero-roof-desc">
        Drawing of a Portland Craftsman home with a hipped quarry-slate roof, terracotta ridge and hip caps, a
        standing-seam shed dormer and porch roof, a fish-scale shingled front gable, brick chimney with copper
        flashing and half-round copper gutters, framed by Douglas firs with Mount Hood and a storm cloud behind.
      </desc>

      <defs>
        <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" stroke="var(--line)" strokeOpacity="0.35" strokeWidth="0.75" />
        </pattern>
        <pattern id="hero-slate" width="26" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 6H26M0 12H26M13 0V6M0 6V12M26 6V12" stroke="var(--slate-band-line)" strokeWidth="1.3" />
        </pattern>
        <pattern id="hero-fish-scale" width="12" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M0 0A6 6 0 0 0 12 0M-6 5A6 6 0 0 0 6 5M6 5A6 6 0 0 0 18 5M0 10A6 6 0 0 0 12 10"
            stroke="var(--line-strong)"
            strokeWidth="1"
          />
        </pattern>
        <pattern id="hero-siding" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 9.5H10" stroke="var(--line)" strokeWidth="1" />
        </pattern>
        <pattern id="hero-seam" width="8" height="10" patternUnits="userSpaceOnUse">
          <path d="M4 0V10" stroke="var(--slate-band-line)" strokeWidth="1.4" />
        </pattern>
        <pattern id="hero-brick" width="12" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 8H12M0 4H12M6 0V4M0 4V8" stroke="var(--line-strong)" strokeWidth="0.9" />
        </pattern>
        <linearGradient id="hero-roof-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="hero-main-roof">
          <polygon points="150,252 252,150 388,150 490,252" />
        </clipPath>
      </defs>

      {/* Drawing sheet */}
      <rect x="8" y="8" width="624" height="464" rx="4" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
      <rect x="18" y="18" width="604" height="444" fill="url(#hero-grid)" />

      <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1.2">
        <text x="34" y="40">ELEV. A-01 // NORTHWEST STORM SPEC</text>
        <text x="606" y="40" textAnchor="end" fill="var(--accent-ink)" fontWeight="700">140 MPH UPLIFT</text>
      </g>
      <line x1="34" y1="50" x2="606" y2="50" stroke="var(--line)" strokeWidth="1" />

      {/* Mt Hood beyond */}
      <path
        d="M18 262L92 226L150 170L176 138L196 130L214 142L262 176L340 214L420 236L520 250L622 240V300H18Z"
        fill="var(--bg-band)"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M150 170L176 138L196 130L214 142L234 157L216 152L202 164L188 151L172 166Z"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Storm cell, rain and lightning */}
      <g stroke="var(--line-strong)" strokeWidth="1.2" strokeLinecap="round">
        {[492, 508, 524, 540, 556, 572, 588, 604].map((x, i) => (
          <line key={x} x1={x} y1={112 + (i % 2) * 8} x2={x - 18} y2={186 + (i % 3) * 8} strokeDasharray="7 6" />
        ))}
      </g>
      <path d="M552 104L540 132H551L542 160L566 124H554L562 104Z" fill="var(--accent)" stroke="var(--text)" strokeWidth="1" strokeLinejoin="round" />
      <path
        d="M484 108H600A15 15 0 0 0 596 79A21 21 0 0 0 558 66A25 25 0 0 0 514 76A16 16 0 0 0 484 108Z"
        fill="var(--surface-raised)"
        stroke="var(--text)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Wind load arrows */}
      <g stroke="var(--muted)" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M30 158H82Q94 158 94 148" />
        <path d="M30 172H100" />
        <path d="M94 168L100 172L94 176" />
        <path d="M30 186H78Q90 186 90 196" />
      </g>
      <text x="30" y="146" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" letterSpacing="1">WIND</text>

      {/* Pitch callout */}
      <g transform="translate(36 76)">
        <path d="M0 36H48V4Z" fill="var(--accent-soft)" stroke="var(--accent-ink)" strokeWidth="1.5" />
        <g fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
          <text x="18" y="50" fill="var(--text)">12</text>
          <text x="53" y="24" fill="var(--accent-ink)">8</text>
          <text x="0" y="-8" fontSize="9.5" fontWeight="400" fill="var(--muted)">PITCH 8:12</text>
        </g>
      </g>

      {/* Douglas firs */}
      <Fir x={52} height={150} width={62} />
      <Fir x={96} height={112} width={48} />
      <Fir x={556} height={164} width={66} />
      <Fir x={600} height={118} width={46} />

      {/* Brick chimney (roof drawn over its base) */}
      <rect x="440" y="108" width="30" height="128" fill="var(--surface-raised)" stroke="var(--text)" strokeWidth="2" />
      <rect x="441" y="109" width="28" height="126" fill="url(#hero-brick)" />
      <rect x="434" y="100" width="42" height="9" fill="var(--slate-band)" stroke="var(--text)" strokeWidth="1.8" />
      <rect x="445" y="89" width="8" height="11" fill="var(--accent)" stroke="var(--text)" strokeWidth="1.4" />
      <rect x="458" y="92" width="8" height="8" fill="var(--accent)" stroke="var(--text)" strokeWidth="1.4" />

      {/* Main wall, fascia and copper gutter */}
      <rect x="160" y="258" width="320" height={GROUND - 258} fill="var(--bg-band)" stroke="var(--text)" strokeWidth="2" />
      <rect x="161" y="262" width="318" height={GROUND - 263} fill="url(#hero-siding)" />
      <rect x="148" y="250" width="344" height="9" fill="var(--surface-raised)" stroke="var(--text)" strokeWidth="1.8" />
      <path d="M144 259H496" stroke="var(--copper)" strokeWidth="5" strokeLinecap="round" />
      <path d="M492 262V388Q492 394 500 394H506" stroke="var(--copper)" strokeWidth="4" strokeLinecap="round" />
      {[290, 330, 370].map(y => (
        <rect key={y} x="488" y={y} width="8" height="3" fill="var(--copper)" />
      ))}

      {/* Hipped quarry-slate main roof */}
      <polygon points="150,252 252,150 388,150 490,252" fill="var(--slate-band)" />
      <g clipPath="url(#hero-main-roof)">
        <rect x="150" y="150" width="340" height="102" fill="url(#hero-slate)" />
        <rect x="150" y="150" width="340" height="102" fill="url(#hero-roof-sheen)" />
      </g>
      <polygon points="150,252 252,150 388,150 490,252" stroke="var(--text)" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Copper step flashing where the chimney passes through */}
      <path d="M438 200L472 234" stroke="var(--copper)" strokeWidth="6" strokeLinecap="square" />

      {/* Terracotta ridge vent and hip caps */}
      <path d="M150 252L252 150H388L490 252" stroke="var(--accent)" strokeWidth="5" strokeLinejoin="round" />
      <rect x="268" y="143" width="104" height="7" fill="var(--accent)" stroke="var(--text)" strokeWidth="1.4" />
      {[284, 300, 316, 332, 348].map(x => (
        <line key={x} x1={x} y1="144" x2={x} y2="149" stroke="var(--accent-hover)" strokeWidth="1.5" />
      ))}

      {/* Standing-seam shed dormer */}
      <rect x="362" y="187" width="46" height="41" fill="var(--surface)" stroke="var(--text)" strokeWidth="1.8" />
      <Window x={372} y={194} w={26} h={26} />
      <rect x="354" y="179" width="62" height="9" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.6" />
      <rect x="355" y="180" width="60" height="7" fill="url(#hero-seam)" />
      <path d="M354 188H416" stroke="var(--accent)" strokeWidth="2.5" />

      {/* Upper sashes on the main wall */}
      <Window x={322} y={272} w={34} h={34} />
      <Window x={424} y={272} w={34} h={34} />

      {/* Standing-seam porch roof, columns, door and steps */}
      <polygon points="302,316 480,316 488,332 298,332" fill="var(--slate-band-surface)" stroke="var(--text)" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="303,317 479,317 486,331 300,331" fill="url(#hero-seam)" />
      <path d="M296 333H490" stroke="var(--accent)" strokeWidth="3" />
      <rect x="368" y="344" width="34" height="50" fill="var(--accent)" stroke="var(--text)" strokeWidth="1.8" />
      <rect x="374" y="350" width="22" height="12" fill="var(--copper-soft)" stroke="var(--text)" strokeWidth="1.2" />
      <rect x="374" y="368" width="22" height="20" fill="none" stroke="var(--accent-hover)" strokeWidth="1.2" />
      <circle cx="396" cy="372" r="1.8" fill="var(--surface)" />
      <Window x={422} y={348} w={36} h={30} cols={2} />
      <rect x="316" y="334" width="7" height={GROUND - 334} fill="var(--surface)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="470" y="334" width="7" height={GROUND - 334} fill="var(--surface)" stroke="var(--text)" strokeWidth="1.5" />
      <rect x="360" y="394" width="50" height="4" fill="var(--surface-raised)" stroke="var(--text)" strokeWidth="1.2" />

      {/* Front gable wing: fish-scale shingled pediment over lap siding */}
      <rect x="142" y="290" width="156" height={GROUND - 290} fill="var(--bg)" stroke="var(--text)" strokeWidth="2" />
      <rect x="143" y="296" width="154" height={GROUND - 297} fill="url(#hero-siding)" />
      <polygon points="134,292 220,200 306,292" fill="var(--surface)" />
      <polygon points="140,290 220,204 300,290" fill="url(#hero-fish-scale)" />
      <rect x="208" y="236" width="24" height="18" fill="var(--surface-raised)" stroke="var(--text)" strokeWidth="1.4" />
      {[241, 246, 251].map(y => (
        <line key={y} x1="211" y1={y} x2="229" y2={y} stroke="var(--line-strong)" strokeWidth="1.2" />
      ))}
      <rect x="136" y="286" width="168" height="10" fill="var(--surface-raised)" stroke="var(--text)" strokeWidth="1.8" />
      <polygon
        points="116,292 220,180 324,292 306,292 220,200 134,292"
        fill="var(--slate-band)"
        stroke="var(--text)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M204 197L220 179L236 197" stroke="var(--accent)" strokeWidth="6" strokeLinecap="square" />
      <Window x={168} y={316} w={104} h={52} cols={3} />

      {/* Shrubs and ground datum */}
      <g fill="var(--copper-soft)" stroke="var(--copper)" strokeWidth="1.5">
        <path d="M150 398Q150 380 168 380Q176 370 190 378Q206 378 204 398Z" />
        <path d="M244 398Q242 382 258 382Q268 372 280 382Q294 384 292 398Z" />
        <path d="M424 398Q422 384 436 384Q446 376 456 384Q468 386 466 398Z" />
      </g>
      {[166, 182, 262, 278, 440, 452].map((x, i) => (
        <circle key={x} cx={x} cy={386 + (i % 2) * 4} r="2.4" fill="var(--accent)" />
      ))}
      <line x1="26" y1={GROUND} x2="614" y2={GROUND} stroke="var(--text)" strokeWidth="2" />
      <path
        d={Array.from({ length: 49 }, (_, i) => `M${30 + i * 12} ${GROUND + 2}l-6 7`).join('')}
        stroke="var(--line-strong)"
        strokeWidth="1"
      />

      {/* Callouts */}
      <g fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700">
        <circle cx="320" cy="146" r="3.5" fill="var(--surface)" stroke="var(--accent-ink)" strokeWidth="1.5" />
        <polyline points="317,143 304,121" stroke="var(--accent-ink)" strokeWidth="1.2" />
        <rect x="236" y="105" width="68" height="16" rx="2" fill="var(--surface)" stroke="var(--accent-ink)" strokeWidth="1" />
        <text x="270" y="116.5" textAnchor="middle" fill="var(--accent-ink)">RIDGE VENT</text>

        <circle cx="384" cy="183" r="3.5" fill="var(--surface)" stroke="var(--copper)" strokeWidth="1.5" />
        <polyline points="384,179 384,128" stroke="var(--copper)" strokeWidth="1.2" />
        <rect x="340" y="113" width="88" height="16" rx="2" fill="var(--surface)" stroke="var(--copper)" strokeWidth="1" />
        <text x="384" y="124.5" textAnchor="middle" fill="var(--copper)">STANDING SEAM</text>

        <rect x="268" y="222" width="58" height="16" rx="2" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1" />
        <text x="297" y="233.5" textAnchor="middle" fill="var(--text)">S1 SLATE</text>
      </g>

      {/* Legend strip */}
      <g fontFamily="var(--font-mono)" fontSize="9.5" fill="var(--muted)">
        <rect x="34" y="418" width="572" height="28" fill="var(--surface-raised)" stroke="var(--line)" strokeWidth="1" />
        <text x="48" y="436" fill="var(--text)" fontWeight="700">SCALE 1/4&quot; = 1&apos;-0&quot;</text>
        <text x="200" y="436">DECK: 5/8&quot; CDX</text>
        <text x="334" y="436">MEMBRANE: 250°F I&amp;W</text>
        <text x="592" y="436" textAnchor="end" fill="var(--accent-ink)" fontWeight="700">CCB #214890</text>
      </g>
    </svg>
  );
}
