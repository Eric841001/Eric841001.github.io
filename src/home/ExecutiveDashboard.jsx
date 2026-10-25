import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ExecutiveDashboard.module.css';

const items = [
  { title: 'Microsoft 365 진단', path: '/knowledge/playbooks/m365-assessment-playbook' },
  { title: 'Copilot 준비도 점검', path: '/knowledge/playbooks/copilot-readiness-playbook' },
  { title: '보안 현대화', path: '/knowledge/playbooks/security-modernization-playbook' },
  { title: 'SOW 템플릿', path: '/knowledge/downloads/downloads-sow-template' },
  { title: 'WBS 템플릿', path: '/knowledge/downloads/downloads-wbs-template' },
  { title: '진단 워크북', path: '/knowledge/downloads/m365-assessment-workbook' },
];

export default function ExecutiveDashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>
        <p>실무 자료</p>
        <h2>진단과 실행을 위한 자료</h2>
        <span>
          진단·설계·수행 계획에 필요한 가이드와 템플릿을 확인하세요.
        </span>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.title} to={item.path} className={styles.card}>
            <h3>{item.title}</h3>
            <span>자료 보기 →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
