import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import data from '@site/src/data/cData.json';
import {updateHighlights, updateGuide, verifiedOn} from '@site/src/data/updateHighlights';
import styles from './CHome.module.css';

// C안 홈: 답이 먼저 보이는 벤토. 모든 문장은 문서 원문(cData.json)과 updateHighlights에서 온다.
const ARR = <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const featured = ['에이전트의 월 크레딧 한도 설정하기', 'E5에 Copilot을 추가할 때와 E7 비교하기', 'SharePoint 문서가 제작자에게만 보일 때', '조건부 액세스 정책 설계하기'];
const topics = [
  ['microsoft365', 'Microsoft 365', '/knowledge/microsoft365/overview', 'Exchange, Teams, SharePoint와 OneDrive의 도입·운영'],
  ['azure', 'Azure', '/knowledge/azure/overview', '랜딩 존부터 네트워크·ID·비용 관리까지'],
  ['security', '보안', '/knowledge/security/overview', 'Zero Trust, 조건부 액세스, Defender와 데이터 보호'],
  ['copilot', 'Copilot', '/knowledge/copilot/overview', 'Copilot 도입 준비, 에이전트 설계와 운영'],
  ['migration', '마이그레이션', '/knowledge/migration/overview', '테넌트·메일·파일과 협업 환경의 전환'],
  ['licensing', '라이선스', '/knowledge/licensing/overview', 'E3·E5·E7과 보안·Copilot의 포함 기능 비교'],
  ['knowledge-center', '운영 문제 해결', '/knowledge/knowledge-center/overview', 'Intune 오류, Defender 온보딩, Exchange 설정'],
  ['architecture', '설계도', '/knowledge/architecture/overview#visual-architecture-map', '구성도와 설계 기준'],
  ['downloads', '자료실', '/knowledge/downloads/overview', '진단표·SOW·WBS·위험 관리 양식'],
];

function match(q) {
  const toks = q.toLowerCase().replace(/[·,.?]/g, ' ').split(/\s+/).filter(x => x.length >= 2);
  if (!toks.length) return [];
  return data.answers
    .map(a => ({a, s: toks.filter(t => (a.q + ' ' + a.fromTitle).toLowerCase().includes(t)).length / toks.length}))
    .filter(x => x.s >= 0.5 && x.a.text)
    .sort((x, y) => y.s - x.s)
    .slice(0, 3)
    .map(x => x.a);
}

export default function CHome() {
  const [q, setQ] = useState('');
  const [feat, setFeat] = useState(1);
  const history = useHistory();
  const found = useMemo(() => match(q), [q]);
  const lic = data.licensing;
  const picks = featured.map(f => data.answers.find(a => a.q === f)).filter(Boolean);
  const submit = e => { e.preventDefault(); if (found[0]) history.push(found[0].to); else history.push('/search?q=' + encodeURIComponent(q)); };
  return (
    <main className={styles.wrap}>
      <div className={styles.bento}>
        <section className={`${styles.t} ${styles.hero}`} aria-labelledby="c-h1">
          <span className={styles.k}>Microsoft 기술 지식센터 · 문서 {data.total}편</span>
          <h1 id="c-h1">Microsoft 365·Azure<br />보안·<em>Copilot</em> 실무 문서</h1>
          <p>라이선스 적용 범위, 설정 순서, 구성도와 운영 절차를 한국어로 정리했습니다. 궁금한 것을 입력하면 문서 원문에서 찾은 답과 해당 위치를 먼저 보여 줍니다.</p>
          <form className={styles.ask} role="search" onSubmit={submit}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m13.2 13.2 3.8 3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="예: 에이전트 크레딧 한도, E7 비교" aria-label="질문 또는 검색어" />
            <button type="submit">찾기</button>
          </form>
          <div className={styles.qs} role="group" aria-label="자주 찾는 질문">
            {picks.map(a => <button type="button" key={a.q} onClick={() => setQ(a.q)}>{a.q}</button>)}
          </div>
        </section>
        {q.trim() && (
          <section className={`${styles.t} ${styles.answers}`} aria-live="polite" aria-label="문서 원문에서 찾은 답">
            {found.length ? found.map((a, i) => (
              <div key={a.to} className={i === 0 ? styles.ans : styles.ans2}>
                <span className={styles.lb}><i />{i === 0 ? '문서 원문에서 찾은 답' : '함께 볼 위치'}</span>
                <b>{a.q}</b>
                <p>{a.text}</p>
                <Link to={a.to}>원문에서 확인 {ARR}</Link>
                <small>{a.fromTitle}</small>
              </div>
            )) : <p className={styles.none}>바로 연결할 답이 없습니다. <Link to={'/search?q=' + encodeURIComponent(q)}>‘{q}’ 전체 검색 결과 보기</Link></p>}
          </section>
        )}
        <section className={`${styles.t} ${styles.c} ${styles.lic}`} aria-labelledby="c-lic">
          <span className={styles.k}><span id="c-lic">E3·E5·E7 빠른 비교</span><span>원본: 라이선스 비교 문서</span></span>
          <div className={styles.seg} role="group" aria-label="비교할 기능">
            {lic.slice(0, 7).map((r, i) => <button type="button" key={r.feature} aria-pressed={feat === i} onClick={() => setFeat(i)}>{r.feature.replace('업무 자료를 참조하는 ', '').replace('Word·Excel·PowerPoint 등 ', '')}</button>)}
          </div>
          <div className={styles.qv}>{['E3', 'E5', 'E7'].map(p => <div key={p} className={p === 'E7' ? styles.on : ''}><b>{p}</b><span>{lic[feat] && lic[feat][p]}</span></div>)}</div>
          <Link className={styles.go} to="/knowledge/licensing/e3-vs-e5">전체 비교표 {ARR}</Link>
        </section>
        <section className={`${styles.t} ${styles.upd}`} aria-labelledby="c-upd">
          <span className={styles.k}><span id="c-upd">최근 업데이트</span><span>공식 원문 확인 {verifiedOn}</span></span>
          <ul>{updateHighlights.slice(0, 6).map(u => <li key={u.path}><Link to={u.path}><time dateTime={u.date}>{u.date.slice(5).replace('-', '.')}</time><span><b>{u.title}</b><small>{u.category} · {u.status.split(' · ')[0]}</small></span></Link></li>)}</ul>
          <Link className={styles.go} to={updateGuide}>변경 기록 전체 {ARR}</Link>
        </section>
        <Link className={`${styles.t} ${styles.c} ${styles.az}`} to="/knowledge/architecture/azure-landing-zone-architecture#network-architecture">
          <span className={styles.k}><span>설계도 · Azure 네트워크</span><span>요소 5</span></span>
          <svg className={styles.mini} viewBox="0 0 320 200" aria-hidden="true"><path className={styles.l} d="M50 100H190M240 92 278 44M250 100H278M240 108 278 156" /><path className={styles.f} d="M50 100H190M240 92 278 44M250 100H278M240 108 278 156" /><rect x="10" y="80" width="44" height="40" rx="8" /><rect x="112" y="82" width="36" height="36" rx="6" transform="rotate(45 130 100)" /><circle cx="216" cy="100" r="34" /><circle cx="290" cy="40" r="18" /><circle cx="290" cy="100" r="18" /><circle cx="290" cy="160" r="18" /><text x="32" y="140" textAnchor="middle">온프레미스</text><text x="130" y="150" textAnchor="middle">게이트웨이</text><text x="216" y="105" textAnchor="middle">허브</text><text x="290" y="194" textAnchor="middle">스포크</text></svg>
          <span className={styles.go}>구성도 열기 {ARR}</span>
        </Link>
        <Link className={`${styles.t} ${styles.c} ${styles.cr}`} to="/knowledge/copilot/copilot-studio#credit-limits">
          <span className={styles.k}><span>운영 비용 · Copilot Studio</span></span>
          <strong>에이전트가 쓸 크레딧 제한하기</strong>
          <ol><li>환경에 선불 크레딧 할당</li><li>에이전트 월 한도·알림 설정</li><li>호출한 흐름 사용량 확인</li></ol>
          <span className={styles.go}>설정 방법 보기 {ARR}</span>
        </Link>
        <Link className={`${styles.t} ${styles.c} ${styles.ops}`} to="/knowledge/knowledge-center/overview">
          <span className={styles.k}><span>운영 문제 해결</span><span>Intune · Defender · Exchange</span></span>
          <span className={styles.big}>{data.counts['knowledge-center']}</span>
          <span className={styles.go}>오류·설정 해결 절차 {ARR}</span>
        </Link>
      </div>
      <div className={styles.sh}><h2>주제별 문서</h2><Link className={styles.pill} to="/knowledge/intro">지식센터 안내 {ARR}</Link></div>
      <div className={styles.chips}>
        {topics.map(([k, name, to, desc]) => <Link key={k} to={to} className={styles.chip} data-topic={k}><i>{data.counts[k] || ''}</i>{name}<span>{desc}</span></Link>)}
      </div>
      <div className={styles.sh} id="latest-updates"><h2>최근 업데이트</h2><Link className={styles.pill} to={updateGuide}>변경 기록 전체 {ARR}</Link></div>
      <div className={styles.grid}>
        {updateHighlights.slice(0, 9).map(u => <Link key={u.path + u.title} to={u.path} className={styles.card}><span className={styles.top}><span>{u.category}</span><time dateTime={u.date}>{u.date}</time></span><b>{u.title}</b><p>{u.description}</p><span className={styles.st}>{u.status}</span></Link>)}
      </div>
    </main>
  );
}
