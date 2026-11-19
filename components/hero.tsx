import type { ReactNode } from 'react';
import { HeroRoofElevation } from './art/hero-roof-elevation';
import { SiteLink } from './site-link';

type ContentProps = { children: ReactNode };

function HeroSection({ children }: ContentProps) {
  return (
    <section className="seam-surface border-b border-line-strong bg-bg">
      <div className="wrap grid items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="lg:col-span-6">{children}</div>
        <div className="lg:col-span-6">
          <HeroRoofElevation className="w-full h-auto drop-shadow-sm" />
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: ContentProps) {
  return <p className="eyebrow">{children}</p>;
}

function Heading({ children }: ContentProps) {
  return (
    <h1 className="mt-3 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.65rem]">
      {children}
    </h1>
  );
}

function Introduction({ children }: ContentProps) {
  return <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{children}</p>;
}

function Actions({ children }: ContentProps) {
  return <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div>;
}

function PrimaryAction({ href, children }: { href: string; children: ReactNode }) {
  return (
    <SiteLink href={href} className="button">
      {children}
    </SiteLink>
  );
}

function SecondaryAction({ href, children }: { href: string; children: ReactNode }) {
  return (
    <SiteLink href={href} className="button button-quiet">
      {children}
    </SiteLink>
  );
}

function Meta({ children }: ContentProps) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-xs text-muted">
      {children}
    </div>
  );
}

export const Hero = Object.assign(HeroSection, {
  Eyebrow,
  Heading,
  Introduction,
  Actions,
  PrimaryAction,
  SecondaryAction,
  Meta,
});
