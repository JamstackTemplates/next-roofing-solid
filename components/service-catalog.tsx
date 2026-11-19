'use client';

import { useState } from 'react';
import {
  SERVICE_CATEGORIES,
  formatServicePrice,
  type RoofingService,
  type ServiceCategory,
} from '../content/services';
import { MaterialProfileArt } from './art/material-profile-art';
import { SiteLink } from './site-link';

export function ServiceSwatchBoard({ service }: { service: RoofingService }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-ui border border-line-strong bg-surface">
      <div className="border-b border-line bg-surface-raised">
        <MaterialProfileArt profile={service.profile} className="mx-auto h-24 w-full max-w-md" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-ink">
            {service.specCode}
          </span>
          <span
            className={`spec-tag ${
              service.available ? 'text-copper' : 'border-accent text-accent-ink'
            }`}
          >
            {service.available ? `Lead: ${service.leadTime}` : 'Waitlisted'}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-extrabold leading-snug">{service.name}</h3>
        <p className="mt-2.5 flex-1 text-sm text-muted">{service.summary}</p>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-xs">
          <div>
            <dt className="font-mono uppercase tracking-wider text-muted">Guide range</dt>
            <dd className="mt-0.5 font-mono text-sm font-bold text-ink">
              {formatServicePrice(service)}
            </dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-wider text-muted">Service life</dt>
            <dd className="mt-0.5 font-mono text-sm font-bold text-ink">
              {service.lifespan}
            </dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-wider text-muted">
              {service.windRatingMph ? 'Wind uplift' : 'Fit & slope'}
            </dt>
            <dd className="mt-0.5 font-mono text-xs font-medium text-ink">
              {service.windRatingMph ? `${service.windRatingMph} mph rated` : service.bestPitch}
            </dd>
          </div>
          <div>
            <dt className="font-mono uppercase tracking-wider text-muted">Warranty</dt>
            <dd className="mt-0.5 font-mono text-xs font-medium text-ink">{service.warranty}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ServiceSwatchGrid({
  items,
}: {
  items: readonly RoofingService[];
}) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map(service => (
        <ServiceSwatchBoard key={service.id} service={service} />
      ))}
    </div>
  );
}

export function ServiceFilterCatalog({
  items,
}: {
  items: readonly RoofingService[];
}) {
  const [selected, setSelected] = useState<'all' | ServiceCategory>('all');
  const visible =
    selected === 'all' ? items : items.filter(item => item.category === selected);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter roofing systems by category"
        className="flex flex-wrap items-center gap-2.5"
      >
        {SERVICE_CATEGORIES.map(cat => {
          const active = selected === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(cat.id)}
              className={`min-h-10 rounded-ui border px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                active
                  ? 'border-accent bg-accent text-on-accent'
                  : 'border-line-strong bg-surface text-ink hover:border-ink'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-mono text-xs text-muted" aria-live="polite">
        Showing {visible.length} of {items.length} roofing systems &amp; services · 1 square = 100 sq ft
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {visible.map(service => (
          <ServiceSwatchBoard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-ui border border-line-strong bg-bg-band p-6">
        <div>
          <h3 className="text-lg font-extrabold">Not sure which system fits your roof pitch?</h3>
          <p className="mt-1 text-sm text-muted">
            Every written estimate follows an on-site measurement, attic ventilation check, and photo report.
          </p>
        </div>
        <SiteLink href="/contact/" className="button">
          Request a roof inspection
        </SiteLink>
      </div>
    </div>
  );
}
