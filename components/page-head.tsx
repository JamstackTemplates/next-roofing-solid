import type { ReactNode } from 'react';
import { BlueprintPageMotif } from './art/ridge-divider';

export function PageHead({
  eyebrow,
  title,
  specLabel,
  children,
}: {
  eyebrow?: string;
  title: string;
  specLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="drafting-surface border-b border-line-strong bg-bg-band">
      <div className="wrap flex flex-col justify-between gap-6 py-12 md:flex-row md:items-end md:py-16">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {specLabel ? <span className="spec-tag">{specLabel}</span> : null}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-4 max-w-[var(--measure)] text-base text-muted sm:text-lg">
              {children}
            </div>
          ) : null}
        </div>
        <BlueprintPageMotif className="hidden h-20 w-44 shrink-0 md:block" />
      </div>
    </section>
  );
}
