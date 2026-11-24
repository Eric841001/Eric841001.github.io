import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import data from '@site/src/data/cData.json';
import {updateHighlights, updateGuide} from '@site/src/data/updateHighlights';
import styles from './CHome.module.css';
import CoverArt from '@site/src/components/CoverArt';

// 홈: 프리미엄 컨설팅 브랜드의 에디토리얼 표지.
// 왼쪽은 표제와 질문, 오른쪽은 최근 변경 목차. 그 아래는 세 단 편집 칼럼과 번호 붙은 주제 색인.
// 모든 문장은 문서 원문(cData.json)과 updateHighlights에서 온다.
const ARR = <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg>;
const featured = ['에이전트의 월 크레딧 한도 설정하기', 'E5에 Copilot을 추가할 때와 E7 비교하기', 'SharePoint 문서가 제작자에게만 보일 때', '조건부 액세스 정책 설계하기'];
const topics = [
  ['microsoft365', 'Microsoft 365', '/knowledge/microsoft365/overview', 'Exchange, Teams, SharePoint와 OneDrive의 도입·운영'],
  ['security', '보안', '/knowledge/security/overview', 'Zero Trust, 조건부 액세스, Defender와 데이터 보호'],
  ['copilot', 'Copilot', '/knowledge/copilot/overview', 'Copilot 도입 준비, 에이전트 설계와 운영'],
  ['azure', 'Azure', '/knowledge/azure/overview', '랜딩 존부터 네트워크·ID·비용 관리까지'],
  ['licensing', '라이선스', '/knowledge/licensing/overview', 'E3·E5·E7과 보안·Copilot의 포함 기능 비교'],
  ['architecture', '설계도', '/knowledge/architecture/overview#visual-architecture-map', '영역별 구성도와 설계 기준'],
  ['migration', '마이그레이션', '/knowledge/migration/overview', '테넌트·메일·파일과 협업 환경의 전환'],
  ['knowledge-center', '운영 문제 해결', '/knowledge/knowledge-center/overview', 'Intune 오류, Defender 온보딩, Exchange 설정'],
  ['playbooks', '도입 절차', '/knowledge/playbooks/overview', '서비스별 단계적 도입 플레이북'],
  ['downloads', '자료실', '/knowledge/downloads/overview', '진단·제안·프로젝트 관리 양식과 설계 브리핑'],
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

const md = d => d.slice(5).replace('-', '.');

export default function CHome() {
  const [q, setQ] = useState('');
  const [feat, setFeat] = useState(1);
  const history = useHistory();
  const found = useMemo(() => match(q), [q]);
  const lic = data.licensing;
  const picks = featured.map(f => data.answers.find(a => a.q === f)).filter(Boolean);
  const submit = e => { e.preventDefault(); if (found[0]) history.push(found[0].to); else history.push('/search?q=' + encodeURIComponent(q)); };
  return (
    <main className={styles.page}>
      {/* 표지 */}
      <section className={styles.hero} aria-labelledby="c-h1">
        <div className={styles.heroMain}>
          <p className={styles.eyebrow}>Microsoft 기술 지식센터</p>
          <h1 id="c-h1">보안과 Copilot,<br />설계로 답합니다</h1>
          <p className={styles.deck}>Microsoft 365·Azure의 구성, 라이선스 판단과 운영 절차를 한국어 실무 문서로 정리했습니다. 궁금한 것을 입력하면 문서 원문에서 찾은 답과 위치를 먼저 보여 드립니다.</p>
          <form className={styles.ask} role="search" onSubmit={submit}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="m13.5 13.5 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="예: 에이전트 크레딧 한도, E7 비교" aria-label="질문 또는 검색어" />
            <button type="submit">찾기</button>
          </form>
          <div className={styles.qs} role="group" aria-label="자주 찾는 질문">
            <span>자주 찾는 질문</span>
            {picks.map(a => <button type="button" key={a.q} onClick={() => setQ(a.q)}>{a.q}</button>)}
          </div>
        </div>
        <aside className={styles.side} aria-labelledby="c-upd">
          <p className={styles.sideH} id="c-upd">최근 변경</p>
          <ol>
            {updateHighlights.slice(0, 4).map(u => (
              <li key={u.path + u.title}><Link to={u.path}>
                <small>{u.category} · {md(u.date)}</small>
                <b>{u.title}</b>
              </Link></li>
            ))}
          </ol>
          <Link className={styles.link} to={updateGuide}>변경 기록 전체 {ARR}</Link>
        </aside>
      </section>

      {q.trim() && (
        <section className={styles.answers} aria-live="polite" aria-label="문서 원문에서 찾은 답">
          {found.length ? found.map((a, i) => (
            <div key={a.to} className={i === 0 ? styles.ans : styles.ans2}>
              <small className={styles.cat}>{i === 0 ? '문서 원문에서 찾은 답' : '함께 볼 위치'}</small>
              <b>{a.q}</b>
              <p>{a.text}</p>
              <Link to={a.to}>원문에서 확인 {ARR}</Link>
              <small>{a.fromTitle}</small>
            </div>
          )) : <p className={styles.none}>바로 연결할 답이 없습니다. <Link to={'/search?q=' + encodeURIComponent(q)}>‘{q}’ 전체 검색 결과 보기</Link></p>}
        </section>
      )}

      {/* 숫자 띠 */}
      <dl className={styles.stats}>
        <div><dd>{data.total}</dd><dt>실무 문서</dt></div>
        <div><dd>{data.figures}</dd><dt>설계 구성도</dt></div>
        <div><dd>{data.elements}</dd><dt>구성 요소 설명</dt></div>
        <div><dd>{topics.length}</dd><dt>주제</dt></div>
      </dl>

      {/* 주요 인사이트 */}
      <section className={styles.sec} aria-labelledby="c-feat">
        <div className={styles.secH}><h2 id="c-feat">지금 많이 찾는 설계</h2></div>
        <div className={styles.feat}>
          <Link className={styles.card} to="/knowledge/architecture/azure-landing-zone-architecture#network-architecture">
            <CoverArt topic="azure" className={styles.art} />
            <small className={styles.cat}>설계도 · Azure 네트워크</small>
            <b>허브·스포크로 나누는 랜딩 존 네트워크</b>
            <p>온프레미스 연결, 게이트웨이, 허브와 스포크의 역할을 구성도에서 요소별로 확인합니다.</p>
          </Link>
          <Link className={styles.card} to="/knowledge/copilot/copilot-studio#credit-limits">
            <CoverArt topic="copilot" className={styles.art} />
            <small className={styles.cat}>운영 비용 · Copilot Studio</small>
            <b>에이전트가 쓸 크레딧을 먼저 제한하세요</b>
            <p>환경에 선불 크레딧을 할당하고, 에이전트별 월 한도와 알림을 설정하는 순서입니다.</p>
          </Link>
          <section className={`${styles.card} ${styles.licCard}`} aria-labelledby="c-lic">
            <CoverArt topic="licensing" className={styles.art} />
            <small className={styles.cat} id="c-lic">라이선스 · E3·E5·E7 빠른 비교</small>
            <div className={styles.seg} role="group" aria-label="비교할 기능">
              {lic.slice(0, 5).map((r, i) => <button type="button" key={r.feature} aria-pressed={feat === i} onClick={() => setFeat(i)}>{r.feature.replace('업무 자료를 참조하는 ', '').replace('Word·Excel·PowerPoint 등 ', '')}</button>)}
            </div>
            <dl className={styles.qv}>{['E3', 'E5', 'E7'].map(p => <div key={p}><dt>{p}</dt><dd>{lic[feat] && lic[feat][p]}</dd></div>)}</dl>
            <Link className={styles.link} to="/knowledge/licensing/e3-vs-e5">전체 비교표 {ARR}</Link>
          </section>
        </div>
      </section>

      {/* 주제 */}
      <section className={styles.sec} aria-labelledby="c-topics">
        <div className={styles.secH}><h2 id="c-topics">주제별로 찾기</h2><Link className={styles.link} to="/knowledge/intro">지식센터 안내 {ARR}</Link></div>
        <ul className={styles.topics}>
          {topics.map(([k, name, to, desc]) => (
            <li key={k}><Link to={to}>
              <span className={styles.tTop}><b>{name}</b><span className={styles.cnt}>{data.counts[k] ? `${data.counts[k]}편` : ''}</span></span>
              <span className={styles.desc}>{desc}</span>
              <span className={styles.arr}>{ARR}</span>
            </Link></li>
          ))}
        </ul>
      </section>

      {/* 변경 노트 */}
      <section className={styles.sec} id="latest-updates" aria-labelledby="c-latest">
        <div className={styles.secH}><h2 id="c-latest">최근 업데이트</h2><Link className={styles.link} to={updateGuide}>변경 기록 전체 {ARR}</Link></div>
        <ul className={styles.notes}>
          {updateHighlights.slice(0, 6).map(u => (
            <li key={u.path + u.title}><Link to={u.path}>
              <small className={styles.cat}>{u.category} · {u.date.replace(/-/g, '.')}</small>
              <b>{u.title}</b>
              <p>{u.description}</p>
              <span className={styles.st}>{u.status}</span>
            </Link></li>
          ))}
        </ul>
      </section>

      <section className={styles.brief} aria-label="설계 브리핑">
        <div className={styles.briefIn}>
          <div>
            <p className={styles.eyebrowL}>설계 브리핑</p>
            <p className={styles.briefT}>공개 문서로 방향을 잡으셨다면,<br />조직 환경에 맞춘 설계는 함께 검토합니다.</p>
          </div>
          <div className={styles.briefActs}>
            <a href="https://www.linkedin.com/in/young-sun-kang-a51b26356">브리핑 요청 {ARR}</a>
            <Link to="/knowledge/contact">문의 방법</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
