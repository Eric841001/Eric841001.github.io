import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ScenarioLinks({summary, links}) {
  return <section className={styles.panel} aria-label="요약과 바로가기">
    <p>{summary}</p>
    <nav aria-label="상황별 바로가기">
      <div className={styles.navHeading}>
        <strong>무엇을 확인하려고 하시나요?</strong>
        <span className={styles.flow} aria-hidden="true">
          <i className={styles.gate} /><i className={styles.sheet} /><i className={styles.answer} />
        </span>
      </div>
      {links.map(([label, target]) => (
        <Link key={target} to={target}>{label}<span aria-hidden="true">{target.startsWith('#') ? '↓' : '→'}</span></Link>
      ))}
    </nav>
  </section>;
}
