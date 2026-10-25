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
            <a className={styles.primaryButton} href="#latest-updates">최근 업데이트 보기</a>

            <a className={styles.secondaryButton} href="#browse-topics">주제별 문서 보기</a>
          </div>

          <div className={styles.signalRow} aria-label="Portfolio focus areas">
            <span>Copilot</span>
            <span>Copilot Studio</span>
            <span>M365 Agents</span>
            <span>Copilot Cowork</span>
            <span>AI Agents</span>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span>도구별 안내</span>
            <strong>권한·비용 확인</strong>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <Link key={item.label} className={styles.capability} to={item.path}>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <span>가이드 보기 →</span>
              </Link>
            ))}
          </div>

          <div className={styles.deliveryStack}>
            <p>운영 원칙</p>
            <ul>
              <li>업무 유형과 성과 기준</li>
              <li>자료와 계정의 접근 권한</li>
              <li>에이전트 변경·폐기와 승인 담당자</li>
              <li>사용량·비용과 결과 검토</li>
              <li>민감한 작업의 담당자 검토</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
