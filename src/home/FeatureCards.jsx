import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FeatureCards.module.css';

export default function FeatureCards() {
  return (
    <section className={styles.cards}>
      <Link className={styles.card} to="/knowledge/knowledge-center/overview">
        <span>Knowledge</span>
        <h3>Knowledge Center</h3>
        <p>
          Microsoft 365, Azure, Security, Copilot, Migration and Licensing
          knowledge organized for enterprise consulting.
        </p>
      </Link>

      <Link className={styles.card} to="/knowledge/architecture/overview">
        <span>Architecture</span>
        <h3>Architecture Center</h3>
        <p>
          Reference architectures, design patterns and decision frameworks
          for Microsoft cloud projects.
        </p>
      </Link>

      <Link className={styles.card} to="/knowledge/proposal/overview">
        <span>Presales</span>
        <h3>Proposal Center</h3>
        <p>
          Executive summaries, discovery assets, SOW, WBS, risk, timeline
          and proposal structures.
        </p>
      </Link>

      <Link className={styles.card} to="/knowledge/toolkit/overview">
        <span>Delivery</span>
        <h3>Toolkit</h3>
        <p>
          Assessment checklists, migration checklists, architecture builders,
          calculators and prompt assets.
        </p>
      </Link>
    </section>
  );
}