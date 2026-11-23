import React from 'react';

export default function ArchitectureFigure({id, title, nodes}) {
  return (
    <section className="architecture-figure" aria-label={title}>
      <nav className="design-atlas atlas-figure" aria-label={title}>
        <strong className="atlas-caption">{title}</strong>
        <div className="atlas-components">
          {nodes.map(([key, label]) => <a key={key} href={'#' + id + '-' + key}>{label}</a>)}
        </div>
      </nav>
      <dl className="atlas-legend">
        {nodes.map(([key, label, description]) => (
          <div key={key} id={id + '-' + key} tabIndex={-1}>
            <dt>{label}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
