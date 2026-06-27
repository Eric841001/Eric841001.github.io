import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CustomerScenarios.module.css';

const scenarios = [
  {
    industry: 'Manufacturing',
    title: 'Global Microsoft 365 Security Governance',
    description:
      'Identity, device, data protection and collaboration governance for global manufacturing environments.',
    focus: 'Security · Governance · Global Rollout',
    path: '/knowledge/projects/overview',
  },
  {
    industry: 'Financial',
    title: 'Zero Trust and Compliance Readiness',
    description:
      'Conditional Access, Defender, Purview and audit readiness for regulated financial service organizations.',
    focus: 'Zero Trust · Compliance · Risk Control',
    path: '/knowledge/projects/overview',
  },
  {
    industry: 'Retail',
    title: 'Collaboration Platform Modernization',
    description:
      'Teams, SharePoint, OneDrive and governance operating model for distributed retail workforces.',
    focus: 'Teams · SharePoint · Governance',
    path: '/knowledge/projects/overview',
  },
  {
    industry: 'Construction',
    title: 'File Server to Microsoft 365 Migration',
    description:
      'NAS and file server migration into SharePoint, Teams and OneDrive with permission redesign.',
    focus: 'Migration · Permission · Information Architecture',
    path: '/knowledge/projects/overview',
  },
];

export default function CustomerScenarios() {
  return (
    <section className={styles.scenarios}>
      <div className={styles.header}>
        <p>Field Experience</p>
        <h2>Customer Scenarios</h2>
        <span>
          Generalized customer scenarios based on enterprise Microsoft consulting delivery patterns.
        </span>
      </div>

      <div className={styles.grid}>
        {scenarios.map((scenario) => (
          <Link key={scenario.title} to={scenario.path} className={styles.card}>
            <span className={styles.industry}>{scenario.industry}</span>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            <div className={styles.focus}>{scenario.focus}</div>
            <strong>Open Scenario →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}