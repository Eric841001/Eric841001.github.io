import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

// 접힌 장(details) 안의 앵커로 들어오면 장을 열고 이동한다. 같은 앵커를 다시 눌러도 동작한다.
function revealHash() {
  if (typeof window === 'undefined' || !window.location.hash) return;
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (e) { return; }
  const target = document.getElementById(id);
  if (!target) return;
  let node = target.closest('details');
  let opened = false;
  while (node) { if (!node.open) { node.open = true; opened = true; } node = node.parentElement?.closest('details'); }
  if (opened) requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
}

const items = [
  ['/', '홈', 'M3 9 10 3l7 6v8h-5v-5H8v5H3z'],
  ['/knowledge/intro', '주제', 'M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z'],
  ['/search', '검색', 'M9 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM13.2 13.2 17 17'],
  ['/knowledge/architecture/overview', '설계도', 'M2.5 3h6v5h-6zM11.5 12h6v5h-6zM8.5 5.5H14V12'],
];

function Dock() {
  const {pathname} = useLocation();
  const current = p => (p === '/' ? pathname === '/' : pathname.startsWith(p));
  return (
    <nav className="c-dock" aria-label="하단 메뉴">
      {items.map(([to, label, d]) => (
        <Link key={to} to={to} aria-current={current(to) ? 'page' : undefined} className={to === '/search' ? 'c-dock__q' : undefined}>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" /></svg>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default function Root({children}) {
  const {pathname, hash} = useLocation();
  useEffect(() => { revealHash(); }, [pathname, hash]);
  useEffect(() => {
    const onClick = e => {
      const a = e.target.closest?.('a[href*="#"]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash === window.location.hash) requestAnimationFrame(revealHash);
    };
    window.addEventListener('hashchange', revealHash);
    document.addEventListener('click', onClick);
    return () => { window.removeEventListener('hashchange', revealHash); document.removeEventListener('click', onClick); };
  }, []);
  return <>{children}<Dock /></>;
}
