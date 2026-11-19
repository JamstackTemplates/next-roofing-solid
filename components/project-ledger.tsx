import type { CompletedProject } from '../content/projects';
import type { RoofingService } from '../content/services';
import { ProjectRoofSilhouette } from './art/project-roof-silhouette';

export function ProjectLedger({
  items,
  services,
}: {
  items: readonly CompletedProject[];
  services: readonly RoofingService[];
}) {
  const serviceMap = new Map(services.map(s => [s.id, s.name]));

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map(project => (
        <article
          key={project.id}
          className="flex flex-col overflow-hidden rounded-ui border border-line-strong bg-surface"
        >
          <div className="bg-slate-band">
            <ProjectRoofSilhouette
              shape={project.roofShape}
              pitch={project.pitch}
              className="mx-auto h-32 w-full max-w-sm"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="font-bold text-accent-ink">{project.jobCode}</span>
              <span className="text-muted">
                {project.neighborhood} · {project.year}
              </span>
            </div>

            <h3 className="mt-2.5 text-xl font-extrabold leading-snug">{project.title}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="spec-tag">{serviceMap.get(project.serviceId) ?? project.serviceId}</span>
              <span className="spec-tag">{project.squares} sq</span>
              <span className="spec-tag">{project.pitch} pitch</span>
            </div>

            <dl className="mt-4 flex-1 space-y-3 border-t border-line pt-4 text-sm">
              <div>
                <dt className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-muted">
                  Condition found
                </dt>
                <dd className="mt-0.5 text-muted">{project.challenge}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-copper">
                  Structural scope
                </dt>
                <dd className="mt-0.5 text-ink">{project.solution}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}
