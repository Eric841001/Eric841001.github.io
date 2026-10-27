import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

const capabilities = [
  {
    label: 'Copilot',
    value: '문서·메일 업무',
    path: '/knowledge/copilot/overview',
  },
  {
    label: 'Copilot Studio',
    value: '업무 에이전트',
    path: '/knowledge/copilot/copilot-studio-2026-platform-update',
  },
  {
    label: 'M365 Agents',
    value: '앱 안의 자동화',
    path: '/knowledge/copilot/agentic-ai-architecture',
  },
  {
    label: 'Copilot Cowork',
    value: '장시간 작업 위임',
    path: '/knowledge/copilot/copilot-cowork-cost-governance',
  },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Microsoft AI 도입과 운영</p>

          <h1>
            Copilot 도입부터 AI 에이전트 운영까지
          </h1>

          <p className={styles.subtitle}>
            Microsoft 365, 보안, Copilot과 AI 에이전트의 설계·도입·운영 지침을 한곳에서 확인하세요.
          </p>

          <p className={styles.byline}>
            Youngsun Kang · Enterprise Microsoft Architect
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#start-reading">처음 읽을 문서</a>

            <a className={styles.secondaryButton} href="#latest-updates">최근 업데이트 보기</a>
          </div>

        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span>도구별 안내</span>
            <strong>제품별 시작점</strong>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <Link key={item.label} className={styles.capability} to={item.path}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
