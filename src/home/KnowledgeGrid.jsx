import React from 'react';
import Link from '@docusaurus/Link';
import styles from './KnowledgeGrid.module.css';

const knowledgeItems = [
  {
    title: 'Microsoft 365',
    code: '01',
    description: 'Exchange, Teams, SharePoint와 OneDrive의 도입·운영.',
    path: '/knowledge/microsoft365/overview',
  },
  {
    title: 'Azure',
    code: '02',
    description: '랜딩 존부터 네트워크·ID·비용 관리까지.',
    path: '/knowledge/azure/overview',
  },
  {
    title: '보안',
    code: '03',
    description: 'Zero Trust, 조건부 액세스, Defender와 데이터 보호.',
    path: '/knowledge/security/overview',
  },
  {
    title: 'Copilot',
    code: '04',
    description: 'Copilot 도입 준비, 에이전트 설계와 운영·성과 측정.',
    path: '/knowledge/copilot/overview',
  },
  {
    title: '마이그레이션',
    code: '05',
    description: '테넌트·메일·파일과 협업 환경의 전환.',
    path: '/knowledge/migration/overview',
  },
  {
    title: '라이선스',
    code: '06',
    description: 'E3·E5·E7과 보안·Copilot의 포함 기능·추가 비용 비교.',
    path: '/knowledge/licensing/overview',
  },
];

export default function KnowledgeGrid() {
  return (
    <section id="browse-topics" className={styles.knowledgeGrid} aria-labelledby="browse-topics-title">
      <div className={styles.header}>
        <p>주제별 문서</p>
        <h2 id="browse-topics-title">기술별 가이드</h2>
        <span>
          필요한 기술을 선택해 설계와 운영 지침을 찾아보세요.
        </span>
      </div>

      <div className={styles.grid}>
        {knowledgeItems.map((item) => (
          <Link key={item.title} to={item.path} className={styles.card}>
            <div className={styles.code} aria-hidden="true">{item.code}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
