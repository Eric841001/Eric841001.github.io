import React from 'react';

// 표지 그림: 가는 선으로 그린 설계도. 가운데 기준(ID·정책)에서 여섯 영역으로 뻗는 연결을 보여 준다.
// 장식용이므로 화면 낭독기에는 숨긴다.
const R = 150;
const spokes = [
  ['ID', -90], ['기기', -30], ['데이터', 30], ['협업', 90], ['네트워크', 150], ['운영', 210],
];
const pt = (deg, r) => [200 + r * Math.cos((deg * Math.PI) / 180), 200 + r * Math.sin((deg * Math.PI) / 180)];

export default function Blueprint({className}) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="bp-grid">
        {Array.from({length: 9}, (_, i) => <line key={'v' + i} x1={40 + i * 40} y1="20" x2={40 + i * 40} y2="380" />)}
        {Array.from({length: 9}, (_, i) => <line key={'h' + i} x1="20" y1={40 + i * 40} x2="380" y2={40 + i * 40} />)}
      </g>
      <g className="bp-rings">
        <circle cx="200" cy="200" r={R} />
        <circle cx="200" cy="200" r={R * 0.62} strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="34" />
        <circle cx="200" cy="200" r="22" className="bp-core" />
      </g>
      <g className="bp-ticks">
        {Array.from({length: 72}, (_, i) => {
          const [x1, y1] = pt(i * 5, R + 6);
          const [x2, y2] = pt(i * 5, R + (i % 6 === 0 ? 16 : 10));
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <g className="bp-spokes">
        {spokes.map(([, d], i) => {
          const [x1, y1] = pt(d, 34);
          const [x2, y2] = pt(d, R);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={i === 2 ? 'bp-flow' : undefined} />;
        })}
      </g>
      <g className="bp-nodes">
        {spokes.map(([label, d]) => {
          const [x, y] = pt(d, R);
          const [lx, ly] = pt(d, R + 34);
          return (
            <g key={label}>
              <rect x={x - 7} y={y - 7} width="14" height="14" transform={`rotate(45 ${x} ${y})`} />
              <text x={lx} y={ly + 4} textAnchor="middle">{label}</text>
            </g>
          );
        })}
        <text x="200" y="205" textAnchor="middle" className="bp-center">기준</text>
      </g>
    </svg>
  );
}
