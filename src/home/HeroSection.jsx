import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Microsoft Enterprise Consulting Platform</p>

          <h1>
            Build Microsoft cloud consulting assets that scale.
          </h1>

          <p className={styles.subtitle}>
            A field-proven platform for Microsoft 365, Azure, Security, Copilot,
            migration, licensing, proposal and delivery excellence.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/knowledge/knowledge-center/overview">
              Explore Knowledge Center
            </Link>

            <Link className={styles.secondaryButton} to="/knowledge/proposal/overview">
              Open Proposal Center
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <span>Platform Coverage</span>

          <ul>
            <li>Microsoft 365 Architecture</li>
            <li>Security & Zero Trust</li>
            <li>Copilot Readiness</li>
            <li>Migration Playbooks</li>
            <li>Proposal / SOW / WBS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}