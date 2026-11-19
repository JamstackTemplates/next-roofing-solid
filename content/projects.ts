import type { RoofingService } from './services.ts';

/**
 * Completed roofing projects archive.
 *
 * Owner editing guide:
 * - Add new completed roofs at the top of `projects`.
 * - `serviceId` must match an `id` in `content/services.ts` (verified by tests).
 * - Mark up to 3 entries with `featured: true` to appear on the home page.
 */

export type RoofShape = 'gable' | 'hip' | 'shed-modern' | 'flat-parapet';

export interface CompletedProject {
  /** Stable, URL-safe unique identifier. */
  id: string;
  /** Job sheet code displayed in mono type. */
  jobCode: string;
  /** Project title. */
  title: string;
  /** Portland-area neighborhood or city. */
  neighborhood: string;
  /** Completion year. */
  year: number;
  /** References an `id` from `content/services.ts`. */
  serviceId: string;
  /** Bespoke roof-profile SVG shape. */
  roofShape: RoofShape;
  /** Roof slope ratio (e.g. "8:12"). */
  pitch: string;
  /** Roof area in roofing squares (1 square = 100 sq ft). */
  squares: number;
  /** What issue the owner faced before the job. */
  challenge: string;
  /** Structural scope completed by the crew. */
  solution: string;
  /** Show in the home page preview ledger. */
  featured?: boolean;
}

export const projects: readonly CompletedProject[] = [
  {
    id: 'laurelhurst-craftsman-slate',
    jobCode: 'JOB 25-041',
    title: 'Laurelhurst Craftsman Re-Roof',
    neighborhood: 'Laurelhurst, Portland',
    year: 2025,
    serviceId: 'natural-quarry-slate',
    roofShape: 'gable',
    pitch: '8:12',
    squares: 34,
    challenge:
      'Aging 1924 cedar shakes with failing brick chimney step-flashing and recurring winter valley leaks.',
    solution:
      'Full deck replacement with 5/8" CDX plywood, high-temp ice barrier in all valleys, custom 16-oz copper chimney counter-flashing, and unfading green-grey S1 quarry slate.',
    featured: true,
  },
  {
    id: 'irvington-standing-seam',
    jobCode: 'JOB 25-019',
    title: 'Irvington Standing-Seam Conversion',
    neighborhood: 'Irvington, Portland',
    year: 2025,
    serviceId: 'standing-seam-metal',
    roofShape: 'hip',
    pitch: '6:12',
    squares: 28,
    challenge:
      'Heavy Douglas fir canopy caused persistent moss buildup and premature granule loss on the prior composite roof.',
    solution:
      'Installed matte charcoal 24-gauge mechanically seamed steel panels with concealed expansion clips, snow-guard brackets over entries, and continuous vented hip caps.',
    featured: true,
  },
  {
    id: 'lake-oswego-architectural',
    jobCode: 'JOB 24-112',
    title: 'Lake Oswego Wind-Rated Replacement',
    neighborhood: 'Lake Oswego',
    year: 2024,
    serviceId: 'architectural-shingle',
    roofShape: 'gable',
    pitch: '7:12',
    squares: 41,
    challenge:
      'January ice-storm gusts tore two ridge sections loose and exposed wet attic insulation along the north eave.',
    solution:
      'Stripped to decking, re-baffled soffit intake, installed Class 4 impact-rated architectural shingles rated to 130 mph with copper-granule algae guard and six-nail storm pattern.',
    featured: true,
  },
  {
    id: 'pearl-warehouse-tpo',
    jobCode: 'JOB 24-087',
    title: 'Pearl District Lofts Flat Membrane',
    neighborhood: 'Pearl District, Portland',
    year: 2024,
    serviceId: 'commercial-tpo-membrane',
    roofShape: 'flat-parapet',
    pitch: '1/4:12',
    squares: 62,
    challenge:
      'Standing water around two rooftop HVAC curbs and split seams on an 18-year-old modified bitumen cap sheet.',
    solution:
      'Engineered tapered polyiso crickets to direct drainage toward scuppers, heat-welded 60-mil white TPO membrane, and clad parapet walls in galvanized coping.',
  },
  {
    id: 'sellwood-cedar-to-metal',
    jobCode: 'JOB 24-053',
    title: 'Sellwood Modern Shed-Roof Seam',
    neighborhood: 'Sellwood, Portland',
    year: 2024,
    serviceId: 'standing-seam-metal',
    roofShape: 'shed-modern',
    pitch: '4:12',
    squares: 22,
    challenge:
      'Low-slope architectural remodel required a clean weatherproof plane ready for future clamp-mounted solar arrays.',
    solution:
      'Roll-formed continuous 38-foot panels on site with zero horizontal lap seams, paired with dark-bronze half-round drainage and solar-ready standing ribs.',
  },
];

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Validates project entries and verifies each `serviceId` exists in `services`. */
export function validateProjects(
  items: readonly CompletedProject[],
  availableServices: readonly RoofingService[],
): void {
  if (items.length === 0) throw new Error('projects: expected at least one project');
  const serviceIds = new Set(availableServices.map(s => s.id));
  const seen = new Set<string>();
  for (const project of items) {
    if (!slugPattern.test(project.id)) {
      throw new Error(`projects[${project.id || '?'}]: id must be a lowercase URL-safe slug`);
    }
    if (seen.has(project.id)) {
      throw new Error(`projects[${project.id}]: duplicate project id`);
    }
    seen.add(project.id);
    if (!serviceIds.has(project.serviceId)) {
      throw new Error(`projects[${project.id}]: unknown serviceId "${project.serviceId}"`);
    }
    for (const field of ['jobCode', 'title', 'neighborhood', 'pitch', 'challenge', 'solution'] as const) {
      if (!project[field] || !project[field].trim()) {
        throw new Error(`projects[${project.id}]: ${field} is required`);
      }
    }
    if (!Number.isInteger(project.year) || project.year < 1995 || project.year > 2100) {
      throw new Error(`projects[${project.id}]: year must be a valid 4-digit year`);
    }
    if (typeof project.squares !== 'number' || project.squares <= 0 || project.squares > 500) {
      throw new Error(`projects[${project.id}]: squares must be a positive number`);
    }
  }
}
