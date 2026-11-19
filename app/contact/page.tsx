import type { Metadata } from 'next';
import { business } from '../../content/business';
import { CopyEmail } from '../../components/copy-email';
import { HoursTable } from '../../components/hours-table';
import { JamstacksSupportForm } from '../../components/jamstacks-support-form';
import { PageHead } from '../../components/page-head';
import { absoluteUrl } from '../../lib/paths';
import { site } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: business.enquiries.introduction,
  alternates: { canonical: absoluteUrl('/contact/') },
};

export default function ContactPage() {
  const hosted = Boolean(site.jamstacksSite && site.jamstacksEmbedUrl);

  return (
    <>
      <PageHead
        eyebrow="Inspection Enquiry"
        specLabel="NO-OBLIGATION ASSESSMENT"
        title={business.enquiries.title}
      >
        <p>{business.enquiries.introduction}</p>
      </PageHead>

      <div className="wrap grid gap-10 py-12 lg:grid-cols-12">
        <section aria-label="Enquiry form" className="lg:col-span-7">
          {hosted ? (
            <div className="rounded-ui border border-line-strong bg-surface p-6 sm:p-8">
              <JamstacksSupportForm
                siteId={site.jamstacksSite}
                embedUrl={site.jamstacksEmbedUrl}
                email={business.email}
              />
            </div>
          ) : (
            <div className="rounded-ui border border-line-strong bg-surface p-6 sm:p-8">
              <p className="eyebrow">Direct Enquiry</p>
              <h2 className="mt-2 text-2xl font-extrabold">Write to our estimating desk</h2>
              <p className="mt-3 text-muted">
                The online enquiry form is not connected on this preview. Send your inspection
                details directly to{' '}
                <a className="text-link wrap-anywhere" href={`mailto:${business.email}`}>
                  {business.email}
                </a>{' '}
                or call{' '}
                <a className="text-link" href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}>
                  {business.phone}
                </a>
                .
              </p>
              <p className="mt-4 rounded-ui border border-line bg-bg-band p-4 text-sm text-muted">
                Inspection appointments and written estimates are confirmed only when our office
                replies.
              </p>
            </div>
          )}

          <div className="mt-8 rounded-ui border border-line bg-bg-band p-6">
            <h2 className="text-lg font-extrabold">Helpful details to include in your message</h2>
            <p className="mt-1 text-sm text-muted">
              Adding these notes helps our estimator bring the right ladder gear and material
              samples:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink">
              {business.enquiries.usefulToInclude.map(tip => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside aria-label="Contact details" className="grid content-start gap-6 lg:col-span-5">
          <div className="rounded-ui border border-line-strong bg-surface p-6">
            <p className="eyebrow">Estimating Desk</p>
            <h2 className="mt-2 text-xl font-extrabold">Email &amp; phone</h2>

            <div className="mt-4 space-y-3">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  Public email
                </p>
                <a
                  className="text-link wrap-anywhere text-base"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <CopyEmail email={business.email} />
              </div>

              {business.phone ? (
                <div className="border-t border-line pt-3">
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                    Office line
                  </p>
                  <a
                    className="font-mono text-base font-bold text-ink underline decoration-accent"
                    href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                  >
                    {business.phone}
                  </a>
                </div>
              ) : null}

              <div className="border-t border-line pt-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  Yard &amp; showroom
                </p>
                <p className="text-sm text-ink">{business.address.formatted}</p>
                <p className="mt-1 font-mono text-xs text-copper">{business.licence}</p>
              </div>
            </div>
          </div>

          <HoursTable hours={business.hours} />
        </aside>
      </div>
    </>
  );
}
