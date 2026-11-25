import React from 'react';
import TOC from '@theme-original/TOC';
import BookFeature from '@site/src/components/BookFeature';

// 데스크톱 오른쪽 목차 아래에 저자의 책을 작게 보여 준다.
export default function TOCWrapper(props) {
  return (
    <div className="c-toc-wrap thin-scrollbar">
      <TOC {...props} />
      <BookFeature variant="toc" />
    </div>
  );
}
