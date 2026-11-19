import type { Metadata } from 'next';
import { assemblyLayers } from '../content/assembly';
import { business } from '../content/business';
import { projects } from '../content/projects';
import { services } from '../content/services';
import { RidgeDivider } from '../components/art/ridge-divider';
import { Hero } from '../components/hero';
import { InspectionBand } from '../components/inspection-steps';
import { OpenBadge } from '../components/open-badge';
import { ProjectLedger } from '../components/project-ledger';
import { RoofAssemblyInspector } from '../components/roof-assembly-inspector';
import { ServiceSwatchGrid } from '../components/service-catalog';
import { SiteLink } from '../components/site-link';
import { SpecStrip } from '../components/spec-strip';
import { absoluteUrl } from '../lib/paths';
import { businessStructuredData, jsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl('/') },
};

export default function HomePage() {
  const featuredServices = services.filter(item => item.featured);
  const featuredProjects = projects.filter(item => item.featured);

  return (
    <>
      <Hero>
        <Hero.Eyebrow>Portland &amp; Willamette Valley · Est. 1998</Hero.Eyebrow>
        <Hero.Heading>Roofs built to outlast the storm.</Hero.Heading>
        <Hero.Introduction>
          Standing-seam metal, Grade S1 quarry slate, architectural composite shingles, and
          heat-welded flat membranes — fabricated with shop-bent copper and zinc flashing for
          Pacific Northwest winters.
        </Hero.Introduction>
        <Hero.Actions>
          <Hero.PrimaryAction href="/contact/">Request a roof inspection</Hero.PrimaryAction>
          <Hero.SecondaryAction href="/services/">Explore roof systems</Hero.SecondaryAction>
        </Hero.Actions>
        <Hero.Meta>
          <span className="font-bold text-copper">
            <OpenBadge hours={business.hours} />
          </span>
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
            className="border-l border-line-strong pl-4 text-ink underline decoration-accent"
          >
            {business.phone}
          </a>
          <span className="border-l border-line-strong pl-4">
            10-year workmanship warranty
          </span>
        </Hero.Meta>
      </Hero>

      <SpecStrip>
        <SpecStrip.Item
          value={`${business.yearsInBusiness} YRS`}
          label="In Portland Metro"
          detail="Owner-led crews, never day-labor subs"
        />
        <SpecStrip.Item
          value="140 MPH"
          label="Wind uplift rating"
          detail="Mechanically seamed metal & slate specs"
        />
        <SpecStrip.Item
          value={`${business.workmanshipWarrantyYears} YR`}
          label="Workmanship guarantee"
          detail="Covers every valley, curb & ridge vent"
        />
        <SpecStrip.Item
          value="#214890"
          label="Oregon CCB licensed"
          detail="Bonded & insured residential + commercial"
        />
      </SpecStrip>

      {/* Section 3: Architectural Material Swatch Boards on Sandstone Band */}
      <section className="border-b border-line-strong bg-bg-band py-16">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">Roofing Systems</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Four engineered systems, priced transparently by the square.
              </h2>
              <p className="mt-3 text-muted">
                Every replacement includes full tear-off, decking inspection, ice-and-water
                shielding, and custom sheet-metal flashing bent in our Pearl District shop.
              </p>
            </div>
            <SiteLink href="/services/" className="button button-quiet">
              Compare all 6 services
            </SiteLink>
          </div>

          <ServiceSwatchGrid items={featuredServices} />
        </div>
      </section>

      {/* Section 4: Signature Element — Interactive 6-Layer Roof Assembly */}
      <section className="drafting-surface bg-bg py-16">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Signature Engineering</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Anatomy of a solid roof.
            </h2>
            <p className="mt-3 text-muted">
              Shingles and steel panels are only the outer skin. Select any of the six structural
              layers below to inspect the weatherproofing standard we build into every slope.
            </p>
          </div>

          <RoofAssemblyInspector layers={assemblyLayers} />
        </div>
      </section>

      <div className="wrap">
        <RidgeDivider />
      </div>

      {/* Section 5: Completed Roofs Ledger */}
      <section className="bg-bg py-16">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">Field Archive</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Recent roofs across Portland neighborhoods.
              </h2>
              <p className="mt-3 text-muted">
                From 1920s Laurelhurst Craftsman restorations to standing-seam conversions under
                heavy Douglas fir canopy.
              </p>
            </div>
            <SiteLink href="/projects/" className="button button-quiet">
              View all completed roofs
            </SiteLink>
          </div>

          <ProjectLedger items={featuredProjects} services={services} />
        </div>
      </section>

      {/* Section 6: Inspection Process & Pearl District Yard Card */}
      <InspectionBand>
        <InspectionBand.StepsColumn
          eyebrow="How an inspection works"
          heading="Clear diagnostics before a single shingle is lifted."
        >
          <InspectionBand.Step number="01" title="Ridge & attic walk">
            A senior estimator inspects valleys, chimneys, skylights, and attic ventilation —
            using a drone where steep slate should not be walked.
          </InspectionBand.Step>
          <InspectionBand.Step number="02" title="Timestamped photo report">
            You receive clear photographs of flashing wear, decking moisture, or storm uplift —
            never a high-pressure sales pitch.
          </InspectionBand.Step>
          <InspectionBand.Step number="03" title="Line-item written spec">
            Compare repair vs. full replacement options with exact material gauges, ventilation
            math, and scheduling windows.
          </InspectionBand.Step>
          <InspectionBand.Step number="04" title="Clean tear-off & magnetic sweep">
            Landscaping is draped in canvas, exposed decking is dried-in the same day, and yards
            are rolled with magnets every evening.
          </InspectionBand.Step>
        </InspectionBand.StepsColumn>

        <InspectionBand.YardCard
          heading="Visit the sheet-metal shop or request an inspection."
          ctaLabel="Request a roof inspection"
        >
          Stop by our Pearl District showroom to compare matte steel seam profiles, unfading
          quarry slate samples, and soldered copper gutters in person.
        </InspectionBand.YardCard>
      </InspectionBand>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessStructuredData()) }}
      />
    </>
  );
}
