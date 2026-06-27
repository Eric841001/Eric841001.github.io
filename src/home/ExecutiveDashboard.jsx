import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ExecutiveDashboard.module.css';

const items = [
  { title: 'M365 Assessment', path: '/knowledge/playbooks/m365-assessment-playbook' },
  { title: 'Copilot Readiness', path: '/knowledge/playbooks/copilot-readiness-playbook' },
  { title: 'Security Modernization', path: '/knowledge/playbooks/security-modernization-playbook' },
  { title: 'SOW Template', path: '/knowledge/downloads/downloads-sow-template' },
  { title: 'WBS Template', path: '/knowledge/downloads/downloads-wbs-template' },
  { title: 'Assessment Workbook', path: '/knowledge/downloads/m365-assessment-workbook' },
];

export default function ExecutiveDashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>
        <p>Executive Dashboard</p>
        <h2>Consulting assets ready for delivery</h2>
        <span>
          Quickly access the most reusable assets for presales, assessment, architecture,
          delivery planning and executive reporting.
        </span>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.title} to={item.path} className={styles.card}>
            <h3>{item.title}</h3>
            <span>Open Asset →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}