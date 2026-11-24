import React from 'react';

// 주제별 표지 그림. 사진 대신 딥 네이비 위에 선과 점으로 그린 추상 도판을 쓴다.
// 같은 주제는 늘 같은 그림이 나오도록 주제 이름으로 모양을 정한다. 장식용이라 화면 낭독기에는 숨긴다.
const NAVY = '#051C2C';
const BLUE = '#2251FF';
const LINE = 'rgba(255,255,255,.55)';
const FAINT = 'rgba(255,255,255,.14)';

const kinds = {
  microsoft365: 'waves', migration: 'diagonal', security: 'rings', playbooks: 'rings',
  copilot: 'nodes', azure: 'grid', architecture: 'grid', downloads: 'stack',
  licensing: 'bars', 'knowledge-center': 'bars', intro: 'nodes', about: 'rings', contact: 'waves',
  toolkit: 'grid', projects: 'bars', proposal: 'stack',
};

function Waves() {
  return <g fill="none">{Array.from({length: 14}, (_, i) => (
    <path key={i} d={`M-20 ${40 + i * 12} C 80 ${10 + i * 12}, 160 ${90 + i * 9}, 340 ${30 + i * 13}`} stroke={i === 8 ? BLUE : LINE} strokeWidth={i === 8 ? 2 : 0.7} opacity={i === 8 ? 1 : 0.35 + (i % 4) * 0.12} />
  ))}</g>;
}
function Diagonal() {
  return <g>{Array.from({length: 22}, (_, i) => (
    <line key={i} x1={-60 + i * 22} y1="220" x2={60 + i * 22} y2="-20" stroke={i === 11 ? BLUE : LINE} strokeWidth={i === 11 ? 3 : 0.8} opacity={i === 11 ? 1 : 0.4} />
  ))}</g>;
}
function Rings() {
  return <g fill="none">
    {Array.from({length: 9}, (_, i) => <circle key={i} cx="230" cy="150" r={18 + i * 17} stroke={i === 4 ? BLUE : LINE} strokeWidth={i === 4 ? 2 : 0.7} opacity={i === 4 ? 1 : 0.3 + (i % 3) * 0.15} strokeDasharray={i % 3 === 2 ? '2 5' : undefined} />)}
    <circle cx="230" cy="150" r="5" fill={BLUE} />
  </g>;
}
function Nodes() {
  const pts = [[60, 60], [120, 130], [170, 50], [220, 120], [270, 70], [250, 160], [90, 170], [180, 175]];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [1, 6], [5, 7], [6, 7], [1, 3]];
  return <g>
    {edges.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={i === 8 ? BLUE : LINE} strokeWidth={i === 8 ? 2 : 0.8} opacity={i === 8 ? 1 : 0.6} />)}
    {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 3 ? 7 : 4} fill={i === 3 ? BLUE : NAVY} stroke="#fff" strokeWidth="1" />)}
  </g>;
}
function Grid() {
  const dots = [];
  for (let x = 20; x <= 300; x += 20) for (let y = 20; y <= 180; y += 20) dots.push(<circle key={x + '-' + y} cx={x} cy={y} r="1.1" fill="#fff" opacity=".35" />);
  return <g>{dots}
    <rect x="100" y="60" width="120" height="80" fill="none" stroke={LINE} strokeWidth="1" />
    <rect x="140" y="40" width="120" height="80" fill="none" stroke={BLUE} strokeWidth="2" />
    <line x1="100" y1="60" x2="140" y2="40" stroke={LINE} /><line x1="220" y1="140" x2="260" y2="120" stroke={LINE} />
  </g>;
}
function Bars() {
  const h = [40, 70, 55, 95, 80, 120, 105, 140, 125, 150];
  return <g>{h.map((v, i) => <rect key={i} x={28 + i * 27} y={180 - v} width="14" height={v} fill={i === 7 ? BLUE : '#fff'} opacity={i === 7 ? 1 : 0.18 + i * 0.04} />)}
    <line x1="20" y1="180.5" x2="300" y2="180.5" stroke={LINE} /></g>;
}
function Stack() {
  return <g fill="none">{Array.from({length: 6}, (_, i) => (
    <path key={i} d={`M${80 + i * 8} ${150 - i * 18} l80 -30 l80 30 l-80 30 z`} stroke={i === 5 ? BLUE : LINE} strokeWidth={i === 5 ? 2 : 0.8} opacity={i === 5 ? 1 : 0.35 + i * 0.1} />
  ))}</g>;
}
const draw = {waves: Waves, diagonal: Diagonal, rings: Rings, nodes: Nodes, grid: Grid, bars: Bars, stack: Stack};

export default function CoverArt({topic = 'intro', className, ratio = '320 / 200'}) {
  const Kind = draw[kinds[topic] || 'nodes'];
  return (
    <svg className={className} viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" style={{aspectRatio: ratio, display: 'block', width: '100%', height: 'auto', background: NAVY}}>
      <rect width="320" height="200" fill={NAVY} />
      <g opacity=".5">{Array.from({length: 8}, (_, i) => <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="200" stroke={FAINT} />)}</g>
      <Kind />
    </svg>
  );
}
