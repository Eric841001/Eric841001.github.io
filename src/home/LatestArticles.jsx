import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LatestArticles.module.css';

const articles = [
  {
    category: 'Microsoft 365',
    title: 'E3 vs E5 Licensing Decision Guide',
    description:
      'Compare Microsoft 365 E3 and E5 from security, compliance, governance and business value perspectives.',
    path: '/knowledge/microsoft365/e3-vs-e5',
    meta: 'Licensing · Decision Guide',
  },
  {
    category: 'Security',
    title: 'Zero Trust Security Baseline',
    description:
      'Establish identity, device, access and data protection controls for enterprise Microsoft environments.',
    path: '/knowledge/security/overview',
    meta: 'Security · Baseline',
  },
  {
    category: 'Migration',
    title: 'Enterprise Migration Readiness',
    description:
      'Prepare tenant, mail, file and collaboration migration projects with practical assessment checkpoints.',
    path: '/knowledge/migration/overview',
    meta: 'Migration · Readiness',
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