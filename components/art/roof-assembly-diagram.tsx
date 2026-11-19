export function RoofAssemblyDiagram({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect?: (id: string) => void;
}) {
  const is = (id: string) => activeId === id;
  const layerOpacity = (id: string) => (is(id) ? 1 : 0.72);
  const strokeFor = (id: string) => (is(id) ? 'var(--accent)' : 'var(--text)');
  const strokeWidthFor = (id: string) => (is(id) ? 3 : 1.5);

  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      role="img"
      aria-labelledby="assembly-title assembly-desc"
      className="w-full h-auto"
    >
      <title id="assembly-title">Six-layer residential roof assembly cross-section</title>
      <desc id="assembly-desc">
        Isometric cutaway showing outer weather armor, ice and water membrane, synthetic underlayment,
        CDX plywood decking, continuous ridge ventilation, and custom counter-flashed valley and drip edge trim.
      </desc>

      <rect
        x="4"
        y="4"
        width="592"
        height="412"
        rx="4"
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />

      {/* Drafting header */}
      <text x="24" y="30" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" letterSpacing="1.2">
        SEC. B-06 // 6-LAYER WEATHERPROOF ASSEMBLY
      </text>
      <line x1="24" y1="38" x2="576" y2="38" stroke="var(--line)" strokeWidth="1" />

      {/* Structural rafters underneath (context) */}
      <g opacity="0.45" stroke="var(--muted)" strokeWidth="1.5" fill="var(--surface-raised)">
        <polygon points="90,340 290,152 308,166 108,354" />
        <polygon points="168,360 368,172 386,186 186,374" />
        <polygon points="246,380 446,192 464,206 264,394" />
      </g>

      {/* LAYER 4: Structural CDX Decking */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('cdx-decking')}
        onClick={() => onSelect?.('cdx-decking')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <polygon
          points="70,318 286,120 492,188 276,386"
          fill="var(--bg-band)"
          stroke={strokeFor('cdx-decking')}
          strokeWidth={strokeWidthFor('cdx-decking')}
        />
        <line x1="178" y1="219" x2="384" y2="287" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="6 4" />
      </g>

      {/* LAYER 3: Synthetic Underlayment */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('synthetic-underlayment')}
        onClick={() => onSelect?.('synthetic-underlayment')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <polygon
          points="96,294 286,120 462,178 272,352"
          fill="var(--surface-raised)"
          stroke={strokeFor('synthetic-underlayment')}
          strokeWidth={strokeWidthFor('synthetic-underlayment')}
        />
        <line x1="160" y1="236" x2="336" y2="294" stroke="var(--line-strong)" strokeWidth="1" />
        <line x1="218" y1="182" x2="394" y2="240" stroke="var(--line-strong)" strokeWidth="1" />
      </g>

      {/* LAYER 2: Ice & Water Membrane (eaves & valley strip) */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('ice-water-shield')}
        onClick={() => onSelect?.('ice-water-shield')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <polygon
          points="70,318 134,260 340,328 276,386"
          fill="var(--copper-soft)"
          stroke={is('ice-water-shield') ? 'var(--accent)' : 'var(--copper)'}
          strokeWidth={strokeWidthFor('ice-water-shield')}
        />
        <line x1="94" y1="296" x2="300" y2="364" stroke="var(--copper)" strokeWidth="1.2" strokeDasharray="4 4" />
      </g>

      {/* LAYER 1: Outer Weather Armor (Standing-Seam & Slate panel) */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('outer-deck')}
        onClick={() => onSelect?.('outer-deck')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <polygon
          points="138,242 292,102 440,151 286,291"
          fill="var(--slate-band)"
          stroke={strokeFor('outer-deck')}
          strokeWidth={strokeWidthFor('outer-deck')}
        />
        {/* Standing-seam ribs */}
        <line x1="172" y1="253" x2="326" y2="113" stroke="var(--slate-band-ink)" strokeOpacity="0.6" strokeWidth="2.2" />
        <line x1="208" y1="265" x2="362" y2="125" stroke="var(--slate-band-ink)" strokeOpacity="0.6" strokeWidth="2.2" />
        <line x1="246" y1="278" x2="400" y2="138" stroke="var(--slate-band-ink)" strokeOpacity="0.6" strokeWidth="2.2" />
      </g>

      {/* LAYER 5: Continuous Ridge Ventilation */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('ridge-ventilation')}
        onClick={() => onSelect?.('ridge-ventilation')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <polygon
          points="276,94 298,84 498,150 476,162"
          fill="var(--accent)"
          stroke={is('ridge-ventilation') ? 'var(--text)' : 'var(--accent-hover)'}
          strokeWidth={is('ridge-ventilation') ? 2.5 : 1.5}
        />
        {/* Airflow arrows */}
        <path d="M352 72L364 56M364 56L354 58M364 56L364 66" stroke="var(--copper)" strokeWidth="2" strokeLinecap="round" />
        <path d="M402 88L414 72M414 72L404 74M414 72L414 82" stroke="var(--copper)" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* LAYER 6: Counter-Flashed Drip Edge & Valley Metal */}
      <g
        className="assembly-layer-shape"
        opacity={layerOpacity('valley-flashing')}
        onClick={() => onSelect?.('valley-flashing')}
        style={{ cursor: onSelect ? 'pointer' : 'default' }}
      >
        <path
          d="M64 322L276 392L284 384L72 314Z"
          fill="var(--copper)"
          stroke={is('valley-flashing') ? 'var(--accent)' : 'var(--text)'}
          strokeWidth={is('valley-flashing') ? 2.5 : 1.4}
        />
        <path
          d="M276 392L496 192L490 184L270 384Z"
          fill="var(--copper)"
          stroke={is('valley-flashing') ? 'var(--accent)' : 'var(--text)'}
          strokeWidth={is('valley-flashing') ? 2.5 : 1.4}
        />
      </g>

      {/* Numbered engineering callout pins */}
      {[
        { id: 'outer-deck', num: '01', x: 248, y: 176 },
        { id: 'ice-water-shield', num: '02', x: 182, y: 318 },
        { id: 'synthetic-underlayment', num: '03', x: 344, y: 248 },
        { id: 'cdx-decking', num: '04', x: 422, y: 212 },
        { id: 'ridge-ventilation', num: '05', x: 386, y: 118 },
        { id: 'valley-flashing', num: '06', x: 278, y: 384 },
      ].map(pin => {
        const active = is(pin.id);
        return (
          <g
            key={pin.id}
            onClick={() => onSelect?.(pin.id)}
            style={{ cursor: onSelect ? 'pointer' : 'default' }}
          >
            <circle
              cx={pin.x}
              cy={pin.y}
              r={active ? 15 : 12}
              fill={active ? 'var(--accent)' : 'var(--slate-band)'}
              stroke="var(--surface)"
              strokeWidth="2.5"
            />
            <text
              x={pin.x}
              y={pin.y + 4}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              fontWeight="700"
              fill="#ffffff"
            >
              {pin.num}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
