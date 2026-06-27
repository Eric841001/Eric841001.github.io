import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DocsQuickAccess.module.css';

const links = [
  {
    label: 'Knowledge',
    title: 'Knowledge Center',
    path: '/knowledge/knowledge-center/overview',
  },
  {
    label: 'Presales',
    title: 'Proposal Center',
    path: '/knowledge/proposal/overview',
  },
  {
    label: 'Tools',
    title: 'Toolkit',
    path: '/knowledge/toolkit/overview',
  },
  {
    label: 'Field',
    title: 'Customer Projects',
    path: '/knowledge/projects/overview',
  },
  {
    label: 'Assets',
    title: 'Downloads',
    path: '/knowledge/downloads',
  },
];

export default function DocsQuickAccess() {
  return (
    <section className={styles.quickAccess}>
      <div className={styles.header}>
        <p>Quick Access</p>
        <h2>Jump into core platform areas</h2>
      </div>

      <div className={styles.grid}>
        {links.map((item) => (
          <Link key={item.title} to={item.path} className={styles.card}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}