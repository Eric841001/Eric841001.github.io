import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

const capabilities = [
  { label: 'Microsoft 365', value: 'Architecture' },
  { label: 'Security', value: 'Zero Trust' },
  { label: 'Copilot', value: 'Adoption' },
  { label: 'AI Agents', value: 'Governance' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Enterprise Architect Portfolio</p>

          <h1>
            Microsoft 365, Security, Copilot and AI Agent Architecture
          </h1>

          <p className={styles.subtitle}>
            A field-tested Microsoft knowledge platform for enterprise architecture,
            security governance, Copilot adoption, AI Agent strategy, migration planning
            and consulting delivery.
          </p>

          <p className={styles.byline}>
            Curated by Youngsun Kang, Enterprise Microsoft Architect.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/knowledge/projects/customer-success-reference-patterns">
              View Success References
            </Link>

            <Link className={styles.secondaryButton} to="/knowledge/knowledge-center/overview">
              Explore Knowledge Center
            </Link>

            <Link className={styles.secondaryButton} to="/knowledge/contact">
              Contact / Request Assets
            </Link>
          </div>

          <div className={styles.signalRow} aria-label="Portfolio focus areas">
            <span>Microsoft 365</span>
            <span>Security</span>
            <span>Copilot</span>
            <span>AI Agents</span>
            <span>Migration</span>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span>Architecture Portfolio</span>
            <strong>Customer-ready</strong>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <div key={item.label} className={styles.capability}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.deliveryStack}>
            <p>Delivery assets</p>
            <ul>
              <li>Readiness assessment</li>
              <li>Reference architecture</li>
              <li>SOW, WBS and risk register</li>
              <li>Anonymized customer success patterns</li>
              <li>Executive governance roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
