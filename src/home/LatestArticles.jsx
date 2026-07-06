import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LatestArticles.module.css';

const articles = [
  {
    category: 'Projects',
    title: 'Enterprise AI Agent Factory Case Study',
    description:
      'Anonymized Copilot Studio and AI Agent portfolio pattern for research, pricing, HR, ESG and presales scenarios.',
    path: '/knowledge/projects/case-study-enterprise-ai-agent-factory',
    meta: 'Customer Success / AI Agents',
  },
  {
    category: 'Projects',
    title: 'Manufacturing Copilot Adoption Case Study',
    description:
      'Anonymized Copilot adoption operating model for readiness, governance, pilot planning and value tracking.',
    path: '/knowledge/projects/case-study-manufacturing-copilot-adoption',
    meta: 'Customer Success / Copilot Adoption',
  },
  {
    category: 'Security',
    title: 'Financial SaaS Security Case Study',
    description:
      'Zero Trust, Conditional Access, Defender, Purview and SaaS access readiness for regulated environments.',
    path: '/knowledge/projects/case-study-financial-saas-security',
    meta: 'Security / Zero Trust',
  },
  {
    category: 'Copilot',
    title: 'Copilot Cowork Cost Governance',
    description:
      'Plan Copilot Cowork licensing, usage-based billing, Copilot Credits, spending controls and governance before rollout.',
    path: '/knowledge/copilot/copilot-cowork-cost-governance',
    meta: 'Copilot / Cost Governance',
  },
  {
    category: 'Microsoft 365',
    title: 'E3 vs E5 Licensing Decision Guide',
    description:
      'Compare Microsoft 365 E3 and E5 from security, compliance, governance and business value perspectives.',
    path: '/knowledge/microsoft365/e3-vs-e5',
    meta: 'Licensing / Decision Guide',
  },
];

export default function LatestArticles() {
  return (
    <section className={styles.latestArticles}>
      <div className={styles.header}>
        <p>Latest Knowledge</p>
        <h2>Latest Articles</h2>
        <span>
          Recently curated articles for Microsoft cloud consulting, architecture and presales.
        </span>
      </div>

      <div className={styles.grid}>
        {articles.map((article) => (
          <Link key={article.title} to={article.path} className={styles.card}>
            <span className={styles.category}>{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className={styles.meta}>{article.meta}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
