import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CustomerScenarios.module.css';

const scenarios = [
  {
    industry: 'Enterprise AI',
    title: 'AI Agent Factory Operating Model',
    description:
      'Copilot Studio and AI Agent portfolio pattern for research reporting, pricing, HR inquiry, ESG review and proposal support.',
    focus: 'Copilot Studio / AI Agents / Governance',
    path: '/knowledge/projects/case-study-enterprise-ai-agent-factory',
  },
  {
    industry: 'Manufacturing',
    title: 'Copilot Adoption Operating Model',
    description:
      'Readiness, governance, pilot planning and value tracking for large Microsoft 365 Copilot rollouts.',
    focus: 'Copilot / Adoption / Governance',
    path: '/knowledge/projects/case-study-manufacturing-copilot-adoption',
  },
  {
    industry: 'Financial',
    title: 'SaaS Security and Zero Trust Readiness',
    description:
      'Conditional Access, Defender, Purview and SaaS access controls for regulated enterprise networks.',
    focus: 'Zero Trust / Compliance / Risk Control',
    path: '/knowledge/projects/case-study-financial-saas-security',
  },
  {
    industry: 'Logistics',
    title: 'Exchange Online and M365 Modernization',
    description:
      'Mail, collaboration and security modernization with assessment, cutover planning and admin handover.',
    focus: 'Migration / Exchange Online / Operations',
    path: '/knowledge/projects/case-study-logistics-exchange-modernization',
  },
  {
    industry: 'Enterprise Group',
    title: 'Multi-Tenant Governance Strategy',
    description:
      'Tenant role model, cross-tenant access, security baseline and consolidation roadmap for group companies.',
    focus: 'Tenant Strategy / Identity / Governance',
    path: '/knowledge/projects/case-study-enterprise-group-governance',
  },
];

export default function CustomerScenarios() {
  return (
    <section className={styles.scenarios}>
      <div className={styles.header}>
        <p>Field Experience</p>
        <h2>Customer Scenarios</h2>
        <span>
          Anonymized customer success patterns based on enterprise Microsoft consulting delivery assets.
        </span>
      </div>

      <div className={styles.grid}>
        {scenarios.map((scenario) => (
          <Link key={scenario.title} to={scenario.path} className={styles.card}>
            <span className={styles.industry}>{scenario.industry}</span>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            <div className={styles.focus}>{scenario.focus}</div>
            <strong>Open Scenario -&gt;</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
