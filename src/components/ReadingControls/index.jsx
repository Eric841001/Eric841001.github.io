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
    window.addEventListener('hashchange', reveal);
    return () => window.removeEventListener('hashchange', reveal);
  }, []);
  function setSections(expand) {
    const sections = document.querySelectorAll('article details.kc-reading-section');
    sections.forEach((section, index) => {section.open = expand || index === 0;});
  }
  return <nav className="kc-reading-controls" aria-label="긴 문서 탐색">
    <p>요약을 먼저 읽고 필요한 절을 펼쳐 보세요. 목차나 기존 본문 링크로 이동하면 해당 절이 열립니다.</p>
    <div><button type="button" onClick={() => setSections(true)}>전체 펼치기</button>
    <button type="button" onClick={() => setSections(false)}>요약만 보기</button></div>
  </nav>;
}
