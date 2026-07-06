import React from 'react';
import Link from '@docusaurus/Link';

import styles from './SignatureEntryPoints.module.css';

const entries = [
  {
    label: 'Architecture',
    title: 'Executive Architecture Blueprint',
    description:
      'Start here for the end-to-end Microsoft enterprise architecture story across Microsoft 365, Security, Copilot, Azure, Migration and Governance.',
    path: '/knowledge/architecture/executive-architecture-blueprint',
  },
  {
    label: 'Customer Success',
    title: 'Enterprise AI Agent Factory Case Study',
    description:
      'Review an anonymized enterprise pattern for Copilot Studio, AI Agent portfolio design, governance, adoption and measurable business value.',
    path: '/knowledge/projects/case-study-enterprise-ai-agent-factory',
  },
  {
    label: 'Asset Request',
    title: 'Contact and Asset Request',
    description:
      'Use this path to request sanitized templates, sample deliverables or a focused discussion after reviewing the public Knowledge Center.',
    path: '/knowledge/contact',
  },
];

export default function SignatureEntryPoints() {
  return (
    <section className={styles.signaturePaths} aria-labelledby="signature-entry-title">
      <div className={styles.header}>
        <p>For visitors from email signature</p>
        <h2 id="signature-entry-title">Start with the three strongest paths</h2>
        <span>
          If you arrived here from a mail signature, these pages show the architecture
          point of view, customer success pattern and asset request path most clearly.
        </span>
      </div>

      <div className={styles.grid}>
        {entries.map((entry) => (
          <Link className={styles.card} to={entry.path} key={entry.title}>
            <span className={styles.label}>{entry.label}</span>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <strong>Open path -&gt;</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
