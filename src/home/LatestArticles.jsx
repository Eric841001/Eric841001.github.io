import React from 'react';
import Link from '@docusaurus/Link';
import {verifiedOn, updateGuide, updateHighlights, modelUpdate} from '../data/updateHighlights';
import styles from './LatestArticles.module.css';

export default function LatestArticles() {
  return (
    <section id="latest-updates" className={styles.latestArticles} aria-labelledby="latest-updates-title">
      <div className={styles.header}>
        <div><p>Official updates · <time dateTime={verifiedOn}>{verifiedOn}</time> 확인</p>
          <h2 id="latest-updates-title">최근 업데이트</h2>
          <span>공식 발표의 날짜와 제공 상태를 구분해 실무에 필요한 변경을 확인하세요.</span>
        </div>
        <Link className={styles.allUpdates} to={updateGuide}>전체 변경 기록 →</Link>
      </div>
      <div className={styles.grid}>
        {updateHighlights.map(article => (
          <Link key={article.path} to={article.path} className={styles.card}>
            <span className={styles.category}>{article.category}</span>
            <h3>{article.title}</h3><p>{article.description}</p>
            <div className={styles.meta}><time dateTime={article.date}>{article.date}</time><span>{article.status}</span></div>
          </Link>
        ))}
      </div>
      <p className={styles.modelNote}>모델 제공 안내 · <Link to={modelUpdate.path}>{modelUpdate.title}</Link> <span>({modelUpdate.date} 발표 · 앱별 배포와 라이선스 확인)</span></p>
    </section>
  );
}
