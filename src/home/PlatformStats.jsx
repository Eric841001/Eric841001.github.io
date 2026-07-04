import React from 'react';
import styles from './PlatformStats.module.css';

const stats = [
  {
    value: '8',
    title: 'Architecture Domains',
    description: 'M365, Azure, Security, Copilot, AI Agents, Migration, Licensing and Governance.',
  },
  {
    value: '6',
    title: 'Reference Patterns',
    description: 'Anonymized success patterns across manufacturing, finance, logistics and enterprise groups.',
  },
  {
    value: '30+',
    title: 'Delivery Assets',
    description: 'Playbooks, SOW, WBS, checklists, architecture notes and governance templates.',
  },
  {
    value: 'Field',
    title: 'Customer-Ready',
    description: 'Structured for presales, delivery, executive reporting and operational handover.',
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
