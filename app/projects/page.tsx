import type { Metadata } from 'next';
import { business } from '../../content/business';
import { projects } from '../../content/projects';
import { services } from '../../content/services';
import { GoogleMap } from '../../components/google-map';
import { HoursTable } from '../../components/hours-table';
import { PageHead } from '../../components/page-head';
import { ProjectLedger } from '../../components/project-ledger';
import { SiteLink } from '../../components/site-link';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Completed residential and commercial roofing projects across Laurelhurst, Irvington, Lake Oswego, Sellwood, and Portland’s Pearl District.',
  alternates: { canonical: absoluteUrl('/projects/') },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        eyebrow="Completed Roofs Archive"
        specLabel={`${projects.length} DOCUMENTED BUILDS`}
        title="Field job sheets from across the Portland metro."
      >
        <p>
          Every roof we install is logged with its slope pitch, area in squares, weather issue
          resolved, and sheet-metal detailing.
        </p>
      </PageHead>

      <section className="wrap py-12">
        <ProjectLedger items={projects} services={services} />
      </section>

      {/* Service Area, Yard Map, and Office Hours */}
      <section className="border-t border-line-strong bg-bg-band py-16">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Service Area &amp; Yard</p>
            <h2 className="mt-2 text-3xl font-extrabold">
              Serving Portland &amp; the Willamette Valley.
            </h2>
            <p className="mt-3 text-sm text-muted">
              Our sheet-metal brake shop and sample showroom sit in Portland’s Pearl District.
              Crews dispatch daily across the metro area:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {business.serviceAreas.map(area => (
                <li key={area} className="spec-tag">
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <HoursTable hours={business.hours} />
            </div>

            <div className="mt-6">
              <SiteLink href="/contact/" className="button">
                Request an inspection in your area
              </SiteLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-ui border border-line-strong bg-surface">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3 font-mono text-xs">
                <span className="font-bold text-ink">YARD LOCATION</span>
                <span className="text-muted">{business.address.formatted}</span>
              </div>
              <GoogleMap
                address={business.address.formatted}
                title={`${business.name} yard and showroom at ${business.address.formatted}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
