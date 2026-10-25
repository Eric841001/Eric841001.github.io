import React from 'react';
import Link from '@docusaurus/Link';

import styles from './SignatureEntryPoints.module.css';

const entries = [
  {
    label: '아키텍처',
    title: '엔터프라이즈 아키텍처 설계',
    description:
      'Microsoft 365·Azure·보안·Copilot을 연결하는 설계 관점을 확인하세요.',
    path: '/knowledge/architecture/executive-architecture-blueprint',
  },
  {
    label: '도입 사례',
    title: 'AI 에이전트 운영 사례',
    description:
      '익명화한 사례로 에이전트 구성과 거버넌스·성과 측정 방식을 살펴보세요.',
    path: '/knowledge/projects/case-study-enterprise-ai-agent-factory',
  },
  {
    label: '자료 문의',
    title: '문의와 자료 요청',
    description:
      '공개 가능한 템플릿과 산출물 예시, 기술 논의를 요청하세요.',
    path: '/knowledge/contact',
  },
];

export default function SignatureEntryPoints() {
  return (
    <section className={styles.signaturePaths} aria-labelledby="signature-entry-title">
      <div className={styles.header}>
        <p>추천 시작점</p>
        <h2 id="signature-entry-title">설계·사례·문의</h2>
        <span>
          처음 방문하셨다면 아래 세 가지 경로로 시작하세요.
        </span>
      </div>

      <div className={styles.grid}>
        {entries.map((entry) => (
          <Link className={styles.card} to={entry.path} key={entry.title}>
            <span className={styles.label}>{entry.label}</span>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <strong>자세히 보기 →</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
