import React from 'react';
import Link from '@docusaurus/Link';
import styles from './KnowledgeGrid.module.css';

const knowledgeItems = [
  {
    title: 'Microsoft 365',
    code: 'M365',
    description: 'Exchange, Teams, SharePoint와 OneDrive의 도입·운영.',
    topics: ['E3/E5/E7', 'Teams', 'SharePoint'],
    path: '/knowledge/microsoft365/overview',
  },
  {
    title: 'Azure',
    code: 'AZ',
    description: '랜딩 존, 네트워크, ID와 비용을 고려한 클라우드 설계.',
    topics: ['Landing Zone', 'VM', 'Cost'],
    path: '/knowledge/azure/overview',
  },
  {
    title: 'Security',
    code: 'SEC',
    description: 'Zero Trust, 조건부 액세스, Defender와 데이터 보호.',
    topics: ['Zero Trust', 'Defender', 'Purview'],
    path: '/knowledge/security/overview',
  },
  {
    title: 'Copilot',
    code: 'AI',
    description: '도입 준비, 에이전트 설계, 거버넌스와 성과 측정.',
    topics: ['Readiness', 'Adoption', 'Prompt'],
    path: '/knowledge/copilot/overview',
  },
  {
    title: 'Migration',
    code: 'MIG',
    description: '테넌트·메일·파일과 협업 환경의 전환.',
    topics: ['Tenant', 'Mail', 'Files'],
    path: '/knowledge/migration/overview',
  },
  {
    title: 'Licensing',
    code: 'LIC',
    description: 'Microsoft 365와 보안·Copilot의 라이선스 판단.',
    topics: ['E3/E5/E7', 'BP', 'Copilot'],
    path: '/knowledge/licensing/overview',
  },
];

export default function KnowledgeGrid() {
  return (
    <section id="browse-topics" className={styles.knowledgeGrid}>
      <div className={styles.header}>
        <p>주제별 문서</p>
        <h2>기술별 가이드</h2>
        <span>
          필요한 기술을 선택해 설계와 운영 지침을 찾아보세요.
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

            <strong>문서 보기 →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
