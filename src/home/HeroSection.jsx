import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const poster = useBaseUrl('/img/home/copilot-flight.jpg');
  const source = useBaseUrl('/img/home/copilot-flight.webm');

  useEffect(() => {
    const player = video.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function applyPreference() {
      if (preference.matches) player.pause();
      else player.play().catch(() => setPlaying(false));
    }
    applyPreference();
    preference.addEventListener('change', applyPreference);
    return () => preference.removeEventListener('change', applyPreference);
  }, []);

  function togglePlayback() {
    if (video.current.paused) video.current.play().catch(() => setPlaying(false));
    else video.current.pause();
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Microsoft AI 도입과 운영</p>
          <h1>Copilot 도입부터<br />AI 에이전트 운영까지</h1>
          <p className={styles.byline}>Youngsun Kang · Enterprise Microsoft Architect</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#start-reading">처음 읽을 문서</a>
            <a className={styles.secondaryButton} href="#latest-updates">최근 업데이트</a>
          </div>
        </div>
        <figure className={styles.figure}>
          <video ref={video} src={source} poster={poster} width="960" height="706"
            muted playsInline loop preload="metadata" aria-label="권한을 확인한 뒤 문서를 찾아 출처가 있는 답변을 만드는 과정"
            onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
          <figcaption className={styles.caption}>
            <span>질문 → 권한 확인 → 문서 검색 → 출처가 있는 답변</span>
            <button type="button" onClick={togglePlayback}>{playing ? '일시 정지' : '재생'}</button>
          </figcaption>
        </figure>
      </div>
      <nav aria-label="제품별 안내" className={styles.products}>
        {capabilities.map(item => (
          <Link key={item.label} to={item.path}>{item.label}<span>{item.value}</span></Link>
        ))}
      </nav>
    </section>
  );
}
