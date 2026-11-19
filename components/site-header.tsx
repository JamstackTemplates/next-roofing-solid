import { DarkModeToggle } from 'jamstacks';
import { business } from '../content/business';
import { BrandMark } from './art/brand-mark';
import { EaveTrim } from './art/eave-trim';
import { SiteLink } from './site-link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="bg-surface">
        <div className="wrap flex min-h-20 flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3">
          <SiteLink
            href="/"
            className="flex items-center gap-3 text-ink no-underline hover:no-underline"
          >
            <BrandMark className="h-9 w-9 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
                {business.name}
              </span>
              <span className="mt-1 hidden font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted sm:inline">
                Portland, OR · CCB #214890
              </span>
            </span>
          </SiteLink>
  
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <SiteLink href="/" markCurrent="page" className="nav-link py-1 text-ink hover:text-accent-ink">
              Home
            </SiteLink>
            <SiteLink href="/services/" markCurrent="page" className="nav-link py-1 text-ink hover:text-accent-ink">
              Services
            </SiteLink>
            <SiteLink href="/projects/" markCurrent="page" className="nav-link py-1 text-ink hover:text-accent-ink">
              Projects
            </SiteLink>
            <SiteLink
              href="/contact/"
              markCurrent="page"
              className="rounded-ui border border-accent bg-accent px-3.5 py-1.5 text-on-accent no-underline hover:bg-accent-hover hover:no-underline"
            >
              Contact
            </SiteLink>
            <DarkModeToggle />
          </nav>
        </div>
      </div>
      <EaveTrim id="header-eave" />
    </header>
  );
}
