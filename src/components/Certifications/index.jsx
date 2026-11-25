import React from 'react';
import styles from './styles.module.css';

// Microsoft 자격증. 원본: LinkedIn 프로필의 자격증/수료증 항목(2026-11-23 확인). AB-900 시험 번호는 사용자 제공(2026-11-25). 취득일 최신순.
const LINKEDIN = 'https://www.linkedin.com/in/young-sun-kang-a51b26356/details/certifications/';
const certs = [
  {name: 'Power Platform Fundamentals', code: 'PL-900', area: 'Power Platform', tone: 'm365', date: '2026-11-07', id: 'w9VaH-H9EC'},
  {name: 'Azure Fundamentals', code: 'AZ-900', area: 'Azure', tone: 'azure', date: '2026-11-07', id: 's9WS-XMSn'},
  {name: 'Copilot and Agent Administration Fundamentals', code: 'AB-900', area: 'Microsoft 365 · Copilot', tone: 'copilot', date: '2026-10-03', m365: true},
  {name: 'Azure Data Fundamentals', code: 'DP-900', area: 'Azure 데이터', tone: 'azure', date: '2026-10-03'},
  {name: 'Security, Compliance, and Identity Fundamentals', code: 'SC-900', area: '보안·규정 준수·ID', tone: 'security', date: '2026-09-05'},
  {name: 'Azure AI Fundamentals', code: 'AI-900', area: 'Azure AI', tone: 'migration', date: '2026-09-05'},
];
const fmt = d => { const [y, m, day] = d.split('-'); return `${y}년 ${Number(m)}월 ${Number(day)}일`; };

export default function Certifications() {
  return (
    <div className={styles.wrap}>
      <div className={styles.sum}>
        <b>{certs.length}</b>
        <span>Microsoft 공식 자격증<small>Azure · 보안 · Copilot · 데이터 · AI · Power Platform</small></span>
      </div>
      <ul className={styles.grid} aria-label="Microsoft 자격증 목록">
        {certs.map(c => (
          <li key={c.name} className={styles.card} data-tone={c.tone}>
            <span className={styles.top}><span>{c.area}</span>{c.code && <code>{c.code}</code>}</span>
            <small className={styles.brand}>{c.m365 ? 'Microsoft 365 Certified' : 'Microsoft Certified'}</small>
            <strong>{c.name}</strong>
            <span className={styles.meta}>
              <time dateTime={c.date}>{fmt(c.date)} 취득</time>
              {c.id && <span>인증 번호 {c.id}</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.src}>발급: Microsoft · 원본 기록은 <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn 자격증 목록</a>에서 확인할 수 있습니다.</p>
    </div>
  );
}
