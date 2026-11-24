import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import styles from './styles.module.css';

// 찾을 수 없는 페이지: 검색과 주요 주제로 바로 돌아갈 길을 준다.
const topics = [
  ['지식센터', '/knowledge/intro'],
  ['Copilot', '/knowledge/copilot/overview'],
  ['보안', '/knowledge/security/overview'],
  ['라이선스', '/knowledge/licensing/overview'],
  ['설계도', '/knowledge/architecture/overview'],
  ['운영 문제 해결', '/knowledge/knowledge-center/overview'],
];

export default function NotFoundContent() {
  const [q, setQ] = useState('');
  const history = useHistory();
  return (
    <main className={styles.wrap}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>찾으시는 페이지가 없습니다</h1>
      <p className={styles.lead}>주소가 바뀌었거나 문서가 다른 주제로 옮겨졌을 수 있습니다. 검색하거나 아래 주제에서 다시 시작해 보세요.</p>
      <form className={styles.ask} role="search" onSubmit={e => { e.preventDefault(); history.push('/search?q=' + encodeURIComponent(q)); }}>
        <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="예: 조건부 액세스, E7 비교" aria-label="문서 검색" />
        <button type="submit">검색</button>
      </form>
      <nav aria-label="주요 주제" className={styles.topics}>
        {topics.map(([n, to]) => <Link key={to} to={to}>{n}</Link>)}
      </nav>
      <p className={styles.home}><Link to="/">홈으로 돌아가기 →</Link></p>
    </main>
  );
}
