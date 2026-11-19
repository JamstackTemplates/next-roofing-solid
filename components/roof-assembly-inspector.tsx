'use client';

import { useState } from 'react';
import type { AssemblyLayer } from '../content/assembly';
import { RoofAssemblyDiagram } from './art/roof-assembly-diagram';

export function RoofAssemblyInspector({
  layers,
}: {
  layers: readonly AssemblyLayer[];
}) {
  const [activeId, setActiveId] = useState(layers[0]?.id ?? 'outer-deck');
  const active = layers.find(layer => layer.id === activeId) ?? layers[0];

  return (
    <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <RoofAssemblyDiagram activeId={active.id} onSelect={setActiveId} />
        {/* Highlighted spec panel directly beneath diagram */}
        <div
          className="mt-4 rounded-ui border-l-4 border-accent bg-surface p-5 shadow-xs ring-1 ring-line"
          aria-live="polite"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-ink">
              Layer 0{active.order} of 0{layers.length}
            </span>
            <span className="spec-tag">{active.standard}</span>
          </div>
          <h3 className="mt-2 text-xl font-extrabold">{active.name}</h3>
          <p className="mt-1 font-mono text-xs text-copper">{active.material}</p>
          <p className="mt-2 text-sm text-muted">{active.purpose}</p>
        </div>
      </div>

      {/* Six-layer engineering selector ledger (also readable statically without JS) */}
      <ol className="grid gap-2.5 lg:col-span-5">
        {layers.map(layer => {
          const selected = layer.id === active.id;
          return (
            <li key={layer.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveId(layer.id)}
                className={`w-full rounded-ui border p-4 text-left transition-colors ${
                  selected
                    ? 'border-accent bg-surface ring-1 ring-accent'
                    : 'border-line bg-surface/70 hover:border-line-strong hover:bg-surface'
                }`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        selected ? 'text-accent-ink' : 'text-muted'
                      }`}
                    >
                      0{layer.order}
                    </span>
                    <span className="font-display text-base font-bold text-ink">
                      {layer.name}
                    </span>
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                    {selected ? 'Active' : 'Inspect'}
                  </span>
                </span>
                <span className="mt-1.5 block pl-7 text-xs text-muted">
                  {layer.material}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
