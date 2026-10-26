import React from 'react';
import Link from '@docusaurus/Link';
import {updateGuide, updateHighlights, modelUpdate} from '../data/updateHighlights';
import styles from './LatestArticles.module.css';

export default function LatestArticles() {
  return (
    <section id="latest-updates" className={styles.latestArticles} aria-labelledby="latest-updates-title">
      <div className={styles.header}>
        <div><p>제품 소식과 문서 개정</p>
          <h2 id="latest-updates-title">최근 업데이트</h2>
          <span>제품 발표와 문서 개정 소식을 모았습니다. 각 항목의 날짜와 제공 조건을 확인하세요.</span>
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
