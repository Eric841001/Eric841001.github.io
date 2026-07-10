import React from 'react';
import Link from '@docusaurus/Link';

import styles from './AtAGlance.module.css';

const focusAreas = [
  {
    label: 'Microsoft 365',
    title: 'Tenant, collaboration and operations',
    path: '/knowledge/microsoft365/overview',
  },
  {
    label: 'Security',
    title: 'Zero Trust, Defender, Purview and governance',
    path: '/knowledge/security/overview',
  },
  {
    label: 'Copilot',
    title: 'Readiness, adoption and data protection',
    path: '/knowledge/copilot/overview',
  },
  {
    label: 'AI Agent',
    title: 'Agent Factory, operating model and controls',
    path: '/knowledge/search/ai-agent-factory',
  },
];

const journey = [
  'Assess',
  'Design',
  'Govern',
  'Deliver',
  'Reference',
];

const shortcuts = [
  {
    title: 'I need an executive view',
    path: '/knowledge/architecture/executive-architecture-blueprint',
  },
  {
    title: 'I need customer proof',
    path: '/knowledge/projects/customer-success-reference-patterns',
  },
  {
    title: 'I need delivery assets',
    path: '/knowledge/downloads/overview',
  },
];

export default function AtAGlance() {
  return (
    <section className={styles.glance} aria-labelledby="at-a-glance-title">
      <div className={styles.header}>
        <p>At a glance</p>
        <h2 id="at-a-glance-title">Choose the right architecture path in seconds</h2>
        <span>
          The Knowledge Center is organized around the decisions enterprise visitors
          usually need to make first: scope, risk, operating model and delivery assets.
        </span>
      </div>

      <div className={styles.layout}>
        <div className={styles.topicMap} aria-label="Primary knowledge areas">
          {focusAreas.map((area) => (
            <Link className={styles.topic} to={area.path} key={area.label}>
              <strong>{area.label}</strong>
              <span>{area.title}</span>
            </Link>
          ))}
        </div>

        <div className={styles.flow} aria-label="Architecture delivery journey">
          <div className={styles.flowHeader}>
            <span>Delivery logic</span>
            <strong>From question to reusable reference</strong>
          </div>

          <ol>
            {journey.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.shortcuts} aria-label="Recommended next actions">
          <span className={styles.shortcutLabel}>Fast entry</span>
          {shortcuts.map((item) => (
            <Link className={styles.shortcut} to={item.path} key={item.title}>
              {item.title}
              <span>Open</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
