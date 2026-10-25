import React from 'react';
export default function SourceReview({review}) {
  if (!review) return null;
  return <aside className="kc-source-review" aria-label="문서 근거와 확인 범위" data-review-date={review.checkedOn}>
    <h2 id="document-source-review">문서 근거와 확인 범위</h2>
    <p><strong>확인일 <time dateTime={review.checkedOn}>{review.checkedOn}</time> · {review.kind}</strong></p>
    <p>{review.scope}</p>
    <ul>{review.sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul>
    <p className="kc-source-review__note">{review.note}</p>
  </aside>;
}
