import React from 'react';
import styles from './PlatformStats.module.css';

const stats = [
  {
    value: '8',
    title: 'Architecture Domains',
    description: 'M365, Azure, Security, Copilot, AI Agents, Migration, Licensing and Governance.',
  },
  {
    value: '10+',
    title: 'Reference Patterns',
    description: 'Anonymized patterns across manufacturing, finance, logistics, enterprise groups and AI programs.',
  },
  {
    value: '100+',
    title: 'Knowledge Assets',
    description: 'Architecture notes, playbooks, SOW, WBS, checklists, templates and governance guides.',
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
