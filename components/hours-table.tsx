import type { OpeningHours } from '../lib/hours';
import { OpenBadge } from './open-badge';
import { TimeZoneNote } from './time-zone-note';

export function HoursTable({
  hours,
  heading = 'Office & yard hours',
}: {
  hours: readonly OpeningHours[];
  heading?: string;
}) {
  return (
    <div className="rounded-ui border border-line-strong bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        <h3 className="text-lg font-bold">{heading}</h3>
        <span className="spec-tag text-copper">
          <OpenBadge hours={hours} />
        </span>
      </div>
      <dl className="mt-3 divide-y divide-line text-sm">
        {hours.map(entry => (
          <div key={entry.day} className="flex items-center justify-between py-2">
            <dt className="font-semibold text-ink">{entry.day}</dt>
            <dd className="font-mono text-xs text-muted">
              {entry.opens && entry.closes ? `${entry.opens} – ${entry.closes}` : 'Closed'}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 font-mono text-xs text-muted">
        <TimeZoneNote />
      </p>
    </div>
  );
}
