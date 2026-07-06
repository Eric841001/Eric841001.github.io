import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.label}>For Visitors from Email Signature</p>

        <h2>Review the portfolio, then request the right consulting asset.</h2>

        <span>
          Public pages explain the architecture, governance and delivery approach. Editable
          templates or customer-ready samples can be shared after confirming the use case,
          confidentiality boundary and target Microsoft workload.
        </span>

        <div className={styles.actions}>
          <Link className={styles.primary} to="/knowledge/contact">
            Contact / Request Assets
          </Link>

          <Link className={styles.secondary} to="/knowledge/projects/customer-success-reference-patterns">
            View Success References
          </Link>
        </div>
      </div>
    </section>
  );
}
