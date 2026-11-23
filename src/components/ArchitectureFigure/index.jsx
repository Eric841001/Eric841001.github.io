import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

/*
 * C안 구성도. 기존 사용법(id, title, nodes)을 그대로 받고, edges를 주면 실제 연결을 그린다.
 * edges가 없으면 원문 순서대로 점선으로 잇는다(관계를 단정하지 않음).
 * 구성 요소 앵커(#{id}-{key})는 기존과 같다.
 */
function layout(nodes, edges, vertical) {
  const rank = {};
  nodes.forEach(([k]) => { rank[k] = 0; });
  // 순환을 만드는 연결(수정 요청, 규칙 조정 등)만 찾아 배치 순위에서 빼고 곡선으로 따로 그린다
  const back = new Set(), state = {};
  const visit = k => { state[k] = 1; edges.forEach((e, i) => { if (e[0] !== k) return; if (state[e[1]] === 1) back.add(i); else if (!state[e[1]]) visit(e[1]); }); state[k] = 2; };
  nodes.forEach(([k]) => { if (!state[k]) visit(k); });
  const forward = edges.filter((e, i) => !back.has(i));
  const idx = {}; edges.forEach((e, i) => { if (back.has(i)) idx[e[0] + '>' + e[1]] = true; });
  for (let i = 0; i < nodes.length; i++) forward.forEach(([a, b]) => { if (rank[b] < rank[a] + 1) rank[b] = rank[a] + 1; });
  const cols = Math.max(...Object.values(rank)) + 1;
  const per = {};
  const pos = {};
  nodes.forEach(([k]) => { const c = rank[k]; per[c] = per[c] || 0; pos[k] = {c, r: per[c]++}; });
  const rows = Math.max(...Object.values(per));
  const nw = vertical ? 260 : 190, nh = vertical ? 64 : 76, cw = vertical ? 360 : 290, rh = vertical ? 104 : 118;
  const W = vertical ? 360 : cols * cw + 20;
  let H = vertical ? cols * rh + 20 : rows * rh + 24;
  const xy = {};
  Object.entries(pos).forEach(([k, p]) => {
    const span = per[p.c];
    if (vertical) {
      const gap = W / span;
      xy[k] = {x: gap * p.r + gap / 2, y: 10 + p.c * rh + rh / 2};
    } else {
      const top = (H - span * rh) / 2;
      xy[k] = {x: 10 + p.c * cw + cw / 2, y: top + p.r * rh + rh / 2};
    }
  });
  const arcs = edges.some((e, i) => back.has(i) || (xy[e[0]] && xy[e[1]] && (vertical ? Math.abs(xy[e[0]].x - xy[e[1]].x) < 1 && Math.abs(xy[e[1]].y - xy[e[0]].y) > 160 : Math.abs(xy[e[0]].y - xy[e[1]].y) < 1 && Math.abs(xy[e[1]].x - xy[e[0]].x) > 400)));
  if (arcs && !vertical) H += 56;
  return {W: W + (arcs && vertical ? 70 : 0), H, xy, idx, nw: vertical ? Math.min(nw, (W - 8) / rows - 14) : nw, nh};
}

function Diagram({id, nodes, edges, soft, sel, near, onPick, vertical}) {
  const {W, H, xy, idx, nw, nh} = useMemo(() => layout(nodes, edges, vertical), [nodes, edges, vertical]);
  const labels = [];
  const tw = s => [...s].reduce((n, ch) => n + (ch.charCodeAt(0) > 0x3000 ? 12.5 : 7.2), 0) + 14;
  return (
    <svg className={vertical ? styles.tall : styles.wide} viewBox={`0 0 ${W} ${H}`} role="group" aria-label="구성 요소">
      {edges.map(([a, b, label], i) => {
        const A = xy[a], B = xy[b];
        if (!A || !B) return null;
        const on = sel && (a === sel || b === sel);
        let d, lx = (A.x + B.x) / 2 + (vertical ? 10 : 0), ly = (A.y + B.y) / 2 - (vertical ? 0 : 10);
        const skip = vertical ? Math.abs(A.x - B.x) < 1 && Math.abs(B.y - A.y) > 160 : Math.abs(A.y - B.y) < 1 && Math.abs(B.x - A.x) > 400;
        if (idx[a + '>' + b] || skip) {
          // 되돌아가는 연결
          if (vertical) { const x = Math.max(A.x, B.x) + nw / 2 + 36; d = `M${A.x + nw / 2} ${A.y}C${x} ${A.y} ${x} ${B.y} ${B.x + nw / 2} ${B.y}`; lx = x + 4; ly = (A.y + B.y) / 2; }
          else { const y = Math.max(A.y, B.y) + nh / 2 + 48; d = `M${A.x} ${A.y + nh / 2}C${A.x} ${y} ${B.x} ${y} ${B.x} ${B.y + nh / 2}`; lx = (A.x + B.x) / 2; ly = y - 4; }
        } else if (vertical) {
          const y1 = A.y + nh / 2, y2 = B.y - nh / 2, my = (y1 + y2) / 2;
          // 세로 배치에서는 이름표를 출발 요소 바로 아래에 둔다(여러 연결이 한곳에 모일 때 겹치지 않게)
          lx = A.x + (B.x - A.x) * 0.25 + (A.x === B.x ? 10 : 0); ly = y1 + 16;
          d = A.y === B.y ? `M${A.x + nw / 2} ${A.y}L${B.x - nw / 2} ${B.y}` : `M${A.x} ${y1}C${A.x} ${my} ${B.x} ${my} ${B.x} ${y2}`;
        } else {
          const x1 = A.x + nw / 2, x2 = B.x - nw / 2, mx = (x1 + x2) / 2;
          d = A.x === B.x ? `M${A.x} ${A.y + nh / 2}L${B.x} ${B.y - nh / 2}` : `M${x1} ${A.y}C${mx} ${A.y} ${mx} ${B.y} ${x2} ${B.y}`;
        }
        labels.push({i, label, lx, ly, start: vertical && !idx[a + '>' + b] && !skip, cls: `${styles.elabel} ${on ? styles.on : ''} ${sel && !on ? styles.dim : ''}`});
        return (
          <g key={i} className={`${styles.edge} ${soft ? styles.soft : ''} ${on ? styles.on : ''} ${sel && !on ? styles.dim : ''}`}>
            <path d={d} />
          </g>
        );
      })}
      {nodes.map(([key, label], i) => {
        const p = xy[key];
        const isSel = sel === key;
        return (
          <g key={key} className={`${styles.node} ${isSel ? styles.sel : ''} ${sel && !near.has(key) ? styles.dim : ''}`}
            role="button" tabIndex={0} aria-pressed={isSel} aria-label={`${i + 1}. ${label}`}
            onClick={() => onPick(key)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(key); }
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const n = nodes[(i + (e.key === 'ArrowRight' ? 1 : -1) + nodes.length) % nodes.length][0];
                onPick(n);
                requestAnimationFrame(() => e.currentTarget.ownerSVGElement?.querySelector(`[data-key="${n}"]`)?.focus());
              }
            }}
            data-key={key}>
            <rect x={p.x - nw / 2} y={p.y - nh / 2} width={nw} height={nh} rx={nh / 2.8} />
            <text x={p.x} y={p.y + 6} textAnchor="middle">{label}</text>
          </g>
        );
      })}
      {labels.filter(l => l.label).map(l => {
        const w = tw(l.label), x = l.start ? l.lx - 4 : l.lx - w / 2;
        return (
          <g key={'l' + l.i} className={l.cls} aria-hidden="true">
            <rect x={x} y={l.ly - 15} width={w} height={22} rx={11} />
            <text x={l.start ? l.lx + 3 : l.lx} y={l.ly + 1} textAnchor={l.start ? 'start' : 'middle'}>{l.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ArchitectureFigure({id, title, nodes, edges}) {
  const {hash} = useLocation();
  const soft = !edges || !edges.length;
  const links = useMemo(() => (soft ? nodes.slice(1).map((n, i) => [nodes[i][0], n[0], '']) : edges), [nodes, edges, soft]);
  const [sel, setSel] = useState(null);
  const [trail, setTrail] = useState([]);
  const card = useRef(null);
  const order = nodes.map(n => n[0]);
  const neighbors = k => links.filter(e => e[0] === k || e[1] === k).map(e => ({other: e[0] === k ? e[1] : e[0], dir: e[0] === k ? 'out' : 'in', label: e[2]}));
  const near = useMemo(() => new Set(sel ? [sel, ...neighbors(sel).map(r => r.other)] : []), [sel, links]);
  const pick = useCallback((k, fromHash) => {
    setSel(k);
    if (!k) return;
    setTrail(t => (t.includes(k) ? t : [...t, k]));
    if (!fromHash && typeof window !== 'undefined') window.history.replaceState(null, '', `#${id}-${k}`);
  }, [id]);
  // 기존 앵커(#id-key)로 들어오면 해당 요소를 선택한다
  useEffect(() => {
    if (!hash) return;
    let h = hash.slice(1);
    try { h = decodeURIComponent(h); } catch (e) { return; }
    const k = order.find(key => h === `${id}-${key}`);
    if (k) { pick(k, true); requestAnimationFrame(() => card.current?.closest('figure')?.scrollIntoView({block: 'center'})); }
  }, [hash]);
  useEffect(() => { if (sel) card.current?.focus({preventScroll: true}); }, [sel]);
  const node = sel && nodes.find(n => n[0] === sel);
  const i = sel ? order.indexOf(sel) : -1;
  const label = k => (nodes.find(n => n[0] === k) || [])[1];
  return (
    <figure className={styles.stage} aria-label={title} onKeyDown={e => { if (e.key === 'Escape' && sel) { setSel(null); } }}>
      <div className={styles.head}>
        <strong>{title}</strong>
        <div className={styles.trail} aria-label="살펴본 요소">
          {trail.length ? <>
            <span>살펴본 요소</span>
            {trail.map(k => <button type="button" key={k} className={k === sel ? styles.trailOn : ''} onClick={() => pick(k)}>{label(k)}</button>)}
            {sel && <button type="button" onClick={() => setSel(null)}>전체 구성</button>}
          </> : <span>요소 {nodes.length}개 · 선택하면 역할과 연결을 보여 줍니다</span>}
        </div>
      </div>
      <div className={styles.canvas}>
        <Diagram id={id} nodes={nodes} edges={links} soft={soft} sel={sel} near={near} onPick={pick} />
        <Diagram id={id} nodes={nodes} edges={links} soft={soft} sel={sel} near={near} onPick={pick} vertical />
      </div>
      {node && (
        <div className={styles.card} role="region" aria-live="polite" aria-label={`${node[1]} 설명`}>
          <span className={styles.pos}>{i + 1} / {nodes.length} · {title}</span>
          <h3 tabIndex={-1} ref={card}>{node[1]}</h3>
          <p>{node[2]}</p>
          {!soft && neighbors(sel).length > 0 && (
            <div className={styles.rel}>
              {neighbors(sel).map(r => (
                <button type="button" key={r.other + r.dir} onClick={() => pick(r.other)}>
                  {r.dir === 'in' ? '← ' : '→ '}{label(r.other)}<span>{r.label}</span>
                </button>
              ))}
            </div>
          )}
          <div className={styles.acts}>
            <button type="button" onClick={() => pick(order[(i - 1 + order.length) % order.length])}>이전</button>
            <button type="button" onClick={() => pick(order[(i + 1) % order.length])}>다음</button>
            <button type="button" className={styles.primary} onClick={() => setSel(null)}>전체 구성</button>
          </div>
        </div>
      )}
      <dl className={styles.legend}>
        {nodes.map(([key, l, description]) => (
          <div key={key} id={`${id}-${key}`} tabIndex={-1} className={sel === key ? styles.legendOn : ''}>
            <dt><button type="button" onClick={() => pick(key)}>{l}</button></dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
      {soft && <figcaption className={styles.note}>요소를 원문 순서대로 이었습니다.</figcaption>}
    </figure>
  );
}
