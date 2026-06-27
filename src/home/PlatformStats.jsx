import React from 'react';
import styles from './PlatformStats.module.css';

const stats = [
  {
    value: '6',
    title: 'Knowledge Domains',
    description: 'Microsoft 365, Azure, Security, Copilot, Migration and Licensing.',
  },
  {
    value: '4',
    title: 'Consulting Asset Areas',
    description: 'Architecture, Proposal Center, Toolkit and Customer Scenarios.',
  },
  {
    value: '10',
    title: 'Article Sections',
    description: 'Standardized document structure for reusable consulting knowledge.',
  },
  {
    value: '100%',
    title: 'Customer-Ready',
    description: 'Designed for presales, delivery, executive reporting and handover.',
  },
];

export default function PlatformStats() {
  return (
    <section className={styles.stats}>
      {stats.map((item) => (
        <div key={item.title} className={styles.card}>
          <strong>{item.value}</strong>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}