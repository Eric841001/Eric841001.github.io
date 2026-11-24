import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import data from '@site/src/data/cData.json';
import {updateHighlights} from '@site/src/data/updateHighlights';
import styles from './styles.module.css';
import CoverArt from '@site/src/components/CoverArt';

// 주제 허브 첫 화면. 홈과 같은 벤토 구성으로 "이 주제의 문서 · 처음 읽을 문서 · 최근 변경"을 먼저 보여 준다.
// 문서 목록과 소개 문장은 cData.json(문서 원문 발췌)에서 온다.
const ARR = <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const TOPICS = [
  ['microsoft365', 'Microsoft 365', '/knowledge/microsoft365/overview', 'Exchange·Teams·SharePoint 도입과 운영'],
  ['azure', 'Azure', '/knowledge/azure/overview', '랜딩 존, 네트워크, ID, 비용 관리'],
  ['security', '보안', '/knowledge/security/overview', 'Zero Trust, 조건부 액세스, Defender'],
  ['copilot', 'Copilot', '/knowledge/copilot/overview', '도입 준비, 에이전트 설계와 운영'],
  ['licensing', '라이선스', '/knowledge/licensing/overview', 'E3·E5·E7과 추가 기능 비교'],
  ['architecture', '설계도', '/knowledge/architecture/overview', '영역별 구성도와 설계 기준'],
  ['migration', '마이그레이션', '/knowledge/migration/overview', '테넌트·메일·파일 전환'],
  ['knowledge-center', '운영 문제 해결', '/knowledge/knowledge-center/overview', 'Intune·Defender·Exchange 오류'],
  ['playbooks', '도입 절차', '/knowledge/playbooks/overview', '단계별 도입 플레이북'],
  ['downloads', '자료실', '/knowledge/downloads/overview', '진단표·SOW·WBS·포털'],
];

function LicenseTile() {
  const [i, setI] = useState(1);
  const lic = data.licensing;
  return (
    <section className={`${styles.t} ${styles.c} ${styles.lic}`} aria-labelledby="hub-lic">
      <span className={styles.k}><span id="hub-lic">E3·E5·E7 빠른 비교</span><span>원본: 비교 문서</span></span>
      <div className={styles.seg} role="group" aria-label="비교할 기능">
        {lic.slice(0, 7).map((r, n) => <button type="button" key={r.feature} aria-pressed={i === n} onClick={() => setI(n)}>{r.feature.replace('업무 자료를 참조하는 ', '').replace('Word·Excel·PowerPoint 등 ', '')}</button>)}
      </div>
      <div className={styles.qv}>{['E3', 'E5', 'E7'].map(p => <div key={p}><b>{p}</b><span>{lic[i] && lic[i][p]}</span></div>)}</div>
      <Link className={styles.go} to="/knowledge/licensing/e3-vs-e5">전체 비교표 {ARR}</Link>
    </section>
  );
}

export default function HubHeader({topic, crumb, title, lead, start = [], feature, extraDocs = [], mode = 'docs', updatesMatch}) {
  const [q, setQ] = useState('');
  const [all, setAll] = useState(false);
  const history = useHistory();
  const docs = useMemo(() => {
    const base = mode === 'topics' ? [] : [...(data.sections[topic] || [])];
    extraDocs.forEach(([t, to, text]) => { if (!base.some(d => d.to === to)) base.push({title: t, to, text}); });
    return base;
  }, [topic, mode]);
  const list = mode === 'topics'
    ? TOPICS.map(([k, name, to, text]) => ({k, title: name, to, text, n: data.counts[k]}))
    : docs;
  const qq = q.trim().toLowerCase();
  const shown = qq ? list.filter(d => (d.title + ' ' + d.text).toLowerCase().includes(qq)) : list;
  const limit = mode === 'topics' ? 12 : 9;
  const visible = all || qq ? shown : shown.slice(0, limit);
  const re = updatesMatch ? new RegExp(updatesMatch) : null;
  const updates = re ? updateHighlights.filter(u => re.test(u.path + ' ' + u.category)).slice(0, 4) : [];
  const count = mode === 'topics' ? data.total : list.length + 1;
  const submit = e => { e.preventDefault(); if (shown[0] && qq) history.push(shown[0].to); else if (qq) history.push('/search?q=' + encodeURIComponent(q)); };

  return (
    <div className={styles.hub} data-topic={topic}>
      <section className={`${styles.t} ${styles.hero}`} aria-labelledby="hub-title">
        <div className={styles.heroText}>
          <span className={styles.k}><span>{crumb}</span><span>문서 {count}편</span></span>
          <h1 id="hub-title">{title}</h1>
          <p>{lead}</p>
          <form className={styles.ask} role="search" onSubmit={submit}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m13.2 13.2 3.8 3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder={mode === 'topics' ? '주제 이름으로 찾기' : '이 주제의 문서에서 찾기'} aria-label={mode === 'topics' ? '주제 찾기' : '이 주제의 문서 찾기'} aria-controls="hub-list" />
            <button type="submit">찾기</button>
          </form>
        </div>
        <CoverArt topic={topic} className={styles.art} ratio="4 / 5" />
        </section>
      <div className={styles.bento}>
        {start.length > 0 && (
          <section className={`${styles.t} ${styles.start}`} aria-labelledby="hub-start">
            <span className={styles.k}><span id="hub-start">처음 읽을 문서</span></span>
            <ol>{start.map(([label, to, note]) => <li key={to}><Link to={to}><b>{label}</b>{note && <small>{note}</small>}</Link></li>)}</ol>
          </section>
        )}
        {feature === 'licensing' && <LicenseTile />}
        {feature && feature !== 'licensing' && (
          <Link className={`${styles.t} ${styles.c} ${styles.feat}`} to={feature.to}>
            <span className={styles.k}><span>{feature.kicker}</span></span>
            <strong>{feature.title}</strong>
            <span className={styles.ft}>{feature.text}</span>
            <span className={styles.go}>{feature.go} {ARR}</span>
          </Link>
        )}
        {updates.length > 0 && (
          <section className={`${styles.t} ${styles.upd}`} aria-labelledby="hub-upd">
            <span className={styles.k}><span id="hub-upd">최근 변경</span></span>
            <ul>{updates.map(u => <li key={u.path + u.title}><Link to={u.path}><time dateTime={u.date}>{u.date.slice(5).replace('-', '.')}</time><span><b>{u.title}</b><small>{u.status.split(' · ')[0]}</small></span></Link></li>)}</ul>
          </section>
        )}
      </div>
      <div className={styles.sh}>
        <h2 className={styles.lh}>{mode === 'topics' ? '주제별 문서' : '이 주제의 문서'}</h2>
        <span className={styles.n} aria-live="polite">{qq ? `‘${q.trim()}’ ${shown.length}건` : `${list.length}개`}</span>
      </div>
      <ul className={styles.list} id="hub-list">
        {visible.map(d => (
          <li key={d.to}><Link to={d.to} className={styles.card} data-topic={d.k}>
            {mode === 'topics' && <i>{d.n || ''}</i>}
            <b>{d.title}</b>
            {d.text && <span>{d.text}</span>}
          </Link></li>
        ))}
        {!shown.length && <li className={styles.none}>일치하는 문서가 없습니다. <Link to={'/search?q=' + encodeURIComponent(q)}>전체 검색에서 ‘{q}’ 찾기</Link></li>}
      </ul>
      {!qq && shown.length > limit && (
        <button type="button" className={styles.more} aria-expanded={all} aria-controls="hub-list" onClick={() => setAll(!all)}>{all ? '접기' : `${shown.length - limit}개 더 보기`}</button>
      )}
    </div>
  );
}
