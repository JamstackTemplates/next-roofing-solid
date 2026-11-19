import type { ReactNode } from 'react';

function SpecStripSection({ children }: { children: ReactNode }) {
  return (
    <section aria-label="Key structural standards" className="bg-slate-band text-slate-band-ink">
      <div className="wrap grid grid-cols-2 divide-y divide-slate-band-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {children}
      </div>
    </section>
  );
}

function Item({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="px-4 py-7 sm:px-6">
      <p className="font-mono text-2xl font-bold tracking-tight text-slate-band-ink sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 font-display text-sm font-bold text-slate-band-accent">
        {label}
      </p>
      <p className="mt-1 text-xs text-slate-band-muted">{detail}</p>
    </div>
  );
}

export const SpecStrip = Object.assign(SpecStripSection, { Item });
