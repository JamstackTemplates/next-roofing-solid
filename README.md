# Ridgeway Slate & Seam (`next-roofing-solid`)

A self-contained static Next.js website for residential and commercial roofing contractors — built
for **Ridgeway Slate & Seam** (fictitious Portland, Oregon sample for the Jamstacks gallery). No
application code depends on the starter or portal repository at runtime.

## Local preview

Local development requires Node 24 or later and npm.

```sh
npm ci
npm run dev
```

To build and verify locally, run `npm run check` and `npm start`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Architectural roofline hero, structural spec strip, 4 featured roof systems, interactive 6-layer roof assembly cutaway, recent Portland project job sheets, inspection workflow, and `RoofingContractor` JSON-LD |
| `/services/` | Interactive category-filtered roofing systems & repairs catalog with guide pricing per square, side-by-side comparison table, and native `<details>` FAQ |
| `/projects/` | Completed roof job sheets with architectural roof-shape silhouettes, Willamette Valley service areas, yard map, and office hours |
| `/contact/` | Hosted Jamstacks support form when configured; visible public email fallback (`CopyEmail`), office hours, and helpful details checklist |
| `/404.html` | Themed missing-shingle error page |

## Make it yours

| File | Owns |
| --- | --- |
| `content/business.ts` | Business name, tagline, licence, phone, email, Pearl District yard address, service areas, weekly office hours, and enquiry message guidance |
| `content/services.ts` | Roofing systems & repair catalog: IDs, categories, wind ratings, lifespans, guide prices per square (`pricePerSquareUsd`) / starting prices, `leadTime`, and `available` flags |
| `content/projects.ts` | Completed project job sheets (`serviceId` references `content/services.ts`, pitch, squares, neighborhood, condition & scope) |
| `content/assembly.ts` | Six structural layers for the interactive "Anatomy of a Solid Roof" cross-section |
| `content/faq.ts` | Roofing FAQ entries rendered in native `<details>` disclosures on `/services/` |
| `app/page.tsx`, `app/services/page.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`, `app/not-found.tsx` | Page-specific headings, introductions, and call-to-action copy written as JSX children |
| `site.config.json` | Public name, description, hostname, `timeZone` (`America/Los_Angeles`), and Jamstacks site/CDN integration |
| `app/tailwind.input.css` | Slate-and-terracotta palette tokens (light, automatic dark, explicit dark), Syne / Plus Jakarta Sans / JetBrains Mono mappings, standing-seam and drafting textures, and Jamstacks form variables |
| `components/art/*` | Bespoke inline SVG illustrations (`HeroRoofElevation`, `RoofAssemblyDiagram`, `MaterialProfileArt`, `ProjectRoofSilhouette`, `BrandMark`, `RidgeDivider`, `MissingShingleArt`) |
| `lib/structured-data.ts` | `RoofingContractor` JSON-LD derived from `content/business.ts` |
| `app/sitemap.ts` | Public routes (`/`, `/services/`, `/projects/`, `/contact/`) |

### Common owner edits

- **Update guide pricing, lead times, or availability:** Edit `pricePerSquareUsd`, `startingPriceUsd`, `leadTime`, or `available` in `content/services.ts`, then run `npm run check`.
- **Add a completed roof:** Append a new entry to `content/projects.ts` referencing an existing `serviceId` from `content/services.ts`.
- **Change business name, phone, email, or hours:** Edit `content/business.ts` (and update `site.config.json`'s `name` when renaming).
- **Fonts:** Self-hosted via `@fontsource-variable/syne`, `@fontsource-variable/plus-jakarta-sans`, and `@fontsource/jetbrains-mono` (SIL Open Font License 1.1).

## Appearance and optional local-business features

The starter uses system fonts, neutral Tailwind v4 tokens and the published `jamstacks` package's
ThemeProvider, ThemeScript and DarkModeToggle. No font download or font licence file is needed for
system fonts. Each designed template chooses and documents self-hosted font packages and their licences.
Utilities live in components; colours originate in CSS tokens with light, automatic-dark and explicit-dark
values plus `@theme inline` mappings. Keep the hosted form's primary fill dark enough for white text.
Keyboard focus, reduced motion and print styles are included. The footer credit is yours to keep,
reword or remove.

For a business with visiting hours, add address/directions/hours to typed content, set the IANA `timeZone`
in site.config.json and use optional `GoogleMap`, `TimeZoneNote` and `OpenBadge` components. GoogleMap
accepts an address and descriptive title; map helpers need no key. `OpenBadge` accepts seven
`OpeningHours` records, uses the business zone and refreshes each minute in the browser; static/no-JS
output is neutral. Same-day intervals only: overnight hours fail validation and need a tested extension
before use. The baseline home page does not load a map or assert opening hours.

## Public configuration

```json
{
  "name": "Business name",
  "description": "Public description",
  "domain": "next-business-minimal.jamstacks.net",
  "timeZone": "America/New_York",
  "jamstacks": { "siteId": "", "cdnUrl": "https://cdn.jamstacks.net" }
}
```

The starter itself leaves domain/timeZone unset. Gallery templates use their folder name plus
`.jamstacks.net`; customers replace the demo domain with their own. Do not invent canonical URLs when
the deployed address is unknown.

| Environment variable | Public build-time meaning |
| --- | --- |
| `JAMSTACKS_SITE` | Website ID; blank retains file default, absent ID gives email fallback |
| `NEXT_PUBLIC_JAMSTACKS_CDN_URL` | CDN asset base; default `https://cdn.jamstacks.net` |
| `NEXT_PUBLIC_SITE_DOMAIN` | Hostname overriding config domain |
| `SITE_TIME_ZONE` | IANA zone overriding config timeZone |
| `PAGES_BASE_PATH` | Project path such as `/preview`; blank for custom domain/root |
| `PAGES_BASE_URL` | Actual Pages origin and path; takes precedence for canonical URLs |
| `JAMSTACKS_ALLOW_LOCAL_CDN` | Explicit localhost-only testing opt-in; disallowed in Actions |

Copy .env.example to .env.local for Next.js local work. All listed values are public. Never add tokens,
SMTP credentials or publishing keys. Newer dependencies should stay within reviewed majors; update
package.json and package-lock.json together, then run the full checks.

## Contact contract

The real `<jamstacks-support-form>` host and one `{cdn}/sites/{siteId}/embed.js` bootstrap appear only
on Contact when configured. Without a site ID there is no embed host/request. Email remains visible
in either case. The hosted runtime owns name/email/message fields, validation, submission and results.
Never register the element locally, substitute a form or intercept submission. Contact navigation uses
full document loads via SiteLink because the runtime has no remount API. Copy must describe an enquiry,
not a confirmed booking/order/payment; no attachments or extra input fields.

For local Jamstacks development, configure an explicit local CDN URL and
`JAMSTACKS_ALLOW_LOCAL_CDN=1`; remote builds reject localhost. A locally loaded component does not prove
real message delivery. Test delivery separately against a configured site/backend.

## Checks and preview

```sh
npm run check
PAGES_BASE_PATH=/preview PAGES_BASE_URL=https://owner.github.io/preview npm run build
npm start -- --base /preview --port 3000
```

Tests cover config/provisioner compatibility, embed state, content rules, optional opening hours,
and structured-data escaping. Typecheck uses Next's generated route types.
When changing the Contact integration, base paths or canonical URLs, check the exported HTML and
sitemap. Verify both configured and unconfigured Contact with the corresponding build settings.
Test light/dark at desktop and mobile widths, keyboard navigation, unknown routes, repeated Contact
navigation and any added browser interactions. Return to a normal build before capturing final assets.

## GitHub Pages deployment

`.github/workflows/pages.yml` uses npm ci, tests, typecheck and static export. It preserves Jamstacks'
`provisioning_id` dispatch input
and correlated run name. It builds pull requests without deploying, and publishes main/manual runs.
Configure Pages to use GitHub Actions and set its custom domain to the same value as site.config.json.
DNS is managed separately; for template demos the CNAME targets `jamstacktemplates.github.io`.
Do not add public/CNAME. Enable HTTPS after the certificate is ready. This starter performs no remote setup.

## Content Security Policy

A host-level CSP must permit same-origin Next.js scripts/assets, the inline theme bootstrap (using an
appropriate hash/nonce policy), the configured Jamstacks CDN scripts/assets and the published form's
API connection origin. Derive actual directives from the deployed component. Optional maps require
`frame-src https://www.google.com`. Apply CSP at the host; static export cannot set response headers
through a running Next.js server. Do not put private credentials into CSP or relax policies blindly.

## Publishing assets and structure

`app/`, `components/`, `content/`, `lib/` and `types/` are the website. `scripts/` includes static
preview and verification, `tests/` covers customer behavior, and `.github/` supplies deployment.
`jamstacks/` is removable gallery-only source metadata. Ordinary builds, tests and Pages work after
it is deleted. To publish a gallery template, create [its manifest](jamstacks/README.md) and capture
genuine screenshots before running its separate publishing test:

```sh
node /home/mythz/src/mythz/jamstacks.net/tools/template-screenshots/capture.mjs \
  --template /path/to/next-type-style --modes light,dark --executable /usr/bin/chromium
node --test jamstacks/config.test.mjs
```

Before publication: replace neutral content and shell; validate industry data/schema and all links;
choose licensed fonts; verify both themes/base-path/embed states; create a neutral 1200×630 public/og.png
from the finished design and wire metadata; replace the icon; generate gallery captures and validate;
confirm domain/Pages settings and HTTPS; remove `plan/` and `.claude/skills/` after review. The website must not import or
link the planning folder. No stock screenshot or OG image is supplied as if it were final.
