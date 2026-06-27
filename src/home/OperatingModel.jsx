import React from 'react';
import styles from './OperatingModel.module.css';

export default function OperatingModel() {
  return (
    <section className={styles.operatingModel}>
      <div className={styles.header}>
        <p>Operating Model</p>
        <h2>From Knowledge to Delivery</h2>
        <span>
          This platform connects consulting knowledge, proposal assets,
          architecture standards and delivery execution into one repeatable operating model.
        </span>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <strong>01</strong>
          <h3>Discover</h3>
          <p>Capture business context, tenant status, security requirements and project constraints.</p>
        </div>

        <div className={styles.card}>
          <strong>02</strong>
          <h3>Assess</h3>
          <p>Evaluate licensing, architecture, governance, migration and operational readiness.</p>
        </div>

        <div className={styles.card}>
          <strong>03</strong>
          <h3>Design</h3>
          <p>Define target architecture, policies, implementation scope and customer-ready roadmap.</p>
        </div>

        <div className={styles.card}>
          <strong>04</strong>
          <h3>Deliver</h3>
          <p>Execute implementation with reusable playbooks, checklists, templates and lessons learned.</p>
        </div>
      </div>
    </section>
  );
}