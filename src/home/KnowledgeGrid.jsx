import React from 'react';
import Link from '@docusaurus/Link';
import styles from './KnowledgeGrid.module.css';

const knowledgeItems = [
  {
    title: 'Microsoft 365',
    code: 'M365',
    description: 'Modern Work, Exchange, Teams, SharePoint, OneDrive and governance guidance.',
    topics: ['E3/E5', 'Teams', 'SharePoint'],
    path: '/knowledge/microsoft365/overview',
  },
  {
    title: 'Azure',
    code: 'AZ',
    description: 'Cloud infrastructure, landing zone, network, identity and cost architecture.',
    topics: ['Landing Zone', 'VM', 'Cost'],
    path: '/knowledge/azure/overview',
  },
  {
    title: 'Security',
    code: 'SEC',
    description: 'Zero Trust, Conditional Access, Defender, Purview and data protection.',
    topics: ['Zero Trust', 'Defender', 'Purview'],
    path: '/knowledge/security/overview',
  },
  {
    title: 'Copilot',
    code: 'AI',
    description: 'Copilot readiness, adoption, governance, prompt strategy and KPI model.',
    topics: ['Readiness', 'Adoption', 'Prompt'],
    path: '/knowledge/copilot/overview',
  },
  {
    title: 'Migration',
    code: 'MIG',
    description: 'Tenant, mail, file server, Google Workspace and collaboration migration.',
    topics: ['Tenant', 'Mail', 'Files'],
    path: '/knowledge/migration/overview',
  },
  {
    title: 'Licensing',
    code: 'LIC',
    description: 'Microsoft 365, Entra, Intune, Defender, Purview and Copilot licensing decisions.',
    topics: ['E3/E5', 'BP', 'Copilot'],
    path: '/knowledge/licensing/overview',
  },
];

export default function KnowledgeGrid() {
  return (
    <section className={styles.knowledgeGrid}>
      <div className={styles.header}>
        <p>Knowledge Domains</p>
        <h2>Browse by Technology</h2>
        <span>
          Explore structured Microsoft cloud knowledge domains mapped to real consulting scenarios.
        </span>
      </div>

      <div className={styles.grid}>
        {knowledgeItems.map((item) => (
          <Link key={item.title} to={item.path} className={styles.card}>
            <div className={styles.code}>{item.code}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className={styles.topics}>
              {item.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>

            <strong>Open Documentation →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}