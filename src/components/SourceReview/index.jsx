import React from 'react';
export default function SourceReview({review}) {
  if (!review) return null;
  return <aside className="kc-source-review" aria-label="문서 근거와 확인 범위" data-review-date={review.checkedOn} data-review-level={review.reviewLevel}>
    <h2 id="document-source-review">문서 근거와 확인 범위</h2>
    <p><strong>문서 대조일 <time dateTime={review.checkedOn}>{review.checkedOn}</time> · {review.kind}</strong></p>
    <p className="kc-source-review__level"><strong>검토 방식:</strong> {review.reviewLevel}</p>
    <p>{review.scope}</p>
    <details className="kc-source-review__sources">
      <summary>출처별 확인 내용 ({review.sources.length})</summary>
      <ul>{review.sources.map(source => <li key={source.url}>
        <a href={source.url}>{source.title}</a>
        <p>{source.checkedFor}</p>
      </li>)}</ul>
    </details>
    <p className="kc-source-review__limits"><strong>실측·검증 제외 범위:</strong> {review.notChecked}</p>
    <p className="kc-source-review__note">{review.note}</p>
  </aside>;
}
