import type { ReactNode } from 'react';
import { business } from '../content/business';
import { OpenBadge } from './open-badge';
import { SiteLink } from './site-link';

function InspectionBandSection({ children }: { children: ReactNode }) {
  return (
    <section className="seam-surface border-t border-line-strong bg-bg-band py-16">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-start">{children}</div>
    </section>
  );
}

function StepsColumn({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="lg:col-span-7">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{heading}</h2>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">{children}</ol>
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="rounded-ui border border-line-strong bg-surface p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-ink">
        Step {number}
      </p>
      <h3 className="mt-1.5 text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{children}</p>
    </li>
  );
}

function YardCard({
  heading,
  ctaLabel,
  children,
}: {
  heading: string;
  ctaLabel: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-ui border border-slate-band-line bg-slate-band p-7 text-slate-band-ink lg:col-span-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-band-copper">
        Pearl District Metal Shop &amp; Yard
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-slate-band-ink">{heading}</h2>
      <p className="mt-3 text-sm text-slate-band-muted">{children}</p>

      <dl className="mt-6 space-y-3 border-t border-slate-band-line pt-5 text-sm">
        <div>
          <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-band-muted">
            Address
          </dt>
          <dd className="mt-0.5 font-semibold text-slate-band-ink">{business.address.formatted}</dd>
        </div>
        <div>
          <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-band-muted">
            Office status
          </dt>
          <dd className="mt-0.5 font-mono text-xs text-slate-band-copper">
            <OpenBadge hours={business.hours} />
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-slate-band-muted">
            Direct desk
          </dt>
          <dd className="mt-0.5 font-mono text-sm">
            <a
              href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
              className="text-slate-band-ink underline decoration-accent"
            >
              {business.phone}
            </a>
          </dd>
        </div>
      </dl>

      <div className="mt-7 flex flex-wrap gap-3">
        <SiteLink href="/contact/" className="button button-on-slate w-full sm:w-auto">
          {ctaLabel}
        </SiteLink>
      </div>
    </aside>
  );
}

export const InspectionBand = Object.assign(InspectionBandSection, {
  StepsColumn,
  Step,
  YardCard,
});
