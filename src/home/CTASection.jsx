import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.label}>Next Action</p>

        <h2>Start building reusable enterprise consulting assets.</h2>

        <span>
          Move from one-time proposal work to a structured Microsoft Enterprise
          Consulting Platform that supports presales, architecture, delivery and customer enablement.
        </span>

        <div className={styles.actions}>
          <Link className={styles.primary} to="/knowledge/proposal/overview">
            Open Proposal Center
          </Link>

          <Link className={styles.secondary} to="/knowledge/toolkit/overview">
            Explore Toolkit
          </Link>
        </div>
      </div>
    </section>
  );
}