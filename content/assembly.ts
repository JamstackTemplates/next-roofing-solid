/**
 * Six structural weatherproofing layers featured in the interactive
 * "Anatomy of a Solid Roof" cross-section diagram on the home page.
 */

export interface AssemblyLayer {
  /** Stable unique identifier used by the interactive SVG inspector. */
  id: string;
  /** Numbered engineering sequence from top weather surface to structure. */
  order: number;
  /** Short layer name shown on the callout button. */
  name: string;
  /** Exact material grade installed by Ridgeway Slate & Seam. */
  material: string;
  /** What this layer protects against in Pacific Northwest weather. */
  purpose: string;
  /** Measurable installation standard. */
  standard: string;
}

export const assemblyLayers: readonly AssemblyLayer[] = [
  {
    id: 'outer-deck',
    order: 1,
    name: 'Outer Weather Armor',
    material: '24-ga Kynar steel, Grade S1 slate, or Class 4 architectural shingle',
    purpose:
      'Primary barrier against driving rain, UV breakdown, hail impact, and 130–140 mph winter wind uplift.',
    standard: 'Concealed stainless/copper fasteners · 6-nail storm pattern on shingles',
  },
  {
    id: 'ice-water-shield',
    order: 2,
    name: 'Ice & Water Membrane',
    material: 'Self-adhering high-temperature butyl rubber barrier (250°F rated)',
    purpose:
      'Gaskets tightly around every nail shank along eaves, valleys, skylights, and chimney saddles to block wind-driven backup water.',
    standard: 'Minimum 36" up eaves · full 36" width in every valley',
  },
  {
    id: 'synthetic-underlayment',
    order: 3,
    name: 'Synthetic Underlayment',
    material: 'Woven tear-resistant polypropylene secondary weather shield',
    purpose:
      'Replaces brittle asphalt felt with a flat, wrinkle-free secondary drain plane that resists tearing in high winds during installation.',
    standard: '4" horizontal overlap · cap-nailed on 12" structural grid',
  },
  {
    id: 'cdx-decking',
    order: 4,
    name: 'Structural CDX Decking',
    material: '5/8" APA-rated exterior-grade CDX Douglas fir plywood',
    purpose:
      'Provides rigid fastener pull-out strength and spans rafters cleanly without sagging under wet winter loads.',
    standard: 'Every soft or delaminated sheet replaced before dry-in',
  },
  {
    id: 'ridge-ventilation',
    order: 5,
    name: 'Balanced Ridge Ventilation',
    material: 'Externally baffled continuous ridge vent paired with intake soffits',
    purpose:
      'Draws cool dry air through eaves and exhausts warm attic moisture at the peak, preventing mold, rot, and premature shingle curling.',
    standard: '1:150 net free vent area balanced 50/50 intake to exhaust',
  },
  {
    id: 'valley-flashing',
    order: 6,
    name: 'Counter-Flashed Metal Trim',
    material: '24-ga hemmed drip edge, W-profile valleys, and 16-oz copper step flashing',
    purpose:
      'Channels concentrated runoff clear of fascia boards and seals roof-to-wall intersections permanently without relying on caulk.',
    standard: 'All flashing custom-bent in our Pearl District metal shop',
  },
];

export function validateAssemblyLayers(layers: readonly AssemblyLayer[]): void {
  if (layers.length !== 6) {
    throw new Error('assembly: expected exactly 6 roof cross-section layers');
  }
  const seen = new Set<string>();
  layers.forEach((layer, idx) => {
    if (!layer.id || seen.has(layer.id)) {
      throw new Error(`assembly[${layer.id || idx}]: unique id required`);
    }
    seen.add(layer.id);
    if (layer.order !== idx + 1) {
      throw new Error(`assembly[${layer.id}]: expected order ${idx + 1}, got ${layer.order}`);
    }
    for (const field of ['name', 'material', 'purpose', 'standard'] as const) {
      if (!layer[field] || !layer[field].trim()) {
        throw new Error(`assembly[${layer.id}]: ${field} is required`);
      }
    }
  });
}
