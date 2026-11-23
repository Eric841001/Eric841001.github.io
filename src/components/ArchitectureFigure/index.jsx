import React from 'react';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function modelFor(path, id) {
  if (/governance|human-in-the-loop|data-lifecycle/.test(id)) return 'governance';
  if (/copilot|multi-agent|frontier-finance|enterprise-prompt/.test(path)) return 'copilot';
  if (/azure/.test(path)) return 'azure';
  return 'security';
}

export default function ArchitectureFigure({id, title, nodes}) {
  const {pathname} = useLocation();
  const image = useBaseUrl('/img/atlas/' + modelFor(pathname, id) + '.webp');
  const middle = Math.ceil(nodes.length / 2);
  const branch = items => (
    <div className="atlas-branch">
      {items.map(([key, label]) => <a key={key} href={'#' + id + '-' + key}>{label}</a>)}
    </div>
  );
  return (
    <section className="architecture-figure" aria-label={title}>
      <nav className="design-atlas atlas-figure" aria-label={title}>
        <strong className="atlas-caption">{title}</strong>
        <div className="atlas-plan">
          <div className="atlas-model" aria-hidden="true"><img src={image} alt="" width="512" height="512" loading="lazy" /></div>
          {branch(nodes.slice(0, middle))}
          {branch(nodes.slice(middle))}
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
