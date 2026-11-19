/**
 * Decorative roof-eave edge: a terracotta drip-edge flashing over two staggered
 * courses of slate, the lower course cut with pointed hex tails and copper nails.
 * Drawn in user units (px) so the pattern tiles at any width without stretching.
 * Tile colours come from the --eave-* tokens so the edge stays visible in both modes.
 */
export function EaveTrim({
  id = 'eave',
  className = 'no-print relative z-10 -mb-5 block h-5 w-full',
}: {
  id?: string;
  className?: string;
}) {
  const pattern = `${id}-course`;
  return (
    <svg width="100%" height="20" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <pattern id={pattern} width="40" height="20" patternUnits="userSpaceOnUse">
          {/* Joints behind the slate courses */}
          <rect x="0" y="4" width="40" height="12" fill="var(--eave-joint)" />
          {/* Upper course: square-butt slates */}
          <rect x="1" y="4.75" width="18" height="5.5" fill="var(--eave-tile)" />
          <rect x="21" y="4.75" width="18" height="5.5" fill="var(--eave-tile-alt)" />
          {/* Lower course: offset half a slate, pointed tails */}
          <path d="M11 11H29V16L20 20L11 16Z" fill="var(--eave-tile-alt)" />
          <path d="M-9 11H9V16L0 20L-9 16Z" fill="var(--eave-tile)" />
          <path d="M31 11H49V16L40 20L31 16Z" fill="var(--eave-tile)" />
          <circle cx="15" cy="13" r="1.1" fill="var(--eave-nail)" />
          <circle cx="25" cy="13" r="1.1" fill="var(--eave-nail)" />
          {/* Drip-edge flashing */}
          <rect x="0" y="0" width="40" height="4" fill="var(--accent)" />
        </pattern>
      </defs>
      <rect width="100%" height="20" fill={`url(#${pattern})`} />
    </svg>
  );
}
