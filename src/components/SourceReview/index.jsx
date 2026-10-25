import React from 'react';
export default function SourceReview({review}) {
  if (!review) return null;
  return <aside className="kc-source-review" aria-label="참고 자료와 확인 범위" data-review-date={review.checkedOn} data-review-level={review.reviewLevel}>
    <h2 id="document-source-review">참고 자료와 확인 범위</h2>
    <p><strong>자료 확인일 <time dateTime={review.checkedOn}>{review.checkedOn}</time> · {review.kind}</strong></p>
    <p className="kc-source-review__level"><strong>검토 구분:</strong> {review.reviewLevel}</p>
    <p>{review.scope}</p>
    <details className="kc-source-review__sources">
      <summary>참고 자료와 확인한 내용 ({review.sources.length})</summary>
      <ul>{review.sources.map(source => <li key={source.url}>
        <a href={source.url}>{source.title}</a>
        <p>{source.checkedFor}</p>
      </li>)}</ul>
    </details>
    <p className="kc-source-review__limits"><strong>확인하지 않은 사항:</strong> {review.notChecked}</p>
    <p className="kc-source-review__note">{review.note}</p>
  </aside>;
}
