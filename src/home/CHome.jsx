import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import data from '@site/src/data/cData.json';
import {updateHighlights, updateGuide, verifiedOn} from '@site/src/data/updateHighlights';
import styles from './CHome.module.css';
import Blueprint from './Blueprint';

// 홈: 프리미엄 컨설팅 브랜드의 에디토리얼 표지.
// 왼쪽은 표제와 질문, 오른쪽은 최근 변경 목차. 그 아래는 세 단 편집 칼럼과 번호 붙은 주제 색인.
// 모든 문장은 문서 원문(cData.json)과 updateHighlights에서 온다.
const ARR = <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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
      {/* 표지: 잉크 네이비 전폭 띠 */}
      <section className={styles.mast} aria-labelledby="c-h1">
        <div className={styles.mastIn}>
          <div className={styles.lead}>
            <p className={styles.eyebrow}>Microsoft 기술 지식센터</p>
            <h1 id="c-h1"><span>Microsoft 365·Azure</span> 보안과 Copilot을 <span>설계하는 실무 문서</span></h1>
            <p className={styles.deck}>라이선스 적용 범위, 설정 순서, 구성도와 운영 절차를 한국어로 정리했습니다. 궁금한 것을 입력하면 문서 원문에서 찾은 답과 그 위치를 먼저 보여 드립니다.</p>
            <form className={styles.ask} role="search" onSubmit={submit}>
              <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="예: 에이전트 크레딧 한도, E7 비교" aria-label="질문 또는 검색어" />
              <button type="submit">찾기 {ARR}</button>
            </form>
            <div className={styles.qs} role="group" aria-label="자주 찾는 질문">
              {picks.map(a => <button type="button" key={a.q} onClick={() => setQ(a.q)}>{a.q}</button>)}
            </div>
          </div>
          <Blueprint className={styles.blueprint} />
        </div>
        <dl className={styles.stats}>
          <div><dt>실무 문서</dt><dd>{data.total}<small>편</small></dd></div>
          <div><dt>설계 구성도</dt><dd>{data.figures}<small>점</small></dd></div>
          <div><dt>구성 요소 설명</dt><dd>{data.elements}<small>개</small></dd></div>
          <div><dt>최근 갱신</dt><dd className={styles.date}>{verifiedOn.replace(/-/g, '.')}</dd></div>
        </dl>
      </section>

      {q.trim() && (
        <section className={`${styles.wrap} ${styles.answers}`} aria-live="polite" aria-label="문서 원문에서 찾은 답">
          {found.length ? found.map((a, i) => (
            <div key={a.to} className={i === 0 ? styles.ans : styles.ans2}>
              <p className={styles.label}>{i === 0 ? '문서 원문에서 찾은 답' : '함께 볼 위치'}</p>
              <b>{a.q}</b>
              <p>{a.text}</p>
              <Link to={a.to}>원문에서 확인 {ARR}</Link>
              <small>{a.fromTitle}</small>
            </div>
          )) : <p className={styles.none}>바로 연결할 답이 없습니다. <Link to={'/search?q=' + encodeURIComponent(q)}>‘{q}’ 전체 검색 결과 보기</Link></p>}
        </section>
      )}

      <div className={styles.wrap}>
        {/* 01 최근 변경 */}
        <section className={styles.row} aria-labelledby="c-upd">
          <header className={styles.rowH}>
            <span className={styles.no}>01</span>
            <h2 id="c-upd">최근 변경</h2>
            <p>Microsoft 공식 발표를 원문과 대조해 문서에 반영한 내용입니다.</p>
            <Link className={styles.more} to={updateGuide}>변경 기록 전체 {ARR}</Link>
          </header>
          <ol className={styles.log}>
            {updateHighlights.slice(0, 6).map(u => (
              <li key={u.path + u.title}><Link to={u.path}>
                <time dateTime={u.date}>{md(u.date)}</time>
                <span><b>{u.title}</b><small>{u.category} · {u.status.split(' · ')[0]}</small></span>
              </Link></li>
            ))}
          </ol>
        </section>

        {/* 02 편집 노트 */}
        <section className={styles.row} aria-labelledby="c-notes">
          <header className={styles.rowH}>
            <span className={styles.no}>02</span>
            <h2 id="c-notes">지금 많이 찾는 설계</h2>
            <p>구성도, 운영 비용, 라이선스 판단을 한 화면에서 먼저 확인하세요.</p>
          </header>
          <div className={styles.columns}>
            <Link className={`${styles.col} ${styles.figure}`} to="/knowledge/architecture/azure-landing-zone-architecture#network-architecture">
              <p className={styles.label}>설계도 · Azure 네트워크</p>
              <svg className={styles.mini} viewBox="0 0 320 190" aria-hidden="true">
                <path className={styles.l} d="M54 95H182M236 86 276 40M248 95H276M236 104 276 150" />
                <path className={styles.f} d="M54 95H182M236 86 276 40M248 95H276M236 104 276 150" />
                <rect x="12" y="76" width="42" height="38" rx="1" />
                <rect x="113" y="78" width="34" height="34" rx="1" transform="rotate(45 130 95)" />
                <circle cx="212" cy="95" r="32" />
                <circle cx="290" cy="36" r="16" /><circle cx="290" cy="95" r="16" /><circle cx="290" cy="154" r="16" />
                <text x="33" y="134" textAnchor="middle">온프레미스</text><text x="130" y="144" textAnchor="middle">게이트웨이</text>
                <text x="212" y="100" textAnchor="middle">허브</text><text x="290" y="186" textAnchor="middle">스포크</text>
              </svg>
              <strong>허브·스포크로 나누는 랜딩 존 네트워크</strong>
              <span className={styles.go}>구성도 열기 {ARR}</span>
            </Link>
            <Link className={styles.col} to="/knowledge/copilot/copilot-studio#credit-limits">
              <p className={styles.label}>운영 비용 · Copilot Studio</p>
              <strong className={styles.big}>에이전트가 쓸 크레딧을 먼저 제한하세요</strong>
              <ol className={styles.steps}><li>환경에 선불 크레딧 할당</li><li>에이전트별 월 한도와 알림 설정</li><li>호출한 흐름의 사용량 확인</li></ol>
              <span className={styles.go}>설정 방법 보기 {ARR}</span>
            </Link>
            <section className={styles.col} aria-labelledby="c-lic">
              <p className={styles.label} id="c-lic">E3·E5·E7 빠른 비교</p>
              <div className={styles.seg} role="group" aria-label="비교할 기능">
                {lic.slice(0, 7).map((r, i) => <button type="button" key={r.feature} aria-pressed={feat === i} onClick={() => setFeat(i)}>{r.feature.replace('업무 자료를 참조하는 ', '').replace('Word·Excel·PowerPoint 등 ', '')}</button>)}
              </div>
              <dl className={styles.qv}>{['E3', 'E5', 'E7'].map(p => <div key={p}><dt>{p}</dt><dd>{lic[feat] && lic[feat][p]}</dd></div>)}</dl>
              <Link className={styles.go} to="/knowledge/licensing/e3-vs-e5">전체 비교표 {ARR}</Link>
            </section>
          </div>
        </section>

        {/* 03 주제 색인 */}
        <section className={styles.row} aria-labelledby="c-topics">
          <header className={styles.rowH}>
            <span className={styles.no}>03</span>
            <h2 id="c-topics">주제 색인</h2>
            <p>도입 준비부터 운영 문제 해결까지, 열 개의 주제로 나눴습니다.</p>
            <Link className={styles.more} to="/knowledge/intro">지식센터 안내 {ARR}</Link>
          </header>
          <ol className={styles.rows}>
            {topics.map(([k, name, to, desc], i) => (
              <li key={k}><Link to={to}>
                <span className={styles.idx}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.nm}><b>{name}</b><span className={styles.desc}>{desc}</span></span>
                <span className={styles.cnt}>{data.counts[k] ? `${data.counts[k]}편` : ''}</span>
              </Link></li>
            ))}
          </ol>
        </section>

        {/* 04 최근 업데이트 상세 */}
        <section className={styles.row} id="latest-updates" aria-labelledby="c-latest">
          <header className={styles.rowH}>
            <span className={styles.no}>04</span>
            <h2 id="c-latest">변경 노트</h2>
            <p>무엇이 바뀌었고, 적용 전에 무엇을 확인해야 하는지 함께 적었습니다.</p>
          </header>
          <ul className={styles.notes}>
            {updateHighlights.slice(0, 6).map(u => (
              <li key={u.path + u.title}><Link to={u.path}>
                <span className={styles.meta}><span>{u.category}</span><time dateTime={u.date}>{u.date.replace(/-/g, '.')}</time></span>
                <b>{u.title}</b>
                <p>{u.description}</p>
                <span className={styles.st}>{u.status}</span>
              </Link></li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.brief} aria-label="설계 브리핑">
        <div className={styles.briefIn}>
          <p className={styles.eyebrow}>설계 브리핑</p>
          <p className={styles.briefT}>공개 문서로 방향을 잡으셨다면,<br />조직 환경에 맞춘 설계는 함께 검토합니다.</p>
          <div className={styles.briefActs}>
            <a href="https://www.linkedin.com/in/young-sun-kang-a51b26356">브리핑 요청 {ARR}</a>
            <Link to="/knowledge/contact">문의 방법</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
