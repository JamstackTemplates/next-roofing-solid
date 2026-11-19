import { MissingShingleArt } from '../components/art/ridge-divider';
import { SiteLink } from '../components/site-link';

export default function NotFound() {
  return (
    <section className="drafting-surface flex min-h-[65vh] items-center py-16">
      <div className="wrap grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow">Error 404 · Missing Course</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            That shingle is missing.
          </h1>
          <p className="mt-4 max-w-lg text-muted">
            The page you looked for is not on this roofline. Head back to our home page, compare
            roofing systems, or send an inspection enquiry.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <SiteLink href="/" className="button">
              Back to home
            </SiteLink>
            <SiteLink href="/services/" className="button button-quiet">
              Roof systems
            </SiteLink>
            <SiteLink href="/contact/" className="button button-quiet">
              Contact us
            </SiteLink>
          </div>
        </div>
        <div className="md:col-span-6">
          <MissingShingleArt className="mx-auto w-full max-w-md h-auto" />
        </div>
      </div>
    </section>
  );
}
