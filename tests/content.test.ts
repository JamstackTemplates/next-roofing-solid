import assert from 'node:assert/strict';
import { test } from 'node:test';
import { assemblyLayers, validateAssemblyLayers } from '../content/assembly.ts';
import { business } from '../content/business.ts';
import { roofingFaq } from '../content/faq.ts';
import { projects, validateProjects } from '../content/projects.ts';
import { formatServicePrice, services, validateServices } from '../content/services.ts';
import { validateHours } from '../lib/hours.ts';
import { businessStructuredData, jsonLd } from '../lib/structured-data.ts';

test('business content has actionable required fields and valid hours', () => {
  for (const key of ['name', 'tagline', 'introduction', 'email', 'licence'] as const) {
    assert.ok(business[key].trim(), `business.${key}: required`);
  }
  assert.match(business.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'business.email: valid public email required');
  assert.ok(business.address.formatted.trim(), 'business.address.formatted: required');
  assert.ok(business.serviceAreas.length > 0, 'business.serviceAreas: at least one area required');
  assert.doesNotThrow(() => validateHours(business.hours));
  assert.ok(business.enquiries.title.trim(), 'business.enquiries.title: required');
  assert.ok(business.enquiries.introduction.trim(), 'business.enquiries.introduction: required');
  assert.ok(business.enquiries.usefulToInclude.length, 'business.enquiries.usefulToInclude: include message guidance');
  for (const tip of business.enquiries.usefulToInclude) {
    assert.ok(tip.trim(), 'business.enquiries.usefulToInclude: empty tip');
  }
});

test('roofing services pass validation and reject malformed owner edits with item-specific errors', () => {
  assert.doesNotThrow(() => validateServices(services));
  assert.ok(services.filter(s => s.featured).length === 4, 'services: expected 4 featured systems for home');
  assert.match(formatServicePrice(services[0]), /^\$540–\$680 \/ sq$/);

  assert.throws(
    () => validateServices([...services, { ...services[0] }]),
    /architectural-shingle.*duplicate/,
  );
  assert.throws(
    () =>
      validateServices(
        services.map(s =>
          s.id === 'standing-seam-metal' ? { ...s, pricePerSquareUsd: { min: 1500, max: 1200 } } : s,
        ),
      ),
    /standing-seam-metal.*min <= max/,
  );
  assert.throws(
    () =>
      validateServices(
        services.map(s => (s.id === 'natural-quarry-slate' ? { ...s, id: 'Bad Slug!' } : s)),
      ),
    /URL-safe slug/,
  );
});

test('completed projects pass validation and enforce valid serviceId references', () => {
  assert.doesNotThrow(() => validateProjects(projects, services));
  assert.ok(projects.filter(p => p.featured).length === 3, 'projects: expected 3 featured projects for home');

  assert.throws(
    () =>
      validateProjects(
        projects.map(p =>
          p.id === 'irvington-standing-seam' ? { ...p, serviceId: 'non-existent-system' } : p,
        ),
        services,
      ),
    /irvington-standing-seam.*unknown serviceId/,
  );
});

test('roof assembly layers and FAQ content are complete', () => {
  assert.doesNotThrow(() => validateAssemblyLayers(assemblyLayers));
  assert.ok(roofingFaq.length >= 4, 'faq: expected at least 4 roofing questions');
  for (const item of roofingFaq) {
    assert.ok(item.id.trim() && item.question.trim() && item.answer.trim(), `faq[${item.id}]: incomplete`);
  }
});

test('structured data emits RoofingContractor schema and escapes closing script content', () => {
  const schema = businessStructuredData();
  assert.equal(schema['@type'], 'RoofingContractor');
  assert.equal(schema.name, business.name);
  assert.equal(schema.email, business.email);
  assert.equal(schema.address.addressLocality, 'Portland');
  assert.equal(schema.openingHoursSpecification.length, 6);

  const value = { name: '</script><script>alert(1)</script>', text: '< & >' };
  const encoded = jsonLd(value);
  assert.ok(!encoded.includes('<'), 'JSON-LD must escape <');
  assert.deepEqual(JSON.parse(encoded), value);
});
