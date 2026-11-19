import { business } from '../content/business';
import { BrandMark } from './art/brand-mark';
import { SiteLink } from './site-link';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-4 border-accent bg-slate-band text-slate-band-ink">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9 shrink-0" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-band-muted">
            {business.introduction}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-slate-band-copper">
            {business.licence}
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-band-muted">
            Yard &amp; Office
          </h2>
          <p className="mt-3 text-sm text-slate-band-ink">{business.address.formatted}</p>
          <p className="mt-2 text-sm text-slate-band-muted">
            Mon–Fri 07:00–17:30 · Sat 08:00–13:00
          </p>
          <div className="mt-3 flex flex-col gap-1 text-sm">
            {business.phone ? (
              <a
                href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                className="font-mono text-slate-band-ink underline decoration-accent hover:text-white"
              >
                {business.phone}
              </a>
            ) : null}
            <a
              href={`mailto:${business.email}`}
              className="wrap-anywhere text-slate-band-muted underline hover:text-slate-band-ink"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-band-muted">
            Navigation
          </h2>
          <nav aria-label="Footer" className="mt-3 flex flex-col gap-2 text-sm">
            <SiteLink href="/" className="text-slate-band-ink hover:text-slate-band-accent">
              Home
            </SiteLink>
            <SiteLink href="/services/" className="text-slate-band-ink hover:text-slate-band-accent">
              Roof systems &amp; services
            </SiteLink>
            <SiteLink href="/projects/" className="text-slate-band-ink hover:text-slate-band-accent">
              Completed roofs
            </SiteLink>
            <SiteLink href="/contact/" className="text-slate-band-ink hover:text-slate-band-accent">
              Request an inspection
            </SiteLink>
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-band-line">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-5 text-xs text-slate-band-muted">
          <p>© {business.name} · {business.address.city}, {business.address.region}</p>
          <span title="Made with love by jamstacks.net">
            with <span role="img" aria-label="love">❤️</span>{' '}
            <a
              className="text-slate-band-ink no-underline hover:underline"
              href="https://jamstacks.net"
            >
              jamstacks.net
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
