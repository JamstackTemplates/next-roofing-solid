export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const roofingFaq: readonly FaqItem[] = [
  {
    id: 'inspection-scope',
    question: 'What is included in a roof inspection?',
    answer:
      'A senior estimator walks the roof (or flies a high-resolution inspection drone on steep slate), checks attic ventilation and decking moisture where accessible, photographs every flashing point, and sends a written condition report with repair or replacement options.',
  },
  {
    id: 'square-pricing',
    question: 'What is a "roofing square" in your guide pricing?',
    answer:
      'One roofing square equals 100 square feet of roof surface. A typical 2,000 sq ft Portland home has between 22 and 32 squares depending on roof pitch, eaves, and dormers. Final quotes are written only after an on-site measurement.',
  },
  {
    id: 'rain-season',
    question: 'Can you replace a roof during Portland’s rainy season?',
    answer:
      'Yes. We stage tear-offs section by section and dry-in exposed decking with self-adhering ice-and-water membrane and synthetic underlayment before rain arrives, watching hourly marine forecasts before opening any slope.',
  },
  {
    id: 'tear-off-cleanup',
    question: 'How do you protect landscaping and clean up nails?',
    answer:
      'We drape breathable canvas over shrubs and siding, stage debris chutes directly into roll-off bins, and run magnetic rolling sweeps across driveways, walkways, and lawns at the end of every workday.',
  },
  {
    id: 'warranty-coverage',
    question: 'How does your 10-year workmanship warranty work?',
    answer:
      'Manufacturer warranties cover material defects; our 10-year workmanship warranty covers our installation — including every valley, skylight curb, chimney step-flashing, and ridge vent — and is transferable once if you sell your home.',
  },
];
