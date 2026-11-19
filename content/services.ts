/**
 * Roofing systems and repair services offered by Ridgeway Slate & Seam.
 *
 * Owner editing guide:
 * - Update `pricePerSquareUsd` (cost per 100 sq ft "roofing square" in USD) or `startingPriceUsd`
 *   when material costs change.
 * - Toggle `available` to `false` to mark a system as temporarily waitlisted without deleting it.
 * - Update `leadTime` (e.g. "2–3 weeks") to reflect current crew scheduling.
 */

export type ServiceCategory = 'pitched' | 'metal-slate' | 'flat-repair';

export type MaterialProfile =
  | 'shingle'
  | 'standing-seam'
  | 'slate'
  | 'tpo'
  | 'flashing'
  | 'gutter';

export interface PriceRange {
  /** Low end of guide price in USD per roofing square (100 sq ft). */
  min: number;
  /** High end of guide price in USD per roofing square (100 sq ft). */
  max: number;
}

export interface RoofingService {
  /** Stable, URL-safe unique identifier (lowercase letters, digits, hyphens). */
  id: string;
  /** Display title for the system or service. */
  name: string;
  /** Short technical code stamped on architectural spec sheets. */
  specCode: string;
  /** Filter category on /services/. */
  category: ServiceCategory;
  /** Technical profile illustration key. */
  profile: MaterialProfile;
  /** Concise description of the system and where it excels. */
  summary: string;
  /** Typical service life in the Pacific Northwest climate. */
  lifespan: string;
  /** Rated wind uplift resistance in MPH, if applicable to full roof assemblies. */
  windRatingMph?: number;
  /** Recommended minimum/typical roof pitch (e.g. "3:12+"). */
  bestPitch: string;
  /** Material and workmanship warranty summary. */
  warranty: string;
  /** Guide price range per roofing square (100 sq ft) in USD, for full systems. */
  pricePerSquareUsd?: PriceRange;
  /** Starting guide price in USD for fixed-scope repairs or sheet-metal work. */
  startingPriceUsd?: number;
  /** Current crew scheduling lead time. */
  leadTime: string;
  /** Set to false to show as currently waitlisted. */
  available: boolean;
  /** Show in the 4-system showcase on the home page. */
  featured?: boolean;
}

export const SERVICE_CATEGORIES: readonly { id: 'all' | ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All systems' },
  { id: 'pitched', label: 'Pitched roofs' },
  { id: 'metal-slate', label: 'Metal & slate' },
  { id: 'flat-repair', label: 'Flat & repair' },
];

export const services: readonly RoofingService[] = [
  {
    id: 'architectural-shingle',
    name: 'Architectural Composite Shingle',
    specCode: 'SYS-01 · CLASS 4',
    category: 'pitched',
    profile: 'shingle',
    summary:
      'Heavyweight dimensional laminate shingles over high-temp ice-and-water eaves and continuous ridge ventilation. Built for heavy Oregon winter rain and moss resistance.',
    lifespan: '30–40 yrs',
    windRatingMph: 130,
    bestPitch: '4:12 to 12:12',
    warranty: '50-yr material · 10-yr workmanship',
    pricePerSquareUsd: { min: 540, max: 680 },
    leadTime: '1–2 weeks',
    available: true,
    featured: true,
  },
  {
    id: 'standing-seam-metal',
    name: 'Standing-Seam Matte Steel',
    specCode: 'SYS-02 · 24 GA',
    category: 'metal-slate',
    profile: 'standing-seam',
    summary:
      'Mechanically seamed 24-gauge Kynar-coated steel panels with concealed clips and zero exposed fasteners. Sheds rain, needles, and snow cleanly for half a century.',
    lifespan: '50+ yrs',
    windRatingMph: 140,
    bestPitch: '2:12 to 12:12',
    warranty: '40-yr finish · 10-yr workmanship',
    pricePerSquareUsd: { min: 1150, max: 1450 },
    leadTime: '2–3 weeks',
    available: true,
    featured: true,
  },
  {
    id: 'natural-quarry-slate',
    name: 'Natural Quarry Slate',
    specCode: 'SYS-03 · GRADE S1',
    category: 'metal-slate',
    profile: 'slate',
    summary:
      'Hand-sorted S1 structural roofing slate nailed with heavy copper fasteners over double-layer underlayment. Ideal for historic Craftsman, Tudor, and heritage restorations.',
    lifespan: '75–100 yrs',
    windRatingMph: 140,
    bestPitch: '6:12 to 14:12',
    warranty: '75-yr stone · 10-yr workmanship',
    pricePerSquareUsd: { min: 1950, max: 2600 },
    leadTime: '4–6 weeks',
    available: true,
    featured: true,
  },
  {
    id: 'commercial-tpo-membrane',
    name: 'Single-Ply TPO Flat Membrane',
    specCode: 'SYS-04 · 60 MIL',
    category: 'flat-repair',
    profile: 'tpo',
    summary:
      'Heat-welded 60-mil reinforced TPO membrane with tapered polyiso insulation to eliminate ponding on low-slope residential additions and commercial parapets.',
    lifespan: '25–30 yrs',
    windRatingMph: 120,
    bestPitch: '1/4:12 to 2:12',
    warranty: '20-yr NDL · 10-yr workmanship',
    pricePerSquareUsd: { min: 780, max: 980 },
    leadTime: '2–3 weeks',
    available: true,
    featured: true,
  },
  {
    id: 'storm-leak-flashing',
    name: 'Storm Repair & Valley Flashing',
    specCode: 'SRV-05 · FLASH',
    category: 'flat-repair',
    profile: 'flashing',
    summary:
      'Targeted diagnostics and permanent repairs for chimney step-flashing, skylight curbs, wind-lifted courses, and open W-valleys — documented with before-and-after photos.',
    lifespan: '15+ yrs',
    bestPitch: 'Any roof slope',
    warranty: '5-yr repair guarantee',
    startingPriceUsd: 650,
    leadTime: '48–72 hrs',
    available: true,
  },
  {
    id: 'copper-zinc-gutters',
    name: 'Half-Round Copper & Zinc Gutters',
    specCode: 'SRV-06 · METAL',
    category: 'metal-slate',
    profile: 'gutter',
    summary:
      'Shop-fabricated 6-inch half-round copper or pre-weathered zinc gutters with soldered miters, heavy bronze hangers, and oversized downspouts sized for cloudbursts.',
    lifespan: '40+ yrs',
    bestPitch: 'Eave & fascia fit',
    warranty: '10-yr workmanship',
    startingPriceUsd: 1450,
    leadTime: '1–2 weeks',
    available: true,
  },
];

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

/** Formats a service's guide price consistently in USD. */
export function formatServicePrice(service: RoofingService): string {
  if (service.pricePerSquareUsd) {
    return `${usd.format(service.pricePerSquareUsd.min)}–${usd.format(service.pricePerSquareUsd.max)} / sq`;
  }
  if (service.startingPriceUsd !== undefined) {
    return `From ${usd.format(service.startingPriceUsd)}`;
  }
  return 'By written inspection';
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Validates all roofing services with item-specific errors. */
export function validateServices(items: readonly RoofingService[]): void {
  if (items.length === 0) throw new Error('services: expected at least one roofing service');
  const seen = new Set<string>();
  for (const item of items) {
    if (!slugPattern.test(item.id)) {
      throw new Error(`services[${item.id || '?'}]: id must be a lowercase URL-safe slug`);
    }
    if (seen.has(item.id)) {
      throw new Error(`services[${item.id}]: duplicate service id`);
    }
    seen.add(item.id);

    for (const field of ['name', 'specCode', 'summary', 'lifespan', 'bestPitch', 'warranty', 'leadTime'] as const) {
      if (!item[field] || !item[field].trim()) {
        throw new Error(`services[${item.id}]: ${field} is required`);
      }
    }
    if (typeof item.available !== 'boolean') {
      throw new Error(`services[${item.id}]: available must be a boolean`);
    }
    if (item.windRatingMph !== undefined && (item.windRatingMph < 60 || item.windRatingMph > 200)) {
      throw new Error(`services[${item.id}]: windRatingMph must be between 60 and 200`);
    }
    if (!item.pricePerSquareUsd && item.startingPriceUsd === undefined) {
      throw new Error(`services[${item.id}]: provide pricePerSquareUsd or startingPriceUsd`);
    }
    if (item.pricePerSquareUsd) {
      const { min, max } = item.pricePerSquareUsd;
      if (min <= 0 || max <= 0 || min > max) {
        throw new Error(`services[${item.id}]: pricePerSquareUsd must have positive min <= max`);
      }
    }
    if (item.startingPriceUsd !== undefined && item.startingPriceUsd <= 0) {
      throw new Error(`services[${item.id}]: startingPriceUsd must be positive`);
    }
  }
}
