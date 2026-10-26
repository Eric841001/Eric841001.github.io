import React, {useEffect} from 'react';
export default function ReadingControls() {
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash) return;
      let id;
      try {id = decodeURIComponent(window.location.hash.slice(1));} catch {return;}
      const target = document.getElementById(id);
      if (!target) return;
      let node = target.closest('details.kc-reading-section');
      while (node) {node.open = true; node = node.parentElement?.closest('details.kc-reading-section');}
      window.requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
    };
    reveal();
    const reopenCurrentFragment = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.target === '_blank') return;
      const url = new URL(link.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname &&
          url.search === window.location.search && url.hash && url.hash === window.location.hash) {
        reveal();
      }
    };
    window.addEventListener('hashchange', reveal);
    document.addEventListener('click', reopenCurrentFragment);
    return () => {
      window.removeEventListener('hashchange', reveal);
      document.removeEventListener('click', reopenCurrentFragment);
    };
  }, []);
  function setSections(expand) {
    const sections = document.querySelectorAll('article details.kc-reading-section');
    sections.forEach((section, index) => {section.open = expand || index === 0;});
  }
  return <nav className="kc-reading-controls" aria-label="긴 문서 탐색">
    <p>요약을 읽은 뒤 필요한 부분을 펼쳐 보세요. 목차나 본문 링크를 누르면 해당 부분이 열립니다.</p>
    <div><button type="button" onClick={() => setSections(true)}>전체 펼치기</button>
    <button type="button" onClick={() => setSections(false)}>요약만 보기</button></div>
  </nav>;
}
