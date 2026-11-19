import assert from 'node:assert/strict';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { DAYS, openingLabel, validateHours, type OpeningHours } from '../lib/hours.ts';

const hours: OpeningHours[] = DAYS.map(day => (day === 'Monday' ? { day } : { day, opens: '09:00', closes: '17:00' }));
const at = (date: string, zone = 'America/New_York') => openingLabel(hours, zone, new Date(date));

test('opening inclusive, closing exclusive; business zone wins over visitor zone', () => {
  assert.equal(at('2026-11-17T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z'), 'Open now · until 17:00');
  assert.equal(at('2026-11-17T22:00:00Z'), 'Closed · opens Wednesday at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z', 'Asia/Tokyo'), 'Closed · opens Wednesday at 09:00');
});

test('closed weekdays and week wrap find the next service', () => {
  assert.equal(at('2026-11-16T18:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(at('2026-11-15T23:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(openingLabel(DAYS.map(day => ({ day })), 'UTC'), 'Closed · see opening hours');
});

test('missing/invalid zones stay neutral and DST changes preserve local service times', () => {
  assert.equal(at('2026-11-17T14:00:00Z', ''), 'See opening hours');
  assert.equal(at('2026-11-17T14:00:00Z', 'Mars/Base'), 'See opening hours');
  assert.equal(at('2026-03-08T12:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-03-08T13:00:00Z'), 'Open now · until 17:00');
  assert.equal(at('2026-11-01T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-01T14:00:00Z'), 'Open now · until 17:00');
});

test('Ridgeway Slate & Seam hours handle Portland schedule boundaries, Sunday wrap, and Pacific DST', () => {
  const pdx = (iso: string) => openingLabel(business.hours, 'America/Los_Angeles', new Date(iso));
  // Standard time (PST = UTC-8): Monday 07:00 local = 15:00Z
  assert.equal(pdx('2026-11-16T14:59:00Z'), 'Closed · opens today at 07:00');
  assert.equal(pdx('2026-11-16T15:00:00Z'), 'Open now · until 17:30');
  // Saturday 12:59 PST (20:59Z) open, 13:00 PST (21:00Z) wraps over closed Sunday to Monday 07:00
  assert.equal(pdx('2026-11-21T20:59:00Z'), 'Open now · until 13:00');
  assert.equal(pdx('2026-11-21T21:00:00Z'), 'Closed · opens Monday at 07:00');
  // Daylight time (PDT = UTC-7): Monday after March 8, 2026 DST spring-forward, 07:00 local = 14:00Z
  assert.equal(pdx('2026-03-09T13:59:00Z'), 'Closed · opens today at 07:00');
  assert.equal(pdx('2026-03-09T14:00:00Z'), 'Open now · until 17:30');
});

test('invalid/incomplete/overnight intervals name the weekday to fix', () => {
  assert.doesNotThrow(() => validateHours(hours));
  for (const opens of ['24:00', '9:00', '18:00']) {
    assert.throws(() => validateHours(hours.map(x => (x.day === 'Tuesday' ? { ...x, opens } : x))), /Tuesday/);
  }
  assert.throws(() => validateHours(hours.slice(1)), /Monday/);
  assert.throws(() => validateHours(hours.map(x => (x.day === 'Tuesday' ? { ...x, closes: undefined } : x))), /Tuesday/);
});
