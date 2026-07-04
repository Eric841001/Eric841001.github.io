import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Enterprise Microsoft Knowledge Center</p>

          <h1>
            Youngsun Kang Enterprise Microsoft Knowledge Center
          </h1>

          <p className={styles.subtitle}>
            Practical Microsoft 365, Security, Copilot, Azure and AI Agent architecture
            knowledge for enterprise consulting, presales and delivery.
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
            <li>Copilot & AI Agents</li>
            <li>Migration Playbooks</li>
            <li>Proposal / SOW / WBS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
