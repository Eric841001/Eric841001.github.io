import React from 'react';
import Link from '@docusaurus/Link';

import styles from './ArchitecturePreview.module.css';

const layers = [
  {
    title: 'Experience',
    items: ['Microsoft 365', 'Teams', 'SharePoint', 'Copilot'],
  },
  {
    title: 'Control',
    items: ['Entra ID', 'Intune', 'Conditional Access', 'Purview'],
  },
  {
    title: 'Protection',
    items: ['Defender XDR', 'DLP', 'Audit', 'Zero Trust'],
  },
  {
    title: 'Delivery',
    items: ['SOW', 'WBS', 'Risk Register', 'Handover'],
  },
];

export default function ArchitecturePreview() {
  return (
    <section className={styles.preview} aria-labelledby="architecture-preview-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p>Architecture Preview</p>
          <h2 id="architecture-preview-title">
            One operating model across Microsoft 365, Security, Copilot and AI Agents
          </h2>
          <span>
            The Knowledge Center connects platform architecture, governance controls,
            adoption programs and delivery assets into a reusable consulting model.
          </span>
          <div className={styles.actions}>
            <Link to="/knowledge/architecture/executive-architecture-blueprint">
              Executive Blueprint
            </Link>
            <Link to="/knowledge/projects/customer-success-reference-patterns">
              Success Patterns
            </Link>
          </div>
        </div>

        <div className={styles.diagram} aria-label="Microsoft enterprise architecture preview">
          {layers.map((layer, index) => (
            <div className={styles.layer} key={layer.title}>
              <div className={styles.layerHeader}>
                <strong>{`0${index + 1}`}</strong>
                <h3>{layer.title}</h3>
              </div>
              <div className={styles.items}>
                {layer.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.backbone}>
            <strong>Governance Backbone</strong>
            <span>Policy, ownership, evidence, lifecycle and executive reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
}
