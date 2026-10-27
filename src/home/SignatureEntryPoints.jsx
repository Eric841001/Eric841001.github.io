import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SignatureEntryPoints.module.css';

const entries = [
  {
    label: '01 · 라이선스 선택',
    title: 'E3·E5·E7, 무엇이 필요한가요?',
    description: '포함 기능과 추가 비용을 비교하고, 우리 조직에 필요한 구성을 고르세요.',
    path: '/knowledge/microsoft365/e3-vs-e5',
    action: '라이선스 비교 읽기',
  },
  {
    label: '02 · 도입 준비',
    title: 'Copilot 도입 전 확인할 것',
    description: '사용 권한, 데이터 보호와 시범 도입 범위를 순서대로 점검하세요.',
    path: '/knowledge/playbooks/copilot-readiness-playbook',
    action: '도입 준비 점검하기',
  },
  {
    label: '03 · 전체 설계',
    title: 'Microsoft 365·Azure 설계',
    description: 'ID와 보안, 협업과 AI를 함께 설계할 때 필요한 기준을 살펴보세요.',
    path: '/knowledge/architecture/executive-architecture-blueprint',
    action: '설계 지침 읽기',
  },
];

export default function SignatureEntryPoints() {
  return (
    <section id="start-reading" className={styles.signaturePaths} aria-labelledby="signature-entry-title">
      <div className={styles.header}>
        <p>처음 방문하셨나요?</p>
        <h2 id="signature-entry-title">이 세 문서부터 읽어보세요</h2>
        <span>라이선스 선택부터 도입 준비, 전체 설계까지 이어집니다. 필요한 문서부터 읽어도 좋습니다.</span>
      </div>
      <div className={styles.grid}>
        {entries.map((entry) => (
          <Link className={styles.card} to={entry.path} key={entry.title}>
            <span className={styles.label}>{entry.label}</span>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <strong>{entry.action}<span aria-hidden="true"> →</span></strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
