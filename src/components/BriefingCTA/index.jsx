import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// 문서 끝의 문의·브리핑 안내. 모든 문서에서 같은 문구와 모양을 쓴다.
export default function BriefingCTA() {
  return (
    <aside className={styles.cta} aria-label="문의와 브리핑 요청">
      <div>
        <p className={styles.k}>설계 브리핑 · 작업 양식</p>
        <p className={styles.t}>이 주제를 조직 환경에 맞춰 검토하고 싶으신가요?</p>
        <p className={styles.d}>설계서, 점검표, 보고서 양식과 적용 방법은 공개 다운로드 대신 브리핑으로 안내합니다. 업종, 사용자 규모, 프로젝트 단계를 알려 주시면 범위를 맞춰 드립니다.</p>
      </div>
      <div className={styles.acts}>
        <a className={styles.primary} href="https://www.linkedin.com/in/young-sun-kang-a51b26356">브리핑 요청</a>
        <Link className={styles.ghost} to="/knowledge/contact">문의 방법</Link>
      </div>
    </aside>
  );
}
