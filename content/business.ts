import type { OpeningHours } from '../lib/hours.ts';

/** Shared business details for Ridgeway Slate & Seam. Update site.config.json's name when renaming. */
export interface Business {
  /** Public display name; also update site.config.json's name when renaming. */
  name: string;
  /** Short headline used as fallback metadata. */
  tagline: string;
  /** Plain-text introduction used by fallback metadata and JSON-LD. */
  introduction: string;
  /** Public contact email, always visible on Contact. */
  email: string;
  /** Public phone number; blank hides it. */
  phone: string;
  /** Contractor licence and bonding line displayed in specs and footer. */
  licence: string;
  /** Years in operation. */
  yearsInBusiness: number;
  /** Workmanship warranty length in years. */
  workmanshipWarrantyYears: number;
  /** Physical yard and showroom address (public landmark for the gallery sample). */
  address: {
    street: string;
    district: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    formatted: string;
  };
  /** Cities and neighborhoods served. */
  serviceAreas: readonly string[];
  /** Weekly office & yard hours (same-day intervals only). */
  hours: readonly OpeningHours[];
  /** Contact copy; the hosted form supports name, email and message only. */
  enquiries: {
    /** Contact page heading. */
    title: string;
    /** Must frame requests as enquiries, never confirmed bookings or binding quotes. */
    introduction: string;
    /** Suggestions for the message field, not additional form inputs. */
    usefulToInclude: readonly string[];
  };
}

export const business: Business = {
  name: 'Ridgeway Slate & Seam',
  tagline: 'Roofs built to outlast the storm.',
  introduction:
    'Licensed residential and commercial roofing specialists in Portland, Oregon — installing standing-seam metal, natural quarry slate, architectural shingles, and weatherproof flat membranes.',
  email: 'estimates@ridgewayslate.example',
  phone: '(503) 555-0194',
  licence: 'Oregon CCB #214890 · Licensed, Bonded & Insured',
  yearsInBusiness: 28,
  workmanshipWarrantyYears: 10,
  address: {
    street: '418 NW 11th Ave',
    district: 'Pearl District',
    city: 'Portland',
    region: 'OR',
    postalCode: '97209',
    country: 'US',
    formatted: '418 NW 11th Ave, Pearl District, Portland, OR 97209',
  },
  serviceAreas: [
    'Portland Metro',
    'Lake Oswego',
    'Beaverton',
    'Tigard',
    'Milwaukie',
    'Oregon City',
    'Vancouver, WA',
  ],
  hours: [
    { day: 'Monday', opens: '07:00', closes: '17:30' },
    { day: 'Tuesday', opens: '07:00', closes: '17:30' },
    { day: 'Wednesday', opens: '07:00', closes: '17:30' },
    { day: 'Thursday', opens: '07:00', closes: '17:30' },
    { day: 'Friday', opens: '07:00', closes: '17:30' },
    { day: 'Saturday', opens: '08:00', closes: '13:00' },
    { day: 'Sunday' },
  ],
  enquiries: {
    title: 'Request a roof inspection',
    introduction:
      'Send an enquiry for a roof inspection, replacement estimate, or storm-damage assessment. Inspection times and written quotes are confirmed only when our office replies.',
    usefulToInclude: [
      'Your neighborhood or street address in the Portland metro area',
      'Approximate roof age and current material (shingle, metal, slate, or flat)',
      'Whether you need a targeted leak repair or a full roof replacement',
      'Preferred weekdays or morning/afternoon windows for a callback',
    ],
  },
};
