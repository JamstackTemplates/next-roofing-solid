import type { Metadata } from 'next';
import { roofingFaq } from '../../content/faq';
import { formatServicePrice, services } from '../../content/services';
import { PageHead } from '../../components/page-head';
import { ServiceFilterCatalog } from '../../components/service-catalog';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Standing-seam metal, natural quarry slate, architectural composite shingles, flat TPO membranes, storm flashing repairs, and copper gutters in Portland, OR.',
  alternates: { canonical: absoluteUrl('/services/') },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Roofing Systems & Repairs"
        specLabel="GUIDE PRICING IN USD"
        title="Engineered systems for Pacific Northwest weather."
      >
        <p>
          Filter by roof type to compare wind ratings, lifespans, and guide price ranges per
          roofing square (100 sq ft). Exact written quotes follow an on-site measurement.
        </p>
      </PageHead>

      <section className="wrap py-12">
        <ServiceFilterCatalog items={services} />
      </section>

      {/* Full-width semantic specification comparison table */}
      <section className="border-y border-line-strong bg-bg-band py-14">
        <div className="wrap">
          <p className="eyebrow">Side-by-Side Spec Sheet</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            System comparison ledger.
          </h2>

          <div className="mt-6 overflow-x-auto rounded-ui border border-line-strong bg-surface">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of roofing systems by service life, wind uplift rating, pitch, guide cost, and warranty
              </caption>
              <thead className="border-b border-line-strong bg-surface-raised font-mono text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3.5">System / Service</th>
                  <th scope="col" className="px-4 py-3.5">Lifespan</th>
                  <th scope="col" className="px-4 py-3.5">Wind rating</th>
                  <th scope="col" className="px-4 py-3.5">Best pitch</th>
                  <th scope="col" className="px-4 py-3.5">Guide cost</th>
                  <th scope="col" className="px-4 py-3.5">Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {services.map(service => (
                  <tr key={service.id} className="hover:bg-bg/60">
                    <th scope="row" className="px-4 py-3.5 font-bold text-ink">
                      <span className="block">{service.name}</span>
                      <span className="font-mono text-[0.7rem] font-normal text-muted">
                        {service.specCode}
                      </span>
                    </th>
                    <td className="px-4 py-3.5 font-mono text-xs">{service.lifespan}</td>
                    <td className="px-4 py-3.5 font-mono text-xs">
                      {service.windRatingMph ? `${service.windRatingMph} mph` : 'N/A'}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-xs">{service.bestPitch}</td>
                    <td className="px-4 py-3.5 font-mono text-xs font-bold text-accent-ink">
                      {formatServicePrice(service)}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-muted">{service.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Native exclusive <details> FAQ — searchable via Find-in-Page, works without JS */}
      <section className="wrap py-14">
        <div className="max-w-3xl">
          <p className="eyebrow">Common Questions</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Inspections, rainy-season builds, and warranties.
          </h2>
          <div className="mt-6">
            {roofingFaq.map((item, idx) => (
              <details
                key={item.id}
                name="roof-faq"
                open={idx === 0}
                className="faq-item"
              >
                <summary>{item.question}</summary>
                <p className="pb-5 text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
