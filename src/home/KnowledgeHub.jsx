import React from 'react';
import Link from '@docusaurus/Link';
import styles from '../pages/index.module.css';

export default function KnowledgeHub() {
  return (
    <section className={styles.dashboard}>
      <h2>Knowledge Hub</h2>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Microsoft 365, Azure, Security, Copilot, Migration, Licensing..."
        />
      </div>

      <div className={styles.dashboardGrid}>
        <Link to="/knowledge/microsoft365/overview">Microsoft 365</Link>
        <Link to="/knowledge/azure/overview">Azure</Link>
        <Link to="/knowledge/security/overview">Security</Link>
        <Link to="/knowledge/copilot/overview">Copilot</Link>
        <Link to="/knowledge/migration/overview">Migration</Link>
        <Link to="/knowledge/licensing/overview">Licensing</Link>
      </div>
    </section>
  );
}