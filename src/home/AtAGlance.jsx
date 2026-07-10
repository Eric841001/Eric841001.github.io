import React from 'react';
import Link from '@docusaurus/Link';

import styles from './AtAGlance.module.css';

const focusAreas = [
  {
    label: '01. Copilot',
    title: 'Start with everyday knowledge work and adoption',
    path: '/knowledge/copilot/overview',
  },
  {
    label: '02. Copilot Studio',
    title: 'Build governed business agents and workflows',
    path: '/knowledge/copilot/copilot-studio-2026-platform-update',
  },
  {
    label: '03. M365 Agents',
    title: 'Extend Microsoft 365 with contextual agents',
    path: '/knowledge/copilot/agentic-ai-architecture',
  },
  {
    label: '04. Copilot Cowork',
    title: 'Operate long-running work with approval and cost control',
    path: '/knowledge/copilot/copilot-cowork-cost-governance',
  },
];

const journey = [
  'Prioritize use cases',
  'Secure data boundaries',
  'Build agents',
  'Operate with telemetry',
  'Scale the portfolio',
];

const shortcuts = [
  {
    title: 'I need the AI Agent Factory map',
    path: '/knowledge/search/ai-agent-factory',
  },
  {
    title: 'I need Copilot Studio 2026 changes',
    path: '/knowledge/copilot/copilot-studio-2026-platform-update',
  },
  {
    title: 'I need Cowork cost governance',
    path: '/knowledge/copilot/copilot-cowork-cost-governance',
  },
];

export default function AtAGlance() {
  return (
    <section className={styles.glance} aria-labelledby="at-a-glance-title">
      <div className={styles.header}>
        <p>AI adoption path</p>
        <h2 id="at-a-glance-title">Start with Copilot, then scale to governed agents</h2>
        <span>
          Enterprise AI adoption now moves from personal productivity to business
          agents, Microsoft 365 contextual agents and Copilot Cowork. The critical
          question is not which tool to buy, but how to govern work, data, cost and value.
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
            <span>Operating model</span>
            <strong>From AI interest to governed enterprise execution</strong>
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
