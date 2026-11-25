import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import book from '@site/src/data/book';
import {track} from '@site/src/lib/track';
import styles from './styles.module.css';

const ARR = <span aria-hidden="true">→</span>;

// 표지 이미지. 불러오지 못하면 같은 비율의 글자 표지로 바꾼다.
function Cover({className}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  // 서버에서 그린 이미지가 하이드레이션 전에 실패한 경우도 잡는다.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed) {
    return (
      <div className={`${styles.fallback} ${className || ''}`} role="img" aria-label={`${book.title} 표지`}>
        <span>{book.title}</span>
        <small>{book.author} 지음</small>
      </div>
    );
  }
  return (
    <img
      ref={ref}
      className={className}
      src={book.cover}
      width={book.coverWidth}
      height={book.coverHeight}
      alt={`${book.title} 표지`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function Stores({compact, where}) {
  const open = book.stores.filter(s => s.url);
  const soon = book.stores.filter(s => !s.url);
  return (
    <div className={styles.stores}>
      {open.map((s, i) => (
        <a key={s.name} className={i === 0 ? styles.buy : styles.buy2} href={s.url} target="_blank" rel="noopener noreferrer" onClick={() => track('book_purchase_click', {store: s.name, placement: where})}>
          {s.name}에서 구매하기 {ARR}
        </a>
      ))}
      {!compact && soon.length > 0 && (
        <p className={styles.soon}>{soon.map(s => s.name).join('·')} 판매 링크는 열리는 대로 추가합니다.</p>
      )}
    </div>
  );
}

// variant: 'band'(홈), 'page'(책 소개 문서), 'inline'(문서 끝 작은 안내)
export default function BookFeature({variant = 'band'}) {
  if (variant === 'toc') {
    const open = book.stores.filter(s => s.url);
    return (
      <aside className={styles.toc} aria-label="저자의 책">
        <p className={styles.k}>저자의 책</p>
        <Link to="/knowledge/book" className={styles.tocLink}>
          <Cover className={styles.tocCover} />
          <span className={styles.tocT}>{book.title}</span>
        </Link>
        <div className={styles.tocStores}>
          {open.map(s => (
            <a key={s.name} className={styles.tocBuy} href={s.url} target="_blank" rel="noopener noreferrer" onClick={() => track('book_purchase_click', {store: s.name, placement: 'toc'})}>{s.name} {ARR}</a>
          ))}
        </div>
      </aside>
    );
  }

  if (variant === 'inline') {
    return (
      <aside className={styles.inline} aria-label="저자의 책">
        <Cover className={styles.inlineCover} />
        <div className={styles.inlineText}>
          <p className={styles.k}>저자의 책</p>
          <p className={styles.inlineT}>{book.title}</p>
          <p className={styles.inlineD}>{book.subtitle}</p>
        </div>
        <div className={styles.inlineActs}>
          <Stores compact where="doc_end" />
          <Link className={styles.more} to="/knowledge/book">책 소개</Link>
        </div>
      </aside>
    );
  }

  const isPage = variant === 'page';
  return (
    <section className={`${styles.band} ${isPage ? styles.onPage : ''}`} aria-labelledby={isPage ? undefined : 'book-title'} aria-label={isPage ? '책 정보와 구매' : undefined}>
      <div className={styles.inner}>
        <div className={styles.coverWrap}>
          <Cover className={styles.cover} />
        </div>
        <div className={styles.body}>
          <p className={styles.k}>저자의 책 · 신간</p>
          {!isPage && <h2 className={styles.title} id="book-title">{book.title}</h2>}
          <p className={styles.sub}>{book.subtitle}</p>
          <p className={styles.pitch}>{book.pitch}</p>
          <ol className={styles.parts}>
            {book.parts.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span></li>)}
          </ol>
          <p className={styles.meta}>{book.author} 지음 · {book.publisher} · {book.published} · {book.pages}</p>
          <div className={styles.acts}>
            <Stores where={isPage ? 'book_page' : 'home'} />
            {!isPage && <Link className={styles.more} to="/knowledge/book">책 소개 자세히 {ARR}</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}
