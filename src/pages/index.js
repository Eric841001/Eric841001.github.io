import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const cards = [
  ['Knowledge Center', 'Microsoft 365, Azure, Security and Copilot guidance.', '/docs/intro'],
  ['Microsoft 365', 'Licensing, migration, governance and Modern Work architecture.', '/docs/microsoft365/e3-vs-e5'],
  ['Architecture', 'Reference architecture and field-proven design decisions.', '/docs/intro'],
  ['Proposal Center', 'Executive summaries, SOW, WBS and consulting assets.', '/docs/intro'],
];

export default function Home() {
  return (
    <Layout title="Youngsun Kang" description="Microsoft Enterprise Platform">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Microsoft Enterprise Platform</p>
            <h1>Youngsun Kang</h1>
            <p className={styles.subtitle}>
              Field-proven Microsoft 365, Azure, Security and Copilot knowledge platform for enterprise consulting, architecture and presales.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Explore Knowledge
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/microsoft365/e3-vs-e5">
                View First Playbook
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cards}>
          {cards.map(([title, desc, link]) => (
            <Link className={styles.card} to={link} key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
