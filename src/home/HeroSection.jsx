import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

const capabilities = [
  {
    label: 'Copilot',
    value: 'Work AI entry point',
    path: '/knowledge/copilot/overview',
  },
  {
    label: 'Copilot Studio',
    value: 'Business agents',
    path: '/knowledge/copilot/copilot-studio-2026-platform-update',
  },
  {
    label: 'M365 Agents',
    value: 'In-context automation',
    path: '/knowledge/copilot/agentic-ai-architecture',
  },
  {
    label: 'Copilot Cowork',
    value: 'Long-running work',
    path: '/knowledge/copilot/copilot-cowork-cost-governance',
  },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Enterprise AI Adoption Architecture</p>

          <h1>
            From Copilot to Agents: how enterprise AI becomes real work
          </h1>

          <p className={styles.subtitle}>
            A practical Microsoft AI adoption platform that connects Microsoft 365
            Copilot, Copilot Studio, Microsoft 365 Agents, Copilot Cowork, security
            governance and measurable business outcomes.
          </p>

          <p className={styles.byline}>
            Curated by Youngsun Kang, Enterprise Microsoft Architect.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/knowledge/search/ai-agent-factory">
              Explore AI Adoption Path
            </Link>

            <Link className={styles.secondaryButton} to="/knowledge/copilot/copilot-studio-2026-platform-update">
              Copilot Studio Update
            </Link>

            <Link className={styles.secondaryButton} to="/knowledge/copilot/copilot-cowork-cost-governance">
              Cowork Governance
            </Link>
          </div>

          <div className={styles.signalRow} aria-label="Portfolio focus areas">
            <span>Copilot</span>
            <span>Copilot Studio</span>
            <span>M365 Agents</span>
            <span>Copilot Cowork</span>
            <span>AI Agents</span>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span>AI Adoption Journey</span>
            <strong>Governed scale</strong>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <Link key={item.label} className={styles.capability} to={item.path}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <span>Open</span>
              </Link>
            ))}
          </div>

          <div className={styles.deliveryStack}>
            <p>Enterprise guardrails</p>
            <ul>
              <li>Use case portfolio and value criteria</li>
              <li>Data, identity and permission boundary</li>
              <li>Agent lifecycle, owner and approval model</li>
              <li>Cost, quality and adoption telemetry</li>
              <li>Human review for sensitive actions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
