import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import data from '@site/src/data/cData.json';
import styles from './styles.module.css';

// C안: 한글 요약 + 상황별 답 타일. 타일의 미리 보기는 해당 위치의 원문 첫 문단이다(scripts/build-c-data.js).
export default function ScenarioLinks({summary, links}) {
  const {pathname} = useLocation();
  const here = pathname.replace(/\/$/, '');
  return (
    <section className={styles.panel} aria-label="요약과 상황별 바로가기">
      <p className={styles.lede}><span className={styles.tag}>한글 요약</span>{summary}</p>
      <nav aria-label="상황별 바로가기" className={styles.grid}>
        {links.map(([label, target], i) => {
          const local = target.startsWith('#');
          const preview = data.previews[local ? here + target : target] || '';
          return (
            <Link key={target} to={target} className={styles.tile}>
              <span className={styles.n}>상황 {String(i + 1).padStart(2, '0')}{local ? '' : ' · 다른 문서'}</span>
              <span className={styles.q}>{label}</span>
              {preview && <span className={styles.p}>{preview}</span>}
              <span className={styles.go}>{local ? '본문에서 읽기 ↓' : '문서 열기 →'}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
