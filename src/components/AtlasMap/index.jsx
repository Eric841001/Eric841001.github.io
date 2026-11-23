import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// 주제를 분류하는 전체 지도. 실제 연결은 각 문서의 구성도(ArchitectureFigure)가 보여 준다.
const layers = [
  {name: '업무 환경', note: '사람이 일하는 곳', areas: [
    {name: 'Microsoft 365 협업', to: '/knowledge/architecture/m365-reference-architecture#collaboration-architecture', color: 'var(--c-t-m365)', words: ['Exchange', 'Teams', 'SharePoint', 'OneDrive']},
    {name: 'Copilot 구성 요소', to: '/knowledge/architecture/copilot-architecture#copilot-architecture-overview', color: 'var(--c-t-copilot)', words: ['업무 사용자', '접근 권한', 'Graph', '에이전트']},
  ]},
  {name: '기반과 보호', note: '업무를 받치는 기반', areas: [
    {name: 'Azure 네트워크', to: '/knowledge/architecture/azure-landing-zone-architecture#network-architecture', color: 'var(--c-t-azure)', words: ['온프레미스', '게이트웨이', '허브', '스포크']},
    {name: '보안 영역', to: '/knowledge/architecture/security-reference-architecture#security-architecture-overview', color: 'var(--c-t-security)', words: ['ID', '기기', '데이터', '대응']},
  ]},
  {name: '전환과 운영', note: '바꾸고 유지하는 일', areas: [
    {name: '마이그레이션 범위', to: '/knowledge/architecture/migration-architecture#migration-domains', color: 'var(--c-t-migration)', words: ['테넌트', '메일', '파일', '전환']},
    {name: '거버넌스 운영 체계', to: '/knowledge/architecture/governance-architecture#operating-model', color: 'var(--c-t-ops)', words: ['정책', '책임자', '예외', '검토']},
  ]},
];

function Glyph({words}) {
  return (
    <svg viewBox="0 0 320 110" aria-hidden="true" className={styles.glyph}>
      <path d="M40 46H280" />
      {words.map((w, i) => (
        <g key={w}><circle cx={40 + i * 80} cy="46" r="15" /><text x={40 + i * 80} y="92" textAnchor="middle">{w}</text></g>
      ))}
    </svg>
  );
}

export default function AtlasMap() {
  return (
    <nav className={styles.atlas} aria-label="영역별 설계도">
      {layers.map(l => (
        <div className={styles.layer} key={l.name}>
          <p className={styles.lname}><b>{l.name}</b><span>{l.note}</span></p>
          {l.areas.map(a => (
            <Link key={a.name} to={a.to} className={styles.area} style={{'--tc': a.color}}>
              <span className={styles.k}>설계 문서</span>
              <strong>{a.name}</strong>
              <Glyph words={a.words} />
              <span className={styles.go}>구성도 열기 →</span>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
