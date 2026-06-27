import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FeaturedTemplates.module.css';

const templates = [
  {
    type: 'Executive',
    title: 'Executive Summary',
    description:
      'C-Level proposal opening structure for business value, scope and executive decision alignment.',
    path: '/knowledge/proposal/overview',
  },
  {
    type: 'SOW',
    title: 'Statement of Work',
    description:
      'Scope, deliverables, assumptions, exclusions, acceptance criteria and responsibility model.',
    path: '/knowledge/proposal/overview',
  },
  {
    type: 'WBS',
    title: 'Work Breakdown Structure',
    description:
      'Assessment, design, implementation, validation, handover and project management structure.',
    path: '/knowledge/proposal/overview',
  },
  {
    type: 'Assessment',
    title: 'Assessment Checklist',
    description:
      'Enterprise tenant assessment checklist for identity, security, collaboration and readiness.',
    path: '/knowledge/toolkit/overview',
  },
  {
    type: 'Migration',
    title: 'Migration Checklist',
    description:
      'Practical migration checklist for mail, Teams, SharePoint, OneDrive, domains and cutover.',
    path: '/knowledge/migration/overview',
  },
  {
    type: 'Architecture',
    title: 'Architecture Diagram',
    description:
      'Enterprise reference architecture diagrams for Microsoft 365, Azure, Security and Copilot.',
    path: '/knowledge/architecture/overview',
  },
];

export default function FeaturedTemplates() {
  return (
    <section className={styles.templates}>
      <div className={styles.header}>
        <p>Consulting Assets</p>
        <h2>Featured Templates</h2>
        <span>
          Reusable templates for proposal, assessment, architecture and delivery execution.
        </span>
      </div>

      <div className={styles.grid}>
        {templates.map((template) => (
          <Link key={template.title} to={template.path} className={styles.card}>
            <span className={styles.type}>{template.type}</span>

            <h3>{template.title}</h3>

            <p>{template.description}</p>

            <strong>Open Template →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}