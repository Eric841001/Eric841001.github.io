import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';

const paths = [
  {
    label: '01',
    title: 'Request Assets',
    text: 'Ask for reusable SOW, WBS, checklist or workbook samples after confirming the use case.',
    path: '/knowledge/contact',
  },
  {
    label: '02',
    title: 'Review Success Patterns',
    text: 'Explore anonymized reference patterns by industry, workload and delivery scenario.',
    path: '/knowledge/projects/customer-success-reference-patterns',
  },
  {
    label: '03',
    title: 'Start with AI Adoption',
    text: 'Jump into Copilot, Copilot Studio, M365 Agents and Cowork operating guidance.',
    path: '/knowledge/search/ai-agent-factory',
  },
];

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>For Visitors from Email Signature</p>

          <h2>Choose the next path: asset request, reference review or AI adoption.</h2>

          <span>
            Public pages explain the architecture, governance and delivery approach. Editable
            templates or customer-ready samples can be shared after confirming the use case,
            confidentiality boundary and target Microsoft workload.
          </span>
        </div>

        <div className={styles.pathGrid}>
          {paths.map((item) => (
            <Link className={styles.pathCard} to={item.path} key={item.title}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
              <em>Open</em>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
